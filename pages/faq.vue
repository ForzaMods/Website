<template>
  <Page>
    <div class="content">
      <div class="flex min-h-[50vh] flex-col items-center text-center">
        <h1 class="text-4xl lg:text-7xl font-semibold italic underline decoration-primary decoration-4 mb-10">FAQ</h1>
        <div class="w-full" v-for="(data, index) in questions" :key="index">
          <div class="py-4 px-10 bg-accent flex justify-between cursor-pointer border-b-4 border-primary" @click="toggleContent(index)">
            <p class="text-lg" v-html="data.question"></p>
            <Icon class="w-7 h-7" name="material-symbols:keyboard-arrow-down-rounded"></Icon>
          </div>
          <Transition @enter="onEnter" @leave="onLeave">
            <div v-if="visibleIndex === index" class="py-4 px-10 w-full bg-accent text-left border-b-8 border-background">
              <p class="text-lg opacity-80 -z-50" v-html="data.answer"></p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </Page>
</template>

<script setup>
const { $anime } = useNuxtApp();
import config from '~/assets/config.json';

useSeoMeta({
  title: `Forza Mods | FAQ`,
  ogTitle: `Forza Mods | FAQ`,
  description: "Got a question? Find your answer here.",
  ogDescription: "Got a question? Find your answer here.",
  ogImage: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`, 
  twitterCard: `${config["base-url"]}/a_6c6d80f833498984d5ca99725e410c4c.gif`,
});

// Copy paste
// <a class='underline' target=_blank href=''></a>
const questions = [
  { question: "How to saveswap?", answer: "For FH5: <a class='underline' target=_blank href='https://gist.github.com/szaaamerik/ec5a1aa522bed118b33bebbd5433d838'>here</a><br>For FH4: AIO (for MS) or <a class='underline' target=_blank href='https://docs.google.com/document/d/1LdXcqBSg1suraLZeKn2tTNIMd1K3bjCIO69l-eYZgpQ/edit'>here</a>" },
  { question: "What platforms does the AIO support?", answer: "The tool supports old versions of FH5 and the latest version of FH4 (only 0.0.0.52 and below works because Ethan is a pepega and his obfuscator isnt registered, therefore anything past this version does not launch.)" },
  { question: "How do I know Im banned?", answer: "Use this website to check your ban history and reason: <a class='underline' target=_blank href='https://forza.net/myforza/banhistory/'>here</a>." },
  { question: "How can I avoid getting banned?", answer: "The simple answer is dont mod. If you show your gamertag while you have a custom car you can get banned. If you try and bypass the anticheat you can get banned. If you add 9999999999999 credits and wheelspins to your account you are almost certainly going to get banned. Do things sensibly to reduce your chances but as long as you are modding the chance will never be 0." },
  { question: "I got permanently banned what can I do?", answer: "Unfortunately your account is banned forever. You will need to create a new account and either use a HWID spoofer or reinstall windows to bypass any subsiquent accounts getting automatically shadow banned. To avoid flagging the new install DO NOT sign into any account that was on your previous install of windows. You can sign your retail account(account you use to purchase games) into the Microsoft store but DO NOT sign it into the xbox companion app. These HWID restrictions do not apply to the Steam version so you can just make a new xbox live account and log into the game to start playing again." },
  { question: "How do I mod on console?", answer: "You dont. Get a pc or get someone with a pc to mod for you." },
  { question: "Is anything paid?", answer: "No. We believe mods should be free. If you want to support us, you can take a look at <a class='underline' href='/support-us'>this page</a>." },
  { question: "How do I modelswap?", answer: "Join our <a class='underline' target=_blank href='/discord'>Discord Server</a>. Check all FH related channels and pins." },
  { question: "How do I install mods?", answer: "Most mods will just be drag and drop into the mediaoverride folder. There is a <a class='underline' href='/mod-manager'>Mod Manager</a> currently in development." },
  { question: "Where do I get mods?", answer: "Join our <a class='underline' target=_blank href='/discord'>Discord Server</a>. Check all FH related channels and pins." },
];

var visibleIndex = ref(-1);
const toggleContent = (number) => {
  if (number == visibleIndex.value) visibleIndex.value = -1;
  else visibleIndex.value = number;
}

var onEnter; var onLeave;
// onMounted(() => {
//   onEnter = (el, done) => {
//     $anime({
//       targets: el,
//       opacity: [0, 1],
//       height: ['0px', el.scrollHeight + 'px'],
//       duration: 500,
//       easing: 'easeInOutQuad',
//       complete: done,
//     })
//   }
//   onLeave = (el, done) => {
//     $anime({
//       targets: el,
//       opacity: [1, 0],
//       height: [el.scrollHeight + 'px', '0px'],
//       duration: 500,
//       easing: 'easeInOutQuad',
//       complete: done,
//     })
//   }
// });
</script>