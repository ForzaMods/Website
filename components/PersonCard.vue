<template>
  <div class="flex flex-col text-center items-center bg-accent py-7 px-5 w-full lg:w-[400px]">
    <img :src="image" class="w-[25%] rounded-full">
    <span class="mt-5 text-lg font-medium">{{ name }}</span>
    <span class="mt-1 text-lg text-font opacity-70 font-medium">{{ role }}</span>
    <div v-if="socialLinks.length" class="flex justify-center gap-2 child:child:w-7 child:child:h-7 child:child:text-font opacity-70 mt-5">
      <a v-for="(link, index) in socialLinks" :key="index" :href="link.href" target="_blank">
        <Icon :name="link.icon"></Icon>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    role: String,
    contributions: String,
    socialLinks: Array,
  },
};
</script>