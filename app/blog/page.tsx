'use client';

import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Tag } from 'lucide-react';
import Link from 'next/link';
import { getAllBlogPosts, getBlogPostsByCategory } from '../../data/blogData';



const categories = ["Tümü", "Ev Temizliği", "Ofis Temizliği", "Doğal Temizlik", "Derin Temizlik", "Planlama", "Mutfak", "İnşaat Sonrası", "Özel Hizmetler"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  
  const allPosts = getAllBlogPosts();
  const filteredPosts = getBlogPostsByCategory(selectedCategory);

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
              <span className="hidden sm:block text-amber-400 font-semibold">0530 123 45 67</span>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                Teklif Al
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Bursa Temizlik Firması
            <span className="text-amber-400 ml-3">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Bursa ev temizliği, ofis temizliği ve hijyenik temizlik çözümleri konularında uzman tavsiyeleri. 
            Ev temizliği ipuçları, doğal temizlik yöntemleri ve profesyonel temizlik hizmeti rehberleri.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-amber-400/50 transition-all duration-300 group">
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="text-amber-400 hover:text-amber-300 font-medium flex items-center space-x-1 transition-colors duration-200">
                      <span>Devamını Oku</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-amber-400/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Bursa Temizlik Firması Tavsiye ve İpuçlarını Kaçırmayın!
              </h3>
              <p className="text-gray-300 mb-6">
                Ev temizliği ipuçları, doğal temizlik yöntemleri ve profesyonel temizlik hizmeti 
                güncellemelerinden haberdar olmak için e-posta listemize katılın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
                />
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <p className="text-gray-400">📞 0530 123 45 67</p>
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