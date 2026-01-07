export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  coverImage: string;
  synopsis: string;
  fullDescription: string;
  isBestseller?: boolean;
  isNew?: boolean;
  publishedDate: string;
}

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

export const books: Book[] = [
  {
    id: '1',
    title: 'Jejak Langkah Waktu',
    author: 'Anindya Kusuma',
    price: 89000,
    originalPrice: 125000,
    category: 'Fiksi',
    rating: 4.8,
    coverImage: book1,
    synopsis: 'Sebuah perjalanan melintasi waktu yang mengungkap rahasia tersembunyi dari masa lalu. Maya, seorang arkeolog muda, menemukan artefak misterius yang membawanya ke petualangan tak terduga.',
    fullDescription: 'Novel ini mengisahkan perjalanan luar biasa Maya Pratiwi, seorang arkeolog muda yang menemukan artefak kuno berusia ribuan tahun di pedalaman Jawa. Artefak tersebut ternyata menyimpan kekuatan untuk membuka portal waktu, membawa Maya ke berbagai era penting dalam sejarah Nusantara. Dalam perjalanannya, ia bertemu dengan tokoh-tokoh bersejarah dan menyaksikan peristiwa-peristiwa yang mengubah jalannya sejarah bangsa.',
    isBestseller: true,
    publishedDate: '2024-01-15'
  },
  {
    id: '2',
    title: 'Bangkit dari Keterpurukan',
    author: 'Dr. Reza Mahendra',
    price: 75000,
    category: 'Pengembangan Diri',
    rating: 4.9,
    coverImage: book2,
    synopsis: 'Panduan praktis untuk bangkit dari titik terendah dalam hidup dan menemukan kekuatan dalam diri sendiri. Buku ini akan mengubah cara Anda memandang kegagalan.',
    fullDescription: 'Dr. Reza Mahendra, psikolog klinis dengan pengalaman lebih dari 20 tahun, menyusun panduan komprehensif untuk membantu pembaca mengatasi masa-masa sulit dalam hidup. Dengan pendekatan ilmiah yang dikombinasikan dengan kebijaksanaan spiritual, buku ini menawarkan strategi praktis untuk membangun ketahanan mental, menemukan tujuan hidup, dan mengubah kegagalan menjadi batu loncatan menuju kesuksesan.',
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
    rating: 4.7,
    coverImage: book3,
    synopsis: 'Ketika detektif Arya ditugaskan menyelidiki serangkaian pembunuhan misterius, ia tidak menyangka akan menemukan rahasia gelap yang terkait dengan masa lalunya sendiri.',
    fullDescription: 'Thriller psikologis yang menegangkan ini mengikuti Detektif Arya Pratama saat ia menyelidiki serangkaian pembunuhan yang tampaknya tidak terkait di Jakarta. Setiap korban meninggalkan sebuah petunjuk yang mengarah ke pembunuhan berikutnya. Semakin dalam Arya menggali, semakin ia menyadari bahwa pembunuh tersebut memiliki hubungan personal dengannya.',
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
    rating: 4.6,
    coverImage: book4,
    synopsis: 'Di tengah gemericik hujan Bogor, dua hati yang terluka bertemu dan menemukan harapan baru. Sebuah kisah cinta yang menyentuh dan menginspirasi.',
    fullDescription: 'Novel romansa yang berlatar di kota Bogor yang sejuk dan hujan. Mengisahkan pertemuan tak terduga antara Dara, seorang pianis yang kehilangan kemampuan bermain musiknya setelah kecelakaan, dan Raka, seorang penulis yang sedang berjuang melawan blok kreatif. Bersama-sama, mereka belajar untuk menyembuhkan luka lama dan menemukan cinta dalam ketidaksempurnaan.',
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
    rating: 4.8,
    coverImage: book5,
    synopsis: 'Panduan lengkap membangun dan mengembangkan bisnis di era transformasi digital. Dilengkapi studi kasus dari perusahaan-perusahaan sukses Indonesia.',
    fullDescription: 'Professor Budi Santoso, pakar manajemen strategis dari Universitas Indonesia, menyajikan panduan komprehensif untuk para pengusaha dan eksekutif bisnis. Buku ini membahas berbagai strategi untuk bertahan dan berkembang di tengah disrupsi digital, mulai dari transformasi model bisnis, pemanfaatan teknologi AI dan Big Data, hingga membangun budaya inovasi dalam organisasi.',
    isBestseller: true,
    publishedDate: '2023-09-15'
  },
  {
    id: '6',
    title: 'Galaksi yang Hilang',
    author: 'Adrian Surya',
    price: 110000,
    category: 'Fiksi Ilmiah',
    rating: 4.7,
    coverImage: book6,
    synopsis: 'Tahun 2250, umat manusia telah menjelajahi berbagai galaksi. Namun satu galaksi yang ditemukan mengandung rahasia yang bisa mengubah pemahaman tentang alam semesta.',
    fullDescription: 'Novel fiksi ilmiah epik yang membawa pembaca ke masa depan di mana perjalanan antar galaksi telah menjadi kenyataan. Kapten Aria memimpin misi eksplorasi ke Galaksi Andromeda dan menemukan peradaban kuno yang telah punah jutaan tahun lalu. Penemuan mereka mengungkap rahasia tentang asal-usul kehidupan di alam semesta dan ancaman yang sedang mendekati Bumi.',
    isNew: true,
    publishedDate: '2024-02-28'
  },
  {
    id: '7',
    title: 'Syair Rindu Senja',
    author: 'Hafiz Rahman',
    price: 65000,
    category: 'Puisi',
    rating: 4.5,
    coverImage: book7,
    synopsis: 'Kumpulan puisi yang menggugah jiwa tentang cinta, kehilangan, dan harapan. Setiap bait adalah perjalanan emosi yang mendalam.',
    fullDescription: 'Antologi puisi karya Hafiz Rahman, penyair muda yang karyanya telah diterjemahkan ke berbagai bahasa. Koleksi ini berisi 75 puisi yang dibagi dalam empat bagian: Fajar Harapan, Siang yang Terik, Senja Kerinduan, dan Malam Kontemplasi. Setiap puisi ditulis dengan keindahan bahasa yang memukau dan kedalaman makna yang menggetarkan hati.',
    publishedDate: '2023-08-10'
  },
  {
    id: '8',
    title: 'Pahlawan yang Terlupakan',
    author: 'Dr. Sari Endang',
    price: 135000,
    originalPrice: 165000,
    category: 'Sejarah',
    rating: 4.9,
    coverImage: book8,
    synopsis: 'Mengungkap kisah-kisah pahlawan Indonesia yang jarang dibahas dalam buku sejarah mainstream. Kontribusi mereka tak kalah penting bagi kemerdekaan bangsa.',
    fullDescription: 'Buku sejarah yang ditulis oleh Dr. Sari Endang, sejarawan dari Universitas Gadjah Mada. Melalui penelitian arsip yang ekstensif dan wawancara dengan keturunan para pahlawan, buku ini mengungkap kisah 25 tokoh perjuangan kemerdekaan yang namanya jarang disebutkan dalam buku-buku pelajaran. Dari pejuang perempuan di Aceh hingga mata-mata yang bekerja di balik layar, setiap kisah menginspirasi kebanggaan nasional.',
    isBestseller: true,
    publishedDate: '2023-10-28'
  },
  {
    id: '9',
    title: 'Cita Rasa Nusantara',
    author: 'Chef Rahmat',
    price: 175000,
    category: 'Kuliner',
    rating: 4.8,
    coverImage: book9,
    synopsis: '100 resep masakan tradisional Indonesia dari Sabang sampai Merauke dengan sentuhan modern. Lengkap dengan tips dan teknik dari chef profesional.',
    fullDescription: 'Chef Rahmat, pemenang berbagai kompetisi kuliner internasional, menyajikan kumpulan resep masakan Indonesia yang komprehensif. Buku ini tidak hanya berisi resep-resep tradisional yang otentik, tetapi juga menceritakan sejarah dan filosofi di balik setiap hidangan. Dilengkapi dengan foto-foto berkualitas tinggi dan panduan langkah demi langkah yang mudah diikuti.',
    isNew: true,
    publishedDate: '2024-01-05'
  },
  {
    id: '10',
    title: 'Petualangan di Tanah Papua',
    author: 'Rio Anggara',
    price: 98000,
    category: 'Perjalanan',
    rating: 4.6,
    coverImage: book10,
    synopsis: 'Catatan perjalanan menyusuri keindahan alam Papua yang masih perawan. Dari puncak Carstensz hingga Raja Ampat, sebuah eksplorasi tak terlupakan.',
    fullDescription: 'Travel writer Rio Anggara mendokumentasikan perjalanannya selama enam bulan menyusuri Papua, dari daratan tinggi Wamena hingga keindahan bawah laut Raja Ampat. Buku ini tidak hanya menyajikan keindahan alam yang menakjubkan, tetapi juga pertemuan dengan suku-suku asli Papua dan upaya pelestarian budaya mereka. Dilengkapi dengan peta rute perjalanan dan tips praktis untuk para petualang.',
    publishedDate: '2023-12-01'
  }
];

export const getBestsellers = () => books.filter(book => book.isBestseller);
export const getNewArrivals = () => books.filter(book => book.isNew).length >= 10 
  ? books.filter(book => book.isNew) 
  : [...books].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()).slice(0, 10);
export const getBookById = (id: string) => books.find(book => book.id === id);

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
