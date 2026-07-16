import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer shell">
      <Link className="brand" href="/">
        <span className="brand-seal" aria-hidden="true">
          <i>K</i>
          <i>H</i>
        </span>
        <span className="brand-copy">
          <strong>Kruz Holt</strong>
          <small>Independent product builder</small>
        </span>
      </Link>
      <p>AI systems · web products · internal tools</p>
      <span>© {new Date().getFullYear()} BuildKit</span>
    </footer>
  );
}
