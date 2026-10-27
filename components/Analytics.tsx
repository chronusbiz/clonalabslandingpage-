"use client";

import Script from "next/script";

export function Analytics({ id }: { id: string }) {
  if (!id) return null;
  const src = `https://plausible.io/js/script.tagged-events.js`;
  return (
    <Script
      defer
      data-domain={id}
      src={src}
      strategy="afterInteractive"
    />
  );
}
