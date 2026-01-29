import Link from "next/link"
import { Instagram, MessageCircle, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 px-[8%] text-center">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-bold text-[#e67e22] mb-5">
          BEYOND TOURS
        </div>

        {/* Contact Information */}
        <p className="mb-2 text-base">
          📍 Nairobi, Kenya | 📞 +254745087969
        </p>
        <p className="mb-6 text-base">
          📍 Nairobi, Kenya | 📞 +254700364908
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-5">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#e67e22] transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </Link>
          <Link
            href="https://wa.me/254745087969"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#e67e22] transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <MessageCircle size={28} />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#e67e22] transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook size={28} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Beyond Tours. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
