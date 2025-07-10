const educationHistory = [
  {
    id: 1,
    school: "Universitas Amikom Yogyakarta",
    degree: "S1 Teknik Informatika",
    year: "2023 - Sekarang",
    description: "Mempelajari pengembangan web, basis data, dan UI/UX."
  },
  {
    id: 2,
    school: "SMK Negeri 1 Sukamara",
    degree: "Multimedia",
    year: "2020 - 2023",
    description: "Aktif di Kegiatan Sekolah dan Desain Media Interaktif."
  }
];

const skills = [
  { id: 1, name: "HTML & CSS", level: 90, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { id: 2, name: "Vue.js", level: 90, category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { id: 3, name: "Tailwind CSS", level: 80, category: "Frontend", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { id: 4, name: "Figma", level: 95, category: "Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { id: 5, name: "Git & GitHub", level: 90, category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { id: 6, name: "CorelDRAW", level: 90, category: "Design", icon: "https://cdn.simpleicons.org/coreldraw/47A348" }
];

const projects = [
  {
    "id": 1,
    "name": "Website Toko Elektronik",
    "description": "Platform e-commerce modern untuk penjualan berbagai produk elektronik, dilengkapi dengan katalog interaktif, fitur keranjang belanja, serta proses checkout yang aman dan cepat."
  },
  {
    "id": 2,
    "name": "Website Pemesanan Tiket Bioskop",
    "description": "Situs pemesanan tiket film secara online yang menampilkan jadwal tayang terbaru, deskripsi film, dan fitur pemilihan kursi otomatis untuk pengalaman menonton yang praktis dan nyaman."
  },
  {
    "id": 3,
    "name": "Website Informasi Destinasi Wisata",
    "description": "Portal informasi destinasi wisata yang lengkap dengan peta lokasi, ulasan pengunjung, galeri foto, serta formulir pemesanan tur yang memudahkan pengguna dalam merencanakan liburan."
  }
];

const certifications = [
  { 
    id: 1,
    title: "Peserta Divisi Web Programming",
    issuer: "Amikom Computer Club",
    year: "2023",
    certificateUrl: "https://drive.google.com/file/d/1PwNSYy3umPZUJiR4DqwSTidx6WDJpCgO/view?usp=sharing",
    techStack: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    title: "Fullstack Web Developer",
    issuer: "PT. Git Solustion",
    year: "2024",
    certificateUrl: "https://drive.google.com/file/d/1viKB6rMTWGLL3z8DhRR3-lSahzf1ESg8/view?usp=sharing",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"]
  }
];


module.exports = { educationHistory, skills, projects, certifications };