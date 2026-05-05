import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "茸茸里宠物洗护 | 温柔、透明、可预约",
  description: "茸茸里为猫咪和狗狗提供低应激洗护、皮毛护理、造型修剪与到店接送。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
