import type { Metadata } from "next";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/styles/registry";
import GlobalStyle from "@/styles/global";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "React Avançado - Boileplate",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
