"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";

type NavLink = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
};

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (open) {
      // Clean up any existing animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Schedule render and animation start
      animationFrameRef.current = requestAnimationFrame(() => {
        setShouldRender(true);
        setIsAnimating(true);
      });
    } else {
      // Clean up any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Schedule closing animation and unmount
      timeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 0);

      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (shouldRender) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      // Start closing animation
      setIsAnimating(false);

      // Wait for animation then navigate
      setTimeout(() => {
        onClose();
        window.location.href = href;
      }, 150);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`
        fixed inset-0 z-50 bg-[#F7E5E4]/90 backdrop-blur-md
        transition-all duration-300 ease-in-out
        ${isAnimating ? "opacity-100" : "opacity-0"}
        ${!isAnimating ? "pointer-events-none" : "pointer-events-auto"}
      `}
    >
      {/* Close button top-right with opening animation */}
      <div
        className={`
          absolute top-6 right-6 z-10
          transform transition-all duration-300 ease-out
          ${isAnimating ? "translate-x-0 opacity-100 delay-75" : "translate-x-4 opacity-0"}
        `}
      >
        <Button
          variant='ghost'
          size='icon'
          onClick={onClose}
          aria-label='Close menu'
          className='hover:bg-transparent active:scale-95'
        >
          <X className='h-7 w-7 text-pink-600 transition-transform duration-300 ' />
        </Button>
      </div>

      {/* Centered links with opening animation */}
      <div className='flex h-full flex-col items-center justify-center gap-8'>
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className={`
              text-3xl font-normal text-gray-900
              hover:text-pink-600 transition-colors
              transform duration-300 ease-out
              ${isAnimating ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
            `}
            style={{
              transitionDelay: isAnimating ? `${index * 75}ms` : "0ms",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Bottom profile icon with opening animation */}
      <div
        className={`
          absolute bottom-12 left-0 right-0 flex justify-center
          transform transition-all duration-300 ease-out
          ${isAnimating ? "translate-y-0 opacity-100 delay-100" : "translate-y-4 opacity-0"}
        `}
      >
        <button
          aria-label='Profile'
          className='h-14 w-14 rounded-full border border-pink-400 bg-white shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 active:scale-95'
          onClick={onClose}
        >
          <Image
            src='/postcss.config.png'
            alt='Profile'
            width={56}
            height={56}
            className='h-full w-full object-contain'
          />
        </button>
      </div>
    </div>
  );
}
