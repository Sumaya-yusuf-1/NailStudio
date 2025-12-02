"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/create", label: "Create" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className='w-full bg-[#FFF6F4] border-pink-100 relative z-50'>
        <div className='flex w-full items-center justify-between px-6 py-4 md:px-16 md:py-6'>
          {/* Logo */}
          <Link href='/' className='flex items-center shrink-0'>
            <div className='relative h-16 w-64 md:h-20 md:w-80 -ml-6'>
              <Image
                src='/image copy.png'
                alt='NailStudio logo'
                fill
                className='object-contain  h-20 w-72  -mt-4 md: -ml-13 '
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation (center) */}
          <nav className='hidden md:flex items-center justify-center gap-12 flex-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-gray-700 hover:text-[#BA4576] transition-colors text-lg font-semibold tracking-wide'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop profile icon */}
          <div className='hidden md:flex items-center shrink-0 pr-4'>
            <button
              aria-label='Profile'
              className='h-10 w-10 rounded-full overflow-hidden border border-[#BA4576] bg-white shadow-md hover:shadow-lg transition-shadow'
            >
              <Image
                src='/postcss.config.png'
                alt='Profile'
                width={48}
                height={48}
                className='h-full w-full object-cover'
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className='flex items-center md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              className='rounded-full'
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              <Menu className='h-7 w-7 text-[#BA4576]' />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu with animation & toggle */}
      <MobileMenu open={isMenuOpen} onClose={closeMenu} links={navLinks} />
    </>
  );
}
