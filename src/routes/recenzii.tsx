import { createFileRoute } from "@tanstack/react-router";
import { Layout, PHONE, PHONE_HREF } from "@/components/Layout";
import { Star, Phone } from "lucide-react";

export const Route = createFileRoute("/recenzii")({
  head: () => ({
    meta: [
      { title: "Recenzii Clienți – Tim Instal Expert Timișoara" },
      { name: "description", content: "Citește recenziile reale ale clienților noștri din Timișoara despre serviciile de instalator." },
      { property: "og:title", content: "Recenzii Clienți Tim Instal Expert" },
      { property: "og:description", content: "Peste 320 de recenzii de la clienți din Timișoara." },
    ],
    links: [{ rel: "canonical", href: "/recenzii" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Andreea Mureșan", area: "Cetate, Timișoara", date: "Mai 2026", text: "Am avut o țeavă spartă în baie sâmbătă seara. Am sunat la 22:00 și în 40 de minute erau la ușa mea. Au reparat totul curat și profesionist, fără să distrugă faianța. Prețul a fost corect și mi-au oferit garanție scrisă. Recomand cu toată inima!" },
  { name: "Răzvan Popa", area: "Dumbrăvița", date: "Aprilie 2026", text: "Mi-au montat o centrală termică nouă și au înlocuit caloriferele. Lucrarea a durat exact cât au promis, totul a fost lăsat lună la final. Au explicat clar cum funcționează totul și mi-au dat garanție 24 de luni. Echipă serioasă." },
  { name: "Cristina Dragomir", area: "Iosefin, Timișoara", date: "Martie 2026", text: "Am avut canalizarea înfundată în bucătărie. Au venit cu spirală profesională și au rezolvat în 20 de minute. Băieții foarte amabili, punctuali și au lăsat totul curat. Voi apela cu siguranță și pe viitor." },
  { name: "Mihai Constantin", area: "Complex Studențesc", date: "Februarie 2026", text: "Renovare completă baie — au făcut toată instalația sanitară de la zero. Calitate ireproșabilă, materiale de top, coordonare excelentă cu echipa de faianță. Prețul a fost cel agreat la început, fără costuri suplimentare." },
  { name: "Elena Stoica", area: "Ghiroda", date: "Ianuarie 2026", text: "Boilerul mi s-a stricat în plină iarnă. Au venit a doua zi dimineață, au diagnosticat problema și mi-au montat unul nou în aceeași zi. Foarte profesioniști, comunicativi și au oferit prețuri transparente. Mulțumesc!" },
];

function ReviewsPage() {
  return (
    <Layout>
      <section className="bg-[var(--gradient-hero)] py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-sm font-bold uppercase tracking-wider text-accent">Recenzii Clienți</div>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Ce spun clienții din Timișoara</h1>
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-7 w-7 fill-current" />)}</div>
            <div className="text-lg font-bold">4.9 din 5 — peste 320 de recenzii</div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{r.date}</span>
              </div>
              <p className="mt-4 text-foreground/90">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-hero)] text-sm font-bold text-primary-foreground">{r.name.split(" ").map(n => n[0]).join("")}</div>
                <div>
                  <div className="font-bold text-primary">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.area}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-primary">Vrei și tu o experiență la fel?</h2>
          <p className="mt-4 text-muted-foreground">Sună-ne acum și descoperi de ce clienții din Timișoara ne recomandă.</p>
          <a href={PHONE_HREF} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-accent)] px-7 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)]"><Phone className="h-5 w-5" /> {PHONE}</a>
        </div>
      </section>
    </Layout>
  );
}