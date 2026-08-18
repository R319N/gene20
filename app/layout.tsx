import ClientLayout from "@/components/layouts/ClientLayout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gene20 | Web Design, Branding & Graphic Design Agency",
  description:
    "Gene20 is a leading web development company specializing in web design, branding, and graphic design. We create stunning digital experiences that drive results.",
  verification: {
    google: "gAxDAUW1Xa58ChfrlilL4_jjbHN1wOQqbIVf69CRHRM",
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="app-body">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
