<template>
  <div class="w-full shadow-md shadow-accent fixed flex flex-col lg:inline header z-50" style="opacity: 0;">
    <nav class="adjustSize py-5 flex justify-between items-center transition-all duration-400">
      <div class="font-medium text-2xl">
        <a href="/"><img class="inline w-8 lg:w-12 rounded-sm" src="/forza-mods-small.gif" alt=""></a>
      </div>
      <div class="hidden lg:flex child:header-item items-center items m-0 p-0 ml-1">
        <div class="flex flex-col relative group hover:opacity-100">
          <a href="/projects" class="cursor-pointer transition-all hover:opacity-80">Projects</a>
          <div class="hidden group-hover:block absolute left-0 pt-7">
            <div class="bg-accent shadow-md child:text-font child-hover:text-font" v-for="project in $cfg()['projects-page']">
              <a :href="project.path" class="block px-4 py-2 transition-all hover:opacity-80">{{ project.name.replaceAll(' ', '&nbsp') }}</a>
            </div>
          </div>
        </div>
        <a href="/faq">FAQ</a>
        <a href="/ideas">Ideas</a>
        <a href="https://github.com/ForzaMods">GitHub</a>
        <div class="group w-9 h-9 mr-1 !opacity-100">
          <div v-if="user" @click="toggleProfile">
            <img class="w-full h-full rounded-full cursor-pointer" :src="user.user_metadata.avatar_url" alt=""> 
            <div ref="profileMenu" class="absolute top-14 right-0 flex-col bg-accent !hidden">
              <div class="flex flex-col child:transition child-hover:opacity-80 child:px-4 child:py-2">
                <a :href="'/user/' + user.user_metadata.full_name">My&nbspProfile</a>
                <a @click="signOut" class="cursor-pointer transition hover:opacity-80 px-4 py-2">Sign&nbspout</a>
              </div>
            </div>
          </div>
          <a v-else href="/login"><Icon class="w-full h-full p-1" name="material-symbols:person"></Icon></a>
        </div>
      </div>
      <div class="lg:hidden" @click="openMobileMenu">
        <Icon class="w-7 h-7" name="solar:hamburger-menu-linear"></Icon>
      </div>
    </nav>
    <div id="mobileMenuWindow" class="mobileMenuWindow absolute w-screen h-screen -translate-x-full lg:-translate-x-0 lg:hidden overflow-y-auto">
      <div class="flex justify-between items-center pb-5 px-16 pt-5 border-b-2 mb-2 border-accent">
        <div class="font-semibold text-2xl">
          <a href="/"><img class="inline w-8 lg:w-12" src="/forza-mods-small.gif" alt=""></a>
        </div>
        <div @click="closeMobileMenu">
          <Icon class="w-7 h-7" name="material-symbols:close"></Icon>
        </div>
      </div>
      <div class="flex justify-between flex-col h-full px-16 mb-20">
        <div class="flex flex-col child:mobile-header-item">
          <div v-if="user" class="child:block">
            <a :href="'/user/' + user.user_metadata.full_name">My&nbspProfile</a>
            <a @click="signOut" class="cursor-pointer">Sign out</a>
          </div>
          <a v-else href="/login">Login</a>
          <div class="flex flex-col relative group">
            <span>
              <a href="/projects" class="cursor-pointer">Projects</a>
              <Icon @click="toggleMobileView('projects')" id="projects-button" class="w-7 h-7" name="material-symbols:keyboard-arrow-down-rounded"></Icon>
            </span>
            <div v-for="project in $cfg()['projects-page']" class="opacity-0 -z-50 h-0" id='projects'>
              <a :href="project.path" class="ml-4 mb-2 block">{{ project.name.replaceAll(' ', '&nbsp') }}</a>
            </div>
          </div>
          <a href="/faq">FAQ</a>
          <a href="/ideas">Ideas</a>
          <a href="https://github.com/ForzaMods">GitHub</a>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const { $anime } = useNuxtApp();

const signOut = async () => {
  toggleProfile();
  useRouter().push('/');
  const { error } = await useSupabaseClient().auth.signOut();
}

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
const profileMenu = ref(null);
const toggleProfile = () => {
  profileMenu.value.classList.toggle('!hidden');
  profileMenu.value.classList.toggle('!flex');
};
</script>