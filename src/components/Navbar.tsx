import { useEffect, useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#seasonal", label: "Seasonal" },
  { href: "#story", label: "Story" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 sm:top-6">
      <nav
        className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 sm:px-8 ${
          scrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-xl tracking-tight text-espresso sm:text-2xl">
            Hinoki <span className="text-clay">&</span> Honey
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm tracking-wide text-mocha transition-colors hover:text-espresso"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#reserve"
          className="hidden rounded-full bg-espresso px-5 py-2 text-sm text-cream transition-all hover:bg-mocha md:inline-block"
        >
          Reserve
        </a>
        <button
          aria-label="Menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-px w-5 bg-espresso transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-espresso transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </nav>
      {open && (
        <div className="glass mt-2 rounded-3xl p-6 shadow-soft md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block text-base text-mocha">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reserve"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-espresso px-5 py-2 text-sm text-cream"
              >
                Reserve
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
