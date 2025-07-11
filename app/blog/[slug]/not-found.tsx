import Link from 'next/link';
import { ArrowLeft, Search, Home } from 'lucide-react';

export default function BlogNotFound() {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-amber-400 mb-4">404</h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Blog Yazısı Bulunamadı
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
          Aradığınız blog yazısı mevcut değil veya kaldırılmış olabilir. 
          Diğer yararlı yazılarımıza göz atabilirsiniz.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Blog'a Geri Dön</span>
          </Link>
          
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Ana Sayfa</span>
          </Link>
        </div>

        {/* Popular Posts Suggestion */}
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-md mx-auto">
          <div className="flex items-center space-x-2 mb-4">
            <Search className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-semibold text-white">Önerilen İçerikler</h3>
          </div>
          <div className="space-y-2 text-left">
            <Link href="/blog" className="block text-gray-300 hover:text-amber-400 transition-colors duration-200">
              • Bursa Ev Temizliği İpuçları
            </Link>
            <Link href="/blog" className="block text-gray-300 hover:text-amber-400 transition-colors duration-200">
              • Doğal Temizlik Yöntemleri
            </Link>
            <Link href="/blog" className="block text-gray-300 hover:text-amber-400 transition-colors duration-200">
              • Ofis Hijyen Standartları
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-gray-400">
          <p className="mb-2">Yardıma mı ihtiyacınız var?</p>
          <a 
            href="tel:02241234567" 
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-200"
          >
            0224 123 45 67
          </a>
        </div>
      </div>
    </div>
  );
} 