<template>
  <Page :config="{ name: 'FAQ', description: 'Got a question? Find your answer here.' }">
    <div class="content">
      <div class="flex min-h-[50vh] flex-col items-center text-center">
        <h1 class="italic underline decoration-primary decoration-4">FAQ</h1>
        <div class="w-full mb-10" v-for="([topic, questions]) in Object.entries(all_questions)">
          <h2 class="font-semibold text-2xl lg:text-4xl italic underline decoration-primary decoration-4 mb-5 pt-10">{{ topic }}</h2>
          <div class="w-full" v-for="(data, index) in questions" :key="index">
            <div class="py-4 px-4 lg:px-8 bg-accent flex justify-between items-center cursor-pointer border-b-4 border-primary" @click="toggleContent(topic, index)">
              <p class="text-lg select-none" v-html="data.question"></p>
              <Icon :id="topic + index" class="w-7 h-7 shrink-0" name="material-symbols:keyboard-arrow-down-rounded"></Icon>
            </div>
            <Transition>
              <div v-if="isVisible(topic, index)" class="py-4 px-4 lg:px-8 w-full bg-accent text-left border-b-8 border-background">
                <p class="text-lg opacity-80 -z-50" v-html="data.answer"></p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<script setup>
const { $anime } = useNuxtApp();

const all_questions = {
  "General" : [
    { question: "Where do I get the mods?", answer: "Most of the mods are hosted on our <a class='underline' target=_blank href='https://github.com/ForzaMods'>GitHub</a> or this website. Modelswaps are currently limited to the <a class='underline' target=_blank href='/discord'>Discord Server</a>." },
    { question: "How do I install mods?", answer: "Most mods will just be drag and drop into the mediaoverride folder. There is a <a class='underline' href='/mod-manager'>Mod Manager</a> currently in development." },
    { question: "How do I mod on console?", answer: "You don't. Get a pc or get someone with a pc to mod for you." },
    { question: "Is anything paid?", answer: "No. We believe mods should be free. If you want to support us, you can take a look at <a class='underline' href='/support-us'>this page</a>." },
  ],
  "AIO" : [
    { question: "What games does the AIO tool support?", answer: "The tool supports the latest versions of both FH4 and FH5. It works both with the MS (or Xbox App) and the Steam version. FM8 support may be available soon." },
    { question: "What dependencies do I need for the AIO?", answer: "You just need <a class='underline' target=_blank href='https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-7.0.14-windows-x64-installer'>Dot NET 7.0.14</a>."}
  ],
  "Swapping" : [
    { question: "How do I modelswap?", answer: "You can a modelswap guide on our <a class='underline' target=_blank href='/discord'>Discord Server</a>. <span class='line-through'>You can find a modelswap guide <a class='underline' target=_blank href='/modelswap'>here</a>.</span>" },
    { question: "How do I saveswap?", answer: "You can find a saveswap guide for FH5 <a class='underline' target=_blank href='https://gist.github.com/szaaamerik/ec5a1aa522bed118b33bebbd5433d838'>here</a> and for FH4 you can use the AIO if you have the MS version or <a class='underline' target=_blank href='https://docs.google.com/document/d/1LdXcqBSg1suraLZeKn2tTNIMd1K3bjCIO69l-eYZgpQ/edit'>this guide</a>." },
  ],
  "Other" : [
    { question: "How can I avoid getting banned?", answer: "The simple answer is don't mod.<br><br>If you show your gamertag while you have a custom car you can get banned. If you try and bypass the anticheat you can get banned. If you add 999 quadrillion credits and wheelspins to your account you are almost certainly going to get banned.<br><br>Do things sensibly to reduce your chances but as long as you are modding the chance will never be zero." },
    { question: "How do I know Im banned?", answer: "Use <a class='underline' target=_blank href='https://forza.net/myforza/banhistory/'>this website</a> to check your ban history and reason." },
    { question: "I got permanently banned. What can I do?", answer: "Unfortunately your account is banned forever. You will need to create a new account and either use a HWID spoofer or reinstall windows to bypass any subsiquent accounts getting automatically shadow banned.<br><br>To avoid flagging the new install DO NOT sign into any account that was on your previous install of windows. You can sign your retail account(account you use to purchase games) into the Microsoft store but DO NOT sign it into the xbox companion app.<br><br>These HWID restrictions do not apply to the Steam version so you can just make a new Xbox live account and log into the game to start playing again." },
  ]
}

var visibleIndex = ref(-1);
var currentTopic = ref("");

const toggleContent = (topic, number) => {
  $anime({targets: `#${currentTopic.value}${visibleIndex.value}`, rotate: [180, 0], duration: 500, easing: 'easeOutQuint'});
  if (visibleIndex.value === number && currentTopic.value === topic) {
    visibleIndex.value = -1;
    currentTopic.value = "";
  } else {
    visibleIndex.value = number;
    currentTopic.value = topic;
    $anime({targets: `#${currentTopic.value}${visibleIndex.value}`, rotate: [0, 180], duration: 500, easing: 'easeOutQuint'});
  }
}

const isVisible = (topic, questionIndex) => {
  return visibleIndex.value === questionIndex && currentTopic.value === topic;
}
</script>
