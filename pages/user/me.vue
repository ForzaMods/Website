<script setup>
const user = useSupabaseUser();
const router = useRouter();
if (user.value) { router.push('/user/' + user.value.user_metadata.full_name); } throw createError({
  statusCode: 404,
  statusMessage: 'Page could not be found.',
});
</script>