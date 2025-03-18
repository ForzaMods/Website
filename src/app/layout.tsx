import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";
import Header from "~/components/header";
import { css } from "styled-system/css";
import Footer from "~/components/footer";

import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: "%s | Forza Mods - The Forza Modding Community",
    default: "Forza Mods - The Forza Modding Community",
  },
  description:
    "Largest Forza Modding community in the world creating user-requested open source and free tools.",
  keywords: [
    "Forza Mods",
    "Forza Horizon 4 Mods",
    "Forza Horizon 5 Mods",
    "Forza Horizon Mods Download",
    "Forza Horizon 5 Custom Liveries",
    "Forza Horizon 4 Graphics Mods",
    "Forza Tuning Setups",
    "Forza Modding Tools",
    "Forza AIO Tool",
    "All in One Forza Mods AIO",
    "Forza Performance Enhancements",
    "Forza Car Mods",
    "Forza Horizon Texture Mods",
    "Forza Custom Cars",
    "Forza Modding Guide",
    "Forza Horizon Gameplay Mods",
    "Forza Modding Community",
    "Forza Visual Mods",
    "Forza Online Mods",
    "Free Forza Mods",
    "Forza Horizon Sound Mods",
    "Forza Community Mods",
    "Forza Horizon Open Source Tools",
    "Forza Horizon PC Mods",
    "Forza Graphics Enhancements",
  ],
  twitter: {
    title: {
      template: "%s | Forza Mods - The Forza Modding Community",
      default: "Forza Mods - The Forza Modding Community",
    },
    description:
      "Largest Forza Modding community in the world creating user-requested open source and free tools.",
    images: ["https://www.forzamods.dev/twitter-card.png"],
  },
  openGraph: {
    title: {
      template: "%s | Forza Mods - The Forza Modding Community",
      default: "Forza Mods - The Forza Modding Community",
    },
    description:
      "Largest Forza Modding community in the world creating user-requested open source and free tools.",
    images: ["https://www.forzamods.dev/twitter-card.png"],
  },
};

const RootLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="monetag" content="0c10671630e7080d7df33d9ef02ab8fe" />
      </head>
      <body
        className={
          `dark ${jakarta.className} ` +
          css({
            display: "flex",
            flexDirection: "column",
            minHeight: "screen",
          })
        }
      >
        <Header />
        <main
          className={css({
            flexGrow: 1,
            paddingY: 8,
            paddingX: {
              base: 6,
              lg: 24,
              "3xl": 48,
            },
          })}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
