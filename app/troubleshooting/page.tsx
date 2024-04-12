import Issues from "@/components/issues";
import type { Metadata } from "next";

const MDD = {
  title: "Troubleshooting | Forza Mods - The Forza Modding Community",
  description:
    "Having issues with one of our tools? You might resolve your issue here.",
  openGraphDescription: null,
  base: "https://forzamods.dev",
  image: null || "",
};

export const metadata: Metadata = {
  metadataBase: new URL(MDD.base || "https://d4vss.net"),
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

export default function Troubleshoot() {
  return (
    <main className="p-10 my-10 text-center flex flex-col items-center min-h-[calc(100vh-24rem)]">
      <h1 className="text-3xl font-bold capitalize mb-2">Troubleshooting</h1>
      <p className="max-w-lg">
        Having issues with one of our tools? You might resolve your issue
        here.
      </p>
      <div className="w-full flex justify-center mt-10">
        <Issues />
      </div>
    </main>
  );
}
