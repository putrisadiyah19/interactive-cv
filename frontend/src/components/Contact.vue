<script setup>
defineOptions({ name: 'ContactSection' });
import { ref } from 'vue';
import { useToast } from 'vue-toastification';
import emailjs from '@emailjs/browser';
import SectionTitle from './SectionTitle.vue';
import { Github, Linkedin } from 'lucide-vue-next'; // icon lucide, opsional

const toast = useToast();

const name = ref('');
const email = ref('');
const message = ref('');
const loading = ref(false);

const sendEmail = async () => {
  loading.value = true;

  try {
    await emailjs.send(
      'service_5398',
      'template_4t61n61',
      {
        from_name: name.value,
        from_email: email.value,
        message: message.value,
      },
      '-hidgsJ1eHYvVBHf6'
    );

    toast.success('Pesan berhasil dikirim! 🎉');

    name.value = '';
    email.value = '';
    message.value = '';
  } catch {
    toast.error('Gagal mengirim pesan. Coba lagi nanti.');
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-xl text-gray-300 mb-6">
        Silakan kirim pesan melalui formulir di bawah ini:
      </p>

      <form
        @submit.prevent="sendEmail"
        class="max-w-xl mx-auto text-left bg-white p-8 rounded-lg shadow-md text-gray-800"
      >
        <div class="mb-4">
          <label class="block mb-2 font-semibold">Nama</label>
          <input v-model="name" type="text" required class="w-full px-4 py-2 border rounded" />
        </div>

        <div class="mb-4">
          <label class="block mb-2 font-semibold">Email</label>
          <input v-model="email" type="email" required class="w-full px-4 py-2 border rounded" />
        </div>

        <div class="mb-6">
          <label class="block mb-2 font-semibold">Pesan</label>
          <textarea v-model="message" required rows="4" class="w-full px-4 py-2 border rounded"></textarea>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition"
        >
          {{ loading ? 'Mengirim...' : 'Kirim Pesan' }}
        </button>
      </form>

      <div class="flex justify-center space-x-8 mt-12">
        <a
          href="https://github.com/usernamekamu"
          target="_blank"
          class="flex items-center space-x-2 text-gray-400 hover:text-white text-lg transition"
        >
          <Github class="w-5 h-5" /> <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/usernamekamu"
          target="_blank"
          class="flex items-center space-x-2 text-gray-400 hover:text-white text-lg transition"
        >
          <Linkedin class="w-5 h-5" /> <span>LinkedIn</span>
        </a>
      </div>

      <p class="text-gray-500 mt-8 text-sm">
        &copy; {{ new Date().getFullYear() }} Halimatussadiyah Lola Putri. Dibuat dengan ❤️ dan Vue.js.
      </p>
    </div>
  </footer>
</template>
