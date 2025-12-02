// app/layout.tsx
import type { ReactNode } from "react";
import { Header } from "./components/layout/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <title></title>
      <body className='min-h-screen bg-[#FFECEE] text-slate-900'>
        <Header />

        {/* ⭐ FULL-WIDTH MAIN CONTENT ⭐ */}
        <main className='w-full'>{children}</main>
      </body>
    </html>
  );
}
