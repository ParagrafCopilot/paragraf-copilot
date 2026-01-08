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
import { QrCode, CreditCard, Smartphone, CheckCircle, Copy, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    title: string;
    price: number;
    type: string;
  };
}

type PaymentMethod = 'qris' | 'dana' | 'bank';
type PaymentStatus = 'select' | 'paying' | 'success';

export function PaymentModal({ isOpen, onClose, product }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('select');
  const { toast } = useToast();

  const handleSelectMethod = (method: PaymentMethod) => {
    setPaymentMethod(method);
    setPaymentStatus('paying');
  };

  const handleConfirmPayment = () => {
    // Simulate payment confirmation
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
    setPaymentMethod(null);
    setPaymentStatus('select');
    onClose();
  };

  const getQRCodeSVG = () => {
    // Generate a simple QR code pattern (mock)
    return (
      <div className="w-48 h-48 bg-white p-3 rounded-lg mx-auto">
        <div className="w-full h-full bg-white relative overflow-hidden rounded">
          {/* Simulated QR Code Pattern */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="0" y="0" width="100" height="100" fill="white"/>
            {/* Corner squares */}
            <rect x="5" y="5" width="25" height="25" fill="black"/>
            <rect x="8" y="8" width="19" height="19" fill="white"/>
            <rect x="11" y="11" width="13" height="13" fill="black"/>
            
            <rect x="70" y="5" width="25" height="25" fill="black"/>
            <rect x="73" y="8" width="19" height="19" fill="white"/>
            <rect x="76" y="11" width="13" height="13" fill="black"/>
            
            <rect x="5" y="70" width="25" height="25" fill="black"/>
            <rect x="8" y="73" width="19" height="19" fill="white"/>
            <rect x="11" y="76" width="13" height="13" fill="black"/>
            
            {/* Random pattern for QR code effect */}
            {Array.from({ length: 50 }).map((_, i) => (
              <rect
                key={i}
                x={35 + (i % 8) * 5}
                y={35 + Math.floor(i / 8) * 5}
                width="4"
                height="4"
                fill={Math.random() > 0.5 ? 'black' : 'white'}
              />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <rect
                key={`h-${i}`}
                x={35 + (i % 5) * 5}
                y={5 + Math.floor(i / 5) * 5}
                width="4"
                height="4"
                fill={Math.random() > 0.5 ? 'black' : 'white'}
              />
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <rect
                key={`v-${i}`}
                x={5 + (i % 5) * 5}
                y={35 + Math.floor(i / 5) * 5}
                width="4"
                height="4"
                fill={Math.random() > 0.5 ? 'black' : 'white'}
              />
            ))}
          </svg>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">
            {paymentStatus === 'success' ? 'Pembayaran Berhasil!' : 'Pembayaran'}
          </DialogTitle>
          <DialogDescription>
            {paymentStatus === 'select' && 'Pilih metode pembayaran yang Anda inginkan'}
            {paymentStatus === 'paying' && 'Scan QR code untuk menyelesaikan pembayaran'}
            {paymentStatus === 'success' && 'Terima kasih atas pembelian Anda'}
          </DialogDescription>
        </DialogHeader>

        {/* Product Info */}
        <div className="bg-secondary/50 rounded-lg p-4 mb-4">
          <p className="font-semibold text-foreground">{product.title}</p>
          <p className="text-2xl font-bold text-primary mt-1">{formatPrice(product.price)}</p>
        </div>

        {/* Payment Method Selection */}
        {paymentStatus === 'select' && (
          <div className="space-y-3">
            <button
              onClick={() => handleSelectMethod('qris')}
              className="w-full flex items-center gap-4 p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <QrCode className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold">QRIS</p>
                <p className="text-sm text-muted-foreground">Scan dengan aplikasi e-wallet apapun</p>
              </div>
            </button>
            
            <button
              onClick={() => handleSelectMethod('dana')}
              className="w-full flex items-center gap-4 p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <Smartphone className="h-8 w-8 text-blue-500" />
              <div className="text-left">
                <p className="font-semibold">DANA</p>
                <p className="text-sm text-muted-foreground">Bayar dengan aplikasi DANA</p>
              </div>
            </button>
            
            <button
              onClick={() => handleSelectMethod('bank')}
              className="w-full flex items-center gap-4 p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
            >
              <CreditCard className="h-8 w-8 text-green-600" />
              <div className="text-left">
                <p className="font-semibold">Transfer Bank</p>
                <p className="text-sm text-muted-foreground">BCA, Mandiri, BNI, BRI, dll.</p>
              </div>
            </button>
          </div>
        )}

        {/* QR Code Display */}
        {paymentStatus === 'paying' && (
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
              {getQRCodeSVG()}
              <p className="text-sm text-muted-foreground mt-3">
                {paymentMethod === 'qris' && 'Scan dengan aplikasi e-wallet atau mobile banking'}
                {paymentMethod === 'dana' && 'Buka aplikasi DANA dan scan QR ini'}
                {paymentMethod === 'bank' && 'Scan dengan aplikasi mobile banking Anda'}
              </p>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>Kode Pembayaran: <span className="font-mono font-semibold">PRG-{product.id}-{Date.now().toString().slice(-6)}</span></p>
              <p className="mt-1">Berlaku hingga 24 jam</p>
            </div>

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
              onClick={() => setPaymentStatus('select')}
              className="w-full"
            >
              Pilih Metode Lain
            </Button>
          </div>
        )}

        {/* Success State */}
        {paymentStatus === 'success' && (
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <div>
              <p className="text-lg font-semibold text-foreground">Pembayaran Dikonfirmasi!</p>
              <p className="text-sm text-muted-foreground mt-1">
                {product.type === 'book' 
                  ? 'Silakan akses link di bawah untuk membaca buku Anda'
                  : 'Pesanan Anda akan segera diproses dan dikirim'}
              </p>
            </div>

            {product.type === 'book' && (
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Link Akses Buku:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-sm bg-background p-2 rounded border border-border overflow-hidden text-ellipsis">
                    https://paragraf.id/read/{product.id}
                  </code>
                  <Button size="icon" variant="outline" onClick={handleCopyLink}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              {product.type === 'book' && (
                <Button className="flex-1 rounded-full" size="lg">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Baca Sekarang
                </Button>
              )}
              <Button 
                variant="outline" 
                className="flex-1 rounded-full"
                onClick={handleClose}
              >
                Tutup
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
