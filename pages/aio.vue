<template>
  <Page>
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center text-center">
        <h1 class="text-4xl lg:text-7xl font-semibold italic underline decoration-primary decoration-4">{{ base.name }}</h1>
        <div class="flex justify-center items-center my-20 flex-col-reverse lg:flex-row gap-10">
          <div class="flex flex-col gap-5 text-lg lg:text-xl lg:px-10">
            <h2 class="font-semibold text-3xl">Description:</h2>
            <p>{{ base.description }}</p>
            <h2 class="font-semibold text-3xl">Features:</h2>
            <p>If you want to get a list of all features, planned features and requested features, just look at our <a class="underline" target=_blank href="https://trello.com/b/jXY01dbN/forza-mods-aio">Trello</a>.</p>
          </div>
          <Carousel :autoplay="3000" :wrap-around="false" :mouse-drag="false" :touch-drag="false" :loop="true">
            <Slide v-for="slide in config['aio-images']" :key="slide">
              <div><img class="rounded-xl lg:rounded-3xl" :src="slide" alt=""></div>
            </Slide>
          </Carousel>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row mb-8">
          <a href="https://github.com/ForzaMods/AIO/releases/latest" target=_blank class="button">Download</a>
          <a href="https://github.com/ForzaMods/AIO" target=_blank class="button">GitHub</a>
          <a href="https://github.com/ForzaMods/Forza-Mods-AIO" target=_blank class="button">Source Code</a>
        </div>
      </div>
    </div>
  </Page>
</template>

<script setup>
import config from '~/assets/config.json';
const base = config["projects-page"]["0"];

useSeoMeta({
  title: `Forza Mods | ${base.name}`,
  ogTitle: `Forza Mods | ${base.name}`,
  description: base.description,
  ogDescription: base.description,
  ogImage: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`, 
  twitterCard: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`,
});
</script>