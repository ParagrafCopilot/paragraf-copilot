import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/products-data';
import { CheckCircle, Copy, ExternalLink, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    title: string;
    price: number;
    type: string;
    image?: string;
  };
}

type PaymentStatus = 'paying' | 'success';

export function PaymentModal({ isOpen, onClose, product }: PaymentModalProps) {
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('paying');
  const { toast } = useToast();

  const handleConfirmPayment = () => {
    setPaymentStatus('success');
  };

  const handleCopyLink = () => {
    const link = `https://paragraf.id/read/${product.id}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Link Disalin!",
      description: "Link akses produk telah disalin ke clipboard.",
    });
  };

  const handleClose = () => {
    setPaymentStatus('paying');
    onClose();
  };

  // Static QR pattern that doesn't change on re-renders
  const qrPattern = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0],
    [0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1],
    [1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0],
    [0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1],
    [1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0],
    [0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1],
    [1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0],
    [1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0],
    [1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0],
  ];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl text-center">
            {paymentStatus === 'success' ? '✓ Pembayaran Berhasil!' : 'Scan untuk Bayar'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {paymentStatus === 'paying' && 'Scan QR code di bawah dengan aplikasi e-wallet atau mobile banking'}
            {paymentStatus === 'success' && 'Terima kasih atas pembelian Anda'}
          </DialogDescription>
        </DialogHeader>

        {/* QR Code Display - Direct View */}
        {paymentStatus === 'paying' && (
          <div className="space-y-4">
            {/* Product Summary */}
            <div className="flex items-center gap-4 bg-secondary/50 rounded-lg p-3">
              {product.image && (
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-16 h-20 object-cover rounded-md shadow-sm"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">{product.title}</p>
                <p className="text-xl font-bold text-primary">{formatPrice(product.price)}</p>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-white p-4 rounded-xl mx-auto w-fit shadow-lg">
              <div className="w-52 h-52 relative">
                <svg viewBox="0 0 21 21" className="w-full h-full">
                  {qrPattern.map((row, y) =>
                    row.map((cell, x) =>
                      cell === 1 ? (
                        <rect
                          key={`${x}-${y}`}
                          x={x}
                          y={y}
                          width="1"
                          height="1"
                          fill="black"
                        />
                      ) : null
                    )
                  )}
                </svg>
                {/* Center logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-1 rounded">
                    <span className="text-xs font-bold text-primary">PARAGRAF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full">
                <span className="text-sm text-muted-foreground">Total:</span>
                <span className="font-bold text-primary">{formatPrice(product.price)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Gunakan QRIS, DANA, GoPay, OVO, atau Mobile Banking
              </p>
              <p className="text-xs text-muted-foreground font-medium">
                Kode: PRG-{product.id.slice(0, 8).toUpperCase()}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <Button 
                onClick={handleConfirmPayment} 
                className="w-full rounded-full"
                size="lg"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Saya Sudah Bayar
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleClose}
                className="w-full text-muted-foreground"
              >
                Batal
              </Button>
            </div>
          </div>
        )}

        {/* Success State */}
        {paymentStatus === 'success' && (
          <div className="text-center space-y-5">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            
            <div>
              <p className="text-lg font-semibold text-foreground">{product.title}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {product.type === 'book' 
                  ? 'Akses buku digital Anda di link berikut'
                  : 'Pesanan Anda akan segera diproses'}
              </p>
            </div>

            {product.type === 'book' && (
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 space-y-3">
                <p className="text-sm font-medium text-foreground">Link Akses Buku:</p>
                <div className="flex items-center gap-2 bg-background rounded-lg p-2 border border-border">
                  <code className="flex-1 text-xs sm:text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                    paragraf.id/read/{product.id}
                  </code>
                  <Button size="icon" variant="ghost" onClick={handleCopyLink} className="shrink-0">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2 pt-2">
              {product.type === 'book' && (
                <Button className="w-full rounded-full" size="lg">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Baca Sekarang
                </Button>
              )}
              <Button 
                variant="outline" 
                className="w-full rounded-full"
                onClick={handleClose}
              >
                Selesai
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
