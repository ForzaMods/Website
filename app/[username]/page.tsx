import { notFound } from "next/navigation"
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { username: string } },
): Promise<Metadata> {
 
  return {
    metadataBase: new URL('https://forzamods.dev'),
    title: `${params.username}'s Profile | Forza Mods - The Forza Modding Community`,
    description: `View ${params.username}'s profile and their mods.`,
    openGraph: {
      title: `${params.username}'s Profile | Forza Mods - The Forza Modding Community`,
      description: `View ${params.username}'s profile and their mods.`,
    },
    twitter: {
      title: `${params.username}'s Profile | Forza Mods - The Forza Modding Community`,
      description: `View ${params.username}'s profile and their mods.`,
      creator: "https://d4vss.net"
    },
  }
}

export default function User({ params }: { params: { username: string } }) {
  return notFound();
}