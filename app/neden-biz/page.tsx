'use client';

import Link from 'next/link';
import { useState } from 'react';

const advantages = [
  {
    id: 'uzman-ekip',
    title: 'Eğitimli Uzman Ekip',
    description: 'Sertifikalı temizlik teknisyenleri ile profesyonel hizmet kalitesi.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    icon: '👥',
    features: [
      'Sertifikalı temizlik teknisyenleri',
      'Düzenli eğitim programları',
      'Hijyen ve güvenlik sertifikaları',
      'Müşteri hizmetleri eğitimi',
      '5+ yıl sektör deneyimi'
    ],
    stats: '15+ Uzman'
  },
  {
    id: 'saglik-onayili',
    title: 'Sağlık Onaylı Ürünler',
    description: 'Dermatolog test edilmiş, alerji dostu ve çevre dostu temizlik ürünleri kullanıyoruz.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
    icon: '🌱',
    features: [
      'Dermatolog test edilmiş formüller',
      'Alerji dostu bileşenler',
      'Çevre dostu ve biyolojik çözünür',
      'Antibakteriyel ve antiviral etki',
      'Çocuk ve pet dostu ürünler'
    ],
    stats: '100% Güvenli'
  },
  {
    id: 'zamaninda-hizmet',
    title: 'Zamanında Hizmet Garantisi',
    description: 'Dakik randevu sistemi ile zamanınızı değerli görüyoruz.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2070&auto=format&fit=crop',
    icon: '⏰',
    features: [
      'Dakik randevu sistemi',
      'Esnek saat seçenekleri',
      'Aynı gün hizmet imkanı',
      'Önceden bilgilendirme',
      'Acil durum hizmet hattı'
    ],
    stats: '%98 Dakiklik'
  },
  {
    id: 'uygun-fiyat',
    title: 'Şeffaf Fiyat Politikası',
    description: 'Kaliteyi uygun fiyatlarla buluşturan şeffaf fiyatlandırma sistemi.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    icon: '💰',
    features: [
      'Şeffaf fiyatlandırma',
      'Gizli maliyet yok',
      'Esnek ödeme seçenekleri',
      'Paket indirimleri',
      'Ücretsiz keşif hizmeti'
    ],
    stats: '0₺ Gizli Maliyet'
  },
  {
    id: 'sigorta-guvencesi',
    title: 'Tam Sigorta Güvencesi',
    description: 'Kapsamlı sigorta güvencesi ile hizmetlerimizden emin olabilirsiniz.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    icon: '🛡️',
    features: [
      'Sorumluluk sigortası',
      'Ekipman güvencesi',
      'Hasar sigortası',
      'Müşteri memnuniyet garantisi',
      'Yeniden temizlik garantisi'
    ],
    stats: '5M₺ Sigorta'
  },
  {
    id: 'kalite-kontrol',
    title: 'ISO 9001 Kalite Sistemi',
    description: 'ISO 9001 kalite yönetim sistemi ile standardize edilmiş hizmet kalitesi.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop',
    icon: '🏆',
    features: [
      'ISO 9001 kalite belgesi',
      'Düzenli kalite denetimleri',
      'Müşteri geri bildirim sistemi',
      'Sürekli iyileştirme yaklaşımı',
      'Performans takip sistemi'
    ],
    stats: '4.9/5 Puan'
  }
];

export default function NedenBizPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl hover:text-amber-300 transition-colors">
                <span className="text-amber-400">✨</span> Mistik Temizlik
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white hover:text-amber-300"
                >
                  Ana Sayfa
                </Link>
                <Link
                  href="/hizmetler"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white hover:text-amber-300"
                >
                  Hizmetler
                </Link>
                <span className="px-3 py-2 rounded-md text-sm font-medium text-amber-400 bg-white/10">
                  Neden Biz?
                </span>
                <Link
                  href="/blog"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white hover:text-amber-300"
                >
                  Blog
                </Link>
                <Link
                  href="/iletisim"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white hover:text-amber-300"
                >
                  İletişim
                </Link>
              </div>
            </div>

            {/* Contact & CTA */}
            <div className="flex items-center space-x-4">
              {/* Phone Number */}
              <a 
                href="tel:02241234567" 
                className="hidden sm:flex items-center text-white hover:text-amber-300 transition-colors"
              >
                <i className="ri-phone-fill mr-2"></i>
                <span className="text-sm font-medium">0224 123 45 67</span>
              </a>
              
              {/* CTA Button */}
              <Link 
                href="/randevu"
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg transform hover:scale-105"
              >
                Randevu Al
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white hover:text-amber-300 transition-colors"
              >
                <i className={`text-xl ${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md border-t border-white/10">
              <Link 
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors text-white hover:text-amber-300"
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/hizmetler"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors text-white hover:text-amber-300"
              >
                Hizmetler
              </Link>
              <span className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-amber-400 bg-white/10">
                Neden Biz?
              </span>
              <Link 
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors text-white hover:text-amber-300"
              >
                Blog
              </Link>
              <Link 
                href="/iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors text-white hover:text-amber-300"
              >
                İletişim
              </Link>
              <div className="pt-2 mt-2 border-t border-white/10">
                <a 
                  href="tel:02241234567" 
                  className="flex items-center px-3 py-2 text-white hover:text-amber-300 transition-colors"
                >
                  <i className="ri-phone-fill mr-2"></i>
                  <span className="text-sm">0224 123 45 67</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 min-h-screen">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Neden Mistik Temizlik Tercih Edilir?
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Bursa'da 3 yıllık deneyimimiz ve 500+ mutlu müşterimizle sektörün güvenilir lideri. 
            İşte bizi farklı kılan 6 temel özellik:
          </p>
        </div>

        {/* Stats Banner */}
        <section className="py-12 bg-black/20 backdrop-blur-md border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">500+</div>
                <div className="text-white/80">Mutlu Müşteri</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">3</div>
                <div className="text-white/80">Yıl Deneyim</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">%98</div>
                <div className="text-white/80">Memnuniyet</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">4.9/5</div>
                <div className="text-white/80">Google Puan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={advantage.id} className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:bg-black/30 transition-all duration-300 group">
                  {/* Advantage Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={advantage.image} 
                      alt={advantage.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-2xl">
                      {advantage.icon}
                    </div>
                    <div className="absolute bottom-4 right-4 text-white">
                      <div className="text-sm font-semibold bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        {advantage.stats}
                      </div>
                    </div>
                  </div>

                  {/* Advantage Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {advantage.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {advantage.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start text-sm text-white/80">
                          <span className="text-amber-400 mr-3 mt-1 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-black/20 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Müşterilerimiz Ne Diyor?
              </h2>
              <p className="text-xl text-white/80">
                Gerçek müşteri deneyimleri ve değerlendirmeleri
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="flex text-amber-400 text-xl mb-4 justify-center">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-white/80 mb-4 italic">
                  "Mistik Temizlik ekibi gerçekten profesyonel. Evimiz tertemiz oluyor ve çok güvenilirler."
                </p>
                <div className="text-white font-semibold">Ayşe D.</div>
                <div className="text-white/60 text-sm">Osmangazi, Bursa</div>
              </div>
              
              <div className="text-center p-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="flex text-amber-400 text-xl mb-4 justify-center">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-white/80 mb-4 italic">
                  "Ofisimizi düzenli temizlettiriyoruz. Zamanında geliyorlar ve işlerini mükemmel yapıyorlar."
                </p>
                <div className="text-white font-semibold">Mehmet K.</div>
                <div className="text-white/60 text-sm">Nilüfer, Bursa</div>
              </div>
              
              <div className="text-center p-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl">
                <div className="flex text-amber-400 text-xl mb-4 justify-center">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-white/80 mb-4 italic">
                  "Taşınma sonrası derin temizlik yaptırdık. Sonuç beklentimizi aştı, kesinlikle tavsiye ederim."
                </p>
                <div className="text-white font-semibold">Fatma Y.</div>
                <div className="text-white/60 text-sm">Yıldırım, Bursa</div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Sertifikalar ve Belgeler
              </h2>
              <p className="text-xl text-white/80">
                Güvenilirliğimizi belgeleyen sertifikalar
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'ISO 9001', desc: 'Kalite Yönetim Sistemi' },
                { name: 'Sigorta', desc: '5M₺ Sorumluluk Sigortası' },
                { name: 'Sağlık', desc: 'Sağlık Bakanlığı Onayı' },
                { name: 'TOBB', desc: 'Ticaret Odası Üyelik' }
              ].map((cert, index) => (
                <div key={index} className="text-center p-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl hover:shadow-lg hover:bg-black/30 transition-all">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                  <p className="text-sm text-white/75">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black/20 backdrop-blur-md border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hemen Randevu Alın!
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Farkımızı yaşayın! Profesyonel temizlik hizmetimiz için bugün randevu alın.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="tel:02241234567"
                className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg inline-flex items-center"
              >
                <i className="ri-phone-fill mr-2"></i>
                0224 123 45 67
              </a>
              
              <Link 
                href="/randevu"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg transform hover:scale-105 inline-flex items-center"
              >
                <i className="ri-calendar-check-line mr-2"></i>
                Online Randevu
              </Link>
            </div>
            
            <div className="text-white/85 text-sm">
              <p>⚡ Aynı gün hizmet • 💳 Esnek ödeme • 🎯 Özel indirimler</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 