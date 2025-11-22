import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#271f19] text-amber-50/95">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
        <h2 className="font-serif text-3xl md:text-4xl text-amber-100 mb-6">Location & Hours</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_6px_30px_rgba(0,0,0,0.35)]">
            <h3 className="font-serif text-xl mb-2">Find Us</h3>
            <p className="text-amber-100/80">12 Quiet Lane, Old Town</p>
            <p className="text-amber-100/70">Open daily, softly lit from late morning to evening.</p>
            <div className="mt-4 text-amber-100/80 space-y-1 text-sm">
              <p>Mon–Fri: 8:00 – 19:00</p>
              <p>Sat: 9:00 – 19:00</p>
              <p>Sun: 9:00 – 17:00</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 shadow-[0_6px_30px_rgba(0,0,0,0.35)]">
            <h3 className="font-serif text-xl mb-2">Contact</h3>
            <p className="text-amber-100/80">hello@woodandbean.cafe</p>
            <p className="text-amber-100/80">+33 1 23 45 67 89</p>
            <p className="text-amber-100/70 text-sm mt-2">We keep responses warm and timely.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
