/** Clonalabs text wordmark — used in place of an image logo. */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-heading font-black tracking-tight text-white leading-none ${className}`}
    >
      Clona<span className="text-accent-light">labs</span>
    </span>
  );
}
