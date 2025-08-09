<template>
    <div>
  <section id="team">
    <div class="container mx-auto px-5 xl:px-2 my-10">
        <div class="text">
            <h1 class="text-blue-700 text-4xl font-bold text-center">Our Team</h1>
        </div>
        <div class="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="data in serData" :key="data">
                <card :imgsrc="data.imgsrc" :title="data.title" :texts="data.texts" />
            </div>
        </div>    
    </div>
  </section>
    </div>
</template>

<script setup>
import serData from '@/components/serData';
import card from '@/components/card.vue';
</script>

<style lang="scss" scoped>

</style>