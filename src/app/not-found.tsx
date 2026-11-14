import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-surface">
        <div className="container-site section text-center py-24">
          <p className="font-mono text-small text-accent mb-4">404</p>
          <h1 className="text-h1 text-ink mb-4">Page not found</h1>
          <p className="text-body text-text-muted prose-measure mx-auto mb-8">
            The page you are looking for does not exist or has moved.
          </p>
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
