import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Book, formatPrice } from '@/lib/products-data';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link
      to={`/book/${book.id}`}
      className="book-card group block"
    >
      {/* Book Cover */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-card group-hover:shadow-card-hover mb-4">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 right-2 flex justify-between">
          {book.isBestseller && (
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
              Bestseller
            </span>
          )}
          {book.isNew && (
            <span className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded ml-auto">
              Baru
            </span>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
      </div>

      {/* Book Info */}
      <div className="space-y-2">
        <span className="text-xs text-primary font-medium uppercase tracking-wider">
          {book.category}
        </span>
        <h3 className="font-serif font-semibold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground">{book.author}</p>
        
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-sm font-medium text-foreground">{book.rating}</span>
          <span className="text-xs text-muted-foreground">(128 ulasan)</span>
        </div>
        
        <div className="flex items-center gap-2 pt-1">
          <span className="font-bold text-lg text-primary">
            {formatPrice(book.price)}
          </span>
          {book.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(book.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
