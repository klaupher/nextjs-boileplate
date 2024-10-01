import Providers from "@/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Avançado - Boilerplate",
  description: "A simple project started to work with Typescript, React, NextJS and Styled Components"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" >
      <head>
        <link rel="shortcut icon" href="/img/icon-512.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
