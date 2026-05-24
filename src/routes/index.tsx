import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useReveal } from "@/hooks/use-reveal";

import heroImg from "@/assets/hero-cafe.jpg";
import menuLatte from "@/assets/menu-latte.jpg";
import menuMatcha from "@/assets/menu-matcha.jpg";
import menuPastry from "@/assets/menu-pastry.jpg";
import menuCake from "@/assets/menu-cake.jpg";
import seasonalHojicha from "@/assets/seasonal-hojicha.jpg";
import seasonalYuzu from "@/assets/seasonal-yuzu.jpg";
import seasonalSesame from "@/assets/seasonal-sesame.jpg";
import aboutImg from "@/assets/about-story.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const menu = [
  { name: "Single Origin Pour Over", desc: "Ethiopia Yirgacheffe. Floral, citrus, honey.", price: "¥780", img: menuLatte },
  { name: "Ceremonial Matcha Latte", desc: "Stone-milled Uji matcha, oat milk.", price: "¥820", img: menuMatcha },
  { name: "Hand-laminated Croissant", desc: "72-hour cold ferment, cultured butter.", price: "¥560", img: menuPastry },
  { name: "Hokkaido Cheesecake", desc: "Cloud-soft, lightly torched.", price: "¥720", img: menuCake },
];

const seasonal = [
  { name: "Hojicha Maple", desc: "Roasted green tea, brown butter, maple foam.", img: seasonalHojicha },
  { name: "Yuzu Honey Cold Brew", desc: "12-hour cold brew, yuzu peel, raw honey.", img: seasonalYuzu },
  { name: "Black Sesame Oat", desc: "Toasted sesame, oat milk, soft brown sugar.", img: seasonalSesame },
];

const testimonials = [
  { quote: "The quietest hour of my week. Their pour over is meditative.", name: "Aiko M.", role: "Regular" },
  { quote: "Tokyo cafe energy, in the best possible way. Pastries are unreal.", name: "Daniel K.", role: "Food writer" },
  { quote: "A space that makes you slow down. I never want to leave.", name: "Soo-Ah L.", role: "Photographer" },
];

const gallery = [g1, g2, g3, g4, g5, g6];

function Index() {
  useReveal();
  return (
    <div id="top" className="gradient-warm min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <Seasonal />
      <About />
      <Testimonials />
      <Gallery />
      <Reserve />
      <Visit />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32 sm:pb-24">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Hinoki & Honey cafe interior" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-1 bg-gradient-to-r from-cream/80 via-cream/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-transparent to-cream" />
        <div className="absolute inset-0 shimmer-light bg-gradient-to-tr from-transparent via-cream/20 to-transparent" />
      </div>

      {/* Steam */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2">
        <span className="steam" style={{ left: 0, animationDelay: "0s" }} />
        <span className="steam" style={{ left: 14, animationDelay: "1.4s" }} />
        <span className="steam" style={{ left: -14, animationDelay: "2.6s" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-mocha">est. 2021 · Naka-Meguro, Tokyo</p>
        <h1 className="reveal mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-espresso drop-shadow-[0_2px_12px_rgba(250,248,245,0.85)] sm:text-7xl md:text-8xl">
          Slow coffee.<br />
          <em className="not-italic text-clay drop-shadow-[0_2px_10px_rgba(250,248,245,0.7)]">Quiet mornings.</em>
        </h1>
        <p className="reveal mt-6 max-w-md text-base font-medium text-espresso/90 drop-shadow-[0_1px_8px_rgba(250,248,245,0.8)] sm:text-lg">
          A small cafe and bakery shaped by Japanese stillness and Scandinavian warmth — where every cup is poured by hand.
        </p>
        <div className="reveal mt-10 flex flex-wrap gap-3">
          <a href="#menu" className="rounded-full bg-espresso px-7 py-3 text-sm tracking-wide text-cream transition-all hover:bg-mocha hover:shadow-soft">
            View the menu
          </a>
          <a href="#reserve" className="glass rounded-full px-7 py-3 text-sm tracking-wide text-espresso transition-all hover:bg-cream">
            Reserve a table
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-mocha/70">
        scroll
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="reveal mx-auto mb-14 max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-clay">{tag}</p>
      <h2 className="mt-3 font-display text-4xl text-espresso sm:text-5xl md:text-6xl">{title}</h2>
      {sub && <p className="mt-4 text-mocha">{sub}</p>}
    </div>
  );
}

function Menu() {
  return (
    <section id="menu" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="The Menu" title="Signature coffee & bakery" sub="A short menu, made with patience. Beans roasted weekly, pastries baked every morning before sunrise." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menu.map((item) => (
            <article key={item.name} className="reveal hover-lift group overflow-hidden rounded-3xl bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-espresso">{item.name}</h3>
                  <span className="text-sm text-clay">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-mocha">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Seasonal() {
  return (
    <section id="seasonal" className="relative px-6 py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="Autumn 2026" title="Featured seasonal drinks" sub="Three drinks crafted around the season, available for a limited time." />
        <div className="grid gap-6 md:grid-cols-3">
          {seasonal.map((d, i) => (
            <article key={d.name} className="reveal group relative overflow-hidden rounded-3xl" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              </div>
              <div className="absolute inset-x-4 bottom-4 glass-dark rounded-2xl p-5 text-cream">
                <h3 className="font-display text-2xl">{d.name}</h3>
                <p className="mt-1 text-sm text-cream/80">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="story" className="px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="reveal relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
            <img src={aboutImg} alt="Our roastery" loading="lazy" width={1200} height={1500} className="h-full w-full object-cover" />
          </div>
          <div className="glass absolute -bottom-6 -right-6 hidden rounded-2xl p-5 sm:block">
            <p className="font-display text-3xl text-espresso">5 yrs</p>
            <p className="text-xs uppercase tracking-widest text-mocha">slow brewing</p>
          </div>
        </div>
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-clay">Our Story</p>
          <h2 className="mt-3 font-display text-4xl text-espresso sm:text-5xl">A quiet place,<br />made with care.</h2>
          <p className="mt-6 text-mocha">
            Hinoki & Honey began as a Sunday ritual between two friends — one a baker from Kyoto, one a roaster from Stockholm. We opened our first counter in 2021, with three stools and a single espresso machine.
          </p>
          <p className="mt-4 text-mocha">
            Today, our small team still bakes everything in-house and roasts beans in micro-batches. We believe a cafe should feel like a long exhale.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div><p className="font-display text-3xl text-espresso">12</p><p className="text-xs uppercase tracking-widest text-mocha">origins</p></div>
            <div><p className="font-display text-3xl text-espresso">6am</p><p className="text-xs uppercase tracking-widest text-mocha">bake start</p></div>
            <div><p className="font-display text-3xl text-espresso">∞</p><p className="text-xs uppercase tracking-widest text-mocha">refills</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="Kind Words" title="From our regulars" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={t.name} className="reveal glass rounded-3xl p-8" style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="font-display text-5xl text-clay">“</span>
              <blockquote className="-mt-4 font-display text-xl leading-snug text-espresso">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                <span className="text-espresso">{t.name}</span>
                <span className="text-mocha"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader tag="@hinokiandhoney" title="From the cafe" sub="Follow along — fresh light, fresh bakes, slow mornings." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {gallery.map((src, i) => (
            <a
              key={i}
              href="#"
              className="reveal group relative block aspect-square overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img src={src} alt="" loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/30" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reserve() {
  const [sent, setSent] = useState(false);
  return (
    <section id="reserve" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="reveal gradient-mocha overflow-hidden rounded-[2.5rem] p-8 shadow-soft sm:p-14">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/70">Reservations</p>
          <h2 className="mt-3 font-display text-4xl text-cream sm:text-5xl">Save a quiet corner.</h2>
          <p className="mt-3 max-w-md text-cream/80">Tables seat 2–6. We hold reservations for 15 minutes.</p>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            <Field label="Name"><input required className="reserve-input" placeholder="Your name" /></Field>
            <Field label="Guests"><input required type="number" min={1} max={8} defaultValue={2} className="reserve-input" /></Field>
            <Field label="Date"><input required type="date" className="reserve-input" /></Field>
            <Field label="Time"><input required type="time" defaultValue="10:00" className="reserve-input" /></Field>
            <div className="sm:col-span-2">
              <Field label="Note"><textarea rows={3} className="reserve-input resize-none" placeholder="Anything we should know?" /></Field>
            </div>
            <button
              type="submit"
              className="sm:col-span-2 mt-2 w-full rounded-full bg-cream px-6 py-4 text-sm tracking-wide text-espresso transition-all hover:bg-sand"
            >
              {sent ? "Thank you — we'll be in touch ✦" : "Request a table"}
            </button>
          </form>
        </div>
      </div>
      <style>{`
        .reserve-input {
          width: 100%;
          background: color-mix(in oklab, var(--cream) 10%, transparent);
          border: 1px solid color-mix(in oklab, var(--cream) 25%, transparent);
          color: var(--cream);
          padding: 0.85rem 1rem;
          border-radius: 1rem;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 200ms, background 200ms;
        }
        .reserve-input::placeholder { color: color-mix(in oklab, var(--cream) 50%, transparent); }
        .reserve-input:focus { border-color: var(--cream); background: color-mix(in oklab, var(--cream) 15%, transparent); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cream/70">{label}</span>
      {children}
    </label>
  );
}

function Visit() {
  return (
    <section id="visit" className="px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-clay">Visit</p>
          <h2 className="mt-3 font-display text-4xl text-espresso sm:text-5xl">Come find us.</h2>
          <div className="mt-8 space-y-6 text-mocha">
            <div>
              <p className="text-xs uppercase tracking-widest text-clay">Address</p>
              <p className="mt-1 text-espresso">2-14-8 Aobadai, Meguro<br />Tokyo 153-0042, Japan</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-clay">Hours</p>
              <ul className="mt-1 space-y-1 text-espresso">
                <li className="flex justify-between"><span>Mon — Fri</span><span>8:00 — 19:00</span></li>
                <li className="flex justify-between"><span>Sat — Sun</span><span>9:00 — 20:00</span></li>
                <li className="flex justify-between text-mocha"><span>Tuesday</span><span>closed</span></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-clay">Contact</p>
              <p className="mt-1 text-espresso">hello@hinokihoney.jp · +81 3 1234 5678</p>
            </div>
          </div>
        </div>
        <div className="reveal float-slow overflow-hidden rounded-3xl shadow-soft">
          <iframe
            title="Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=139.692%2C35.642%2C139.704%2C35.650&layer=mapnik"
            className="h-full min-h-[420px] w-full border-0 grayscale-[35%] sepia-[20%]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-display text-3xl text-espresso">Hinoki <span className="text-clay">&</span> Honey</p>
            <p className="mt-2 max-w-sm text-sm text-mocha">A small cafe and bakery in Naka-Meguro. Slow coffee, soft bread, quiet hours.</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-mocha">
            <a href="#menu" className="hover:text-espresso">Menu</a>
            <a href="#story" className="hover:text-espresso">Story</a>
            <a href="#visit" className="hover:text-espresso">Visit</a>
            <a href="#" className="hover:text-espresso">Instagram</a>
            <a href="#" className="hover:text-espresso">Journal</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-3 border-t border-border pt-6 text-xs text-mocha sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Hinoki & Honey. All rights reserved.</p>
          <p className="tracking-widest uppercase">Brewed with care · 心を込めて</p>
        </div>
      </div>
    </footer>
  );
}
