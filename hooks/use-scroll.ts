"use client"

import { useState, useEffect } from "react"

export function useScroll(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled, threshold])

  return scrolled
}
