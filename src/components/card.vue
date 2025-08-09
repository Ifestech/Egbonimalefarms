<template>
    <div class="bg-green-600 m-4">
        <img :src="imgsrc" :alt="title" class="w-full object-contain h-[300px]">
        <div class="text px-10 ">
            <h2 class="text-white  font-bold text-lg ">{{ title }}</h2>
            <p class="text-yellow-300  font-medium text-base ">{{ texts }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['imgsrc', 'title', 'texts'])
</script>

<style scoped>

</style>