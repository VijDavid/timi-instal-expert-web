import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PHONE, PHONE_HREF } from "@/components/Layout";
import { Award, Users, Clock, Wrench, ShieldCheck, MapPin, Phone, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre Noi – Tim Instal Expert | Instalator Autorizat Timișoara" },
      { name: "description", content: "Echipă locală de instalatori autorizați în Timișoara, cu peste 12 ani de experiență. Aflați mai multe despre Tim Instal Expert." },
      { property: "og:title", content: "Despre Tim Instal Expert" },
      { property: "og:description", content: "Companie locală de instalații sanitare și termice din Timișoara." },
    ],
    links: [{ rel: "canonical", href: "/despre" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const stats = [
    { icon: Clock, value: "12+", label: "Ani de experiență" },
    { icon: Users, value: "4500+", label: "Clienți mulțumiți" },
    { icon: Wrench, value: "60 min", label: "Timp mediu sosire" },
    { icon: Award, value: "4.9/5", label: "Rating clienți" },
  ];
  return (
    <Layout>
      <section className="bg-[var(--gradient-hero)] py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-sm font-bold uppercase tracking-wider text-accent">Despre Noi</div>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Instalatori locali, dedicați Timișoarei</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/85">Tim Instal Expert este o companie locală, fondată în 2013, specializată în instalații sanitare și termice pentru locuințe și firme din Timișoara.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-primary">Povestea noastră</h2>
            <div className="mt-5 space-y-4 text-foreground/85">
              <p>Am început în 2013 cu o singură dubă și pasiunea pentru lucrul bine făcut. Astăzi suntem o echipă de 8 instalatori autorizați ANRE și ISCIR care intervin zilnic în tot orașul.</p>
              <p>Ne mândrim cu faptul că peste 70% dintre clienții noștri vin pe bază de recomandare. Asta înseamnă că facem treabă bună — și o facem la timp.</p>
              <p>Investim constant în echipamente moderne: camere video pentru inspecția canalizărilor, detectoare electronice de scurgeri, scule pneumatice și hidraulice profesionale.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-accent)] px-6 py-3 text-sm font-bold text-accent-foreground shadow-[var(--shadow-accent)]"><Phone className="h-4 w-4" /> {PHONE}</a>
              <Link to="/servicii" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-bold text-primary">Vezi serviciile <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground"><s.icon className="h-6 w-6" /></div>
                <div className="mt-4 text-3xl font-black text-primary">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black tracking-tight text-primary sm:text-4xl">Valorile noastre</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Clock, title: "Punctualitate", text: "Respectăm intervalul orar agreat. Dacă întârziem, te anunțăm." },
              { icon: ShieldCheck, title: "Transparență", text: "Prețuri clare, fără surprize. Îți spunem costul înainte de a începe." },
              { icon: MapPin, title: "Garanție locală", text: "Suntem aici, în Timișoara. Revenim oricând la nevoie." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-card p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-accent)] text-accent-foreground"><v.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-lg font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}