<template>
  <Page :config="$cfg()['projects-page']['4']">
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center text-center">
        <h1 class="italic underline decoration-primary decoration-4">{{ $cfg()['projects-page']['4'].name }}</h1>
        <div class="flex justify-center items-center my-20 flex-col gap-10">
          <img class="rounded-xl lg:rounded-3xl" src="/project-source/fov-menu-preview.png" alt="">
          <div class="flex flex-col gap-5 text-lg lg:text-xl lg:px-10">
            <h2 class="font-semibold text-3xl">Description:</h2>
            <p>{{ $cfg()['projects-page']['4'].description }}</p>
            <h2 class="font-semibold text-3xl">Features:</h2>
            <ul class="child:mb-5">
              <li>Quick save and load - allows you to make your own presets and load them on the next startup</li>
              <li>Should be over forza updates as it uses array of byte scanning</li>
              <li>User friendly GUI</li>
            </ul>
          </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row mb-8">
          <a href="https://github.com/ForzaMods/Fov-Menu/releases/latest" target=_blank class="linkButton">Download</a>
          <a href="https://github.com/ForzaMods/Fov-Menu" target=_blank class="linkButton">Source Code</a>
        </div>
      </div>
    </div>
  </Page>
</template>