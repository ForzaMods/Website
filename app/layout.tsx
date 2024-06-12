import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/tailwind.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const MDD = {
  title: "Forza Mods - The Forza Modding Community",
  description: "Forza Mods is developing tools for Forza Horizon 4 and Forza Horizon 5 that are open source and free.",
  openGraphDescription: "Largest Forza Modding community in the world creating user-requested open source and free tools.",
  base: "https://forzamods.dev",
  image: "/twitter-card.png",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          accentColor="violet"
          grayColor="slate"
          radius="small"
          scaling="110%"
          appearance="dark"
          className="flex flex-col min-h-screen "
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
