<template>
    <span class="dark-light-toggle" @click="toggleDarkMode">
        <img class="img-dark" src="/assets/images/icons/dark.svg" alt="dark" />
        <img class="img-dark-black" src="/assets/images/icons/dark-black.svg" alt="dark" />
        <img class="img-light" src="/assets/images/icons/light.svg" alt="dark" />
        <img class="img-light-black" src="/assets/images/icons/light-black.svg" alt="dark" />
    </span>
</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.body.classList.toggle("theme--dark");
  
};
</script>

<style>
</style>