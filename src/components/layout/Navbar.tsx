"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about-us", label: "About" },
    { href: "/destinations", label: "Destinations" },
    { href: "/packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-[8%] py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#e67e22]">
          BEYOND TOURS
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[#333] font-medium hover:text-[#e67e22] transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button - Desktop */}
        <Link href="/book-now" className="hidden md:block">
          <Button className="bg-[#e67e22] hover:bg-[#d67219] text-white font-bold rounded-full px-6">
            Book Now
          </Button>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#333]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <ul className="flex flex-col gap-4 px-[8%]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#333] font-medium hover:text-[#e67e22] transition-colors duration-300 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book-now" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#e67e22] hover:bg-[#d67219] text-white font-bold rounded-full">
                  Book Now
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
