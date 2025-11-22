import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Beans from './components/Beans'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#241c16] text-amber-50/95">
      {/* Soft wood header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-[#1f1813]/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-serif text-lg tracking-wide text-amber-100/95">Wood & Bean</a>
          <nav className="hidden md:flex items-center gap-6 text-amber-100/80 text-sm">
            <a href="#about" className="hover:text-amber-50 transition">About</a>
            <a href="#menu" className="hover:text-amber-50 transition">Menu</a>
            <a href="#gallery" className="hover:text-amber-50 transition">Interior</a>
            <a href="#beans" className="hover:text-amber-50 transition">Our Beans</a>
            <a href="#contact" className="hover:text-amber-50 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Beans />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-[#1f1813] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-10 text-amber-100/70 text-sm">
          <p>© {new Date().getFullYear()} Wood & Bean — A quiet café for slow hours.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
