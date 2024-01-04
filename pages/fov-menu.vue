<template>
  <Page>
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center text-center">
        <h1 class="text-4xl lg:text-7xl font-semibold italic underline decoration-primary decoration-4">{{ base.name }}</h1>
        <div class="flex justify-center items-center my-20 flex-col gap-10">
          <img class="rounded-xl lg:rounded-3xl" src="/fov-menu-preview.png" alt="">
          <div class="flex flex-col gap-5 text-lg lg:text-xl lg:px-10">
            <h2 class="font-semibold text-3xl">Description:</h2>
            <p>{{ base.description }}</p>
            <h2 class="font-semibold text-3xl">Features:</h2>
            <ul class="child:mb-5">
              <li>Quick save and load - allows you to make your own presets and load them on the next startup</li>
              <li>Should be over forza updates as it uses array of byte scanning</li>
              <li>User friendly GUI</li>
            </ul>
          </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row mb-8">
          <a href="https://github.com/ForzaMods/Fov-Menu/releases/latest" target=_blank class="button">Download</a>
          <a href="https://github.com/ForzaMods/Fov-Menu" target=_blank class="button">Source Code</a>
        </div>
      </div>
    </div>
  </Page>
</template>

<script setup>
import config from '~/assets/config.json';
const base = config["projects-page"]["3"];

useSeoMeta({
  title: `Forza Mods | ${base.name}`,
  ogTitle: `Forza Mods | ${base.name}`,
  description: base.description,
  ogDescription: base.description,
  ogImage: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`, 
  twitterCard: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`,
});
</script>