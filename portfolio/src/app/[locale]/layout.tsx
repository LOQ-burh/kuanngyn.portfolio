

import { BaseLayout } from "@/common/components/templates";
import { Locale, routing } from "@/common/i18n/routes";
import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";

import "../globals.css";

export const metadata: Metadata = {
    title: "kuanngyn.portfolio",
    description: "Generated by create next app",
    applicationName: "kuanngyn.portfolio",
    authors: {
        name: "Nguyen Minh Quan",
        url: "https://github.com/LOQ-burh"
    },
    generator: "Next.js",
    keywords: [
        "nextjs",
        "blog",
        "portfolio",
        "react",
        "server components"
    ],
    icons: [
        'https://icon-sets.iconify.design',
        'https://www.radix-ui.com/icons'
    ],
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'cyan' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
}

interface RootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string; }>;
  }

export default async function LocaleLayout({
    children,
    params,
}: Readonly<RootLayoutProps>) {

    const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  
  return (
    <BaseLayout locale={locale}>
        {children}
    </BaseLayout>
  );
}