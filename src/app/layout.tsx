import type { Metadata, Viewport } from "next";
import { FC, ReactNode } from "react";

import { Providers } from "./providers";
import clsx from "clsx";
import "./globals.css";
import { Fira_Code, Inter } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Jim thing",
    template: `%s - Jim thing`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={clsx(
          "min-h-screen",
          "bg-background",
          fontSans.variable,
          fontMono.variable,
          fontSans.className,
        )}
      >
        <Providers forcedTheme={"light"}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
