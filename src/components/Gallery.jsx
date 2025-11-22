import React from 'react';

// Subtly dim, warm images sourced from unsplash with keywords that match the vibe
const images = [
  'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1422207134147-65fb81f59e38?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533777324565-a040eb52fac1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494314671902-399b18174975?q=80&w=1600&auto=format&fit=crop'
]

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-[#2f251e] text-amber-50/95">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-amber-100 mb-8">Interior & Atmosphere</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl bg-black/20">
              <img
                src={src}
                alt="Cozy café mood"
                className="h-44 w-full object-cover brightness-[.88] contrast-[.98] saturate-[.9] hover:brightness-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
