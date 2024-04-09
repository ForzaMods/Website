import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://forzamods.dev'),
  title: "Sign In | Forza Mods - The Forza Modding Community",
  description: "Sign in and download mods for Forza Games. Select from a variety of different mods, upload your own and share.",
  openGraph: {
    title: "Sign In | Forza Mods - The Forza Modding Community",
    description: "Sign in and download mods for Forza Games. Select from a variety of different mods, upload your own and share.",
  },
  twitter: {
    title: "Sign In | Forza Mods - The Forza Modding Community",
    description:
      "Sign in and download mods for Forza Games. Select from a variety of different mods, upload your own and share.",
    creator: "https://d4vss.net"
  },
};

export default function Signin() {
  return (
    <main className="p-10">
      <div className="mt-10 min-h-[calc(100vh-24rem)] flex items-center flex-col">
        <div role="alert" className="alert w-[26rem] mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>This page is currently under development.</span>
        </div>
        <div className="my-10 text-center flex flex-col items-center">
          <h1 className="text-3xl font-bold capitalize mb-2">Sign In</h1>
          <p className="max-w-lg">Sign up using credentials or an OAuth app.</p>
        </div>
        <div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow" placeholder="Password" />
            </label>
            <div className="mt-5 w-full">
              <input type="submit" value="Sign in" className="btn btn-block" />
            </div>
          </div>
          <div className="divider">OR</div>
          <Link href="/" className="btn btn-block">Sign in using Discord</Link>
        </div>
      </div>
    </main>
  );
}
