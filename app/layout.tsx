import { Inter } from "next/font/google";
import "./globals.css";

import { Suspense } from "react";
import Loading from "./loading";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="black" className={inter.className}>
        <Header />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
