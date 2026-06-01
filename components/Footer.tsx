import Link from "next/link";
import { navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl text-cream">Pop Up Jazz Club</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-muted">
              A welcoming social jazz night — local talent, live music, and
              good company. Bring your own bottle.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Explore
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-cream-muted transition-colors hover:text-cream"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">
              Get in touch
            </p>
            <p className="mt-4 text-sm text-cream-muted">
              <a
                href="mailto:hello@popupjazzclub.com"
                className="transition-colors hover:text-gold"
              >
                hello@popupjazzclub.com
              </a>
            </p>
            <p className="mt-2 text-sm text-cream-muted">
              Drop us a line or follow along for upcoming dates.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-cream-muted/70">
            © {new Date().getFullYear()} Pop Up Jazz Club. All rights reserved.
          </p>
          <p className="text-xs italic text-cream-muted/70">
            Live music. Good company. Bring your own bottle.
          </p>
        </div>
      </div>
    </footer>
  );
}
