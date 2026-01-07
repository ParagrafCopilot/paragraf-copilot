import { Layout } from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Instagram, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Hubungi Kami
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Kami Senang Mendengar dari Anda
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Punya pertanyaan, saran, atau ingin bekerja sama? 
              Jangan ragu untuk menghubungi tim PARAGRAF.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Informasi Kontak</h2>
                <p className="text-muted-foreground mb-8">
                  Hubungi kami melalui salah satu kanal di bawah ini. 
                  Tim kami siap membantu Anda dengan sepenuh hati.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Alamat</h3>
                    <p className="text-muted-foreground text-sm">
                      Jl. Cijangkar, RT.04/RW.10, Nanggeleng,<br />
                      Kec. Citamiang, Kota Sukabumi,<br />
                      Jawa Barat 43145
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/6281585845825" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                      0815-8584-5825
                    </p>
                    <span className="text-xs text-primary">Klik untuk chat langsung</span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:paragrafkami@gmail.com"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                      paragrafkami@gmail.com
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/Paragraf_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                      @Paragraf_
                    </p>
                  </div>
                </a>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Jam Operasional</h3>
                    <p className="text-muted-foreground text-sm">
                      Senin - Jumat: 09.00 - 17.00 WIB<br />
                      Sabtu: 09.00 - 14.00 WIB<br />
                      Minggu: Libur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="font-serif text-2xl font-bold mb-2">Kirim Pesan</h2>
              <p className="text-muted-foreground mb-6">
                Isi formulir di bawah dan kami akan segera menghubungi Anda.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@contoh.com"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subjek
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Topik pesan Anda"
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    required
                    rows={5}
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-full bg-primary hover:bg-primary/90"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl overflow-hidden shadow-card h-80 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5387599567665!2d106.91808397507855!3d-6.862621993128542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68311e52dc1c55%3A0x4d8f4c2e94c4d3c8!2sCitamiang%2C%20Kota%20Sukabumi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1704624000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi PARAGRAF"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
