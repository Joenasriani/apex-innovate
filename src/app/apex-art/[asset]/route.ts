import { loadOriginalArt } from "@/lib/original-art";

export const runtime = "nodejs";

// Serve the approved, unmodified embedded artwork as cacheable image bytes.
// The original HTML (source-assets/astra-preview.html) is the single asset source of truth.
const ASSETS = ["hero", "robot-venture", "event-venture", "framework-venture"];

type Decoded = { bytes: Uint8Array; contentType: string };
const decoded = new Map<string, Decoded>();

function decode(dataUri: string): Decoded | undefined {
  const image = dataUri.match(/^data:(image\/(?:png|jpeg|webp|avif|gif|svg\+xml));base64,([A-Za-z0-9+/=]+)$/i);
  if (!image) return undefined;
  const bytes = Buffer.from(image[2], "base64");
  // Embedded source labels are not always accurate (some JPEGs say image/png).
  // Detect the real format without modifying or recompressing the image.
  const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  const isPng = bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  const isWebp = bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP";
  const isAvif = bytes.toString("ascii", 4, 12).includes("ftypavif") || bytes.toString("ascii", 4, 12).includes("ftypavis");
  const contentType = isJpeg ? "image/jpeg" : isPng ? "image/png" : isWebp ? "image/webp" : isAvif ? "image/avif" : image[1];
  return { bytes: new Uint8Array(bytes), contentType };
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ asset: string }> }
) {
  const { asset } = await params;
  if (!ASSETS.includes(asset)) {
    return new Response("Not found", { status: 404 });
  }

  let image = decoded.get(asset);
  if (!image) {
    let art;
    try {
      art = await loadOriginalArt();
    } catch {
      return new Response("Artwork unavailable", { status: 500 });
    }
    const dataUri = asset === "hero" ? art.heroDataUri : art.banners.find((banner) => banner.cls === asset)?.src;
    if (!dataUri) return new Response("Artwork unavailable", { status: 500 });
    image = decode(dataUri);
    if (!image) return new Response("Unsupported artwork", { status: 500 });
    decoded.set(asset, image);
  }

  return new Response(image.bytes as BodyInit, {
    headers: {
      "Content-Type": image.contentType,
      "Content-Length": String(image.bytes.length),
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
