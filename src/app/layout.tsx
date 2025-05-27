
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata  } from "next";

// This file defines the root layout for the Next.js application.
// It sets up global styles, metadata, and font imports.


// The metadata includes the title and description for the application.
export const metadata: Metadata = {
  title: {
    template: '%s | Dusty Ridge',
    default: 'Dusty Ridge',
  },
  description: "Cowboy town simulation game", 

  // The metadataBase is the base URL for the application, used for absolute URLs in metadata.
  metadataBase: new URL('http://localhost:3000'), // #Change this to your production URL when deploying
}

// The layout wraps the entire application and applies the Geist Sans and Geist Mono fonts.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
