import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Windows 98 Portfolio - Retro Desktop Experience",
  description: "A nostalgic Windows 98/XP themed portfolio showcasing projects, skills, and contact information in an interactive desktop environment.",
  keywords: ["portfolio", "windows 98", "retro", "web developer", "interactive"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
