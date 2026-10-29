'use client';

import { useState } from 'react';

type RevealImageProps = { src?: string; alt: string; label?: string };

export function RevealImage({ src, alt, label = 'Image placeholder' }: RevealImageProps) {
  const [failed, setFailed] = useState(!src);
  if (failed) return <div className="image-fallback" role="img" aria-label={`${alt}. ${label}`}><span>✦</span><small>{label}</small></div>;
  return <img src={src} alt={alt} onError={() => setFailed(true)} />;
}
