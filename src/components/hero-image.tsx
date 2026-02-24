import { ImageWithFallback } from "./image-with-fallback";

interface HeroImageProps {
  src: string;
  alt: string;
  height?: string;
}

export function HeroImage({ src, alt, height = "h-48" }: HeroImageProps) {
  return (
    <div
      className={`pro-img-container relative ${height} overflow-hidden border border-white/10 rounded-sm bg-black`}
    >
      <ImageWithFallback
        src={src}
        alt={alt}
        fill
        className="pro-img object-cover"
        sizes="(max-width: 768px) 100vw, 66vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
