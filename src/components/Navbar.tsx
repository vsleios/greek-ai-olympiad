import { useEffect, useState } from "react";

const links = [
  { href: "#pdtn", label: "Τι είναι ο ΠΔΤΝ;" },
  { href: "#about", label: "Ποιός είμαι;" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Επικοινωνία" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur"
          : "border-b border-transparent bg-background/60 backdrop-blur"
      }`}
    >
      <nav
        aria-label="Κύρια πλοήγηση"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="font-serif text-base tracking-tight text-foreground"
        >
          Greek AI Olympiad
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Εκδήλωση ενδιαφέροντος
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Εκδήλωση ενδιαφέροντος
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
