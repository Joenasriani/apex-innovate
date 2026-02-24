"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackText?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackText,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${className ?? ""} img-fallback font-mono`}>
        [Asset: {fallbackText ?? alt}]
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
