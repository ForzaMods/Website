<template>
  <Page>
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center">
        <h1 class="text-4xl lg:text-7xl font-semibold italic underline decoration-primary decoration-4">Support us</h1>
        <div class="flex items-center my-20 flex-col-reverse lg:flex-row gap-20">
          <img src="/a_6c6d80f833498984d5ca99725e410c4c.gif" alt="">
          <div>
            <span class="font-medium text-lg">Support us</span>
            <div class="flex flex-col items-start">
              <div v-for="(donation_link, donation_text) in config['support-us']">
                <a class="hover:underline" target=_blank :href="donation_link">{{ donation_text }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<script setup>
import config from '~/assets/config.json';

useSeoMeta({
  title: `Forza Mods | Support us`,
  ogTitle: `Forza Mods | Support us`,
  description: "Support us now. Every contribution makes a meaningful impact.",
  ogDescription: "Support us now. Every contribution makes a meaningful impact.",
  ogImage: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`, 
  twitterCard: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`,
});
</script>