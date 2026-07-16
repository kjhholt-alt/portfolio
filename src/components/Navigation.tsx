"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#work", index: "01", label: "Work" },
  { href: "/#method", index: "02", label: "Method" },
  { href: "/#about", index: "03", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 18);
      setProgress(range > 0 ? Math.min(100, (scrollTop / range) * 100) : 0);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <div className="reading-progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <header className={`site-header${scrolled ? " is-scrolled" : ""}`} id="siteHeader">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="Kruz Holt, home">
            <span className="brand-seal" aria-hidden="true">
              <i>K</i>
              <i>H</i>
            </span>
            <span className="brand-copy">
              <strong>Kruz Holt</strong>
              <small>Independent product builder</small>
            </span>
          </Link>

          <nav
            className={`site-nav${mobileOpen ? " is-open" : ""}`}
            id="siteNav"
            aria-label="Primary navigation"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                <span>{link.index}</span>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link className="header-contact" href="/#contact">
            <span className="availability-dot" aria-hidden="true" />
            <span>Selected builds</span>
            <strong>Start a conversation</strong>
            <svg aria-hidden="true" viewBox="0 0 16 16">
              <path d="M3 13 13 3M6 3h7v7" />
            </svg>
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-controls="siteNav"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
