import type { AppProps } from 'next/app'
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Sidebar } from "@/components/Sidebar";
import { ThemeProvider } from 'next-themes'; 
import { ActiveSectionProvider } from '@/context/ActiveSectionContext';
import { MobileHeader } from '@/components/MobileHeader';

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem> 
      <ActiveSectionProvider> 
        <div className={inter.className}>
          
          <MobileHeader />
          {/* Main Grid Container */}
          <div className="lg:grid lg:grid-cols-5 min-h-screen"> 
            
            {/* Fixed Sidebar (Visible on large screens) */}
            <div className="lg:col-span-2 lg:border-r">
              <Sidebar />
            </div>

            {/* Scrollable Main Content */}
            <main className="lg:col-span-3 lg:pr-12 pt-16 px-0 lg:py-24 lg:px-6 lg:pt-0">

              {/* Page Content Container */}
              <div className="px-6 lg:pt-20 lg:px-0">
                  <Component {...pageProps} />
              </div>
              
              <footer className="mt-24 text-center text-sm text-muted-foreground mb-20 lg:mb-0">
                <p>Built with Next.js, React, Tailwind CSS, and shadcn/ui. Hosted on Netlify.</p>
                <p>Copyright © {new Date().getFullYear()} Athul. All rights reserved.</p>
              </footer>
            </main>
          </div>
        </div>
      </ActiveSectionProvider>
    </ThemeProvider>
  )
}