import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bukra = localFont({
  src: "../fonts/29lt-bukra-regular.ttf",
  variable: "--font-bukra",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MASCO Energy | Engineering Progress. Delivering with Purpose.",
  description:
    "Saudi-based EPC and integrated contracting across energy, oil & gas, petrochemical, and industrial infrastructure. Al Khobar, KSA.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bukra.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-masco-black">
        {children}
      </body>
    </html>
  );
}
