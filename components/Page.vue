<template>
<div class="page" style="opacity: 0;">
    <Header/>
    <slot></slot>
    <br clear="all">
    <Footer/>
</div>  
</template>

<script setup>
const { $anime, $cfg } = useNuxtApp();
const parsedConfig = useAttrs().config;

const displayImage = `${$cfg()["base-url"]}a_6c6d80f833498984d5ca99725e410c4c.gif`;
const displayTitle = `Forza Mods${parsedConfig && parsedConfig.name ? ' | ' + parsedConfig.name : ''}`;
const displayDescription = parsedConfig && parsedConfig.description ? parsedConfig.description : null;

useSeoMeta({
  title: displayTitle,
  ogTitle: displayTitle,
  description: displayDescription,
  ogDescription: displayDescription,
  ogImage: displayImage, 
  twitterCard: displayImage,
});

onMounted(() => {
  $anime({targets: '.page', duration: 100, opacity: [0, 1], easing: 'easeInOutQuad'});
});
</script>