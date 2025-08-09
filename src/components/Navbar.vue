<template>
  <nav class="flex flex-row items-center justify-between bg-green-600 px-3 py-2 relative">
    <!-- Logo -->
    <div>
        <RouterLink to="/" class="hover:text-blue-700"><img src="../assets/image/FARMLOGO.png" alt="logo" class="w-20 h-20" /></RouterLink>
      <!-- <img src="../assets/image/FARMLOGO.png" alt="logo" class="w-20 h-20" /> -->
    </div>

    <!-- Hamburger icon (only on mobile) -->
    <div class="md:hidden">
      <button @click="toggleMenu" class="text-white focus:outline-none text-3xl">&#9776;</button>
    </div>

    <!-- Desktop Nav Links -->
    <div class="hidden md:block">
      <ul class="flex gap-6 font-bold text-1.5xl text-white">
      <RouterLink to="/" class="hover:text-blue-700">Home</RouterLink>
        <li><a href="#about" class="hover:text-blue-700">About-Us </a></li>
        <li><a href="#team" class="hover:text-blue-700">Our Team </a></li>
        <li><a href="#products" class="hover:text-blue-700">Our-Products</a></li>
        <li><a href="#gallary" class="hover:text-blue-700">Gallary</a></li>
        <li><a href="#contact" class="hover:text-blue-700">Contact</a></li>
      </ul>
    </div>

    <!-- Mobile Nav Links -->
    <div v-if="isOpen" class="absolute top-[100%] left-0 w-full bg-white md:hidden t z-10">
      <ul class="flex flex-col items-center gap-4 py-4 font-bold text-black">
        <li><a href="#home" @click="toggleMenu" class="hover:text-green-300">Home</a></li>
        <li><a href="#about" @click="toggleMenu" class="hover:text-green-300">About Us</a></li>
        <li><a href="#team" @click="toggleMenu" class="hover:text-green-300">Our Team</a></li>
        <li> <a href="#products" @click="toggleMenu" class="hover:text-green-300">Our-Products</a></li>
        <li><a href="#gallary" @click="toggleMenu" class="hover:text-green-300">Gallary</a></li>
        <li><a href="#contact" @click="toggleMenu" class="hover:text-green-300">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
