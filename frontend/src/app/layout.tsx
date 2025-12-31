import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import "./globals.css";

export const metadata = {
  title: {
    default: "NailStudio",
    template: "%s | NailStudio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-[#FFECEE] text-slate-900'>
        <Header />
        <main className='w-full'>{children}</main>
        <Footer />
        <Toaster
          position='bottom-center'
          toastOptions={{
            duration: 3000,
            style: {
              background: "#BA4576",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
