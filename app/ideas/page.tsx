import type { Metadata } from "next";
import ClientContent from "./content";

export const metadata: Metadata = {
  metadataBase: new URL('https://forzamods.dev'),
  title: "Ideas | Forza Mods - The Forza Modding Community",
  description: "Do you have any ideas to improve our features or suggest new ones? We'd love to hear your thoughts! Let's work together to make our projects even better.",
  openGraph: {
    title: "Ideas | Forza Mods - The Forza Modding Community",
    description: "Do you have any ideas to improve our features or suggest new ones? We'd love to hear your thoughts! Let's work together to make our projects even better.",
  },
  twitter: {
    title: "Ideas | Forza Mods - The Forza Modding Community",
    description: "Do you have any ideas to improve our features or suggest new ones? We'd love to hear your thoughts! Let's work together to make our projects even better.",
    creator: "https://d4vss.net"
  },
};

export default function Ideas() {
  return (
    <main>
      <ClientContent />
    </main>
  )
}