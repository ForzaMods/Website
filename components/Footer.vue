<template>
  <div class="absolute bottom-0 w-full h-fit border-t-2 border-accent">
    <div class="adjustSize flex justify-between h-full py-10 flex-col gap-5">
      <span>Forza Mods © {{ new Date().getFullYear() }}</span>
      <div class="flex flex-col lg:flex-row justify-between lg:items-center gap-10 lg:gap-20">
        <div>
          <span class="font-semibold mb-2">Our projects</span>
          <div class="child:block child:w-fit child:text-font opacity-80 child-hover:underline" v-for="(project_path, project_name) in config['projects-items']">
            <a :href="project_path">{{ project_name }}</a>
          </div>
        </div>
        <div>
          <span class="font-semibold mb-2">Support us</span>
          <div class="child:block child:w-fit child:text-font opacity-80 child-hover:underline" v-for="(donation_link, donation_text) in config['support-us']">
            <a target=_blank :href="donation_link">{{ donation_text }}</a>
          </div>
        </div>
        <div>
          <span class="font-semibold mb-2">Connect with us</span>
          <div class="child:block child:w-fit child:text-font opacity-80 child-hover:underline">
            <a href="https://github.com/ForzaMods">GitHub</a>
            <a href="/discord">Discord</a>
          </div>
        </div>
        <div>
          <span class="font-semibold">Preferences</span>
          <div class="child:block child:w-6 child:h-6 child:text-font opacity-80 flex gap-2 my-1 child-hover:cursor-pointer">
            <Icon @click="setTheme('light')" name="material-symbols:light-mode-outline-rounded"></Icon>
            <Icon @click="setTheme('dark')" name="material-symbols:dark-mode-outline-rounded"></Icon>
            <Icon @click="setTheme('nord')" name="simple-icons:nordicsemiconductor"></Icon>
            <Icon @click="setTheme('system')" name="gridicons:computer"></Icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import config from '~/assets/config.json';

var setTheme = null;

const colors = {
  "light" : {
    "text" : "#000000",
    "background" : '#ffffff',
    "accent" : "#dddddd",
    "primary" : "#6883ba",
    "secondary" : "#3d3b8e"
  },
  "dark" : {
    "text" : "#f1f1f1",
    "background" : '#121212',
    "accent" : "#1d1d1d",
    "primary" : "#6883ba",
    "secondary" : "#3d3b8e"
  },
  "nord" : {
    "text" : "#f1f1f1",
    "background" : "#2e3440",
    "accent" : "#3b4252",
    "primary" : '#434c5e',
    "secondary" : '#4c566a',
  }
  
}

onMounted(() => {
  setTheme = ((name) => {
    localStorage.setItem('a_6c6d80f833498984d5ca99725e410c4c', name);
    const style = document.body.style;
    if (name == "system" && window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) name = "dark";
      else name = "light";
    }
    style.setProperty('--text-color', colors[name]["text"]);
    style.setProperty('--background-color', colors[name]["background"]);
    style.setProperty('--accent-color', colors[name]["accent"]);
    style.setProperty('--primary-color', colors[name]["primary"]);
    style.setProperty('--secondary-color', colors[name]["secondary"]);
  });

  if (localStorage.getItem("a_6c6d80f833498984d5ca99725e410c4c"))
    setTheme(localStorage.getItem("a_6c6d80f833498984d5ca99725e410c4c"));
});
</script>