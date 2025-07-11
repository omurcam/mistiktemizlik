
'use client';

import Link from 'next/link';

export default function Footer() {
  const services = [
    { name: 'Ev Temizliği', href: '/hizmetler#ev' },
    { name: 'Ofis Temizliği', href: '/hizmetler#ofis' },
    { name: 'Derin Temizlik', href: '/hizmetler#derin' },
    { name: 'Cam Temizliği', href: '/hizmetler#cam' },
  ];

  const quickLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  return (
    <footer className="bg-gradient-to-br from-natural-gray-900 to-natural-brown-800 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Mistik Temizlik
            </h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Bursa'nın en güvenilir temizlik hizmeti. Profesyonel ekibimiz ile evinizi ve iş yerinizi hijyenik bir ortama kavuşturuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-natural-brown-600 rounded-full flex items-center justify-center text-white hover:bg-natural-brown-500 transition-colors">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-natural-brown-600 rounded-full flex items-center justify-center text-white hover:bg-natural-brown-500 transition-colors">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-natural-brown-600 rounded-full flex items-center justify-center text-white hover:bg-natural-brown-500 transition-colors">
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-neutral-300 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hizmetler" className="text-neutral-300 hover:text-white transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/hakkimizda" className="text-neutral-300 hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/galeri" className="text-neutral-300 hover:text-white transition-colors">Galeri</Link></li>
              <li><Link href="/iletisim" className="text-neutral-300 hover:text-white transition-colors">İletişim</Link></li>
              <li><Link href="/randevu" className="text-neutral-300 hover:text-white transition-colors">Randevu Al</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">İletişim Bilgileri</h4>
            <div className="space-y-3">
              <div className="flex items-center text-neutral-300">
                <i className="ri-phone-fill mr-3 text-natural-brown-400"></i>
                <span>0224 123 45 67</span>
              </div>
              <div className="flex items-center text-neutral-300">
                <i className="ri-mail-fill mr-3 text-natural-brown-400"></i>
                <span>info@mistiktemizlik.com</span>
              </div>
              <div className="flex items-start text-neutral-300">
                <i className="ri-map-pin-fill mr-3 mt-1 text-natural-brown-400"></i>
                <span>Osmangazi, Bursa</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-natural-brown-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2024 Mistik Temizlik. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link href="/gizlilik" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
