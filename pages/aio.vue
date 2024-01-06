<template>
  <Page :config="$cfg()['projects-page']['0']">
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center text-center">
        <h1 class="italic underline decoration-primary decoration-4">{{ $cfg()['projects-page'][0].name }}</h1>
        <div class="flex justify-center items-center my-20 flex-col-reverse lg:flex-row gap-10">
          <div class="flex flex-col gap-5 text-lg lg:text-xl lg:px-10">
            <h2 class="font-semibold text-3xl">Description:</h2>
            <p>{{ $cfg()['projects-page'][0].description }}</p>
            <h2 class="font-semibold text-3xl">Features:</h2>
            <p>If you want to get a list of all features, planned features and requested features, just look at our <a class="underline" target=_blank href="https://trello.com/b/jXY01dbN/forza-mods-aio">Trello</a>.</p>
          </div>
          <Carousel :autoplay="3000" :wrap-around="false" :mouse-drag="false" :touch-drag="false" :loop="true">
            <Slide v-for="slide in ['/aio-1.png', '/aio-2.png', '/aio-3.png', '/aio-4.png']" :key="slide">
              <div><img class="rounded-xl lg:rounded-3xl" :src="'/project-source' + slide" alt=""></div>
            </Slide>
          </Carousel>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row mb-8">
          <a href="https://github.com/ForzaMods/AIO/releases/latest" target=_blank class="linkButton">Download</a>
          <a href="https://github.com/ForzaMods/AIO" target=_blank class="linkButton">GitHub</a>
          <a href="https://github.com/ForzaMods/Forza-Mods-AIO" target=_blank class="linkButton">Source Code</a>
        </div>
      </div>
    </div>
  </Page>
</template>