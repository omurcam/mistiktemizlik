'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function RandevuPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Ev Temizliği',
    'Ofis Temizliği',
    'Derin Temizlik',
    'Cam Temizliği',
    'Halı/Koltuk Temizliği',
    'Taşınma Temizliği',
    'Mutfak Temizliği',
    'Banyo Temizliği'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16 bg-cream-light">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-natural-charcoal-800 mb-4">Randevu Al</h1>
            <p className="text-xl text-natural-charcoal-600">Hızlı ve kolay randevu sistemi ile temizlik hizmetinizi planlayın</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="card-natural rounded-3xl p-8 shadow-xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-natural-charcoal-700 mb-2">Ad Soyad *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-natural-gray-200 focus:border-natural-sage-400 focus:outline-none transition-colors bg-white"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-natural-charcoal-700 mb-2">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-natural-gray-200 focus:border-natural-sage-400 focus:outline-none transition-colors bg-white"
                        placeholder="0555 123 45 67"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-natural-charcoal-700 mb-2">E-posta</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-natural-gray-200 focus:border-natural-sage-400 focus:outline-none transition-colors bg-white"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-natural-charcoal-700 mb-2">Hizmet Türü *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-natural-gray-200 focus:border-natural-sage-400 focus:outline-none transition-colors cursor-pointer bg-white"
                    >
                      <option value="">Hizmet Seçiniz</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-natural-charcoal-700 mb-2">Tarih *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-2xl border border-natural-gray-200 focus:border-natural-sage-400 focus:outline-none transition-colors cursor-pointer bg-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-natural-charcoal-700 mb-2">Saat *</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-natural-gray-200 focus:border-natural-sage-400 focus:outline-none transition-colors cursor-pointer bg-white"
                      >
                        <option value="">Saat Seçiniz</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-natural-charcoal-700 mb-2">Adres *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 rounded-2xl border border-natural-gray-200 focus:border-natural-sage-400 focus:outline-none transition-colors resize-none bg-white"
                      placeholder="Detaylı adres bilgisi"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-natural-charcoal-700 mb-2">Ek Notlar</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-2xl border border-natural-gray-200 focus:border-natural-sage-400 focus:outline-none transition-colors resize-none bg-white"
                      placeholder="Varsa özel istekleriniz veya notlarınız"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-natural text-white py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl cursor-pointer'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        Randevu Al
                        <i className="ri-send-plane-fill ml-2"></i>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 icon-sage rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-check-line text-white text-3xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-natural-charcoal-800 mb-4">
                    Randevunuz Alındı!
                  </h2>
                  <p className="text-natural-charcoal-600 mb-8">
                    En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                  <Link href="/" className="btn-natural text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all inline-block">
                    Ana Sayfaya Dön
                  </Link>
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="card-natural rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-natural-charcoal-800 mb-6">Randevu Bilgileri</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-natural-sage-100 rounded-2xl flex items-center justify-center mr-4">
                      <i className="ri-phone-fill text-natural-sage-600"></i>
                    </div>
                    <div>
                      <p className="text-natural-charcoal-600 text-sm">Telefon</p>
                      <p className="text-natural-charcoal-800 font-semibold">0224 123 45 67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-natural-gold-100 rounded-2xl flex items-center justify-center mr-4">
                      <i className="ri-mail-fill text-natural-gold-600"></i>
                    </div>
                    <div>
                      <p className="text-natural-charcoal-600 text-sm">E-posta</p>
                      <p className="text-natural-charcoal-800 font-semibold">info@mistiktemizlik.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-natural-sage-100 rounded-2xl flex items-center justify-center mr-4">
                      <i className="ri-map-pin-fill text-natural-sage-600"></i>
                    </div>
                    <div>
                      <p className="text-natural-charcoal-600 text-sm">Adres</p>
                      <p className="text-natural-charcoal-800 font-semibold">Osmangazi, Bursa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-natural-gold-100 rounded-2xl flex items-center justify-center mr-4">
                      <i className="ri-time-fill text-natural-gold-600"></i>
                    </div>
                    <div>
                      <p className="text-natural-charcoal-600 text-sm">Çalışma Saatleri</p>
                      <p className="text-natural-charcoal-800 font-semibold">08:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Online Appointment */}
              <div className="card-natural rounded-3xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-natural-charcoal-800 mb-4">Neden Mistik Temizlik?</h3>
                <ul className="space-y-3 text-natural-charcoal-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-natural-sage-600 mt-1 mr-3"></i>
                    <span className="text-natural-charcoal-600">7/24 randevu alabilirsiniz</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-natural-sage-600 mt-1 mr-3"></i>
                    <span className="text-natural-charcoal-600">Hızlı ve kolay işlem</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-natural-sage-600 mt-1 mr-3"></i>
                    <span className="text-natural-charcoal-600">Telefonda bekleme yok</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-natural-sage-600 mt-1 mr-3"></i>
                    <span className="text-natural-charcoal-600">Randevu onayı SMS ile</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 