<template>
    <div class="w-full h-fit bg-accent flex flex-col justify-between items-center rounded relative pt-10 pb-5 border-2 border-primary">
        <div class="h-full w-full flex justify-center items-center">
            <h2 class="text-xl lg:text-3xl font-semibold italic underline decoration-primary decoration-4 ">{{ config.name }}</h2>
        </div>
        <div class="h-full w-full p-5 py-7 lg:p-10 text-lg font-medium flex justify-evenly flex-col items-center">
            <div class="child:mb-5">
            <p>
                <span class="underline">Supported games:</span>&nbsp
                <span class="font-base no-underline">{{ config.gamesupport }}</span>
            </p>
            <p>
                <span class="underline">Contributors:</span>&nbsp
                <span v-if="isLoading" class="font-base">Loading...</span>
                <span v-else class="font-base" v-html="formattedContributors"></span>
                
            </p>
            <p>
                <span class="underline">Lastest release:</span>&nbsp
                <span v-if="isLoading" class="font-base">Loading...</span>
                <span v-else class="font-base">{{ timeAgo }}</span>
            </p>
            </div>
            <a :href="config.path" class="button w-fit">View project</a>       
        </div>
    </div>
</template>

<script setup>
const config = useAttrs().cfg;
import { formatDistanceToNow } from 'date-fns';

const payload = ref([]);
const contributors = ref([]);
const isLoading = ref(true);

onMounted(async () => {
    try {
        const [latestReleaseResponse, contributorsResponse] = await Promise.all([
            fetch(`https://api.github.com/repos/ForzaMods/${config.repository}/releases/latest`),
            fetch(`https://api.github.com/repos/ForzaMods/${config.repository}/contributors`)
        ]);

        payload.value = await latestReleaseResponse.json();
        contributors.value = await contributorsResponse.json();
    } finally {
        isLoading.value = false; // Set isLoading to false once both requests are done
    }
});

const timeAgo = computed(() => {
    if (config.repository == "#") {
        return "Not available."
    }
    if (payload.value && payload.value.published_at) {
        const publishedAt = new Date(payload.value.published_at);
        return formatDistanceToNow(publishedAt, { addSuffix: true });
    } else {
        return "Not available."; // or handle the case when published_at is not available
    }
});

const formattedContributors = computed(() => {
    if (config.repository == "#") {
        return "Not available."
    }
  return contributors.value.map(contributor => {
    return `<a class="hover:underline" href="${contributor.html_url}" target="_blank">${contributor.login}</a>`;
  }).join(', ');
});
</script>