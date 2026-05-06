import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { brand } from "@/lib/site-content";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Valparai Wanderer Tours | Authentic Local Tour Packages",
  description:
    "Discover authentic Valparai tour packages - Monkey Falls Trek, 1 Day Sightseeing & Tea Estate Safari. Book your adventure today!",
  keywords: [
    "Valparai",
    "Tour Packages",
    "Monkey Falls",
    "Athirapalli Waterfalls",
    "Wildlife Safari",
  ],
  openGraph: {
    title: "Valparai Wanderer Tours",
    description: "Authentic Local Tour Packages in Valparai",
    url: "https://valparaitourpackages.com",
    siteName: "Valparai Wanderer",
    images: [
      {
        url: "https://res.cloudinary.com/dvtpfyaf6/image/upload/v1777545429/IMG_0722.JPG_odxq8j.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        {shouldInjectToolbar && <VercelToolbar />}

        <a
          href={brand.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25d366]/40 sm:bottom-7 sm:right-7"
          title="Chat with us on WhatsApp"
        >
          <span
            className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40"
            style={{ animationDuration: "2s" }}
          />
          <span
            className="absolute inset-[-3px] animate-pulse rounded-full border-2 border-[#25d366]/50"
            style={{ animationDuration: "2.5s" }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="relative z-10 h-7 w-7 transition-transform duration-300 group-hover:rotate-12"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.541 4.189 1.57 6.057L0 24l6.104-1.602a11.82 11.82 0 005.94 1.588h.005c6.637 0 12.032-5.396 12.036-12.03a11.83 11.83 0 00-3.535-8.508z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
