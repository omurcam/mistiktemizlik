'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { BlogPost } from '../../../data/blogData';

// Markdown content component
function MarkdownContent({ content }: { content: string }) {
  // Simple markdown parser for headings, paragraphs, lists, and bold text
  const parseMarkdown = (text: string) => {
    return text
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mb-4 mt-6">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-white mb-3 mt-4">$1</h3>')
      .replace(/^\* (.*$)/gm, '<li class="text-gray-300 mb-2">• $1</li>')
      .replace(/^\- (.*$)/gm, '<li class="text-gray-300 mb-2">• $1</li>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-400 font-semibold">$1</strong>')
      .replace(/^([^<#\*\-\n].*)$/gm, '<p class="text-gray-300 mb-4 leading-relaxed">$1</p>')
      .replace(/```([\s\S]*?)```/g, '<div class="bg-black/30 border border-white/20 rounded-lg p-4 mb-4 font-mono text-sm text-green-400">$1</div>');
  };

  return (
    <div 
      className="prose prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
}

interface BlogPageClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPageClient({ post, relatedPosts }: BlogPageClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  return (
    <div className="relative bg-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-white font-semibold text-lg">Mistik Temizlik</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium">
                Ana Sayfa
              </Link>
              <Link href="/hizmetler" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium">
                Hizmetler
              </Link>
              <Link href="/neden-biz" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium">
                Neden Biz?
              </Link>
              <Link href="/blog" className="text-amber-400 font-medium">
                Blog
              </Link>
              <Link href="/iletisim" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium">
                İletişim
              </Link>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <span className="hidden sm:block text-amber-400 font-semibold">0224 123 45 67</span>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                Teklif Al
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back to Blog */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-200 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Blog'a Geri Dön
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} okuma</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden rounded-2xl mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center space-x-1 bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-white/20">
            <span className="text-gray-400 font-medium">Paylaş:</span>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert max-w-none">
            <MarkdownContent content={post.content} />
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black/20 backdrop-blur-md border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Profesyonel Temizlik Hizmeti İhtiyacınız Var mı?
          </h3>
          <p className="text-gray-300 mb-6">
            Bursa'nın en güvenilir temizlik firması ile temiz ve sağlıklı yaşam alanları oluşturun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:02241234567"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Hemen Arayın: 0224 123 45 67
            </a>
            <Link 
              href="/iletisim"
              className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Online Randevu
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              İlginizi Çekebilecek Diğer Yazılar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-amber-400/50 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-200 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-white font-semibold text-lg">Mistik Temizlik</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Bursa'da 3 yıldır güvenilir temizlik hizmetleri sunuyoruz. 
                Doğal ürünler ve profesyonel ekibimizle yaşam alanlarınızı sağlıklı tutuyoruz.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h4>
              <div className="space-y-2">
                <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 block">Ana Sayfa</Link>
                <Link href="/hizmetler" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 block">Hizmetler</Link>
                <Link href="/neden-biz" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 block">Neden Biz?</Link>
                <Link href="/blog" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 block">Blog</Link>
                <Link href="/iletisim" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 block">İletişim</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">İletişim</h4>
              <div className="space-y-2">
                <p className="text-gray-400">📞 0224 123 45 67</p>
                <p className="text-gray-400">✉️ info@mistiktemizlik.com</p>
                <p className="text-gray-400">📍 Bursa, Türkiye</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Mistik Temizlik. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 