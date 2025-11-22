import React from 'react';

const drinks = [
  { name: 'Nordic Filter', note: 'Light, clean, and aromatic — a quiet clarity in the cup.', price: '4.5' },
  { name: 'Honey Oat Latte', note: 'Soft caramel sweetness with velvety oat milk.', price: '5.5' },
  { name: 'Cardamom Cappuccino', note: 'A gentle spice whisper over a creamy base.', price: '5.0' },
  { name: 'Maple Cortado', note: 'Muted maple warmth, short and elegant.', price: '4.8' },
  { name: 'Vanilla Bean Flat White', note: 'Subtle vanilla, smooth and balanced.', price: '5.2' },
]

const Menu = () => {
  return (
    <section id="menu" className="relative bg-[#2a211a] text-amber-50/95">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-amber-100 mb-8">Coffee Menu</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {drinks.map((d) => (
            <div key={d.name} className="rounded-2xl bg-white/5 border border-white/10 p-5 shadow-[0_6px_30px_rgba(0,0,0,0.35)]">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-xl text-amber-50/95">{d.name}</h3>
                <span className="text-amber-200/80">${d.price}</span>
              </div>
              <p className="mt-2 text-amber-100/75 text-sm leading-relaxed">{d.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
