<template>
  <Page :config="{ description: 'Forza Mods is the largest community for forza game modifications, which specializes in reverse engineering.'}">
    <div class="content">
      <div class="flex h-[90vh] flex-col lg:justify-around items-center text-center">
        <div>
          <h1 class="text-4xl lg:text-7xl font-semibold italic underline decoration-primary decoration-4">Forza Mods</h1>
          <p class="text-lg lg:text-2xl font-medium mt-6 px-2 lg:px-20">Forza Mods is the largest community for forza game modifications, which specializes in reverse engineering. It's also the home for the largest forza modding tool, which is the <a href="/aio" class="underline decoration-primary decoration-2 hover:opacity-80 transition">AIO</a>.</p>
        </div>
        <a @click="goTo('explore')" class="linkButton mt-[50%] lg:mt-0">Explore</a>
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
    image: "/76bb7b3fdd7107c80f4159b3ee5cbcaa.webp",
    name: "d3fekt",
    role: "Server Owner, OG",
    socialLinks: []
  },
  {
    image: "https://avatars.githubusercontent.com/u/38233332",
    name: "itsLogic",
    role: "Manager, ex AIO Contributor",
    socialLinks: [
      { href: "https://github.com/ItsLogic", icon: "mdi:github" },
      { href: "https://www.buymeacoffee.com/comamnds", icon: "simple-icons:buymeacoffee" },
      { href: "https://www.youtube.com/@comamnds", icon: "tabler:brand-youtube-filled" }
    ]
  },
  {
    image: "https://avatars.githubusercontent.com/u/126014478",
    name: "szaaamerik",
    role: "AIO and Tool Contributor",
    socialLinks: [
      { href: "https://github.com/szaaamerik", icon: "mdi:github" },
      { href: "https://www.buymeacoffee.com/merika", icon: "simple-icons:buymeacoffee" },
      { href: "https://youtube.com/@Szamerik", icon: "tabler:brand-youtube-filled" }
    ]
  },
  {
    image: "https://avatars.githubusercontent.com/u/46374629",
    name: "Yeethan69",
    role: "AIO Contributor",
    socialLinks: [
      { href: "https://github.com/Yeethan69", icon: "mdi:github" },
      { href: "https://www.buymeacoffee.com/Yeethan69", icon: "simple-icons:buymeacoffee" },
      { href: "https://www.paypal.com/donate?hosted_button_id=DACQKRJ4HTZRN", icon: "ic:baseline-paypal" }
    ]
  },
  {
    image: "https://avatars.githubusercontent.com/u/81194615",
    name: "d4vss",
    role: "Web Developer",
    socialLinks: [
      { href: "https://github.com/d4vss", icon: "mdi:github" },
    ]
  },
  {
    image: "/a_f5c483b6c6aad54f9d7b7475d21f752a.gif",
    name: "Δriza",
    role: "Discord Admin",
    socialLinks: [
      { href: "https://github.com/TehChozinOne", icon: "mdi:github" }
    ]
  },
  {
    image: "/4ebf8cc3c2613ab310117e62f786c089.webp",
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