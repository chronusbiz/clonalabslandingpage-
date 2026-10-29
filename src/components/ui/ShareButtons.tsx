"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { LinkedInIcon, XIcon } from "./SocialIcons";

type Props = {
  title: string;
  url: string;
};

export default function ShareButtons({ title, url }: Props) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      /* no-op */
    }
  };

  const items = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: LinkedInIcon,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      Icon: XIcon,
    },
  ];

  return (
    <div className="flex gap-2">
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-9 h-9 border border-card-light-border flex items-center justify-center text-text-dark-muted hover:text-accent hover:border-accent transition-all"
        >
          <Icon size={14} />
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Link copied" : "Copy link"}
        className="w-9 h-9 border border-card-light-border flex items-center justify-center text-text-dark-muted hover:text-accent hover:border-accent transition-all"
      >
        {copied ? <Check size={14} className="text-accent" /> : <Link2 size={14} />}
      </button>
    </div>
  );
}
