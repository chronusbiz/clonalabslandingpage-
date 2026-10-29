"use client";

import ScrollReveal from "./ScrollReveal";
import Button from "./Button";

interface CTABannerProps {
  title?: string;
  highlight?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  dark?: boolean;
}

export default function CTABanner({
  title = "Ready to Build Something",
  highlight = "Extraordinary?",
  description = "Let's turn your vision into reality. Get in touch and let's start the conversation.",
  buttonText = "Start Your Project",
  buttonHref = "/contact",
  dark = true,
}: CTABannerProps) {
  return (
    <section
      className={`py-14 lg:py-20 ${dark ? "bg-dark-secondary" : "bg-light-primary"}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2
            className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${dark ? "text-text-light" : "text-text-dark"}`}
          >
            {title}{" "}
            <span className="gradient-text">{highlight}</span>
          </h2>
          <p
            className={`text-lg mb-8 max-w-xl mx-auto ${dark ? "text-text-light-muted" : "text-text-dark-muted"}`}
          >
            {description}
          </p>
          <Button href={buttonHref} size="lg">
            {buttonText}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
