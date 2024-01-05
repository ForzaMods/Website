<template>
  <div class="w-full shadow-md shadow-accent fixed flex flex-col lg:inline header z-50" style="opacity: 0;">
    <nav class="adjustSize py-5 flex justify-between items-center transition-all duration-400">
      <div class="font-medium text-2xl">
        <a href="/"><img class="inline w-8 lg:w-12 rounded-sm" src="/a_6c6d80f833498984d5ca99725e410c4c.gif" alt=""></a>
      </div>
      <div class="hidden lg:inline child:header-item items m-0 p-0 ml-1">
        <div class="flex flex-col relative group hover:opacity-100">
          <a href="/projects" class="cursor-pointer transition-all hover:opacity-80">Projects</a>
          <div class="hidden group-hover:block absolute left-0 pt-7">
            <div class="bg-accent shadow-md child:text-font child-hover:text-font" v-for="project in $cfg()['projects-page']">
              <a :href="project.path" class="block px-4 py-2 transition-all hover:opacity-80">{{ project.name.replaceAll(' ', '&nbsp') }}</a>
            </div>
          </div>
        </div>
        <a href="https://github.com/ForzaMods">GitHub</a>
        <a href="/support-us">Support Us</a>
        <a href="/faq">FAQ</a>
      </div>

      <div class="lg:hidden" @click="openMobileMenu">
        <Icon class="w-7 h-7" name="solar:hamburger-menu-linear"></Icon>
      </div>
    </nav>
    <div id="mobileMenuWindow" class="mobileMenuWindow absolute w-screen h-screen -translate-x-full lg:-translate-x-0 lg:hidden overflow-y-auto">
      <div class="flex justify-between items-center pb-5 px-16 pt-5 border-b-2 mb-2 border-accent">
        <div class="font-semibold text-2xl">
          <a href="/"><img class="inline w-8 lg:w-12" src="/a_6c6d80f833498984d5ca99725e410c4c.gif" alt=""></a>
        </div>
        <div @click="closeMobileMenu">
          <Icon class="w-7 h-7" name="material-symbols:close"></Icon>
        </div>
      </div>
      <div class="flex justify-between flex-col h-full px-16 mb-20">
        <div class="flex flex-col child:mobile-header-item">
          <div class="flex flex-col relative group">
            <span>
              <a href="/projects" class="cursor-pointer">Projects</a>
              <Icon @click="toggleMobileView('projects')" id="projects-button" class="w-7 h-7" name="material-symbols:keyboard-arrow-down-rounded"></Icon>
            </span>
            <div v-for="project in $cfg()['projects-page']" class="opacity-0 -z-50 h-0" id='projects'>
              <a :href="project.path" class="ml-4 mb-2 block">{{ project.name.replaceAll(' ', '&nbsp') }}</a>
            </div>
          </div>
          <a href="https://github.com/ForzaMods">GitHub</a>
          <a href="/support-us">Support Us</a>
          <a href="/faq">FAQ</a>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $anime } = useNuxtApp();

onMounted(async () => {
  $anime({ targets: '.header', translateY: [-200, 0], opacity: 1, duration: 800, delay: 100, easing: 'easeOutExpo'});

  addEventListener('scroll', () => {
    if (window.innerWidth < 768) return;
    const nav = document.getElementsByTagName('nav')[0];
    if (window.scrollY > 3) {
      nav.classList.remove('py-5');
      nav.classList.add('py-2');
    } 
    else {
      nav.classList.add('py-5');
      nav.classList.remove('py-2');
    }
  });
});

var openMobileMenu = null; 
var closeMobileMenu = null;
var toggleMobileView = null;
onMounted(() => {
  openMobileMenu = () => {
    $anime({ targets: '#mobileMenuWindow', translateX: [-100, 0], duration: 800, easing: 'easeOutExpo'});
  };

  closeMobileMenu = () => {
    $anime({ targets: '#mobileMenuWindow', translateX: [0, '-100vw'], duration: 700, easing: 'easeOutQuint'});
  };

  toggleMobileView = (part) => {
    document.getElementById(part).classList.toggle('extended');
    if (document.getElementById(part).classList.contains('extended')) {
      $anime({ targets: `#${part}`, height: ['0px', '100%'], opacity: [0, 1], duration: 300, zIndex: 0, easing: 'easeOutQuint'})
      $anime({ targets: `#${part}-button`, rotate: [0, 180], duration: 500, easing: 'easeOutQuint'})
    } else {
      $anime({ targets: `#${part}`, height: ['100%', '0px'], opacity: [1, 0], duration: 300, zIndex: -100, easing: 'easeOutQuint'})
      $anime({ targets: `#${part}-button`, rotate: [180, 0], duration: 500, easing: 'easeOutQuint'})
    }
  }
});
</script>