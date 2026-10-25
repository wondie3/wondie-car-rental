import Logo from "./Logo";
import { NAV_LINKS } from "@/lib/site";
import { CONTACT } from "@/lib/data";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
            Your Journey. Your Freedom. Your Wondie.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Explore
          </h2>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ivory/70 transition hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-ivory/70">
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.email}</li>
            <li>{CONTACT.address}</li>
            <li>{CONTACT.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-6 text-center text-xs text-ivory/50">
        © {year} Wondie Car Rental. All rights reserved.
      </div>
    </footer>
  );
}
