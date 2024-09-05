import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/tailwind.css";
import "@radix-ui/themes/styles.css";
import { Button, Heading, Text, Theme } from "@radix-ui/themes";

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
          <div className="flex flex-col items-center">
            <div className="bg-accent-6 w-full px-3 py-5 flex items-center flex-col">
              <Heading as="h3" size="5">ZAP-Hosting</Heading>
              <Text size="2" className="max-w-xl text-center my-4">Set up your server in under 5 minutes using ZAP-Hosting! Run your favorite gamemode, create your own scripts, and get creative!</Text>
              <Button asChild>
                <a href="https://zap-hosting.com/forzamods" target="_blank">Get your new server</a>
              </Button>
              <Text size="2" className="mt-5">Use our code <b>d4vss-3735</b> to get a 20% discount on your order!</Text>
            </div>
            <Text size="1" className="opacity-80 mt-6 mb-8">By getting a server over our link, you are supporting this project.</Text>
          </div>

          <Footer />
        </Theme>
      </body>
    </html>
  );
}
