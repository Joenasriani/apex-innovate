import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

// Serve the approved, unmodified embedded artwork as cacheable image bytes.
// The original HTML is retained as the single asset source of truth.
const originalSource = readFile(
  join(process.cwd(), "public", "astra-preview.html"),
  "utf8"
);

type Banner = { cls: string; src: string };

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ asset: string }> }
) {
  const { asset } = await params;
  if (!["hero", "robot-venture", "event-venture", "framework-venture"].includes(asset)) {
    return new Response("Not found", { status: 404 });
  }

  const original = await originalSource;
  let dataUri: string | undefined;

  if (asset === "hero") {
    dataUri = original.match(/<img\b[^>]*class="hero-art"[^>]*src="(data:image\/[^"]+)"/i)?.[1];
  } else {
    const match = original.match(/const banners=(\[[\s\S]*?\]);\s*function apply\(/);
    if (match) {
      try {
        const banners = JSON.parse(match[1]) as Banner[];
        dataUri = banners.find((banner) => banner.cls === asset)?.src;
      } catch {
        return new Response("Artwork unavailable", { status: 500 });
      }
    }
  }

  if (!dataUri) return new Response("Artwork unavailable", { status: 500 });

  const image = dataUri.match(/^data:(image\/(?:png|jpeg|webp|avif|gif|svg\+xml));base64,([A-Za-z0-9+/=]+)$/i);
  if (!image) return new Response("Unsupported artwork", { status: 500 });

  const bytes = Buffer.from(image[2], "base64");
  return new Response(new Uint8Array(bytes), {
    headers: {
      "Content-Type": image[1],
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
