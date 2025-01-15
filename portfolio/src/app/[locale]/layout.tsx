

import { BaseLayout } from "@/common/components/templates";
import { routing } from "@/common/i18n/routes";
import type { Metadata, Viewport } from "next";
import {getTranslations, setRequestLocale} from 'next-intl/server';
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

export default async function LocaleLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: {locale: string};
}>) {
    const { locale } = await Promise.resolve(params);
    // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  
  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}