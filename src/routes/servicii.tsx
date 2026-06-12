import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PHONE, PHONE_HREF } from "@/components/Layout";
import { AlertTriangle, Droplets, Wrench, Flame, Bath, ShowerHead, Thermometer, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii Instalator Timișoara – Reparații, Urgențe, Centrale | Tim Instal Expert" },
      { name: "description", content: "Servicii complete de instalator în Timișoara: urgențe sanitare, desfundări, reparații scurgeri, montaj centrale termice și boilere. Sună acum!" },
      { property: "og:title", content: "Servicii Instalator Timișoara" },
      { property: "og:description", content: "Toate serviciile sanitare și termice oferite de Tim Instal Expert în Timișoara." },
    ],
    links: [{ rel: "canonical", href: "/servicii" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: AlertTriangle, title: "Urgențe sanitare 24/7", desc: "Intervenim în maxim 60 de minute pentru inundații, țevi sparte, scurgeri majore. Echipă pe teren non-stop.", items: ["Țevi sparte și fisuri","Inundații apartament","Robinete blocate","Defecțiuni centrale"] },
  { icon: Droplets, title: "Reparații scurgeri", desc: "Detectare profesională a scurgerilor cu echipamente moderne și remediere rapidă fără spargeri inutile.", items: ["Detectare cu cameră video","Reparații țevi PEX, PPR, cupru","Înlocuire racorduri","Etanșări profesionale"] },
  { icon: Wrench, title: "Desfundări canalizare", desc: "Desfundăm orice tip de canalizare cu spirală electrică sau hidrocurățare la presiune înaltă.", items: ["Chiuvete și lavoare","WC și pisoare","Coloane canalizare","Curățare cu jet de apă"] },
  { icon: Thermometer, title: "Boilere și acumulatoare", desc: "Montaj, service și înlocuire boilere electrice, pe gaz sau acumulatoare cu pompă de căldură.", items: ["Boilere electrice","Boilere pe gaz","Acumulatoare 100-300L","Service și revizii"] },
  { icon: ShowerHead, title: "Reparații WC, chiuvete, baterii", desc: "Înlocuim și reparăm orice obiect sanitar cu garanție și piese originale de la furnizori autorizați.", items: ["Baterii cadă și lavoar","Rezervoare WC","Sifon și ventil","Cabine de duș"] },
  { icon: Bath, title: "Instalații băi & bucătării", desc: "Realizăm instalații complete pentru renovări sau construcții noi, cu materiale premium și execuție impecabilă.", items: ["Trasare instalații","Montaj obiecte sanitare","Mobilier de baie","Coordonare cu faianțarul"] },
  { icon: Flame, title: "Centrale termice & încălzire", desc: "Montaj, revizie și reparații centrale termice autorizate ISCIR. Lucrări cu garanție și certificat.", items: ["Centrale pe gaz/condensare","Calorifere și distribuitoare","Încălzire în pardoseală","Revizii anuale ISCIR"] },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="bg-[var(--gradient-hero)] py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-sm font-bold uppercase tracking-wider text-accent">Servicii Tim Instal Expert</div>
          <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Servicii de Instalații Sanitare în Timișoara</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">De la urgențe sanitare până la montaj centrale termice — acoperim toate nevoile tale.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {services.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[var(--gradient-accent)] text-accent-foreground"><s.icon className="h-7 w-7" /></div>
                <div className="min-w-0">
                  <h2 className="text-xl font-bold text-primary">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /> {i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">Ai nevoie de un serviciu acum?</h2>
          <p className="max-w-xl text-muted-foreground">Sună-ne pentru o evaluare gratuită sau cere o ofertă online — răspundem în câteva minute.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-accent)] px-7 py-4 text-base font-bold text-accent-foreground shadow-[var(--shadow-accent)]"><Phone className="h-5 w-5" /> {PHONE}</a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-7 py-4 text-base font-bold text-primary">Cere ofertă <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}