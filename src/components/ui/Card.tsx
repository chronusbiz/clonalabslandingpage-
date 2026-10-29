import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  variant = "dark",
  className = "",
  hover = true,
}: CardProps) {
  const variants = {
    dark: "bg-card-dark border-card-dark-border",
    light: "bg-card-light border-card-light-border shadow-sm",
  };

  const hoverClass = hover
    ? "hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30"
    : "";

  return (
    <div
      className={`border p-6 transition-all duration-300 ${variants[variant]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
