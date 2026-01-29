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
    { href: "/#why-choose-us", label: "Services" },
    { href: "/destinations", label: "Destinations" },
    { href: "/#packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container-custom py-4 flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-[#e67e22] hover:opacity-90 transition-opacity">
          BEYOND TOURS
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className="text-gray-600 text-[15px] font-semibold hover:text-[#e67e22] transition-colors duration-300 py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e67e22] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Now Button - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/book-now">
            <Button className="bg-[#e67e22] hover:bg-[#d67219] text-white font-bold rounded-full px-8 shadow-md hover:shadow-lg transition-all active:scale-95">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold text-[#e67e22]">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={24} />
            </button>
          </div>
          
          <ul className="flex flex-col gap-2 list-none overflow-y-auto">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="text-gray-800 text-lg font-medium hover:text-[#e67e22] transition-colors block py-3 border-b border-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <Link href="/book-now" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-[#e67e22] hover:bg-[#d67219] text-white font-bold rounded-xl py-6 text-lg shadow-lg">
                Book Your Trip
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
