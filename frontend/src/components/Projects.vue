<script setup>
defineOptions({ name: 'ProjectList' });
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error);
  }
});
</script>

<template>

  <section id="projects" class="bg-gray-100 py-16 px-6">
    <div class="container mx-auto text-center">
  
      <div class="mt-8">
        <SectionTitle title="Daftar Proyek" />
      </div>

      <ul class="mt-6 text-left max-w-2xl mx-auto space-y-4">
        <li
          v-for="project in projects"
          :key="project.id"
          class="bg-white p-4 rounded shadow hover:shadow-md transition"
        >
          <h3 class="text-lg font-semibold text-gray-800">{{ project.name }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ project.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
