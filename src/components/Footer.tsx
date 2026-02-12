import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left */}
          <div>
            <Link
              href="/"
              className="font-display font-bold text-lg tracking-tight hover:text-accent transition-colors"
            >
              <span className="text-accent">K</span>ruz
              <span className="text-stone-400 dark:text-zinc-600 font-normal ml-1">.</span>
            </Link>
            <p className="text-sm text-stone-500 dark:text-zinc-500 mt-2">
              Building AI-powered solutions &amp; web experiences.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/kjhholt-alt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 dark:text-zinc-500 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:kjh.holt@gmail.com"
              className="text-stone-500 dark:text-zinc-500 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-100 dark:border-zinc-800/40 text-center">
          <p className="text-xs text-stone-400 dark:text-zinc-600 font-mono">
            &copy; {new Date().getFullYear()} Kruz Holt. Crafted with Next.js &amp; TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
