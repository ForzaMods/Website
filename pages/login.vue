<template>
    <div class="min-h-[80vh] flex justify-center items-center">
        <h1 class="italic underline decoration-primary decoration-4">Redirecting...</h1>
    </div>
</template>

<script setup>
definePageMeta({
  middleware: 'is-authenticated',
});
</script>