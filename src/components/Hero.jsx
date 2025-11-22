import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background: deep wood gradient + gentle spotlight */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-[#261e18] via-[#2b221c] to-[#332820]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(1200px 600px at 15% -10%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(900px 500px at 90% 110%, rgba(255,255,255,0.06), transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-28 md:pt-28 md:pb-36 text-amber-50/95">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 shadow-md shadow-black/30 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-amber-400/80 animate-pulse" />
          <span className="text-[11px] tracking-wider uppercase text-amber-50/90">Dim • Warm • Inviting</span>
        </div>

        <h1 className="mt-8 font-serif text-[38px] leading-tight sm:text-5xl md:text-6xl">
          Wood & Bean — a quiet corner where time pours slowly
        </h1>
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-amber-100/80 leading-relaxed">
          A softly lit café inspired by small European streets and Scandinavian calm. Gentle woods, linen textures, and cups that steam like little poems.
        </p>
        <div className="mt-10">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500/90 hover:bg-amber-500 text-[#2a2019] px-6 py-3 text-sm font-medium shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition"
          >
            Explore the Menu
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Ambient highlight */}
      <div className="pointer-events-none absolute -right-16 top-10 hidden md:block opacity-30">
        <div
          className="h-64 w-64 rounded-full"
          style={{
            background:
              'conic-gradient(from 200deg at 50% 50%, rgba(240, 200, 150, 0.12), rgba(255, 255, 255, 0))',
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
