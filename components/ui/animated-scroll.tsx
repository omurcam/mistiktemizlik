import React, { useState, useEffect, useRef, useCallback } from 'react';

const pages = [
  {
    leftBgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Mistik Temizlik',
      description: 'Bursa\'nın En Güvenilir Temizlik Hizmeti - Evinizi Pırıl Pırıl Yapıyoruz!',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    leftContent: {
      heading: 'Profesyonel Ekip',
      description: 'Uzman temizlik teknisyenlerimiz ile hijyenik ve güvenli temizlik hizmeti sunuyoruz.',
    },
    rightContent: null,
  },
  {
    leftBgImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Ev Temizliği',
      description: 'Düzenli veya tek seferlik ev temizlik hizmetleri ile yaşam alanınızı tertemiz tutuyoruz.',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop',
    leftContent: {
      heading: 'Ofis Temizliği',
      description: 'İş yerinizin hijyenik kalması için profesyonel ofis temizlik çözümleri sunuyoruz.',
    },
    rightContent: null,
  },
  {
    leftBgImage: 'https://images.unsplash.com/photo-1556909114-4b3dd4d61c6b?q=80&w=2070&auto=format&fit=crop',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Hemen Başlayın!',
      description: (
        <>
          Randevu almak için <br />
          <span className="text-lg font-bold">0224 123 45 67</span>
        </>
      ),
    },
  },
];

export default function ScrollAdventure() {
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = pages.length;
  const animTime = 1000;
  const scrolling = useRef(false);

  const navigateUp = useCallback(() => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  }, [currentPage]);

  const navigateDown = useCallback(() => {
    if (currentPage < numOfPages) setCurrentPage(p => p + 1);
  }, [currentPage, numOfPages]);

  useEffect(() => {
    const handleWheel = (e: Event) => {
      if (scrolling.current) return;
      scrolling.current = true;
      const wheelEvent = e as WheelEvent;
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

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigateUp, navigateDown]);

  return (
    <div className="relative overflow-hidden h-screen bg-natural-charcoal-900">
      {/* Progress Indicator */}
      <div className="absolute top-4 right-4 z-50 flex flex-col gap-2">
        {pages.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentPage === i + 1 
                ? 'bg-natural-gold-400 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-white/70 text-sm flex flex-col items-center">
        <div className="animate-bounce mb-2">↓</div>
        <span>Kaydırın veya ok tuşlarını kullanın</span>
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
            {/* Left Half */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[1000ms] ease-in-out"
              style={{ transform: leftTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat bg-natural-sage-600"
                style={{ backgroundImage: page.leftBgImage ? `url(${page.leftBgImage})` : undefined }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white p-8 bg-black/40">
                  {page.leftContent && (
                    <>
                      <h2 className="text-4xl font-bold mb-6 text-center drop-shadow-2xl">
                        {page.leftContent.heading}
                      </h2>
                      <p className="text-xl text-center max-w-md leading-relaxed drop-shadow-lg">
                        {page.leftContent.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div
              className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[1000ms] ease-in-out"
              style={{ transform: rightTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat bg-natural-gold-600"
                style={{ backgroundImage: page.rightBgImage ? `url(${page.rightBgImage})` : undefined }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white p-8 bg-black/40">
                  {page.rightContent && (
                    <>
                      <h2 className="text-4xl font-bold mb-6 text-center drop-shadow-2xl">
                        {page.rightContent.heading}
                      </h2>
                      {typeof page.rightContent.description === 'string' ? (
                        <p className="text-xl text-center max-w-md leading-relaxed drop-shadow-lg">
                          {page.rightContent.description}
                        </p>
                      ) : (
                        <div className="text-xl text-center max-w-md leading-relaxed drop-shadow-lg">
                          {page.rightContent.description}
                        </div>
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