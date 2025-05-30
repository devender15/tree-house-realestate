import type React from "react"
import type { Metadata } from "next"
import { Poppins, Cinzel } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Prime Estates - Your Dream Home Awaits",
  description: "Discover premium properties across the city with expert guidance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${cinzel.variable}`}>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  )
}
