"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TabButtonProps {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export function TabButton({ active, children, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-2 text-lg font-medium rounded-full transition-colors duration-300 backdrop-blur-sm font-poppins",
        active
          ? "bg-gray-100  text-black font-semibold shadow-md"
          : "bg-transparent text-white font-semibold border-2 border-gray-300 hover:text-orange-500 hover:border-orange-500"
      )}
    >
      {children}
    </button>
  );
}
