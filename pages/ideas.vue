<template>
    <Page :config="{ name: 'Ideas', description: 'Submit your own ideas for new features and mods here!' }">
        <div v-if="user" class="content">
            <div class="flex min-h-[50vh] flex-col items-center text-center">
                <h1 class="!text-5xl italic underline decoration-primary decoration-4">Submit your ideas (Soon™)</h1>
                <div v-if="user" class="mt-10 flex flex-col w-full text-left">
                    <span class="text-xl font-medium mb-2">Select a topic</span>
                    <select disabled v-model="selectedTopic" class="w-full bg-accent p-5 focus:outline-none">
                        <option disabled selected>Nothing selected yet</option>
                        <option>Suggestion for a new project</option>
                        <option>Suggestion for a new feature</option>
                        <option>Suggestion for a feature to be changed or removed</option>
                        <option>Other</option>
                    </select>
                    <span class="text-xl font-medium mb-2 mt-5">Title</span>
                    <input disabled v-model="title" type="text" autocomplete="off" maxlength="50" class="bg-accent p-5 focus:outline-none">
                    <span class="text-xl mb-2 mt-5">Description</span>
                    <textarea disabled v-model="description" rows="10" maxlength="2000" class="bg-accent p-5 focus:outline-none"></textarea>
                    <span @click="useRouter().push('/')" v-if="isFormValid" class="linkButton cursor-pointer w-fit self-center mt-10">Submit</span>
                </div>
            </div>
        </div>
    </Page>
</template>

<script setup>
const user = useSupabaseUser();

definePageMeta({
  middleware: 'is-authenticated',
});

const title = ref('');
const description = ref('');
const selectedTopic = ref('');

const isFormValid = computed(() => {
    return selectedTopic.value !== '' && title.value.trim() !== '' && description.value.trim() !== '';
});
</script>