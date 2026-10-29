import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div id="main-content" className="min-h-screen bg-dark-primary flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-heading text-8xl md:text-9xl font-bold gradient-text mb-4">
          404
        </h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-light mb-4">
          Page Not Found
        </h2>
        <p className="text-text-light-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Button href="/" size="lg">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
