<template>
  <Page>
    <div class="content">
        <div class="h-[80vh] flex flex-col justify-center text-center gap-10 items-center">
            <h1 class="text-4xl lg:text-6xl font-semibold italic underline decoration-primary decoration-4">Error {{ error.statusCode }}</h1>
            <a @click="handleError()" class="linkButton cursor-pointer">Go back</a>
        </div>
    </div>
  </Page>
</template>

<script setup>
const props = defineProps({
  error: Object
})
const handleError = () => clearError({}).finally(useRouter().back());
</script>
