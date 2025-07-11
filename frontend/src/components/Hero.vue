<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
    <!-- Kiri: Teks -->
    <div class="md:w-1/2 mb-10 md:mb-0">
      <h1 class="text-5xl font-bold text-gray-800 mb-2 animate-slide-in-left" style="animation-delay: 200ms;">
        👩‍💻Halo, Saya <span class="text-blue-600">Putri</span>
      </h1>

      <!-- Tagline -->
      <p class="text-md italic text-gray-500 mb-4 animate-slide-in-left" style="animation-delay: 300ms;">
        "Building meaningful digital experiences through design and code"
      </p>

      <!-- Deskripsi -->
      <p class="text-xl text-gray-600 mb-6 animate-slide-in-left" style="animation-delay: 400ms;">
        Mahasiswa Teknik Informatika dengan fokus pada <span class="text-blue-600 font-semibold">Pengembangan Web</span> dan <span class="text-purple-600 font-semibold">Desain Antarmuka</span>.
      </p>

      <!-- 🔽 Data Diri -->
      <div class="text-gray-700 text-base mb-6 space-y-1 animate-slide-in-left" style="animation-delay: 500ms;">
        <p><strong>Nama Lengkap:</strong> Halimatussadiyah Lola Putri</p>
        <p><strong>NIM:</strong> 23.11.5398</p>
        <p><strong>Email:</strong> halimatussadiyahlolaputri@students.amikom.ac.id</p>
      </div>

      <!-- Tombol Hubungi -->
      <a href="#kontak" class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block animate-slide-in-left" style="animation-delay: 600ms;">
        Hubungi Saya
      </a>

      <!-- Tombol Download CV -->
      <a href="/cv-putri.pdf" target="_blank" class="ml-4 bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors duration-300 inline-block animate-slide-in-left" style="animation-delay: 800ms;">
        Unduh CV
      </a>

      <!-- Ikon Sosial -->
      <div class="flex gap-4 mt-6 animate-slide-in-left" style="animation-delay: 1000ms;">
        <a href="https://github.com/putrisadiyah19" target="_blank" aria-label="GitHub">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="w-8 h-8 hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://linkedin.com/in/putrisadiyah19" target="_blank" aria-label="LinkedIn">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" class="w-8 h-8 hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>

    <!-- Kanan: Foto -->
    <div class="md:w-1/2 flex justify-center animate-slide-in-right">
      <img src="@/assets/putrii.jpg" alt="Foto Profil" class="w-80 h-80 rounded-full object-cover shadow-lg">
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection"
};
</script>