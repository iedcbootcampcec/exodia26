import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title: {
    default: "Exodia '26 | All Kerala Tech Gala",
    template: "%s | Exodia '26",
  },
  description:
    "Exodia '26 - All Kerala Tech Gala on February 7-8, 2026 at College of Engineering Chengannur. Join 180 students for workshops in Robotics, AI, and Computer Vision. Organized by IEDC BOOTCAMP CEC, FOCES CEC, and MULEARN CHN.",
  keywords: [
    "Exodia",
    "Exodia 2026",
    "Kerala Tech Event",
    "CEC Chengannur",
    "IEDC BOOTCAMP",
    "FOCES",
    "MULEARN",
    "Robotics Workshop",
    "AI Workshop",
    "Computer Vision",
    "Tech Gala",
    "College of Engineering Chengannur",
    "Tech Festival Kerala",
  ],
  authors: [{ name: "Exodia Team" }],
  creator: "IEDC BOOTCAMP CEC, FOCES CEC, MULEARN CHN",
  publisher: "College of Engineering Chengannur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Exodia '26 | All Kerala Tech Gala",
    description:
      "Join us on February 7-8, 2026 for Exodia '26 at CEC. Workshops in Robotics, AI, and Computer Vision. 180 students, 3 stacks, 2 days of innovation.",
    url: SITE_URL,
    siteName: "Exodia '26",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/exodia_logo.svg",
        width: 1200,
        height: 630,
        alt: "Exodia '26 - All Kerala Tech Gala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exodia '26 | All Kerala Tech Gala",
    description:
      "Join 180 students for workshops in Robotics, AI, and Computer Vision. February 7-8, 2026 at CEC Chengannur.",
    images: ["/exodia_logo.svg"],
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
  icons: {
    icon: [
      { url: "/fav/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/fav/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/fav/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/fav/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/fav/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/fav/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/fav/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
