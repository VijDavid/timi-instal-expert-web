import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Wrench, MapPin, Mail, Clock, Facebook, Instagram } from "lucide-react";

const PHONE = "+40 712 345 678";
const PHONE_HREF = "tel:+40712345678";

const navItems = [
  { to: "/", label: "Acasă" },
  { to: "/servicii", label: "Servicii" },
  { to: "/despre", label: "Despre Noi" },
  { to: "/recenzii", label: "Recenzii" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" className="flex items-center gap-2 min-w-0" onClick={() => setOpen(false)}>
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-elegant)]">
            <Wrench className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-base font-extrabold tracking-tight text-primary lg:text-lg">Tim Instal Expert</div>
            <div className="truncate text-[10px] font-medium uppercase tracking-wider text-muted-foreground lg:text-xs">Instalator Autorizat Timișoara</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:bg-secondary hover:text-primary"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary" }}
              activeOptions={{ exact: i.to === "/" }}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <a
          href={PHONE_HREF}
          className="hidden items-center gap-2 rounded-full bg-[var(--gradient-accent)] px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-accent)] transition hover:scale-105 lg:inline-flex"
        >
          <Phone className="h-4 w-4" /> {PHONE}
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md text-primary lg:hidden"
          aria-label="Meniu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col p-4">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-4 py-3 text-base font-semibold text-foreground transition hover:bg-secondary"
                activeProps={{ className: "rounded-md px-4 py-3 text-base font-semibold text-primary bg-secondary" }}
                activeOptions={{ exact: i.to === "/" }}
              >
                {i.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-accent)] px-5 py-3 text-sm font-bold text-accent-foreground"
            >
              <Phone className="h-4 w-4" /> Sună Acum
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-accent)] text-accent-foreground">
              <Wrench className="h-5 w-5" />
            </div>
            <div className="text-lg font-extrabold">Tim Instal Expert</div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Instalator autorizat în Timișoara cu peste 12 ani de experiență. Intervenții rapide 24/7 pentru urgențe sanitare și instalații termice.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Navigare</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="text-primary-foreground/80 transition hover:text-accent">{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><a href={PHONE_HREF}>{PHONE}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />contact@timinstalexpert.ro</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Str. Aradului 25, Timișoara</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />Urgențe non-stop 24/7</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Zone Deservite</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
            <li>Cetate</li><li>Iosefin</li><li>Fabric</li><li>Elisabetin</li>
            <li>Mehala</li><li>Dumbrăvița</li><li>Giroc</li><li>Ghiroda</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 transition hover:bg-accent hover:text-accent-foreground"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 transition hover:bg-accent hover:text-accent-foreground"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <div>© {new Date().getFullYear()} Tim Instal Expert. Toate drepturile rezervate.</div>
          <div>Instalator autorizat ANRE & ISCIR</div>
        </div>
      </div>
    </footer>
  );
}

function MobileCallBar() {
  return (
    <a
      href={PHONE_HREF}
      className="fixed inset-x-3 bottom-3 z-50 flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-accent)] px-6 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)] lg:hidden"
    >
      <Phone className="h-5 w-5" /> Sună Acum – Răspundem 24/7
    </a>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-24 lg:pb-0">{children}</main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}

export { PHONE, PHONE_HREF };