import { Layout } from '@/components/layout/Layout';
import { HeroBanner } from '@/components/home/HeroBanner';
import { BookCarousel } from '@/components/home/BookCarousel';
import { getBestsellers, getNewArrivals, books } from '@/lib/books-data';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, Users, Globe } from 'lucide-react';

const Index = () => {
  const bestsellers = getBestsellers();
  const newArrivals = getNewArrivals();

  // Fill to 10 books if needed
  const bestsellersToShow = bestsellers.length >= 10 
    ? bestsellers.slice(0, 10) 
    : [...bestsellers, ...books.filter(b => !b.isBestseller).slice(0, 10 - bestsellers.length)];
  
  const newArrivalsToShow = newArrivals.slice(0, 10);

  return (
    <Layout>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Bestsellers Section */}
      <BookCarousel title="Buku Terlaris" books={bestsellersToShow} />

      {/* Feature Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa Memilih PARAGRAF?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Platform baca buku online terpercaya dengan koleksi lengkap dan fitur-fitur unggulan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">10.000+ Buku</h3>
              <p className="text-sm text-muted-foreground">
                Koleksi buku lengkap dari berbagai genre dan kategori
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Berkualitas</h3>
              <p className="text-sm text-muted-foreground">
                Buku pilihan dengan konten berkualitas tinggi
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">50.000+ Pembaca</h3>
              <p className="text-sm text-muted-foreground">
                Komunitas pembaca aktif yang terus berkembang
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-lg mb-2">Akses 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Baca kapan saja dan di mana saja tanpa batasan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <BookCarousel title="Buku Terbaru" books={newArrivalsToShow} />

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Mulai Perjalanan Membaca Anda
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Temukan ribuan buku menarik dan perluas wawasan Anda bersama PARAGRAF
          </p>
          <Link to="/products">
            <Button 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 rounded-full px-10"
            >
              Jelajahi Katalog
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
