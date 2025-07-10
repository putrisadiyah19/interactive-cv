<script setup>
defineOptions({ name: 'EducationSection' });
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    console.log('DATA:', response.data);
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="education" class="bg-white py-16 px-6">
    <div class="container mx-auto">
      <SectionTitle title="Education" />

      <div class="relative border-l-4 border-blue-200 mt-10 ml-4">
        <div v-for="edu in educationHistory" :key="edu.id" class="mb-10 ml-4 pl-6 relative">
  <div class="absolute -left-6 top-1 timeline-dot"></div>
  <div class="flex items-start gap-3">

    <div class="flex-shrink-0 mt-1 text-blue-500">

      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z" />
      </svg>
    </div>

 
    <div>
      <h3 class="text-lg font-semibold text-blue-700">{{ edu.school }}</h3>
      <p class="text-sm text-gray-500 font-medium">{{ edu.degree }} • {{ edu.year }}</p>
      <p class="text-gray-600 mt-2">{{ edu.description }}</p>
        </div>
      </div>
    </div>
      </div>
        </div>
  </section>
</template>

<style scoped>
.timeline-dot {
  position: absolute;
  left: -1.5rem; /* -left-6 */
  top: 0.25rem;  /* top-1 */
  width: 1rem;   /* w-4 */
  height: 1rem;  /* h-4 */
  background-color: #3b82f6; /* bg-blue-500 */
  border-radius: 9999px; /* rounded-full */
  animation: pulseDot 1.8s ease-in-out infinite;
}

@keyframes pulseDot {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.6; }
  100% { transform: scale(1); opacity: 1; }
}
</style>

