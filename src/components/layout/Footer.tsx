import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import logoIcon from '@/assets/logo-icon.png';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logoIcon} 
                alt="Paragraf" 
                className="h-10 w-auto dark:invert" 
              />
              <span className="logo-text text-xl text-foreground tracking-[0.3em] font-light">
                PARAGRAF
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Platform membaca dan membeli buku online terpercaya. 
              Menyediakan akses ke ribuan buku berkualitas untuk memperluas wawasan Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Katalog Buku
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=fiksi" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Fiksi
                </Link>
              </li>
              <li>
                <Link to="/products?category=bisnis" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Bisnis
                </Link>
              </li>
              <li>
                <Link to="/products?category=pengembangan-diri" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Pengembangan Diri
                </Link>
              </li>
              <li>
                <Link to="/products?category=sejarah" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Sejarah
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Jl. Cijangkar, RT.04/RW.10, Nanggeleng, Kec. Citamiang, Kota Sukabumi, Jawa Barat 43145</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/6281585845825" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span>0815-8584-5825</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:paragrafkami@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span>paragrafkami@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/Paragraf_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-4 w-4 text-primary" />
                  <span>@Paragraf_</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PARAGRAF. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
