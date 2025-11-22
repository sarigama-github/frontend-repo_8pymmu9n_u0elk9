import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-[#2c231c] text-amber-50/95">
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.06), rgba(255,255,255,0))',
      }} />
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-amber-100 mb-6">About the Café</h2>
        <p className="text-amber-100/85 leading-relaxed">
          Tucked along a quiet street, Wood & Bean was imagined as a small refuge for slow mornings and thoughtful afternoons. We keep the lights low, the wood warm, and the mood gentle—an intimate space where the steam of your cup mingles with a calm hush. Scandinavian simplicity guides our lines, while European café culture shapes our rhythm: unhurried, present, and quietly social.
        </p>
        <p className="mt-5 text-amber-100/80 leading-relaxed">
          Every detail is considered: rounded corners, linen textures, soft shadows, and seats that invite you to linger. We believe good coffee tastes better in a room that breathes.
        </p>
      </div>
    </section>
  );
};

export default About;
