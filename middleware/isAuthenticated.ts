export default defineNuxtRouteMiddleware((to, from) => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const signInWithOAuth = async (provider: any) => {
    const { error } = await client.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: "http://localhost:3000" + "/user/me",
      },
    });
    if (error) console.log(error);
  }
  if (!user.value) {
    signInWithOAuth('discord');
  } else {
    if (to.fullPath == "/login") {
      useRouter().push("/user/me");
    }
  }
})