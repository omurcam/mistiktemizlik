import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

const pages = [
  // Ana Giriş
  {
    leftBgImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop', // Modern temiz ev iç mekanı
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Mistik Temizlik - Bursa En İyi Temizlik Şirketi',
      description: 'Bursa temizlik firması tavsiye arayanların 1 numaralı tercihi! Osmangazi, Nilüfer, Yıldırım\'da profesyonel temizlik hizmeti.',
      subtitle: 'ISO 9001 Belgeli Temizlik Firması • Sigortalı Temizlik Hizmeti • Çevre Dostu Temizlik Ürünleri • 500+ Mutlu Müşteri',
      showCTA: true
    },
  },
  
  // Ev Temizliği
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop', // Temiz modern mutfak
    leftContent: {
      heading: 'Bursa Ev Temizliği Fiyatları - Detaylı Ev Temizliği',
      description: 'Bursa ev temizliği hizmeti arayanlar için uygun fiyatlar! Daire temizliği ve villa temizlik hizmeti ile yaşam kalitenizi artırın.',
      features: [
        '🧽 Bursa haftalık ev temizliği - düzenli periyodik hizmet',
        '🚿 Banyo temizliği yöntemleri - hijyenik temizlik çözümleri', 
        '🏠 Bursa boş ev temizliği yapanlar - taşınma öncesi/sonrası',
        '🌿 Çevre dostu temizlik ürünleri - sağlıklı aile ortamı',
        '🕒 Bursa günlük ev temizliği - esnek randevu sistemi'
      ]
    },
    rightContent: null,
  },

  // Ofis Temizliği  
  {
    leftBgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop', // Modern ofis alanı
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Bursa Ofis Temizliği Şirketleri - Kurumsal Hizmet',
      description: 'Bursa ofis temizliği şirketleri arasında lider! Osmangazi, Nilüfer, Yıldırım ofis temizliği fiyatları ile hijyenik çalışma ortamı.',
      features: [
        '💼 Ofis hijyen standartları - günlük dezenfeksiyon',
        '🏢 Bursa profesyonel temizlik hizmeti - modern ekipmanlar',
        '🚻 Tuvalet ve ortak alan temizliği - bakteriyel hijyen',
        '🗑️ Düzenli bakım programları - kaliteli servis',
        '📋 ISO 9001 belgeli temizlik firması - güvence'
      ]
    },
  },

  // Derin Temizlik
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070&auto=format&fit=crop', // Temizlik ekipmanları
    leftContent: {
      heading: 'Kapsamlı Derin Temizlik Bursa',
      description: 'Yılda 2-3 kez önerilen profesyonel derin temizlik ile mekanınızı yeniden doğmuş gibi hissettirin.',
      features: [
        '🔥 Kalorifer ve radyatör temizliği - enerji verimliliği',
        '📚 Dolap içi ve raf temizliği - organize yaşam',
        '💡 Lamba ve avize bakımı - parlak aydınlatma',
        '🧪 Kireç ve pas temizleme - özel kimyasallar',
        '🪟 Pencere çerçeve temizliği - detay işçiliği'
      ]
    },
    rightContent: null,
  },

  // Özel Hizmetler
  {
    leftBgImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop', // Temizlik malzemeleri ve ekipmanları
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Bursa İnşaat Sonrası Temizlik & Özel Hizmetler',
      description: 'Bursa inşaat sonrası temizlik firmaları, yerinde halı koltuk yıkama ve villa temizlik hizmeti için özel çözümler.',
      features: [
        '📦 Bursa cam temizliği - dış cephe temizlik hizmeti',
        '🛋️ Bursa yerinde halı koltuk yıkama - leke çıkarma teknikleri',
        '🪟 Bursa buharlı temizlik hizmeti - modern teknoloji',
        '🌳 Bursa site temizliği - apartman ortak alanları',
        '🏗️ Bursa inşaat sonrası temizlik firmaları - yapı temizliği'
      ]
    },
  },

  // Neden Biz?
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop', // Takım çalışması
    leftContent: {
      heading: 'Bursa Güvenilir Temizlik Şirketi - Neden Mistik Temizlik?',
      description: 'Bursa temizlik firması tavsiye arayanların 1 numaralı tercihi! ISO 9001 belgeli temizlik firması güvencesi.',
      features: [
        '👥 Bursa profesyonel temizlikçi - sertifikalı uzman ekip',
        '🌱 Çevre dostu temizlik ürünleri - sağlık onaylı formüller',
        '⏰ 7/24 temizlik hizmeti - dakik randevu sistemi',
        '💰 Bursa genel temizlik hizmetleri - uygun fiyat garantisi',
        '🛡️ Sigortalı temizlik hizmeti - tam güvence kapsamı'
      ]
    },
    rightContent: null,
  },

  // Hizmet Alanları
  {
    leftBgImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop', // Bursa şehir manzarası
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Bursa Geneli Hizmet Ağımız',
      description: 'Bursa\'nın tüm merkez ilçelerinde hızlı ve kaliteli temizlik hizmeti sunuyoruz.',
      features: [
        '🏛️ Osmangazi - Merkez ilçe ve çevre mahalleler',
        '🏢 Nilüfer - Modern yaşam alanları ve siteler', 
        '🕌 Yıldırım - Tarihi bölge ve eski mahalleler',
        '🌆 Büyükorhan, İnegöl - Çevre ilçe hizmetleri',
        '🚗 Ücretsiz keşif - 15 dakikada adresinizde'
      ]
    },
  },

  // Müşteri Yorumları
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2070&auto=format&fit=crop', // Mutlu aile
    leftContent: {
      heading: 'Müşteri Memnuniyet Hikayeleri',
      description: '"Mistik Temizlik sayesinde evimiz hep tertemiz kalıyor. Özellikle hassas temizlik ürünleri kullanmaları çok önemli."',
      subtitle: '- Ayşe Demir, Osmangazi Sakinleri (3 yıllık müşteri)',
      rating: 5,
      features: [
        '⭐ 4.9/5 Google değerlendirme ortalaması',
        '👥 500+ düzenli müşteri portföyü',
        '🏆 3 yıl kesintisiz hizmet deneyimi',
        '✅ %98 müşteri memnuniyet oranı',
        '🔄 %85 tekrarlayan müşteri oranı'
      ]
    },
    rightContent: null,
  },

  // Randevu ve İletişim
  {
    leftBgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop', // Temizlik sonrası mutlu ev
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Bursa Temizlik Elemanı Arıyorum - Hemen Randevu!',
      description: 'Bursa profesyonel temizlikçi ihtiyacınız için bugün randevu alın! Osmangazi, Nilüfer, Yıldırım temizlik elemanı garantisi.',
      subtitle: '⚡ Bursa aynı gün temizlik hizmeti • 💳 Esnek ödeme • 🎯 Bursa temizlik firması tavsiye',
      showContact: true,
      showCTA: true
    },
  }
];

export default function MainScrollAdventure() {
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const numOfPages = pages.length;
  const animTime = 1200;
  const scrolling = useRef(false);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const navigateUp = useCallback(() => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  }, [currentPage]);

  const navigateDown = useCallback(() => {
    if (currentPage < numOfPages) setCurrentPage(p => p + 1);
  }, [currentPage, numOfPages]);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (scrolling.current) return;
    touchEndY.current = e.changedTouches[0].clientY;
    
    const diffY = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(diffY) > minSwipeDistance) {
      scrolling.current = true;
      if (diffY > 0) {
        navigateDown();
      } else {
        navigateUp();
      }
      setTimeout(() => (scrolling.current = false), animTime);
    }
  };

  useEffect(() => {
    const handleWheel = (e: Event) => {
      if (scrolling.current) return;
      scrolling.current = true;
      const wheelEvent = e as WheelEvent;
      wheelEvent.preventDefault();
      wheelEvent.deltaY > 0 ? navigateDown() : navigateUp();
      setTimeout(() => (scrolling.current = false), animTime);
    };

    const handleKeyDown = (e: Event) => {
      if (scrolling.current) return;
      const keyEvent = e as KeyboardEvent;
      if (keyEvent.key === 'ArrowUp') {
        scrolling.current = true;
        navigateUp();
        setTimeout(() => (scrolling.current = false), animTime);
      } else if (keyEvent.key === 'ArrowDown') {
        scrolling.current = true;
        navigateDown();
        setTimeout(() => (scrolling.current = false), animTime);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigateUp, navigateDown]);

  return (
    <div className="relative overflow-hidden h-screen bg-natural-charcoal-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl hover:text-natural-gold-300 transition-colors">
                <span className="text-natural-gold-400">✨</span> Mistik Temizlik
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => setCurrentPage(1)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === 1 ? 'text-natural-gold-400 bg-white/10' : 'text-white hover:text-natural-gold-300'
                  }`}
                >
                  Ana Sayfa
                </button>
                <Link 
                  href="/hizmetler"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white hover:text-natural-gold-300"
                >
                  Hizmetler
                </Link>
                <Link 
                  href="/neden-biz"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white hover:text-natural-gold-300"
                >
                  Neden Biz?
                </Link>
                <Link 
                  href="/blog"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white hover:text-natural-gold-300"
                >
                  Blog
                </Link>
                <Link 
                  href="/iletisim"
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-white hover:text-natural-gold-300"
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
                className="hidden sm:flex items-center text-white hover:text-natural-gold-300 transition-colors"
              >
                <i className="ri-phone-fill mr-2"></i>
                <span className="text-sm font-medium">0224 123 45 67</span>
              </a>
              
              {/* CTA Button */}
              <Link 
                href="/randevu"
                className="bg-natural-gold-500 hover:bg-natural-gold-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg transform hover:scale-105"
              >
                Randevu Al
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white hover:text-natural-gold-300 transition-colors"
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
              <button 
                onClick={() => {
                  setCurrentPage(1);
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                  currentPage === 1 ? 'text-natural-gold-400 bg-white/10' : 'text-white hover:text-natural-gold-300'
                }`}
              >
                Ana Sayfa
              </button>
              <Link 
                href="/hizmetler"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors text-white hover:text-natural-gold-300"
              >
                Hizmetler
              </Link>
              <Link 
                href="/neden-biz"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors text-white hover:text-natural-gold-300"
              >
                Neden Biz?
              </Link>
              <Link 
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors text-white hover:text-natural-gold-300"
              >
                Blog
              </Link>
              <Link 
                href="/iletisim"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors text-white hover:text-natural-gold-300"
              >
                İletişim
              </Link>
              <div className="pt-2 mt-2 border-t border-white/10">
                <a 
                  href="tel:02241234567" 
                  className="flex items-center px-3 py-2 text-white hover:text-natural-gold-300 transition-colors"
                >
                  <i className="ri-phone-fill mr-2"></i>
                  <span className="text-sm">0224 123 45 67</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Indicator - Mobile Responsive */}
      <div className="fixed top-20 right-2 md:right-4 z-50 flex flex-col gap-1 md:gap-2">
        {pages.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 cursor-pointer ${
              currentPage === i + 1 
                ? 'bg-natural-gold-400 scale-110 md:scale-125 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60 hover:scale-105 md:hover:scale-110'
            }`}
            onClick={() => {
              if (!scrolling.current) {
                setCurrentPage(i + 1);
                scrolling.current = true;
                setTimeout(() => (scrolling.current = false), animTime);
              }
            }}
          />
        ))}
      </div>

      {/* Page Counter - Mobile Responsive */}
      <div className="fixed top-20 left-2 md:left-4 z-50 text-white/80 font-medium">
        <span className="text-lg md:text-2xl font-bold text-natural-gold-400">{currentPage}</span>
        <span className="text-sm md:text-lg">/{numOfPages}</span>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex justify-between items-center">
        <button
          onClick={() => {
            if (!scrolling.current && currentPage > 1) {
              navigateUp();
              scrolling.current = true;
              setTimeout(() => (scrolling.current = false), animTime);
            }
          }}
          disabled={currentPage === 1}
          className={`p-3 rounded-full backdrop-blur-md border transition-all ${
            currentPage === 1 
              ? 'bg-black/20 border-white/20 text-white/40' 
              : 'bg-black/40 border-white/40 text-white hover:bg-white/20'
          }`}
        >
          <i className="ri-arrow-up-s-line text-xl"></i>
        </button>
        
        <div className="text-white/80 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
          <span className="text-sm font-medium">{currentPage} / {numOfPages}</span>
        </div>
        
        <button
          onClick={() => {
            if (!scrolling.current && currentPage < numOfPages) {
              navigateDown();
              scrolling.current = true;
              setTimeout(() => (scrolling.current = false), animTime);
            }
          }}
          disabled={currentPage === numOfPages}
          className={`p-3 rounded-full backdrop-blur-md border transition-all ${
            currentPage === numOfPages 
              ? 'bg-black/20 border-white/20 text-white/40' 
              : 'bg-black/40 border-white/40 text-white hover:bg-white/20'
          }`}
        >
          <i className="ri-arrow-down-s-line text-xl"></i>
        </button>
      </div>

      {/* Scroll Hint - Mobile Responsive */}
      <div className="fixed bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-white/70 text-xs md:text-sm flex flex-col items-center px-2">
        <div className="animate-bounce mb-1 md:mb-2 text-base md:text-lg hidden md:block">↓</div>
        <span className="text-center hidden md:block">Kaydırın, ok tuşları veya noktalara tıklayın</span>
        <span className="text-center md:hidden text-xs">Yukarı/aşağı kaydır</span>
      </div>

      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const upOff = 'translateY(-100%)';
        const downOff = 'translateY(100%)';
        const leftTrans = isActive ? 'translateY(0)' : downOff;
        const rightTrans = isActive ? 'translateY(0)' : upOff;

        return (
          <div key={idx} className="absolute inset-0">
            {/* Left Half - Mobile Responsive */}
            <div
              className="absolute top-0 left-0 w-full md:w-1/2 h-full transition-transform duration-[1200ms] ease-in-out"
              style={{ transform: leftTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat bg-natural-sage-600"
                style={{ backgroundImage: page.leftBgImage ? `url(${page.leftBgImage})` : undefined }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white px-4 py-16 md:p-8 bg-black/60">
                  {page.leftContent && (
                    <>
                      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center drop-shadow-2xl leading-tight">
                        {page.leftContent.heading}
                      </h2>
                      <p className="text-base md:text-lg text-center max-w-sm md:max-w-lg leading-relaxed drop-shadow-lg mb-4 md:mb-6">
                        {page.leftContent.description}
                      </p>
                      {page.leftContent.subtitle && (
                        <p className="text-sm md:text-base text-center text-natural-gold-200 mb-4 md:mb-6 italic px-2">
                          {page.leftContent.subtitle}
                        </p>
                      )}
                      {page.leftContent.rating && (
                        <div className="flex text-natural-gold-400 text-xl md:text-2xl mb-4 md:mb-6">
                          {[...Array(page.leftContent.rating)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                      )}
                      {page.leftContent.features && (
                        <ul className="space-y-2 md:space-y-3 text-xs md:text-sm max-w-xs md:max-w-lg">
                          {page.leftContent.features.map((feature, fi) => (
                            <li key={fi} className="flex items-start">
                              <span className="text-natural-gold-400 mr-2 md:mr-3 mt-1 flex-shrink-0">✓</span>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Half - Mobile Responsive */}
            <div
              className="absolute top-0 left-0 md:left-1/2 w-full md:w-1/2 h-full transition-transform duration-[1200ms] ease-in-out"
              style={{ transform: rightTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat bg-natural-gold-600"
                style={{ backgroundImage: page.rightBgImage ? `url(${page.rightBgImage})` : undefined }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white px-4 py-16 md:p-8 bg-black/60">
                  {page.rightContent && (
                    <>
                      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center drop-shadow-2xl leading-tight">
                        {page.rightContent.heading}
                      </h2>
                      <p className="text-base md:text-lg text-center max-w-sm md:max-w-lg leading-relaxed drop-shadow-lg mb-4 md:mb-6">
                        {page.rightContent.description}
                      </p>
                      {page.rightContent.subtitle && (
                        <p className="text-sm md:text-base text-center text-natural-gold-200 mb-4 md:mb-6 italic px-2">
                          {page.rightContent.subtitle}
                        </p>
                      )}
                      {page.rightContent.features && (
                        <ul className="space-y-2 md:space-y-3 text-xs md:text-sm mb-6 md:mb-8 max-w-xs md:max-w-lg">
                          {page.rightContent.features.map((feature, fi) => (
                            <li key={fi} className="flex items-start">
                              <span className="text-natural-gold-400 mr-2 md:mr-3 mt-1 flex-shrink-0">✓</span>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {page.rightContent.showContact && (
                        <div className="glass-natural text-natural-charcoal-800 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center mb-4 md:mb-6 backdrop-blur-md shadow-xl">
                          <i className="ri-phone-fill text-lg md:text-xl mr-2 md:mr-3 text-natural-brown-600"></i>
                          <span className="text-base md:text-lg font-bold">0224 123 45 67</span>
                        </div>
                      )}
                      {page.rightContent.showCTA && (
                        <Link href="/randevu" className="bg-natural-gold-500 hover:bg-natural-gold-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl transition-all cursor-pointer inline-flex items-center">
                          📞 Hemen Ara & Randevu Al
                          <i className="ri-calendar-check-line ml-2"></i>
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
} 