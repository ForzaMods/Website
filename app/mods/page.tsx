import type { Metadata } from "next";
import ClientContent from "./content";

export const metadata: Metadata = {
  metadataBase: new URL('https://forzamods.dev'),
  title: "Mod Browser | Forza Mods - The Forza Modding Community",
  description: "Looking for new mods? Explore our mod browser!",
  openGraph: {
    title: "Mod Browser | Forza Mods - The Forza Modding Community",
    description: "Looking for new mods? Explore our mod browser!",
  },
  twitter: {
    title: "Mod Browser | Forza Mods - The Forza Modding Community",
    description: "Looking for new mods? Explore our mod browser!",
    creator: "https://d4vss.net"
  },
};

export default function Mods() {
  return (
    <main>
      <ClientContent />
    </main>
  )
}