import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Gymtionary",
    default: "Gymtionary"
  },
  description: "Gymnastics guide for beginners and aspiring fans."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
