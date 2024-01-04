<template>
  <Page>
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center">
        <h1 class="text-3xl lg:text-5xl font-semibold italic underline decoration-primary decoration-4 mb-10">Our projects</h1>
        <div class="mb-10 flex flex-wrap gap-10 justify-center">
          <Project v-for="project in config['projects-page']" :cfg="project" />
        </div>
      </div>
    </div>
  </Page>
</template>

<script setup>
import config from '~/assets/config.json';

useSeoMeta({
  title: `Forza Mods | Projects`,
  ogTitle: `Forza Mods | Projects`,
  description: "A list of all our projects related to Forza Horizon.",
  ogDescription: "A list of all our projects related to Forza Horizon.",
  ogImage: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`, 
  twitterCard: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`,
});
</script>