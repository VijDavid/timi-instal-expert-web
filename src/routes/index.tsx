import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Clock, Award, Wrench, Star, MapPin, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { Layout, PHONE, PHONE_HREF } from "@/components/Layout";
import heroImg from "@/assets/hero-plumber.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instalator Autorizat Timișoara – Tim Instal Expert | Intervenții 24/7" },
      { name: "description", content: "Instalator autorizat în Timișoara cu intervenții rapide 24/7. Reparații urgente, desfundări canalizare, centrale termice și instalații sanitare. Sună acum!" },
      { property: "og:title", content: "Instalator Autorizat Timișoara – Tim Instal Expert" },
      { property: "og:description", content: "Instalator profesionist în Timișoara. Intervenții rapide, urgențe 24/7, prețuri corecte." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Plumber",
        name: "Tim Instal Expert",
        image: "/",
        telephone: "+40712345678",
        address: { "@type": "PostalAddress", streetAddress: "Str. Aradului 25", addressLocality: "Timișoara", addressCountry: "RO" },
        areaServed: "Timișoara",
        priceRange: "$$",
        openingHours: "Mo-Su 00:00-23:59",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] text-primary-foreground">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_25%_25%,white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-accent" /></span>
              Disponibili acum în Timișoara
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Instalator Autorizat în <span className="text-accent">Timișoara</span> – Intervenții Rapide
            </h1>
            <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
              Echipa noastră vine la tine în maxim 60 de minute oriunde în Timișoara. Reparații sanitare, desfundări, centrale termice și urgențe non-stop.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-accent)] px-7 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)] transition hover:scale-105">
                <Phone className="h-5 w-5" /> Sună Acum
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10 px-7 py-4 text-base font-bold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20">
                Cere o Ofertă <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-accent" /> Autorizat ANRE</div>
              <div className="flex items-center gap-2"><Award className="h-5 w-5 text-accent" /> 12+ ani experiență</div>
              <div className="flex items-center gap-2"><Star className="h-5 w-5 text-accent" /> 4.9/5 (320+ recenzii)</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl" />
            <img src={heroImg} alt="Instalator autorizat Timișoara la lucru" width={1536} height={1024} className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]" />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-4 text-foreground shadow-[var(--shadow-elegant)] sm:block">
              <div className="text-3xl font-black text-accent">60 min</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Timp mediu sosire</div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 shrink-0" />
            <div className="font-bold">Urgență sanitară? Inundație, țeavă spartă sau scurgere blocată — intervenim 24/7.</div>
          </div>
          <a href={PHONE_HREF} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-accent">De ce să ne alegi</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-primary sm:text-4xl">Profesionalism și răspuns rapid</h2>
            <p className="mt-4 text-muted-foreground">Suntem o echipă locală de instalatori autorizați din Timișoara, dedicată calității și promptitudinii.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "Intervenții în 60 min", text: "Oriunde în Timișoara și împrejurimi, ajungem rapid." },
              { icon: ShieldCheck, title: "Autorizați ANRE & ISCIR", text: "Lucrări legale, sigure și cu garanție scrisă." },
              { icon: Wrench, title: "Echipamente moderne", text: "Camere video pentru canal, detectoare scurgeri, scule profesionale." },
              { icon: Award, title: "Garanție 24 luni", text: "Pentru toate lucrările executate și piesele montate." },
            ].map((f) => (
              <div key={f.title} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground"><f.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-lg font-bold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SUMMARY */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-accent">Servicii principale</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-primary sm:text-4xl">Tot ce ai nevoie, într-un singur loc</h2>
            </div>
            <Link to="/servicii" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent">Vezi toate serviciile <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Urgențe sanitare 24/7",
              "Reparații scurgeri și țevi sparte",
              "Desfundări canalizare",
              "Montaj boilere și centrale",
              "Reparații WC, chiuvete, baterii",
              "Instalații băi și bucătării",
            ].map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-xl bg-card p-5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="font-semibold text-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-accent">Ce spun clienții</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-primary sm:text-4xl">Recomandați de clienții din Timișoara</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Andreea M.", area: "Cartier Cetate", text: "Au venit în 40 de minute la o țeavă spartă. Profesioniști, curați și prețul a fost corect. Recomand!" },
              { name: "Răzvan P.", area: "Dumbrăvița", text: "Mi-au montat centrala termică impecabil. Au explicat totul pas cu pas și au lăsat totul lună." },
              { name: "Cristina D.", area: "Iosefin", text: "Punctuali, amabili și foarte pricepuți. Au desfundat canalizarea în 20 de minute. Mulțumesc!" },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-4 text-foreground/90">"{t.text}"</p>
                <div className="mt-5 border-t border-border pt-4">
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.area}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/recenzii" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent">Vezi toate recenziile <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-sm font-bold uppercase tracking-wider text-accent">Zone deservite</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Acoperim întreg orașul Timișoara</h2>
            <p className="mt-4 text-primary-foreground/80">Intervenim rapid în toate cartierele și localitățile limitrofe.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {["Cetate","Iosefin","Fabric","Elisabetin","Mehala","Complex Studențesc","Circumvalațiunii","Soarelui","Dumbrăvița","Giroc","Ghiroda","Moșnița Nouă"].map((a) => (
              <div key={a} className="flex items-center gap-2 rounded-lg bg-primary-foreground/5 px-4 py-3 ring-1 ring-primary-foreground/10">
                <MapPin className="h-4 w-4 shrink-0 text-accent" /> <span className="text-sm font-semibold">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[var(--gradient-hero)] p-10 text-center text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-14">
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ai o problemă sanitară? Te ajutăm chiar acum.</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">Sună-ne și un instalator autorizat ajunge la tine în maxim o oră.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-accent)] px-7 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)]">
                <Phone className="h-5 w-5" /> {PHONE}
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/30 px-7 py-4 text-base font-bold">
                Trimite o solicitare
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
