import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PHONE, PHONE_HREF } from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact – Tim Instal Expert Timișoara | Sună-ne acum" },
      { name: "description", content: "Contactează Tim Instal Expert Timișoara. Telefon non-stop, formular online, adresă și hartă. Răspundem rapid." },
      { property: "og:title", content: "Contact Tim Instal Expert" },
      { property: "og:description", content: "Contact instalator autorizat Timișoara — 24/7." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="bg-[var(--gradient-hero)] py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-sm font-bold uppercase tracking-wider text-accent">Contact</div>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Hai să discutăm despre proiectul tău</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">Sună-ne pentru urgențe sau trimite un mesaj pentru cotații și programări.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-4 lg:col-span-1">
            {[
              { icon: Phone, title: "Telefon", lines: [PHONE, "Răspundem 24/7"], href: PHONE_HREF },
              { icon: Mail, title: "Email", lines: ["contact@timinstalexpert.ro"], href: "mailto:contact@timinstalexpert.ro" },
              { icon: MapPin, title: "Adresă", lines: ["Str. Aradului 25", "Timișoara, jud. Timiș"] },
              { icon: Clock, title: "Program", lines: ["Luni–Duminică", "Urgențe non-stop 24/7"] },
            ].map((c) => {
              const Tag = c.href ? "a" : "div";
              return (
                <Tag key={c.title} {...(c.href ? { href: c.href } : {})} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--gradient-accent)] text-accent-foreground"><c.icon className="h-5 w-5" /></div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{c.title}</div>
                    {c.lines.map((l) => <div key={l} className="font-bold text-primary">{l}</div>)}
                  </div>
                </Tag>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-elegant)]">
              <h2 className="text-2xl font-bold text-primary">Cere o ofertă</h2>
              <p className="mt-1 text-sm text-muted-foreground">Completează formularul și te contactăm în câteva minute.</p>
              {sent ? (
                <div className="mt-6 rounded-xl bg-secondary p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
                  <div className="mt-3 text-lg font-bold text-primary">Mesaj trimis cu succes!</div>
                  <p className="mt-1 text-sm text-muted-foreground">Te contactăm cât mai curând posibil.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <label className="block sm:col-span-1">
                    <span className="text-sm font-semibold text-foreground">Nume</span>
                    <input required type="text" className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
                  </label>
                  <label className="block sm:col-span-1">
                    <span className="text-sm font-semibold text-foreground">Telefon</span>
                    <input required type="tel" className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-semibold text-foreground">Email (opțional)</span>
                    <input type="email" className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-semibold text-foreground">Tip serviciu</span>
                    <select className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30">
                      <option>Urgență sanitară</option><option>Reparație scurgere</option><option>Desfundare canalizare</option><option>Montaj boiler</option><option>Centrală termică</option><option>Renovare baie / bucătărie</option><option>Altceva</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm font-semibold text-foreground">Descriere problemă</span>
                    <textarea required rows={4} className="mt-1 block w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
                  </label>
                  <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-accent)] px-7 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)] transition hover:scale-[1.02]">
                    <Send className="h-5 w-5" /> Trimite solicitarea
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
            <iframe
              title="Locație Tim Instal Expert Timișoara"
              src="https://www.google.com/maps?q=Timi%C8%99oara%2C%20Romania&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}