import type { Metadata } from "next";
import "../globals.css";
import "../../../public/vars.scss";
import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { routing } from "@/shared/lib/i18n/routing";

export const metadata: Metadata = {
  title: 'Prime Setup',
  description: 'Платформа для быстрого запуска вашего бизнеса в ОАЭ.',
  keywords: ['бизнес в ОАЭ', 'открытие компании', 'Prime Landing', 'эмираты', 'регистрация бизнеса'],
  authors: [{ name: 'Prime Landing Team', url: 'https://primelanding.com' }],
  creator: 'Prime Landing Team',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Prime Landing',
    description: 'Быстрый старт бизнеса в ОАЭ — лицензия за 5 дней!',
    url: 'https://primelanding.com',
    siteName: 'Prime Landing',
    images: [
      {
        url: 'https://primelanding.com/og-image.jpg',
        secureUrl: 'https://primelanding.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prime Landing — бизнес в ОАЭ',
        type: 'image/jpeg',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Landing',
    description: 'Запускайте бизнес в ОАЭ быстро и без стресса.',
    creator: '@primelanding',
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://primelanding.com'),
};



export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={`${locale}`}>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
