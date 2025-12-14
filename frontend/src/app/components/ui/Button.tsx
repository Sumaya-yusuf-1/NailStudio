"use client";

import * as React from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";
type ButtonShape = "pill" | "rounded" | "square";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  fullWidth?: boolean;
}

/** Tiny helper to join class names */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center font-medium transition-colors select-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#BA4576] text-white hover:bg-[#A23D6A] focus-visible:ring-[#BA4576]/30",
  outline:
    "border border-[#BA4576]/35 bg-white text-slate-900 hover:bg-[#FDF7F7] focus-visible:ring-[#BA4576]/20",
  ghost: "bg-transparent text-slate-900 hover:bg-[#FDF7F7] focus-visible:ring-[#BA4576]/15",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2 text-sm",
  lg: "px-6 py-2 text-base",
  icon: "h-10 w-10 p-0",
};

const shapeStyles: Record<ButtonShape, string> = {
  pill: "rounded-full",
  rounded: "rounded-xl",
  square: "rounded-md",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      shape = "pill",
      fullWidth,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          base,
          variantStyles[variant],
          sizeStyles[size],
          shapeStyles[shape],
          fullWidth && "w-full",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";