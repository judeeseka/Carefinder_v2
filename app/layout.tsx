import type { Metadata } from "next";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import TanstackProvider from "@/components/providers/tanstack-provider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Carefinder",
  description: "Find the best healthcare options near you",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${poppins.variable} font-poppins antialiased`}>
          <TanstackProvider>{children}</TanstackProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
