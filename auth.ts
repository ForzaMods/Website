
import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
import { XataAdapter } from "@auth/xata-adapter";
import { XataClient } from "@/xata";

const xata = new XataClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: XataAdapter(xata),
  providers: [Discord],
})