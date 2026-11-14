/** ClonaLabs text wordmark — colour comes from parent className. */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display tracking-tight leading-none ${className}`}>
      Clona<span className="text-accent">Labs</span>
    </span>
  );
}
