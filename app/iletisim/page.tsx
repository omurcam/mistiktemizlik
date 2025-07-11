'use client';

import Link from 'next/link';
import { useState } from 'react';

const contactInfo = [
  {
    id: 'telefon',
    title: 'Telefon İletişim',
    icon: '📞',
    items: [
      { label: 'Ana Hat', value: '0224 123 45 67', link: 'tel:02241234567' },
      { label: 'WhatsApp', value: '0533 987 65 43', link: 'https://wa.me/905339876543' },
      { label: 'Acil Durum', value: '0532 456 78 90', link: 'tel:05324567890' }
    ]
  },
  {
    id: 'email',
    title: 'E-posta İletişim',
    icon: '📧',
    items: [
      { label: 'Genel', value: 'info@mistiktemizlik.com', link: 'mailto:info@mistiktemizlik.com' },
      { label: 'Randevu', value: 'randevu@mistiktemizlik.com', link: 'mailto:randevu@mistiktemizlik.com' },
      { label: 'Destek', value: 'destek@mistiktemizlik.com', link: 'mailto:destek@mistiktemizlik.com' }
    ]
  },
  {
    id: 'adres',
    title: 'Ofis Adresi',
    icon: '📍',
    items: [
      { label: 'Adres', value: 'Osmangazi Mah. Temizlik Sok. No:25 Osmangazi/BURSA', link: null },
      { label: 'Posta Kodu', value: '16200', link: null },
      { label: 'Bölge', value: 'Osmangazi, Bursa', link: null }
    ]
  },
  {
    id: 'saatler',
    title: 'Çalışma Saatleri',
    icon: '🕒',
    items: [
      { label: 'Hafta İçi', value: '08:00 - 18:00', link: null },
      { label: 'Cumartesi', value: '09:00 - 17:00', link: null },
      { label: 'Pazar', value: '10:00 - 16:00 (Acil)', link: null }
    ]
  }
];

const serviceAreas = [
  { name: 'Osmangazi', districts: ['Merkez', 'Doburca', 'Hamitler', 'Kükürtlü'], icon: '🏛️' },
  { name: 'Nilüfer', districts: ['Görükle', 'Ertuğrul', 'Özlüce', 'Beşevler'], icon: '🏢' },
  { name: 'Yıldırım', districts: ['Mimar Sinan', 'Yıldırım', 'Kayhan', 'Ulubatlı'], icon: '🕌' },
  { name: 'Diğer', districts: ['İnegöl', 'Büyükorhan', 'Kestel', 'Gürsu'], icon: '🌆' }
];

export default function IletisimPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Mesajınız alınmıştır! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

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
                <span className="px-3 py-2 rounded-md text-sm font-medium text-amber-400 bg-white/10">
                  İletişim
                </span>
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
              <span className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-amber-400 bg-white/10">
                İletişim
              </span>
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
            Bursa Temizlik Elemanı Arıyorum - İletişim & Randevu
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Bursa profesyonel temizlikçi arayan müşterilerimiz için 7/24 hizmet hattı! 
            Osmangazi, Nilüfer ve Yıldırım temizlik elemanı ihtiyacınız için bizimle iletişime geçin.
          </p>
        </div>

        {/* Quick Contact Banner */}
        <section className="py-12 bg-black/20 backdrop-blur-md border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <a href="tel:02241234567" className="group">
                <div className="bg-amber-500 hover:bg-amber-600 text-white p-6 rounded-2xl transition-all transform group-hover:scale-105">
                  <i className="ri-phone-fill text-3xl mb-3"></i>
                  <div className="text-lg font-bold">Hemen Arayın</div>
                  <div className="text-sm opacity-90">0224 123 45 67</div>
                </div>
              </a>
              
              <a href="https://wa.me/905339876543" className="group" target="_blank">
                <div className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-2xl transition-all transform group-hover:scale-105">
                  <i className="ri-whatsapp-fill text-3xl mb-3"></i>
                  <div className="text-lg font-bold">WhatsApp</div>
                  <div className="text-sm opacity-90">Hızlı Mesaj</div>
                </div>
              </a>
              
              <Link href="/randevu" className="group">
                <div className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-2xl transition-all transform group-hover:scale-105">
                  <i className="ri-calendar-check-fill text-3xl mb-3"></i>
                  <div className="text-lg font-bold">Online Randevu</div>
                  <div className="text-sm opacity-90">Kolay Rezervasyon</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Information Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {contactInfo.map((info) => (
                <div key={info.id} className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:shadow-xl hover:bg-black/30 transition-all">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-4">{info.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{info.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {info.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-white/70">{item.label}:</span>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                            target={item.link.startsWith('http') ? '_blank' : '_self'}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-white font-medium">{item.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Service Areas */}
        <section className="py-16 bg-black/20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Hızlı İletişim Formu
                </h2>
                <p className="text-white/80 mb-8">
                  Formu doldurun, size 1 saat içinde dönüş yapalım.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="0xxx xxx xx xx"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Hizmet Türü
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="">Hizmet seçiniz</option>
                      <option value="ev-temizligi">Ev Temizliği</option>
                      <option value="ofis-temizligi">Ofis Temizliği</option>
                      <option value="derin-temizlik">Derin Temizlik</option>
                      <option value="ozel-hizmet">Özel Hizmet</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                      placeholder="Lütfen ihtiyacınızı detaylı olarak yazın..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    Mesaj Gönder
                  </button>
                </form>
              </div>

              {/* Service Areas */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Hizmet Verdiğimiz Bölgeler
                </h2>
                <p className="text-white/80 mb-8">
                  Bursa genelinde hızlı ve kaliteli temizlik hizmeti sunuyoruz.
                </p>
                
                <div className="space-y-6">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-2xl mr-3">{area.icon}</div>
                        <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {area.districts.map((district, di) => (
                          <div key={di} className="text-white/70 text-sm">
                            • {district}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-amber-500/20 border border-amber-400/30 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <i className="ri-time-fill text-amber-400 text-xl mr-3"></i>
                    <h4 className="text-lg font-semibold text-white">Hızlı Servis</h4>
                  </div>
                  <p className="text-white/80 text-sm">
                    🚗 Ücretsiz keşif: 15 dakikada adresinizde<br/>
                    ⚡ Aynı gün hizmet imkanı<br/>
                    📞 7/24 acil durum desteği
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black/20 backdrop-blur-md border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hemen Arayın!
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Profesyonel temizlik hizmetimiz için hemen iletişime geçin. 
              Size en uygun çözümü birlikte bulalım.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="tel:02241234567"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg transform hover:scale-105 inline-flex items-center"
              >
                <i className="ri-phone-fill mr-2"></i>
                0224 123 45 67
              </a>
              
              <a 
                href="https://wa.me/905339876543"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-lg transform hover:scale-105 inline-flex items-center"
              >
                <i className="ri-whatsapp-fill mr-2"></i>
                WhatsApp
              </a>
            </div>
            
            <div className="text-white/85 text-sm">
              <p>⚡ Anında yanıt • 🚗 Ücretsiz keşif • 💳 Esnek ödeme</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 