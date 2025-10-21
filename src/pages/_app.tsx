import type { AppProps } from 'next/app'
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
        
      {/* Main Grid Container */}
      <div className="lg:grid lg:grid-cols-5 min-h-screen"> 
        
        {/* Left Column: Fixed Sidebar */}
        <div className="lg:col-span-2 lg:border-r">
          <Sidebar />
        </div>

        {/* Right Column: Scrollable Main Content */}
        <main className="lg:col-span-3 lg:pr-12 py-12 px-6 lg:py-24">
          <Component {...pageProps} />
          
          {/* Footer */}
          <footer className="mt-24 text-center text-sm text-muted-foreground">
            <p>Built with Next.js, Tailwind CSS, and shadcn/ui. Hosted on Netlify.</p>
            <p>Copyright © {new Date().getFullYear()} Athul. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  )
}