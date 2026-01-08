import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { getProductById, formatPrice, products } from '@/lib/products-data';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft, BookOpen, Lock } from 'lucide-react';
import { BookCarousel } from '@/components/home/BookCarousel';
import { PaymentModal } from '@/components/payment/PaymentModal';

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Link to="/products">
            <Button>Kembali ke Katalog</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter(b => b.category === product.category && b.id !== product.id)
    .slice(0, 5);

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Kembali ke Katalog</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative">
            <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-card-hover max-w-md mx-auto lg:mx-0">
              <img src={product.coverImage} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-4 left-4 flex gap-2">
              {product.isBestseller && (
                <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">Bestseller</span>
              )}
              {product.isNew && (
                <span className="bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full">Baru</span>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-primary font-medium uppercase tracking-wider text-sm">{product.category}</span>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">{product.title}</h1>
              {product.author && <p className="text-lg text-muted-foreground">oleh {product.author}</p>}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`h-5 w-5 ${star <= Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                ))}
              </div>
              <span className="font-semibold">{product.rating}</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="bg-destructive/10 text-destructive text-sm font-semibold px-2 py-1 rounded">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <div className="bg-secondary/50 rounded-xl p-6">
              <h2 className="font-serif text-xl font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                {product.type === 'book' ? 'Sinopsis' : 'Deskripsi'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{product.synopsis}</p>
            </div>

            {product.type === 'book' && (
              <div className="border-2 border-dashed border-border rounded-xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Baca Selengkapnya</h3>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">{product.fullDescription}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">Untuk membaca konten lengkap, silakan lakukan pembelian.</p>
                  </div>
                </div>
              </div>
            )}

            <Button size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90" onClick={() => setIsPaymentOpen(true)}>
              Beli
            </Button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <BookCarousel title="Produk Serupa" books={relatedProducts} />
          </div>
        )}
      </div>

      <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} product={product} />
    </Layout>
  );
};

export default BookDetail;
