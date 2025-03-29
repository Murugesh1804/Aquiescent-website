"use client"
import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { usePathname } from 'next/navigation'
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
  const isAdminPage = pathname?.startsWith('/admin')

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