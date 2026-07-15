import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Vazirmatn } from "next/font/google";
import { AmbientBackground } from "@/features/background/ambient-background";
import { CommandPalette } from "@/features/command/command-palette";
import { CustomCursor } from "@/features/cursor/custom-cursor";
import { GameShell } from "@/features/game-shell/game-shell";
import { LoadingScreen } from "@/features/loading/loading-screen";
import { SiteNav } from "@/components/layout/site-nav";
import { AppProviders } from "@/providers/app-providers";
import { ThemeProvider } from "@/providers/theme-provider";
import { AmbientAudio } from "@/features/audio/ambient-audio";
import { LocaleProvider } from "@/providers/locale-provider";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://project-hope.vercel.app"),
  title: {
    default: `${siteConfig.owner} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "creative developer",
    "full stack developer",
    "game developer",
    "Three.js",
    "Next.js",
    "AI integrations",
    "portfolio",
  ],
  openGraph: {
    title: `${siteConfig.owner} | ${siteConfig.title}`,
    description: siteConfig.description,
    type: "website",
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden">
        <LocaleProvider>
          <ThemeProvider>
            <AppProviders>
              <AmbientBackground />
              <AmbientAudio />
              <LoadingScreen />
              <SiteNav />
              <GameShell />
              {children}
              <CommandPalette />
              <CustomCursor />
            </AppProviders>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
