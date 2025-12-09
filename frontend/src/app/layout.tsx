import type { ReactNode } from "react";
import { Header } from "./components/layout/Header";
import "./globals.css";
import { Footer } from "./components/layout/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>

      <body className='min-h-screen bg-[#FFECEE] text-slate-900'>
        <Header />
        <main className='w-full'>{children}</main>
          <Footer />
      </body>
    
    </html>
  );
}
