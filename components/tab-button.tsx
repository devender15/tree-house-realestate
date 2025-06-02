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
        "px-3 md:px-6 py-1 md:py-2 text-xs md:text-lg cursor-pointer font-medium rounded-full transition-colors duration-300 backdrop-blur-sm font-poppins",
        active
          ? "bg-orange-400  text-white font-semibold shadow-md"
          : "bg-white text-orange-500 font-semibold border-2 border-orange-400 hover:bg-orange-400 hover:text-white "
      )}
    >
      {children}
    </button>
  );
}
