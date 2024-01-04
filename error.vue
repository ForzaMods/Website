<template>
  <Page>
    <div class="content">
        <div class="h-[80vh] flex flex-col justify-center text-center gap-10 items-center">
            <h1 class="text-4xl lg:text-xl font-semibold italic underline decoration-primary decoration-4">Error {{ error.statusCode }} - {{ error }}</h1>
            <a @click="handleError()" class="text-md lg:text-lg py-3 px-7 border-2 border-font/50 hover:border-font/80 transition w-fit hover:cursor-pointer">Go back</a>
        </div>
    </div>
  </Page>
</template>

<script setup>
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>
