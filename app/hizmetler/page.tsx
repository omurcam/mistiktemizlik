'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    id: 'ev-temizligi',
    title: 'Bursa Ev Temizliği Fiyatları - Detaylı Ev Temizliği',
    description: 'Bursa ev temizliği hizmeti arayanlar için özel fiyatlarımız! Evinizin her köşesini hijyenik standartlarda temizleyen uzman kadromuz ile yaşam kalitenizi artırın.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    icon: '🏠',
    features: [
      'Mutfak derin temizliği - ocak, fırın, buzdolabı dahil',
      'Banyo hijyen temizliği - kireç, küf ve bakterileri yok eder', 
      'Yer silme ve cam temizliği - lekesiz parlaklık',
      'Çevre dostu temizlik ürünleri - alerji dostu formüller',
      'Esnek randevu sistemi - size uygun saatlerde hizmet'
    ],
    price: '150₺ - 300₺',
    duration: '2-4 saat'
  },
  {
    id: 'ofis-temizligi',
    title: 'Bursa Ofis Temizliği Şirketleri - Kurumsal Hizmet',
    description: 'Bursa ofis temizliği şirketleri arasında lider! Osmangazi, Nilüfer ve Yıldırım ofis temizliği fiyatları ile iş verimliğinizi artıran hijyenik çalışma ortamı.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
    icon: '🏢',
    features: [
      'Masa ve sandalye dezenfeksiyonu - günlük hijyen',
      'Zemin bakımı ve halı temizliği - profesyonel ekipmanlar',
      'Tuvalet ve ortak alan hijyeni - bakteriyel temizlik',
      'Çöp boşaltma ve düzenleme - düzenli servis',
      'Kalite kontrol raporu - şeffaf hizmet takibi'
    ],
    price: '200₺ - 500₺',
    duration: '1-3 saat'
  },
  {
    id: 'derin-temizlik',
    title: 'Bursa Derin Temizlik - Kapsamlı Temizlik Hizmeti',
    description: 'Bursa profesyonel temizlik hizmeti olarak yılda 2-3 kez önerilen derin temizlik ile mekanınızı yeniden doğmuş gibi hissettirin.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop',
    icon: '✨',
    features: [
      'Kalorifer ve radyatör temizliği - enerji verimliliği',
      'Dolap içi ve raf temizliği - organize yaşam',
      'Lamba ve avize bakımı - parlak aydınlatma',
      'Kireç ve pas temizleme - özel kimyasallar',
      'Pencere çerçeve temizliği - detay işçiliği'
    ],
    price: '300₺ - 600₺',
    duration: '4-8 saat'
  },
  {
    id: 'ozel-hizmetler',
    title: 'Bursa Yerinde Halı Koltuk Yıkama & Özel Hizmetler',
    description: 'Bursa yerinde halı koltuk yıkama, inşaat sonrası temizlik firmaları, villa temizlik hizmeti ve her türlü özel durumunuz için profesyonel çözümler.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
    icon: '🔧',
    features: [
      'Taşınma temizliği - eski/yeni ev hazırlığı',
      'Halı ve koltuk yıkama - derin leke çıkarma',
      'Pencere cam temizliği - profesyonel parlaklık',
      'Bahçe düzenleme - çevre temizliği',
      'İnşaat sonrası temizlik - yapı artığı temizleme'
    ],
    price: 'Özel Fiyatlandırma',
    duration: 'Değişken'
  }
];

export default function HizmetlerPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl hover:text-natural-gold-300 transition-colors">
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
                <span className="px-3 py-2 rounded-md text-sm font-medium text-amber-400 bg-white/10">
                  Hizmetler
                </span>
                <Link
                  href="/neden-biz"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white hover:text-amber-300"
                >
                  Neden Biz?
                </Link>
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
              <span className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-amber-400 bg-white/10">
                Hizmetler
              </span>
              <Link 
                href="/neden-biz"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors text-white hover:text-amber-300"
              >
                Neden Biz?
              </Link>
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
            Bursa En İyi Temizlik Şirketi - Profesyonel Hizmetlerimiz
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Bursa temizlik firması tavsiye arayanların ilk tercihi! Osmangazi, Nilüfer ve Yıldırım'da 
            3 yıllık deneyimimiz ve 500+ mutlu müşterimizle Bursa genel temizlik hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={service.id} className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl hover:bg-black/30 transition-all duration-300 group">
                  {/* Service Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>
                    <div className="absolute bottom-4 right-4 text-white">
                      <div className="text-sm font-semibold bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, fi) => (
                        <li key={fi} className="flex items-start text-sm text-white/80">
                          <span className="text-amber-400 mr-3 mt-1 flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-amber-400">
                          {service.price}
                        </div>
                        <div className="text-sm text-white/70">
                          Ücretsiz keşif dahil
                        </div>
                      </div>
                      <Link 
                        href="/randevu"
                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg transform hover:scale-105"
                      >
                        Randevu Al
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Bursa Güvenilir Temizlik Şirketi - Neden Mistik Temizlik?
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Bursa temizlik firması tavsiye arayanların 1 numaralı tercihi! ISO 9001 belgeli temizlik firması, 
                sigortalı temizlik hizmeti ve çevre dostu temizlik ürünleri ile 3 yıllık güvence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 icon-sage rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-shield-check-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Güvenilir Hizmet</h3>
                <p className="text-white/75">
                  Sigortalı uzman ekip, kalite kontrol raporu ve %98 müşteri memnuniyeti
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 icon-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Zamanında Hizmet</h3>
                <p className="text-white/75">
                  Dakik randevu sistemi, esnek saatler ve aynı gün hizmet imkanı
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 icon-sage rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className="ri-leaf-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Çevre Dostu</h3>
                <p className="text-white/75">
                  Sağlık onaylı, dermatolog test edilmiş ve alerji dostu ürünler
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Hizmet Verdiğimiz Bölgeler
              </h2>
              <p className="text-xl text-white/80">
                Bursa genelinde hızlı ve kaliteli temizlik hizmeti
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Osmangazi', icon: '🏛️', desc: 'Merkez ilçe ve çevre mahalleler' },
                { name: 'Nilüfer', icon: '🏢', desc: 'Modern yaşam alanları ve siteler' },
                { name: 'Yıldırım', icon: '🕌', desc: 'Tarihi bölge ve eski mahalleler' },
                { name: 'Çevre İlçeler', icon: '🌆', desc: 'Büyükorhan, İnegöl ve çevre' }
              ].map((area, index) => (
                <div key={index} className="text-center p-6 bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl hover:shadow-lg hover:bg-black/30 transition-all">
                  <div className="text-4xl mb-3">{area.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{area.name}</h3>
                  <p className="text-sm text-white/75">{area.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-4 inline-flex items-center">
                <i className="ri-car-fill text-xl mr-3 text-amber-400"></i>
                <span className="font-semibold">🚗 Ücretsiz Keşif • 📞 15 Dakikada Adresinizde</span>
              </div>
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
              Profesyonel temizlik hizmetimiz için bugün randevu alın. 
              Size özel temizlik planı hazırlıyoruz.
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