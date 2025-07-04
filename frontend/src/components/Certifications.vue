<script setup>
defineOptions({ name: 'UserCertifications' });
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const certifications = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/certifications');
    certifications.value = response.data;
  } catch (error) {
    console.error('Gagal memuat sertifikat:', error);
  }
});
</script>

<template>
  <section id="certifications" class="bg-white py-16 px-6">
    <div class="container mx-auto">
      <SectionTitle title="Certifications" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div
          v-for="cert in certifications"
          :key="cert.id"
          class="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-md shadow hover:shadow-md transition"
        >
          <h3 class="text-lg font-bold text-blue-700">{{ cert.title }}</h3>
          <p class="text-sm text-gray-600">{{ cert.issuer }} • {{ cert.year }}</p>
          <a
            :href="cert.certificateUrl"
            target="_blank"
            class="text-blue-500 underline text-sm mt-2 inline-block"
          >
            🔗 Lihat Sertifikat
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
