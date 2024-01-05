<template>
  <Page :config="{ name: 'Support us', description: 'Support us now. Every contribution makes a meaningful impact.' }">
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center">
        <h1 class="text-4xl lg:text-7xl font-semibold italic underline decoration-primary decoration-4">Support us</h1>
        <div class="flex items-center my-20 flex-col-reverse lg:flex-row gap-20">
          <img src="/a450770bc2.gif" alt="">
          <div>
            <span class="font-medium text-lg">Support us</span>
            <div class="flex flex-col items-start">
              <div v-for="(donation_link, donation_text) in $cfg()['support-us']">
                <a class="hover:underline" target=_blank :href="donation_link">{{ donation_text }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>