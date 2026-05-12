import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pratik Shrestha — Creative Multimedia Professional",
    template: "%s | Pratik Shrestha",
  },
  description:
    "Portfolio of Pratik Shrestha — video editing, color grading, motion graphics, VFX, 3D, and AI-assisted development.",
  metadataBase: new URL("https://pratikshrestha.com"),
  openGraph: {
    title: "Pratik Shrestha — Creative Multimedia Professional",
    description:
      "Video editing, color grading, motion graphics, VFX, 3D, and AI-assisted development.",
    url: "https://pratikshrestha.com",
    siteName: "Pratik Shrestha",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pratik Shrestha",
  url: "https://pratikshrestha.com",
  jobTitle: "Creative Multimedia Professional",
  description:
    "Video editing, color grading, motion graphics, VFX, 3D, and AI-assisted development.",
  sameAs: [
    "https://github.com/pratikshrestha",
    "https://linkedin.com/in/pratikshrestha",
    "https://youtube.com/@pratik",
    "https://instagram.com/pratik",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--accent-from)] focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
