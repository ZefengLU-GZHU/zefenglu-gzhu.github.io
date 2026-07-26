import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zefeng Lu | AI Security & Multimodal Learning",
  description:
    "Academic homepage of Dr. Zefeng Lu, Associate Professor at Guangzhou University. Research in AI security, multimodal learning, computer vision, and intelligent transportation.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
