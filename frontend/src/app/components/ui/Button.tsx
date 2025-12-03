// components/ui/button.tsx
"use client"

import * as React from "react"

type ButtonVariant = "primary" | "outline" | "ghost"
type ButtonSize = "sm" | "md" | "lg" | "icon"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

/** Tiny helper to join class names */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-pink-600 text-white hover:bg-pink-700 focus-visible:ring-pink-300",
  outline:
    "border border-pink-400 text-pink-700 bg-white hover:bg-pink-50 focus-visible:ring-pink-200",
  ghost:
    "text-pink-700 hover:bg-pink-50 focus-visible:ring-pink-100",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-sm md:text-base",
  icon: "h-10 w-10 p-0 inline-flex items-center justify-center",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"