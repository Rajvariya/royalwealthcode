import React from 'react';
import { motion } from 'framer-motion';

const Law = ({ num, title, text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border-b border-emerald-900/20 py-16 flex flex-col md:flex-row gap-8 md:gap-20 text-left relative z-20"
  >
    <span className="text-emerald-800 font-serif italic text-4xl leading-none">{num}</span>
    <div className="max-w-2xl">
      <h3 className="text-xl md:text-2xl font-medium mb-4 tracking-tight text-emerald-100/90 font-serif">{title}</h3>
      <p className="text-stone-500 font-sans font-light leading-relaxed text-lg italic">
        {text}
      </p>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-emerald-500 selection:text-black">
      
      {/* --- BACKGROUND LAYER --- */}
      {/* Giant "OMERTA" text positioned behind everything */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h2 className="text-[120px] md:text-[350px] font-serif font-bold text-white/[0.02] tracking-[0.2em] select-none">
          OMERTA
        </h2>
      </div>

      {/* --- HEADER --- */}
      <nav className="relative z-50 pt-12 flex flex-col items-center gap-2">
        <span className="uppercase tracking-[0.6em] text-[10px] text-emerald-500/40 font-medium">RoyalWealthCode Presents</span>
        <div className="h-[1px] w-12 bg-emerald-900/30"></div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-48 text-center">
        
        {/* --- HERO SECTION --- */}
        <section className="mb-40">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            className="text-emerald-50/90 text-6xl md:text-[110px] font-serif font-medium tracking-tighter leading-[0.85] mb-4"
          >
            The Mafia Laws
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-emerald-500/80 text-5xl md:text-[90px] font-serif italic font-light tracking-tight"
          >
            of Power
          </motion.h2>
          <p className="mt-12 uppercase tracking-[0.4em] text-[11px] text-stone-500 font-sans">
            A Cosa Nostra Guide to Dominating Life
          </p>

          {/* FLOATING BOOK IMAGE */}
          <div className="flex justify-center mt-20 mb-16 relative">
            <div className="relative group">
              {/* Radial Glow behind book */}
              <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
              
              <motion.img 
                src="https://mafiarulesvittorio.netlify.app/book-cover.png" 
                alt="Book Cover" 
                className="relative w-64 md:w-80 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] border border-white/5 rounded-sm"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* PRIMARY BUTTON WITH GLOW & SHINE */}
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16, 185, 129, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-emerald-500 text-black px-16 py-6 rounded-sm font-sans font-bold text-xs uppercase tracking-[0.3em] overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10">Get the Book — $14.99</span>
          </motion.button>
          
          <div className="mt-8 flex flex-col gap-2">
            <p className="text-stone-600 text-[10px] tracking-widest uppercase italic font-sans">7-Day Money-Back Guarantee</p>
            <p className="text-emerald-900 text-[9px] tracking-[0.4em] uppercase font-bold font-sans">PDF File • Instant Access</p>
          </div>
        </section>

        {/* --- PHILOSOPHY SECTION --- */}
        <section className="max-w-3xl mx-auto mb-48 text-center py-24 border-y border-white/5 bg-black/20 backdrop-blur-sm px-6">
          <h3 className="text-2xl md:text-4xl font-serif text-emerald-50/90 leading-tight mb-10">
            They told you to work hard, stay humble, and wait your turn. <br/>
            <span className="italic text-emerald-500 font-light underline decoration-emerald-900 underline-offset-8">How's that working out?</span>
          </h3>
          <p className="text-stone-400 font-sans font-light leading-relaxed text-xl max-w-2xl mx-auto">
            The world does not reward the patient. It rewards the powerful. This is not inspiration. It is a transfer of operational knowledge built for the man who is done waiting.
          </p>
        </section>

        {/* --- THE FIVE LAWS --- */}
        <section className="mb-48 relative">
          <h4 className="text-emerald-500/40 uppercase tracking-[0.6em] text-[10px] mb-20 font-sans">The Five Laws</h4>
          <div className="flex flex-col">
            <Law num="I" title="The Law of Silence" text="The man who speaks least is the man who is heard most — learn when to say nothing and let the room do the work for you." />
            <Law num="II" title="The Law of Respect" text="Respect is never requested — it is a consequence of how you carry yourself when no one is watching." />
            <Law num="III" title="The Law of Loyalty" text="Choose your circle with the precision of a surgeon — because the wrong man inside costs more than any enemy outside." />
            <Law num="IV" title="The Law of Control" text="The man who cannot govern his own impulses will never govern anything else — discipline is dominance over the self." />
            <Law num="V" title="The Law of Power" text="Power is not taken by force — it is assumed by the man who acts as though it was always his." />
          </div>
        </section>

        {/* --- CONTENT PREVIEW SECTION --- */}
        <section className="bg-emerald-950/5 border border-emerald-900/20 p-12 md:p-24 rounded-sm text-left mb-48">
          <div className="max-w-2xl">
            <h4 className="text-emerald-100 text-4xl font-serif italic mb-8 tracking-tighter">What's Inside</h4>
            <p className="text-stone-400 font-sans font-light text-lg leading-relaxed mb-12">
              No filler. No fluff. Every word placed with intention. This is architecture for the mind—direct, practical, and undeniable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-emerald-500/70 font-sans text-xs tracking-[0.2em] uppercase font-bold">
              <div className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Silence as a Weapon</div>
              <div className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Extracting Respect</div>
              <div className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Circle Protection</div>
              <div className="flex items-center gap-4"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Impulse Dominance</div>
            </div>
          </div>
        </section>

        {/* --- FINAL CALL TO ACTION --- */}
        <section className="py-20 text-center relative">
          <h2 className="text-emerald-50/90 font-serif text-5xl md:text-7xl italic mb-12 tracking-tight">Are You Ready?</h2>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-emerald-500 text-black px-24 py-7 font-bold uppercase tracking-[0.3em] text-xs shadow-2xl shadow-emerald-500/20"
          >
            Access the Guide
          </motion.button>
        </section>

      </main>

      {/* --- STICKY BOTTOM BUTTON --- */}
      <div className="fixed bottom-0 w-full p-6 flex justify-center z-[100] pointer-events-none md:hidden">
        <motion.button 
          initial={{ y: 100 }} animate={{ y: 0 }}
          className="pointer-events-auto bg-emerald-500 text-black px-10 py-4 font-sans font-bold text-[10px] uppercase tracking-widest shadow-2xl"
        >
          Get the Book — $14.99
        </motion.button>
      </div>

      <footer className="py-24 border-t border-white/5 text-center opacity-30">
        <p className="text-[10px] tracking-[0.6em] uppercase font-sans font-light">© 2026 Emerald Strategics — RoyalWealthCode</p>
      </footer>
    </div>
  );
}