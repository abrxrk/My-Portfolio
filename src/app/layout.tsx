import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Dynamic metadata that works with multiple domains
const getBaseUrl = () => {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NODE_ENV === "production") {
    return "https://www.abrarcodes.com";
  }
  return "http://localhost:3000";
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Abrar Codes",
    template: `%s | Abrar Codes`,
  },
  description:
    "My portfolio showcasing full-stack development projects, AI integrations, and more.",
  openGraph: {
    title: "Abrar Codes",
    description:
      "My portfolio showcasing full-stack development projects, AI integrations, and more.",
    siteName: "Abrar Codes",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Abrar Codes - Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Abrar Codes",
    description:
      "My portfolio showcasing full-stack development projects, AI integrations, and more.",
    card: "summary_large_image",
    images: ["/preview.png"],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
