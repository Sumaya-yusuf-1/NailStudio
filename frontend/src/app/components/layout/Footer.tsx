import Link from "next/link"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/create", label: "Create" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
]

export function Footer() {
  return (
     
    <footer className="border-t border-pink-100 bg-[#FFF6F4] mt-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        {/* Left: logo + text */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-wide text-pink-700">
              nail<span className="text-pink-400">studio</span>
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Design beautiful nails online – shapes, colors, glitter and stickers.
          </p>
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} NailStudio. All rights reserved.
          </p>
        </div>

        {/* Right: simple nav */}
        <nav className="flex flex-wrap gap-4 text-xs md:text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-pink-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}