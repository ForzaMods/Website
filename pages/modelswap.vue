<template>
  <Page>
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center text-center">
        <h1 class="text-4xl lg:text-7xl font-semibold italic underline decoration-primary decoration-4">Modelswap Guide</h1>
        <img src="/modelswap-guide.png">
      </div>
    </div>
  </Page>
</template>

<script setup>
import config from '~/assets/config.json';

useSeoMeta({
  title: `Forza Mods | Modelswap Guides`,
  ogTitle: `Forza Mods | Modelswap Guides`,
  description: "",
  ogDescription: "",
  ogImage: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`, 
  twitterCard: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`,
});
</script>