"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TabButtonProps {
  active?: boolean
  children: ReactNode
  onClick?: () => void
}

export function TabButton({ active, children, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 font-medium font-poppins rounded-md transition-colors",
        active ? "bg-orange-500 text-white" : "text-gray-700 hover:text-orange-500",
      )}
    >
      {children}
    </button>
  )
}
