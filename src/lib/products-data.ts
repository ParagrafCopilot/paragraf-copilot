export type ProductType = 'book' | 'stationery' | 'accessory' | 'bag' | 'decoration';

export interface Product {
  id: string;
  title: string;
  author?: string;
  price: number;
  originalPrice?: number;
  category: string;
  type: ProductType;
  rating: number;
  coverImage: string;
  synopsis: string;
  fullDescription: string;
  isBestseller?: boolean;
  isNew?: boolean;
  publishedDate: string;
}

// Book images
import book1 from '@/assets/books/book-1.jpg';
import book2 from '@/assets/books/book-2.jpg';
import book3 from '@/assets/books/book-3.jpg';
import book4 from '@/assets/books/book-4.jpg';
import book5 from '@/assets/books/book-5.jpg';
import book6 from '@/assets/books/book-6.jpg';
import book7 from '@/assets/books/book-7.jpg';
import book8 from '@/assets/books/book-8.jpg';
import book9 from '@/assets/books/book-9.jpg';
import book10 from '@/assets/books/book-10.jpg';
import book11 from '@/assets/books/book-11.jpg';
import book12 from '@/assets/books/book-12.jpg';
import book13 from '@/assets/books/book-13.jpg';
import book14 from '@/assets/books/book-14.jpg';
import book15 from '@/assets/books/book-15.jpg';
import book16 from '@/assets/books/book-16.jpg';
import book17 from '@/assets/books/book-17.jpg';
import book18 from '@/assets/books/book-18.jpg';
import book19 from '@/assets/books/book-19.jpg';
import book20 from '@/assets/books/book-20.jpg';

// Product images
import pen1 from '@/assets/products/pen-1.jpg';
import cover1 from '@/assets/products/cover-1.jpg';
import bag1 from '@/assets/products/bag-1.jpg';
import keychain1 from '@/assets/products/keychain-1.jpg';
import flower1 from '@/assets/products/flower-1.jpg';
import pencil1 from '@/assets/products/pencil-1.jpg';

export const products: Product[] = [
  // Books - Educational
  {
    id: '1',
    title: 'Jejak Langkah Waktu',
    author: 'Anindya Kusuma',
    price: 89000,
    originalPrice: 125000,
    category: 'Fiksi',
    type: 'book',
    rating: 4.8,
    coverImage: book1,
    synopsis: 'Sebuah perjalanan melintasi waktu yang mengungkap rahasia tersembunyi dari masa lalu. Maya, seorang arkeolog muda, menemukan artefak misterius yang membawanya ke petualangan tak terduga.',
    fullDescription: 'Novel ini mengisahkan perjalanan luar biasa Maya Pratiwi, seorang arkeolog muda yang menemukan artefak kuno berusia ribuan tahun di pedalaman Jawa.',
    isBestseller: true,
    publishedDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'Bangkit dari Keterpurukan',
    author: 'Dr. Reza Mahendra',
    price: 75000,
    category: 'Pengembangan Diri',
    type: 'book',
    rating: 4.9,
    coverImage: book2,
    synopsis: 'Panduan praktis untuk bangkit dari titik terendah dalam hidup dan menemukan kekuatan dalam diri sendiri.',
    fullDescription: 'Dr. Reza Mahendra, psikolog klinis dengan pengalaman lebih dari 20 tahun, menyusun panduan komprehensif untuk membantu pembaca mengatasi masa-masa sulit.',
    isBestseller: true,
    publishedDate: '2023-11-20'
  },
  {
    id: '3',
    title: 'Bayangan di Ujung Lorong',
    author: 'Kirana Dewi',
    price: 95000,
    originalPrice: 120000,
    category: 'Thriller',
    type: 'book',
    rating: 4.7,
    coverImage: book3,
    synopsis: 'Ketika detektif Arya ditugaskan menyelidiki serangkaian pembunuhan misterius, ia tidak menyangka akan menemukan rahasia gelap.',
    fullDescription: 'Thriller psikologis yang menegangkan mengikuti Detektif Arya Pratama dalam penyelidikan pembunuhan berantai.',
    isBestseller: true,
    isNew: true,
    publishedDate: '2024-03-01'
  },
  {
    id: '4',
    title: 'Melodi Cinta di Kota Hujan',
    author: 'Larasati Ayu',
    price: 85000,
    category: 'Romansa',
    type: 'book',
    rating: 4.6,
    coverImage: book4,
    synopsis: 'Di tengah gemericik hujan Bogor, dua hati yang terluka bertemu dan menemukan harapan baru.',
    fullDescription: 'Novel romansa berlatar di kota Bogor yang sejuk, mengisahkan pertemuan tak terduga antara pianis dan penulis.',
    isNew: true,
    publishedDate: '2024-02-14'
  },
  {
    id: '5',
    title: 'Strategi Bisnis Era Digital',
    author: 'Prof. Budi Santoso, MBA',
    price: 145000,
    originalPrice: 180000,
    category: 'Bisnis',
    type: 'book',
    rating: 4.8,
    coverImage: book5,
    synopsis: 'Panduan lengkap membangun dan mengembangkan bisnis di era transformasi digital.',
    fullDescription: 'Professor Budi Santoso menyajikan panduan komprehensif untuk para pengusaha dan eksekutif bisnis di era digital.',
    isBestseller: true,
    publishedDate: '2023-09-15'
  },
  {
    id: '6',
    title: 'Galaksi yang Hilang',
    author: 'Adrian Surya',
    price: 110000,
    category: 'Fiksi Ilmiah',
    type: 'book',
    rating: 4.7,
    coverImage: book6,
    synopsis: 'Tahun 2250, umat manusia telah menjelajahi berbagai galaksi. Satu galaksi mengandung rahasia yang bisa mengubah alam semesta.',
    fullDescription: 'Novel fiksi ilmiah epik yang membawa pembaca ke masa depan eksplorasi antar galaksi.',
    isNew: true,
    publishedDate: '2024-02-28'
  },
  {
    id: '7',
    title: 'Syair Rindu Senja',
    author: 'Hafiz Rahman',
    price: 65000,
    category: 'Puisi',
    type: 'book',
    rating: 4.5,
    coverImage: book7,
    synopsis: 'Kumpulan puisi yang menggugah jiwa tentang cinta, kehilangan, dan harapan.',
    fullDescription: 'Antologi puisi karya Hafiz Rahman dengan 75 puisi yang dibagi dalam empat bagian.',
    publishedDate: '2023-08-10'
  },
  {
    id: '8',
    title: 'Pahlawan yang Terlupakan',
    author: 'Dr. Sari Endang',
    price: 135000,
    originalPrice: 165000,
    category: 'Sejarah',
    type: 'book',
    rating: 4.9,
    coverImage: book8,
    synopsis: 'Mengungkap kisah-kisah pahlawan Indonesia yang jarang dibahas dalam buku sejarah mainstream.',
    fullDescription: 'Buku sejarah yang mengungkap kisah 25 tokoh perjuangan kemerdekaan yang jarang disebutkan.',
    isBestseller: true,
    publishedDate: '2023-10-28'
  },
  {
    id: '9',
    title: 'Cita Rasa Nusantara',
    author: 'Chef Rahmat',
    price: 175000,
    category: 'Kuliner',
    type: 'book',
    rating: 4.8,
    coverImage: book9,
    synopsis: '100 resep masakan tradisional Indonesia dari Sabang sampai Merauke dengan sentuhan modern.',
    fullDescription: 'Kumpulan resep masakan Indonesia yang komprehensif dari Chef Rahmat.',
    isNew: true,
    publishedDate: '2024-01-05'
  },
  {
    id: '10',
    title: 'Petualangan di Tanah Papua',
    author: 'Rio Anggara',
    price: 98000,
    category: 'Perjalanan',
    type: 'book',
    rating: 4.6,
    coverImage: book10,
    synopsis: 'Catatan perjalanan menyusuri keindahan alam Papua yang masih perawan.',
    fullDescription: 'Travel writer Rio Anggara mendokumentasikan perjalanan 6 bulan menyusuri Papua.',
    publishedDate: '2023-12-01'
  },
  {
    id: '11',
    title: 'Filosofi Hidup Minimalis',
    author: 'Dewi Lestari',
    price: 79000,
    category: 'Pengembangan Diri',
    type: 'book',
    rating: 4.7,
    coverImage: book11,
    synopsis: 'Panduan lengkap menjalani gaya hidup minimalis untuk kebahagiaan sejati dan ketenangan batin.',
    fullDescription: 'Buku ini mengajarkan cara menyederhanakan hidup, melepaskan keterikatan material, dan fokus pada hal-hal yang benar-benar bermakna.',
    isBestseller: true,
    isNew: true,
    publishedDate: '2024-03-15'
  },
  {
    id: '12',
    title: 'Psikologi Kesuksesan',
    author: 'Dr. Ahmad Fauzi',
    price: 89000,
    originalPrice: 115000,
    category: 'Pengembangan Diri',
    type: 'book',
    rating: 4.8,
    coverImage: book12,
    synopsis: 'Memahami pola pikir dan kebiasaan orang-orang sukses berdasarkan penelitian psikologi modern.',
    fullDescription: 'Analisis mendalam tentang karakteristik psikologis yang membedakan orang sukses dari rata-rata.',
    isBestseller: true,
    publishedDate: '2024-01-20'
  },
  {
    id: '13',
    title: 'Sejarah Peradaban Kuno Indonesia',
    author: 'Prof. Hartono',
    price: 155000,
    category: 'Sejarah',
    type: 'book',
    rating: 4.9,
    coverImage: book13,
    synopsis: 'Eksplorasi mendalam tentang kerajaan-kerajaan kuno Nusantara dari Sriwijaya hingga Majapahit.',
    fullDescription: 'Buku komprehensif yang menelusuri kejayaan peradaban kuno Indonesia dengan bukti arkeologis terbaru.',
    isBestseller: true,
    publishedDate: '2023-11-10'
  },
  {
    id: '14',
    title: 'Keuangan Cerdas untuk Milenial',
    author: 'Rina Permata, CFP',
    price: 85000,
    category: 'Bisnis',
    type: 'book',
    rating: 4.6,
    coverImage: book14,
    synopsis: 'Panduan praktis mengelola keuangan untuk generasi milenial dan Gen Z di era digital.',
    fullDescription: 'Strategi menabung, investasi, dan mencapai kebebasan finansial untuk anak muda.',
    isNew: true,
    publishedDate: '2024-02-20'
  },
  {
    id: '15',
    title: 'Seni Berbicara di Depan Publik',
    author: 'Mario Teguh',
    price: 95000,
    originalPrice: 125000,
    category: 'Pengembangan Diri',
    type: 'book',
    rating: 4.8,
    coverImage: book15,
    synopsis: 'Teknik dan strategi menjadi pembicara yang memukau dan meyakinkan audiens.',
    fullDescription: 'Panduan lengkap public speaking dari persiapan hingga penampilan di panggung.',
    isBestseller: true,
    publishedDate: '2023-09-05'
  },
  {
    id: '16',
    title: 'Eksplorasi Alam Semesta',
    author: 'Dr. Sinta Astronomi',
    price: 125000,
    category: 'Sains',
    type: 'book',
    rating: 4.9,
    coverImage: book16,
    synopsis: 'Perjalanan visual memahami misteri alam semesta dari planet hingga lubang hitam.',
    fullDescription: 'Buku astronomi populer yang menjelaskan kompleksitas alam semesta dengan bahasa sederhana.',
    isNew: true,
    publishedDate: '2024-03-01'
  },
  {
    id: '17',
    title: 'Rahasia Produktivitas Tinggi',
    author: 'James Clear Indonesia',
    price: 82000,
    category: 'Pengembangan Diri',
    type: 'book',
    rating: 4.7,
    coverImage: book17,
    synopsis: 'Metode dan kebiasaan untuk mencapai produktivitas maksimal dalam pekerjaan dan kehidupan.',
    fullDescription: 'Panduan sistematis meningkatkan produktivitas dengan prinsip-prinsip yang terbukti efektif.',
    isBestseller: true,
    publishedDate: '2024-01-08'
  },
  {
    id: '18',
    title: 'Keajaiban Pikiran Manusia',
    author: 'Prof. Neuroscience ID',
    price: 115000,
    originalPrice: 145000,
    category: 'Sains',
    type: 'book',
    rating: 4.8,
    coverImage: book18,
    synopsis: 'Eksplorasi ilmiah tentang otak manusia dan potensi luar biasa yang tersembunyi di dalamnya.',
    fullDescription: 'Buku neurologi populer yang mengungkap misteri otak dan cara mengoptimalkan fungsinya.',
    publishedDate: '2023-12-15'
  },
  {
    id: '19',
    title: 'Panduan Meditasi Harian',
    author: 'Bhante Uttamo',
    price: 69000,
    category: 'Spiritual',
    type: 'book',
    rating: 4.6,
    coverImage: book19,
    synopsis: 'Teknik meditasi praktis untuk ketenangan batin dan kesadaran penuh dalam kehidupan sehari-hari.',
    fullDescription: 'Panduan langkah demi langkah bermeditasi dari tradisi Buddha dengan pendekatan modern.',
    isNew: true,
    publishedDate: '2024-02-01'
  },
  {
    id: '20',
    title: 'Sains dalam Kehidupan Sehari-hari',
    author: 'Tim Sains Indonesia',
    price: 92000,
    category: 'Sains',
    type: 'book',
    rating: 4.7,
    coverImage: book20,
    synopsis: 'Penjelasan fenomena sains yang kita temui setiap hari dengan cara yang mudah dipahami.',
    fullDescription: 'Dari cara kerja microwave hingga mengapa langit biru, semua dijelaskan dengan ilustrasi menarik.',
    publishedDate: '2023-10-20'
  },
  // Stationery Products
  {
    id: '21',
    title: 'Set Pulpen Premium PARAGRAF',
    price: 45000,
    category: 'Pulpen',
    type: 'stationery',
    rating: 4.5,
    coverImage: pen1,
    synopsis: 'Set 3 pulpen premium dengan tinta halus dan desain elegan warna biru metalik.',
    fullDescription: 'Pulpen berkualitas tinggi dengan grip nyaman untuk menulis lama. Cocok untuk catatan, jurnal, atau hadiah.',
    isNew: true,
    publishedDate: '2024-03-10'
  },
  {
    id: '22',
    title: 'Set Pensil Kayu Premium',
    price: 35000,
    category: 'Pensil',
    type: 'stationery',
    rating: 4.4,
    coverImage: pencil1,
    synopsis: 'Set 4 pensil kayu premium dengan penghapus, cocok untuk menulis dan menggambar.',
    fullDescription: 'Pensil berkualitas tinggi dari kayu pilihan dengan grafit halus untuk tulisan yang rapi.',
    publishedDate: '2024-01-15'
  },
  // Book Covers
  {
    id: '23',
    title: 'Cover Buku Kulit Premium',
    price: 125000,
    originalPrice: 165000,
    category: 'Cover Buku',
    type: 'accessory',
    rating: 4.8,
    coverImage: cover1,
    synopsis: 'Cover buku kulit sintetis premium warna navy blue dengan aksen emas, cocok untuk melindungi buku kesayangan.',
    fullDescription: 'Cover buku elegan dengan bahan kulit sintetis berkualitas tinggi. Tersedia dalam berbagai ukuran.',
    isBestseller: true,
    publishedDate: '2023-12-20'
  },
  // Bags
  {
    id: '24',
    title: 'Tote Bag Canvas "Read More"',
    price: 89000,
    category: 'Tas',
    type: 'bag',
    rating: 4.7,
    coverImage: bag1,
    synopsis: 'Tote bag canvas premium dengan desain literasi "Read More", kapasitas besar untuk membawa buku.',
    fullDescription: 'Tas canvas tebal dan kuat dengan desain eksklusif PARAGRAF. Cocok untuk pecinta buku.',
    isNew: true,
    isBestseller: true,
    publishedDate: '2024-02-25'
  },
  // Keychains
  {
    id: '25',
    title: 'Gantungan Kunci Buku Mini',
    price: 29000,
    category: 'Gantungan Kunci',
    type: 'accessory',
    rating: 4.6,
    coverImage: keychain1,
    synopsis: 'Gantungan kunci berbentuk buku mini dari kulit sintetis dengan detail halus.',
    fullDescription: 'Aksesori unik untuk pecinta buku. Dapat dibuka dan memiliki halaman mini di dalamnya.',
    isNew: true,
    publishedDate: '2024-03-05'
  },
  // Decorations
  {
    id: '26',
    title: 'Bucket Bunga Kering Literasi',
    price: 145000,
    category: 'Dekorasi',
    type: 'decoration',
    rating: 4.9,
    coverImage: flower1,
    synopsis: 'Rangkaian bunga kering cantik dengan warna pastel, cocok untuk dekorasi meja baca atau hadiah.',
    fullDescription: 'Bucket bunga kering premium yang tahan lama. Sempurna untuk menghias ruang baca atau sebagai hadiah spesial.',
    isBestseller: true,
    publishedDate: '2024-01-28'
  }
];

export const getBooks = () => products.filter(p => p.type === 'book');
export const getOtherProducts = () => products.filter(p => p.type !== 'book');
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getNewArrivals = () => {
  const newProducts = products.filter(p => p.isNew);
  if (newProducts.length >= 10) return newProducts;
  return [...products]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 10);
};
export const getProductById = (id: string) => products.find(p => p.id === id);

export const categories = [
  'Semua',
  'Buku',
  'Fiksi',
  'Pengembangan Diri',
  'Thriller',
  'Romansa',
  'Bisnis',
  'Fiksi Ilmiah',
  'Puisi',
  'Sejarah',
  'Kuliner',
  'Perjalanan',
  'Sains',
  'Spiritual',
  'Pulpen',
  'Pensil',
  'Cover Buku',
  'Tas',
  'Gantungan Kunci',
  'Dekorasi'
];

export const productTypes = [
  { value: 'all', label: 'Semua Produk' },
  { value: 'book', label: 'Buku' },
  { value: 'stationery', label: 'Alat Tulis' },
  { value: 'accessory', label: 'Aksesoris' },
  { value: 'bag', label: 'Tas' },
  { value: 'decoration', label: 'Dekorasi' }
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
