<template>
  <div class="opacity-0 transition-opacity duration-3000" :class="{ 'opacity-300': isLoaded }">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'; 
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  // Trigger fade-in when mounted
  setTimeout(() => {
    isLoaded.value = true
  }, 50)
})
</script>
