import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Book, formatPrice } from '@/lib/products-data';
import { Star } from 'lucide-react';

interface BookCarouselProps {
  title: string;
  books: Book[];
}

export function BookCarousel({ title, books }: BookCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Books Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {books.map((book) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="book-card group flex-shrink-0 w-40 md:w-48"
            >
              {/* Book Cover */}
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-card group-hover:shadow-card-hover mb-3">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                {book.isBestseller && (
                  <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                    Bestseller
                  </span>
                )}
                {book.isNew && (
                  <span className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
                    Baru
                  </span>
                )}
              </div>

              {/* Book Info */}
              <div className="space-y-1">
                <h3 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-muted-foreground">{book.author}</p>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  <span className="text-xs text-muted-foreground">{book.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-primary">
                    {formatPrice(book.price)}
                  </span>
                  {book.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      {formatPrice(book.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
