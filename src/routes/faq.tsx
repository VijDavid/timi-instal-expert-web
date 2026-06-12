import { createFileRoute } from "@tanstack/react-router";
import { Layout, PHONE, PHONE_HREF } from "@/components/Layout";
import { Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Întrebări Frecvente – Tim Instal Expert Timișoara" },
      { name: "description", content: "Răspunsuri la cele mai frecvente întrebări despre serviciile noastre de instalator în Timișoara: prețuri, urgențe, garanții." },
      { property: "og:title", content: "Întrebări Frecvente – Tim Instal Expert" },
      { property: "og:description", content: "FAQ instalator Timișoara — prețuri, urgențe, programări." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Cât costă o intervenție de instalator în Timișoara?", a: "Costul depinde de tipul lucrării. Deplasarea și diagnosticul sunt gratuite în Timișoara. Lucrările simple (înlocuire baterie, desfundare sifon) pornesc de la 150 lei. Îți comunicăm prețul exact înainte de a începe — fără surprize." },
  { q: "În cât timp ajungeți la mine în caz de urgență?", a: "Pentru urgențe în Timișoara, ajungem în maxim 60 de minute, 24/7. În zone precum Cetate, Iosefin, Fabric sau Elisabetin, timpul mediu este de 30-45 de minute." },
  { q: "Lucrați și în weekend sau noaptea?", a: "Da, suntem disponibili 24/7, inclusiv weekend-uri și sărbători. Pentru intervențiile efectuate în afara programului normal (20:00–08:00), se aplică un tarif de urgență." },
  { q: "Oferiți garanție pentru lucrări?", a: "Da, oferim garanție scrisă de 24 de luni pentru manoperă și piesele montate. Dacă apare orice problemă în acest interval, revenim gratuit." },
  { q: "Sunteți autorizați?", a: "Da, suntem autorizați ANRE (instalații gaze) și ISCIR (centrale termice). Toate lucrările sunt executate conform normativelor în vigoare și pot fi documentate." },
  { q: "Pot plăti cu cardul sau cu transfer bancar?", a: "Acceptăm numerar, card bancar și transfer bancar (cu factură fiscală). Pentru firme emitem factură cu TVA." },
  { q: "Lucrați și în afara Timișoarei?", a: "Da, deservim și localitățile din jur: Dumbrăvița, Giroc, Ghiroda, Moșnița Nouă, Săcălaz, Sînmihaiu Român. Sună-ne pentru a verifica disponibilitatea." },
  { q: "Cum cer o ofertă pentru o lucrare mai mare?", a: "Pentru renovări sau instalații noi, venim gratuit la fața locului, evaluăm lucrarea și îți oferim un deviz detaliat în maxim 24 de ore. Poți completa formularul de contact sau ne poți suna direct." },
];

function FaqPage() {
  return (
    <Layout>
      <section className="bg-[var(--gradient-hero)] py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-sm font-bold uppercase tracking-wider text-accent">Întrebări Frecvente</div>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Răspunsuri la cele mai frecvente întrebări</h1>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-sm">
                <AccordionTrigger className="text-left text-base font-bold text-primary hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-foreground/85">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-primary">Nu ai găsit răspunsul?</h2>
          <p className="mt-4 text-muted-foreground">Sună-ne și îți răspundem imediat la orice întrebare.</p>
          <a href={PHONE_HREF} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--gradient-accent)] px-7 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)]"><Phone className="h-5 w-5" /> {PHONE}</a>
        </div>
      </section>
    </Layout>
  );
}