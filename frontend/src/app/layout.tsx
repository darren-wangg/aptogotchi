import { WalletProvider } from "@/context/WalletProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";
import "./globals.css";
import Head from "next/head";

const kongtext = localFont({
  src: "./../../public/kongtext.ttf",
  variable: "--font-kongtext",
});

export const metadata: Metadata = {
  title: "Aptogotchi",
  description: "Your new favorite on-chain pet",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className={kongtext.className}>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
