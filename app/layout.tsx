import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jeon.전번 - 대학 전화번호 통합 허브",
  description: "한국기술교육대학교 연락처를 한곳에서 쉽게 찾아보세요",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
