<template>
  <Page :config="{ description: 'Forza Mods is the largest community for forza game modifications, which specializes in reverse engineering.'}">
    <div class="content">
      <div class="flex h-[90vh] flex-col lg:justify-around items-center text-center">
        <div>
          <h1 class="italic underline decoration-primary decoration-4">Forza Mods</h1>
          <p class="text-lg lg:text-2xl font-medium mt-6 px-2 lg:px-20">Forza Mods is the largest community for forza game modifications, which specializes in reverse engineering. It's also the home for the largest forza modding tool, which is the <a href="/aio" class="underline decoration-primary decoration-2 hover:opacity-80 transition">AIO</a>.</p>
        </div>
        <a @click="goTo('explore')" class="linkButton mt-[50%] lg:mt-0 cursor-pointer">Explore</a>
      </div>
      <div id="explore" class="min-h-[100vh] text-center">
        <h2 class="text-2xl lg:text-5xl font-semibold italic underline decoration-primary decoration-4 text-center mb-10 pt-[11vh]">Who we are</h2>
        <p class="text-md lg:text-xl font-medium text-center">We're Forza Mods - the community that is leading Forza game modifications.</p>
        <h2 class="text-xl lg:text-4xl font-semibold italic underline decoration-primary decoration-4 text-center my-10">The Team</h2>
        <div class="flex flex-wrap justify-center flex-col lg:flex-row gap-10">
          <PersonCard
            v-for="(person, index) in team"
            :key="index"
            :image="getImagePath(person.image)"
            :name="person.name"
            :role="person.role"
            :contributions="person.contributions"
            :socialLinks="person.socialLinks"
          />
        </div>
        <div class="my-20">
          <a href="/projects" class="linkButton">Our projects</a>
        </div>
      </div>
    </div>
  </Page>
</template>

<script setup>
const goTo = (id) => {
  document.getElementById(id).scrollIntoView();   
}

const team =  [
  {
    image: "/d3fekt.webp",
    name: "d3fekt",
    role: "Server Owner, OG",
    socialLinks: [
            { href: "https://www.youtube.com/@D3FEKT", icon: "tabler:brand-youtube-filled" }
    ]
  },
  {
    image: "/itsLogic.png",
    name: "itsLogic",
    role: "Manager, ex AIO Contributor",
    socialLinks: [
      { href: "https://github.com/ItsLogic", icon: "mdi:github" },
      { href: "https://www.buymeacoffee.com/comamnds", icon: "simple-icons:buymeacoffee" },
      { href: "https://www.youtube.com/@comamnds", icon: "tabler:brand-youtube-filled" }
    ]
  },
  {
    image: "/szaaamerik.jpg",
    name: "szaaamerik",
    role: "AIO and Tool Contributor",
    socialLinks: [
      { href: "https://github.com/szaaamerik", icon: "mdi:github" },
      { href: "https://www.buymeacoffee.com/merika", icon: "simple-icons:buymeacoffee" },
      { href: "https://youtube.com/@Szamerik", icon: "tabler:brand-youtube-filled" }
    ]
  },
  {
    image: "/yeethan69.png",
    name: "Yeethan69",
    role: "AIO Contributor",
    socialLinks: [
      { href: "https://github.com/Yeethan69", icon: "mdi:github" },
      { href: "https://www.buymeacoffee.com/Yeethan69", icon: "simple-icons:buymeacoffee" },
      { href: "https://www.paypal.com/donate?hosted_button_id=DACQKRJ4HTZRN", icon: "ic:baseline-paypal" }
    ]
  },
  {
    image: "/d4vss.png",
    name: "d4vss",
    role: "Web Developer",
    socialLinks: [
      { href: "https://d4vss.net", icon: "mdi:web"},
      { href: "https://github.com/d4vss", icon: "mdi:github" },
      { href: "https://youtu.be/dQw4w9WgXcQ", icon: "tabler:brand-onlyfans"}
    ]
  },
  {
    image: "/ariza.gif",
    name: "Δriza",
    role: "Discord Admin",
    socialLinks: [
      { href: "https://github.com/TehChozinOne", icon: "mdi:github" }
    ]
  },
  {
    image: "/jeeb.webp",
    name: "Jeeb",
    role: "Discord Moderator",
    socialLinks: []
  },
]

const getImagePath = (image) => {
  if (image.startsWith("/")) {
    return `/avatar${image}`;
  } else {
    return image;
  }
}
</script>
