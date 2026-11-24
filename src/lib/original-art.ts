import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Loader for the approved original artwork.
 *
 * The hero image and the three venture banners are embedded, unmodified, in
 * `source-assets/astra-preview.html`. That file is deliberately kept OUTSIDE `public/`
 * so the 2.6 MB source is no longer served as a public URL; it is read server-side only.
 *
 * The file is read and parsed once per server instance (previously the homepage
 * re-ran the regex and JSON parse over the whole 2.6 MB file on every request).
 * The artwork bytes themselves are never altered.
 */
export type Banner = { cls: string; src: string; href: string; alt: string };
export type OriginalArt = { heroDataUri: string; banners: Banner[] };

export class ArtError extends Error {}

let cached: Promise<OriginalArt> | undefined;

function parse(original: string): OriginalArt {
  const hero = original.match(/<img\b[^>]*class="hero-art"[^>]*src="(data:image\/[^"]+)"/i)?.[1];
  if (!hero) throw new ArtError("Original Apex sculptural hero image missing");
  const match = original.match(/const banners=(\[[\s\S]*?\]);\s*function apply\(/);
  if (!match) throw new ArtError("Approved banners missing");
  let banners: Banner[];
  try {
    banners = JSON.parse(match[1]) as Banner[];
  } catch {
    throw new ArtError("Banner data invalid");
  }
  return { heroDataUri: hero, banners };
}

export function loadOriginalArt(): Promise<OriginalArt> {
  if (!cached) {
    cached = readFile(join(process.cwd(), "source-assets", "astra-preview.html"), "utf8")
      .then(parse)
      .catch((error) => {
        cached = undefined; // do not cache a failure
        throw error;
      });
  }
  return cached;
}
