import type { Metadata } from "next";
import { Poppins, Inter, Pacifico } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

export const metadata: Metadata = {
  title: "Mistik Temizlik - Bursa'nın Güvenilir Temizlik Partneri",
  description: "Bursa'da profesyonel temizlik hizmetleri. Ev, ofis, derin temizlik için güvenilir çözümler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} ${inter.variable} ${pacifico.variable} font-poppins antialiased bg-natural-cream-50`}
      >
        {children}
      </body>
    </html>
  );
}
