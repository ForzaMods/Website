<template>
  <Page :config="{ name: 'Projects', description: 'A list of all our projects related to Forza Horizon.' }">
    <div class="content">
      <div class="flex min-h-[50vh] flex-col lg:justify-around items-center">
        <h1 class="italic underline decoration-primary decoration-4 mb-10">Our projects</h1>
        <div class="mb-10 flex flex-wrap gap-10 justify-center">
          <Project v-for="project in $cfg()['projects-page']" :cfg="project" />
        </div>
      </div>
    </div>
  </Page>
</template>