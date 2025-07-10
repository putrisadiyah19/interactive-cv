# interactive-cv

Website portofolio interaktif pribadi yang menampilkan informasi seperti profil, pendidikan, keahlian, proyek, sertifikasi, dan kontak. Dibangun menggunakan **Vue 3**, **Tailwind CSS**, dan **Express.js** sebagai backend.

## 📌 Fitur Utama

- Halaman profil (Hero)
- Informasi pendidikan
- Sertifikasi yang dimiliki
- Daftar keahlian
- Proyek yang pernah dikerjakan
- Form kontak
- Unduh CV dalam format PDF

## 🛠️ Teknologi yang Digunakan

- **Frontend**: Vue 3, Tailwind CSS, Vite
- **Backend**: Express.js (Node.js)
- **Routing**: Vue Router
- **Styling: Tailwind CSS
- **PDF Support: CV bisa di-download dari folder public/cv-putri.pdf

## 📁 Struktur Proyek

<pre> ``` 
interactive-cv/
├── backend/
│   ├── routes/
│   ├── data.js
│   └── index.js
├── frontend/
│   ├── public/
│   │   ├── cv-putri.pdf
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Certifications.vue
│   │   │   ├── Contact.vue
│   │   │   ├── Education.vue
│   │   │   ├── Hero.vue
│   │   │   ├── Navbar.vue
│   │   │   ├── Projects.vue
│   │   │   ├── Resume.vue
│   │   │   ├── SectionTitle.vue
│   │   │   ├── Skills.vue
│   │   │   ├── TheWelcome.vue
│   │   │   └── WelcomeItem.vue
│   │   ├── directives/
│   │   ├── router/
│   │   ├── views/
│   │   ├── App.vue
│   │   └── main.js
│   ├── .editorconfig
│   ├── .gitattributes
│   ├── .gitignore
│   ├── .prettierrc.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   └── vite.config.js
├── node_modules/
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
 ``` </pre>

## 🧪 Cara Menjalankan Proyek

1. **Jalankan Backend**

```bash
cd backend
npm install
npm run dev

2. **Jalankan Backend**

```bash
cd frontend
npm install
npm run dev
