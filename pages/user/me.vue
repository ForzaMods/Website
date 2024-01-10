<script setup>
const user = useSupabaseUser();
const router = useRouter();
if (user.value) { router.push('/user/' + user.value.user_metadata.full_name); } else { router.push('/login'); }
</script>