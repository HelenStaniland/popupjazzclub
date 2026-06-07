import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  MAILERLITE_ACCOUNT_ID,
  MAILERLITE_UNIVERSAL_SRC,
} from "@/lib/mailerlite";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Pop Up Jazz Club | Herne Hill Jazz Nights",
    template: "%s | Pop Up Jazz Club",
  },
  description:
    "A community jazz night in Herne Hill — local singers, musicians, friends and music lovers together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script id="mailerlite-universal" strategy="afterInteractive">
          {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
.push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
(window,document,'script','${MAILERLITE_UNIVERSAL_SRC}','ml');
ml('account', '${MAILERLITE_ACCOUNT_ID}');`}
        </Script>
      </body>
    </html>
  );
}
