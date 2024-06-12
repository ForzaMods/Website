import type { Metadata } from "next";
import ModView from "@/components/mod-view";
import { Heading, Text } from "@radix-ui/themes";

const MDD = {
  title: "Mod Browser | Forza Mods - The Forza Modding Community",
  description: "Looking for new mods? Explore our mod browser!",
  openGraphDescription: null,
  base: "https://forzamods.dev",
  image: null || '',
};

export const metadata: Metadata = {
  metadataBase: new URL(MDD.base || 'https://d4vss.net'),
  title: MDD.title,
  description: MDD.description,
  openGraph: {
    title: MDD.title,
    description: MDD.openGraphDescription || MDD.description,
    images: [MDD.image],
  },
  twitter: {
    title: MDD.title,
    description: MDD.openGraphDescription || MDD.description,
    images: [MDD.image],
    creator: "https://d4vss.net",
  },
};

export default function Mods() {
  return (
    <main className="p-5 md:p-10">
      <div className="my-10 text-center flex flex-col items-center">
        <Heading as="h1" size="7">Mod Browser</Heading>
        <Text size="2" className="max-w-lg mt-2">
          This is the modding browser for searching modded mods. <br />
        </Text>
      </div>
      <ModView user="" />
    </main>
  )
}