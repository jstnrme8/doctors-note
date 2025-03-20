import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
});

export const metadata: Metadata = {
  title: "My Doctors Note",
  description: "Get your doctor's note in 1 minute",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body className={`${instrumentSans.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}
