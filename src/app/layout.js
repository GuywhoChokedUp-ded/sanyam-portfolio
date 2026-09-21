import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Sanyam Kalra | Finance Portfolio",
    template: "%s | Sanyam Kalra"
  },
  description:
    "Portfolio of Sanyam Kalra, a BBA student and CFA Level I cleared candidate focused on investment banking, valuation, and finance content creation.",
  keywords: [
    "Sanyam Kalra",
    "Finance Portfolio",
    "Investment Banking",
    "CFA Level I",
    "Financial Modelling",
    "Valuation"
  ],
  authors: [{ name: "Sanyam Kalra" }],
  creator: "Sanyam Kalra",
  applicationName: "Sanyam Portfolio",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    title: "Sanyam Kalra | Finance Portfolio",
    description:
      "BBA student and CFA Level I cleared candidate building practical investment banking and valuation skills.",
    siteName: "Sanyam Portfolio",
    url: "/",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sanyam Kalra finance portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanyam Kalra | Finance Portfolio",
    description:
      "BBA student and CFA Level I cleared candidate building practical investment banking and valuation skills.",
    images: ["/twitter-image.svg"]
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg" }]
  },
  manifest: "/site.webmanifest",
  category: "portfolio"
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121722" },
    { media: "(prefers-color-scheme: light)", color: "#f4f2ee" }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased transition-colors duration-500`}>{children}</body>
    </html>
  );
}
