import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import banner1 from '@/assets/banner-1.jpg';
import banner2 from '@/assets/banner-2.jpg';
import banner3 from '@/assets/banner-3.jpg';
import banner4 from '@/assets/banner-4.png';
import banner5 from '@/assets/banner-5.png';
import banner6 from '@/assets/banner-6.png';

const banners = [
  {
    id: 1,
    image: banner1,
    title: 'Jelajahi Dunia Melalui Kata',
    subtitle: 'Temukan ribuan buku berkualitas untuk memperkaya wawasan Anda',
    cta: 'Mulai Membaca',
    link: '/products'
  },
  {
    id: 2,
    image: banner2,
    title: 'Koleksi Buku Terbaru',
    subtitle: 'Dapatkan buku-buku terbaru dengan harga spesial',
    cta: 'Lihat Koleksi',
    link: '/products?filter=new'
  },
  {
    id: 3,
    image: banner3,
    title: 'Baca Kapan Saja, Di Mana Saja',
    subtitle: 'Akses perpustakaan digital terlengkap di Indonesia',
    cta: 'Pelajari Lebih',
    link: '/about'
  },
  {
    id: 4,
    image: banner4,
    title: 'Meet The Founders',
    subtitle: 'Nathannael Wijaya & Idris Iskandar - Visionary minds behind PARAGRAF',
    cta: 'Tentang Kami',
    link: '/about'
  },
  {
    id: 5,
    image: banner5,
    title: 'Ayah Itu Apa?',
    subtitle: 'Coming Soon 2026 - Kisah hangat tentang makna keluarga',
    cta: 'Lihat Detail',
    link: '/products'
  },
  {
    id: 6,
    image: banner6,
    title: 'Petualangan Ke Dunia Lain',
    subtitle: 'Coming Soon 2026 - Petualangan fantasi yang memukau',
    cta: 'Lihat Detail',
    link: '/products'
  }
];

export function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section 
      className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div 
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="min-w-full h-full relative flex-shrink-0"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-xl space-y-4 md:space-y-6 animate-fade-in">
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    {banner.title}
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    {banner.subtitle}
                  </p>
                  <Link to={banner.link}>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 mt-2"
                    >
                      {banner.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="carousel-btn left-4"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="carousel-btn right-4"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-8' 
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
