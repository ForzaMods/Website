<template>
  <Page :config="$cfg()['projects-page']['3']">
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center text-center">
        <h1 class="italic underline decoration-primary decoration-4">{{ $cfg()['projects-page']['3'].name }}</h1>
        <div class="flex justify-center items-center my-20 flex-col gap-10">
          <div class="flex flex-col gap-5 text-lg lg:text-xl lg:px-10">
            <h2 class="font-semibold text-3xl">Description:</h2>
            <p>{{ $cfg()['projects-page']['3'].description }}</p>
            <h2 class="font-semibold text-3xl">Features:</h2>
            <ul class="child:mb-5">
              <li>Show all cars in the autoshow</li>
              <li>Make all cars free</li>
              <li>Make all visual and performance upgrades free</li>
              <li>Quick add all and rare cars (requires car pass)</li>
            </ul>
          </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row mb-8">
          <a href="https://github.com/ForzaMods/Car-Table/releases/tag/latest" target=_blank class="linkButton">Download</a>
          <a href="https://github.com/ForzaMods/Car-Table" target=_blank class="linkButton">Source Code</a>
        </div>
      </div>
    </div>
  </Page>
</template>