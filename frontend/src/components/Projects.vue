<script>
export default {
  name: 'ProjectList',
};
import { ref, onMounted } from 'vue';
import axios from 'axios';
const projects = ref([]);
onMounted(async () => {
try { const response = await
axios.get('http://localhost:3000/api/projects'); projects.value =
response.data; } catch (error) { console.error(error); }
});
</script>