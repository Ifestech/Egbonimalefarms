<template>
  <nav class="flex flex-row items-center justify-between bg-green-600 px-3 py-2 relative ">
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
      <RouterLink to="/#about" class="hover:text-blue-700">About-Us</RouterLink>
      <RouterLink to="/#products" class="hover:text-blue-700">Our-Products</RouterLink>
      <RouterLink to="/#contact" class="hover:text-blue-700">Contact Us</RouterLink>
      </ul>
    </div>

    <!-- Mobile Nav Links -->
    <div v-if="isOpen" class="absolute top-[100%] left-0 w-full bg-white md:hidden t z-10">
      <ul class="flex flex-col items-center gap-4 py-4 font-bold text-black">
        <router-link to="/"  @click="toggleMenu" class="hover:text-green-300" >Home</router-link>
        <router-link to="/#about"  @click="toggleMenu" class="hover:text-green-300">About Us</router-link> 
        <router-link to="/#products"  @click="toggleMenu" class="hover:text-green-300">Our-Products</router-link> 
        <router-link to="/#contact"  @click="toggleMenu" class="hover:text-green-300">Contact Us</router-link> 
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
html {
  scroll-behavior: smooth;
}
</style>
