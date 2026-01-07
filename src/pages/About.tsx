import { Layout } from '@/components/layout/Layout';
import { BookOpen, Users, Target, Heart, Award, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              Tentang Kami
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              PARAGRAF — Jendela Ilmu untuk Semua
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              PARAGRAF hadir sebagai platform membaca dan membeli buku online yang berkomitmen 
              untuk menyebarkan ilmu pengetahuan dan literasi ke seluruh penjuru Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-bold mb-4">Visi Kami</h2>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi platform literasi digital terdepan di Indonesia yang mampu menjangkau 
                seluruh lapisan masyarakat, dari Sabang sampai Merauke. Kami percaya bahwa 
                setiap orang berhak mendapatkan akses terhadap buku-buku berkualitas yang 
                dapat memperkaya pengetahuan dan mengembangkan potensi diri.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-bold mb-4">Misi Kami</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  Menyediakan akses mudah dan terjangkau ke ribuan buku berkualitas
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  Mendukung penulis lokal dengan platform yang profesional
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  Membangun komunitas pembaca yang aktif dan saling mendukung
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  Mengedukasi masyarakat tentang pentingnya membaca
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why PARAGRAF */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa PARAGRAF Dibuat?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami melihat tantangan dan peluang untuk meningkatkan literasi di Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Akses Terbatas</h3>
              <p className="text-muted-foreground">
                Banyak daerah di Indonesia masih memiliki akses terbatas terhadap buku-buku berkualitas. 
                PARAGRAF hadir untuk menjembatani kesenjangan ini dengan platform digital yang bisa 
                diakses dari mana saja.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Era Digital</h3>
              <p className="text-muted-foreground">
                Dengan semakin banyaknya masyarakat yang terhubung dengan internet, 
                kami melihat kesempatan besar untuk menghadirkan perpustakaan digital 
                yang lengkap dan mudah digunakan.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Dukungan Penulis</h3>
              <p className="text-muted-foreground">
                Indonesia memiliki banyak penulis berbakat yang membutuhkan platform untuk 
                menjangkau pembaca. PARAGRAF memberikan ruang bagi mereka untuk berkarya 
                dan mendapatkan apresiasi yang layak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-muted-foreground">
              Prinsip yang menjadi fondasi dalam setiap langkah PARAGRAF
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Profesionalitas</h3>
              <p className="text-sm text-muted-foreground">
                Menjaga standar kualitas tinggi dalam setiap layanan
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
              <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Dedikasi</h3>
              <p className="text-sm text-muted-foreground">
                Berkomitmen penuh untuk kemajuan literasi Indonesia
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
              <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Inovasi</h3>
              <p className="text-sm text-muted-foreground">
                Terus berinovasi untuk pengalaman membaca terbaik
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Inklusivitas</h3>
              <p className="text-sm text-muted-foreground">
                Terbuka untuk semua kalangan tanpa terkecuali
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-20 gradient-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-serif text-2xl md:text-3xl text-primary-foreground italic leading-relaxed">
              "Satu paragraf dapat mengubah pemikiran. Seribu paragraf dapat mengubah dunia."
            </blockquote>
            <p className="text-primary-foreground/80 mt-6">— Tim PARAGRAF</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
