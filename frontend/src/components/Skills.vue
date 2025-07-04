<template>
  <section id="skills" class="py-16 px-6 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">Skills</h2>

      <div v-if="skills.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <img :src="skill.icon" :alt="skill.name" class="w-10 h-10 mr-4" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ skill.name }}</h3>
            </div>
            <span class="text-xs font-semibold text-white bg-blue-500 px-3 py-1 rounded-full">
              {{ skill.category }}
            </span>
          </div>

          <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
            <div
              class="h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center"
              :style="{ width: skill.level + '%' }"
            >
              <span class="text-xs font-bold text-white">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 mt-10">
        Loading skills data...
      </div>
    </div>
  </section>
</template>

<script setup>
defineOptions({ name: 'SkillsSection' });
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Script ini sudah benar, tidak perlu diubah.
// Tugasnya adalah mengambil data dari backend.
const skills = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    // Memastikan kita mengambil array dari dalam properti 'data'
    if (response.data) {
      skills.value = response.data;
    }
  } catch (error) {
    console.error("Gagal mengambil data skills dari backend:", error);
  }
});
</script>