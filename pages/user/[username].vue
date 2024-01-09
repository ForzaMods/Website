<template>
    <Page :config="{ name: username, description: 'Take a look at your profile!' }">
        <div v-if="user" class="content">
            <h1 class="!text-5xl italic underline decoration-primary decoration-4">Welcome {{ user.user_metadata.custom_claims.global_name }}!</h1>
            <p class="text-lg font-medium mt-4">Discord account created on {{ getDateOfAccountCreation().toLocaleDateString() }}.</p>
            <p class="text-lg font-medium mt-1" v-if="isAccountNew()">New Account detected. <Icon name="bi:exclamation-triangle-fill"></Icon></p>
            <p v-else class="text-lg font-medium mt-1 select-none">&nbsp</p>
            <h1 class="!text-4xl italic underline decoration-primary decoration-4 mt-10">Ideas</h1>
            <p v-if="onIdeasCooldown()" class="text-lg font-medium mt-4">>You are on cooldown.</p>
            <p v-else class="text-lg font-medium mt-4">You can submit an idea. <a class="underline" href="/ideas">Click here!</a></p>
        </div>
    </Page>
</template>

<script setup>
const route = useRoute();
const username = route.params.username;
const user = useSupabaseUser();

if (!user.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page could not be found.',
    });
}

const getDateOfAccountCreation = () => {
  return new Date(Number(BigInt(user.value.user_metadata.provider_id) >> 22n) + 1420070400000);
}

const isAccountNew = () => {
    return new Date().getTime() - getDateOfAccountCreation() < 7889238000;
}

const onIdeasCooldown = () => {
  return false;
}
</script>