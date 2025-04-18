"use client"
import type React from "react"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith("/admin")

  useEffect(() => {
    // Load gtag script dynamically (alternative to using <script> tag in <head>)
    const script1 = document.createElement("script")
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16982692130"
    script1.async = true
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16982692130');
    `
    document.head.appendChild(script2)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            {!isAdminPage && <Navbar />}
            <div className="flex-1">{children}</div>
            {!isAdminPage && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
