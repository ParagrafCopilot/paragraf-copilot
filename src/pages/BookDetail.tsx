import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { getBookById, formatPrice, books } from '@/lib/books-data';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft, ShoppingCart, BookOpen, Lock } from 'lucide-react';
import { BookCarousel } from '@/components/home/BookCarousel';

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const book = getBookById(id || '');

  if (!book) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Buku tidak ditemukan</h1>
          <Link to="/products">
            <Button>Kembali ke Katalog</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Get related books (same category, excluding current book)
  const relatedBooks = books
    .filter(b => b.category === book.category && b.id !== book.id)
    .slice(0, 5);

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Back Button */}
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Katalog</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Book Cover */}
          <div className="relative">
            <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-card-hover max-w-md mx-auto lg:mx-0">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {book.isBestseller && (
                <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                  Bestseller
                </span>
              )}
              {book.isNew && (
                <span className="bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full">
                  Baru
                </span>
              )}
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                {book.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
                {book.title}
              </h1>
              <p className="text-lg text-muted-foreground">oleh {book.author}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.floor(book.rating)
                        ? 'fill-primary text-primary'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{book.rating}</span>
              <span className="text-muted-foreground">(128 ulasan)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">
                {formatPrice(book.price)}
              </span>
              {book.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(book.originalPrice)}
                  </span>
                  <span className="bg-destructive/10 text-destructive text-sm font-semibold px-2 py-1 rounded">
                    {Math.round((1 - book.price / book.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Synopsis */}
            <div className="bg-secondary/50 rounded-xl p-6">
              <h2 className="font-serif text-xl font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Sinopsis
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {book.synopsis}
              </p>
            </div>

            {/* Locked Content Preview */}
            <div className="border-2 border-dashed border-border rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Baca Selengkapnya</h3>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {book.fullDescription}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Untuk membaca konten lengkap buku ini, silakan lakukan pembelian terlebih dahulu.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="flex-1 rounded-full bg-primary hover:bg-primary/90"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Beli Sekarang
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1 rounded-full border-primary text-primary hover:bg-primary/10"
              >
                Tambah ke Keranjang
              </Button>
            </div>
          </div>
        </div>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div className="mt-16">
            <BookCarousel title="Buku Serupa" books={relatedBooks} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookDetail;
