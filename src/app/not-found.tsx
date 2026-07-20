import Link from "next/link";

export default function NotFound() {
  return (
    <main className="legal-page">
      <article className="legal-card">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>This page is not part of the Shield Our Elders site.</p>
        <Link className="button primary inline-button" href="/">
          Back home
        </Link>
      </article>
    </main>
  );
}
