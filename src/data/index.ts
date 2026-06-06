import {
  NavLink, Skill, Service, Project,
  Experience, Testimonial, Stat
} from '../types';

export const navLinks: NavLink[] = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Sertifikat', href: '#sertifikat' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Kontak', href: '#kontak' },
];

export const stats: Stat[] = [
  { number: '5', suffix: '+', label: 'Tahun Pengalaman' },
  { number: '40', suffix: '+', label: 'Proyek Selesai' },
  { number: '25', suffix: '+', label: 'Klien Puas' },
];

export const skills: Skill[] = [
  { name: 'React'},
  { name: 'TypeScript'},
  { name: 'Flutter'},
  { name: 'Dart' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'Java' },
  { name: 'PHP' },           // tambahan
  { name: 'Python' },
  { name: 'Laravel' },
  { name: 'Flask' },
  { name: 'Bootstrap' },
  { name: 'MySQL' },
  { name: 'MongoDB' },
  { name: 'Figma' },
  { name: 'Git' },
  { name: 'GitHub' },
];

export const services: Service[] = [
  { number: '01', icon: '⚛️', title: 'Frontend Development', description: 'Membangun antarmuka yang responsif, cepat, dan accessible menggunakan React, Next.js, dan teknologi modern lainnya.' },
  { number: '02', icon: '⚙️', title: 'Backend Development', description: 'Membangun API yang scalable dan secure dengan Node.js, Go, dan arsitektur microservices yang teruji.' },
  { number: '03', icon: '🎨', title: 'UI/UX Design', description: 'Merancang pengalaman pengguna yang intuitif dengan Figma — dari wireframe hingga prototype yang siap dikembangkan.' },
  { number: '04', icon: '☁️', title: 'Cloud & DevOps', description: 'Deployment dan orkestrasi infrastruktur menggunakan AWS, Docker, dan CI/CD pipeline yang otomatis.' },
  { number: '05', icon: '📱', title: 'Mobile Development', description: 'Pengembangan aplikasi mobile cross-platform dengan React Native yang terasa native di iOS maupun Android.' },
  { number: '06', icon: '🔍', title: 'Konsultasi Teknis', description: 'Membantu tim Anda memilih stack teknologi, arsitektur sistem, dan strategi pengembangan yang tepat.' },
];

export const projects: Project[] = [
  {
    title: 'KIRA — Platform Manajemen Keuangan AI',
    description: 'Platform SaaS yang menggunakan AI untuk menganalisis pola pengeluaran, memprediksi cashflow, dan memberikan rekomendasi finansial personal. Digunakan oleh 12.000+ pengguna aktif.',
    tags: [
      { label: 'Featured', color: 'yellow' },
      { label: 'Next.js', color: 'blue' },
      { label: 'AI', color: 'purple' },
    ],
    bgClass: 'bg-blue',
    initials: 'KIRA',
    href: '#',
    featured: true,
  },
  {
    title: 'TaniKita — Marketplace Produk Pertanian',
    description: 'Aplikasi mobile yang menghubungkan petani langsung dengan konsumen, memotong rantai distribusi dan meningkatkan pendapatan petani hingga 40%.',
    tags: [
      { label: 'React Native', color: 'green' },
      { label: 'Node.js', color: 'blue' },
    ],
    bgClass: 'bg-green',
    initials: 'TANI',
    href: '#',
  },
  {
    title: 'Akar CMS — Headless Content Platform',
    description: 'CMS headless yang dibangun untuk performa — dengan GraphQL API, real-time preview, dan sistem permission granular untuk tim editorial.',
    tags: [
      { label: 'React', color: 'purple' },
      { label: 'Go', color: 'red' },
    ],
    bgClass: 'bg-purple',
    initials: 'AKAR',
    href: '#',
  },
];

export const experiences: Experience[] = [
  {
    period: '2022 — 2024',
    title: 'Koordinator Divisi Dokumentasi',
    company: 'RANA 9 — Organisasi Fotografi Kampus',
    description: 'Memimpin divisi dokumentasi dalam organisasi fotografi kampus RANA 9. Bertanggung jawab atas perencanaan dan pelaksanaan dokumentasi berbagai kegiatan kampus, pengelolaan arsip foto, serta koordinasi anggota tim. Mengembangkan kemampuan fotografi, komposisi visual, dan manajemen tim dalam lingkungan organisasi.',
  },
  {
    period: '2022 — 2024',
    title: 'Anggota Aktif',
    company: 'RANA 9 — Organisasi Fotografi Kampus',
    description: 'Aktif sebagai fotografer dalam berbagai kegiatan dan event kampus. Terlibat dalam proses editing foto, pemilihan foto terbaik, serta publikasi hasil dokumentasi di media sosial organisasi.',
  },
];

export const testimonials: Testimonial[] = [
  {
    text: 'Arya bukan hanya developer yang handal — dia juga sangat memahami kebutuhan bisnis. Hasilnya bukan sekadar kode, tapi solusi yang benar-benar memecahkan masalah kami.',
    name: 'Rizal Hidayat',
    role: 'CTO, Nobi Digital',
    initials: 'RH',
    color: 'accent',
  },
  {
    text: 'Kecepatan dan kualitas kerjanya luar biasa. Dalam waktu 3 bulan, kami berhasil launch produk yang awalnya kami estimasikan butuh 6 bulan. Sangat merekomendasikan!',
    name: 'Sari Amalia',
    role: 'Founder, TaniKita',
    initials: 'SA',
    color: 'blue',
  },
  {
    text: 'Yang membedakan Arya adalah kemampuannya berkomunikasi. Setiap update jelas, setiap keputusan teknis dijelaskan dengan bahasa yang mudah dimengerti. Kolaborasi yang menyenangkan.',
    name: 'Budi Winarno',
    role: 'Product Manager, Tokopedia',
    initials: 'BW',
    color: 'purple',
  },
];
