
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <nav className="mx-auto max-w-7xl px-6">
        <div className={`
          glass-natural rounded-full shadow-lg
          transition-all duration-300
          ${scrolled ? 'py-4' : 'py-5'}
          px-6 sm:px-8
        `}>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Mistik Temizlik
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-natural-brown-700 hover:text-natural-brown-900 transition-colors whitespace-nowrap cursor-pointer font-medium">
                Ana Sayfa
              </Link>
              <Link href="/hizmetler" className="text-natural-brown-700 hover:text-natural-brown-900 transition-colors whitespace-nowrap cursor-pointer font-medium">
                Hizmetler
              </Link>
              <Link href="/scroll-demo" className="text-natural-brown-700 hover:text-natural-brown-900 transition-colors whitespace-nowrap cursor-pointer font-medium">
                Scroll Demo
              </Link>
              <Link href="/hakkimizda" className="text-natural-brown-700 hover:text-natural-brown-900 transition-colors whitespace-nowrap cursor-pointer font-medium">
                Hakkımızda
              </Link>
              <Link href="/galeri" className="text-natural-brown-700 hover:text-natural-brown-900 transition-colors whitespace-nowrap cursor-pointer font-medium">
                Galeri
              </Link>
              <Link href="/iletisim" className="text-natural-brown-700 hover:text-natural-brown-900 transition-colors whitespace-nowrap cursor-pointer font-medium">
                İletişim
              </Link>
              <Link href="/randevu" className="btn-natural text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all whitespace-nowrap cursor-pointer">
                Randevu Al
              </Link>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer text-natural-brown-700 hover:text-natural-brown-900 transition-colors"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden mt-4
          glass-natural rounded-2xl
          overflow-hidden
          transition-all duration-300
          ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="p-6 space-y-4">
            <Link href="/" className="block text-natural-brown-700 hover:text-natural-brown-900 transition-colors cursor-pointer font-medium">
              Ana Sayfa
            </Link>
            <Link href="/hizmetler" className="block text-natural-brown-700 hover:text-natural-brown-900 transition-colors cursor-pointer font-medium">
              Hizmetler
            </Link>
            <Link href="/scroll-demo" className="block text-natural-brown-700 hover:text-natural-brown-900 transition-colors cursor-pointer font-medium">
              Scroll Demo
            </Link>
            <Link href="/hakkimizda" className="block text-natural-brown-700 hover:text-natural-brown-900 transition-colors cursor-pointer font-medium">
              Hakkımızda
            </Link>
            <Link href="/galeri" className="block text-natural-brown-700 hover:text-natural-brown-900 transition-colors cursor-pointer font-medium">
              Galeri
            </Link>
            <Link href="/iletisim" className="block text-natural-brown-700 hover:text-natural-brown-900 transition-colors cursor-pointer font-medium">
              İletişim
            </Link>
            <Link href="/randevu" className="btn-natural text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all text-center cursor-pointer block">
              Randevu Al
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
