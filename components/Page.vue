<template>
<div class="page" style="opacity: 0;">
    <Header/>
    <slot></slot>
    <br clear="all">
    <Footer/>
</div>  
</template>

<script setup>
const { $anime } = useNuxtApp();

onMounted(() => {
  $anime({targets: '.page', duration: 100, opacity: [0, 1], easing: 'easeInOutQuad'});
});
</script>