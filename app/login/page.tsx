import Image from "next/image";
import LoginButtons from "@/components/login-buttons";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  if (session && session.user) return redirect("/user/profile");
  return (
    <>
      <div className="grid lg:grid-cols-2 ">
        <div className="flex justify-center items-center self-center h-full z-10 xl:bg-opacity-100 mx-4">
          <div className="py-10 px-6 border rounded bg-opacity-75 max-lg:translate-y-1/2 max-lg:w-full w-fit h-fit">
            <h2 className="font-semibold text-lg">Log in</h2>
            <p className="opacity-70 mb-10">to continue to Forza Mods</p>
            <LoginButtons />
          </div>
        </div>
        <Image
          src="/img/auth-banner.png"
          alt="Login Banner"
          width={2000}
          height={1500}
          className="h-[calc(100vh-9.1rem)] object-cover max-lg:absolute"
          priority
        />
      </div>
    </>
  );
}