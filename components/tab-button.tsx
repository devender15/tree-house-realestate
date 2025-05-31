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
        "px-6 py-2 font-medium rounded-full transition-colors duration-300 backdrop-blur-sm font-poppins",
        active
          ? "bg-orange-400/50 border border-orange-500 text-white shadow-md"
          : "bg-transparent text-orange-300 border border-orange-300 hover:text-orange-500 hover:border-orange-500"
      )}
    >
      {children}
    </button>
  );
}
