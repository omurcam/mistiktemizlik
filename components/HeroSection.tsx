
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful modern home interior"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-natural-gray-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-natural-gray-900/20 via-transparent to-natural-gray-900/60"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-20 w-3 h-3 bg-natural-sage-400/30 rounded-full ${mounted ? 'animate-float' : ''}`}></div>
        <div className={`absolute bottom-32 right-32 w-2 h-2 bg-natural-gold-400/40 rounded-full ${mounted ? 'animate-float-slow' : ''}`}></div>
        <div className={`absolute top-1/3 right-1/4 w-4 h-4 bg-natural-cream-400/20 rounded-full ${mounted ? 'animate-gentle-sway' : ''}`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-2 h-2 bg-natural-sage-300/30 rounded-full ${mounted ? 'animate-float' : ''}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="text-white drop-shadow-2xl">Mistik</span>
          <br />
          <span className="text-natural-cream-100 drop-shadow-2xl">Temizlik</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/95 drop-shadow-lg leading-relaxed max-w-2xl mx-auto">
          Bursa'da profesyonel temizlik hizmetleri. Eviniz ve iş yeriniz için güvenilir çözümler.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/randevu" className="btn-natural text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all whitespace-nowrap cursor-pointer inline-flex items-center shadow-xl">
            Hemen Randevu Al
            <i className="ri-calendar-check-line ml-2"></i>
          </Link>
          
          <div className="glass-natural text-natural-charcoal-800 rounded-full px-8 py-4 flex items-center backdrop-blur-md shadow-xl">
            <i className="ri-phone-fill text-2xl mr-3 text-natural-brown-600"></i>
            <span className="text-xl font-bold">0224 123 45 67</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
