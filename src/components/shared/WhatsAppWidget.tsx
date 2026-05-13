"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 group animate-fade-in-up">
      {/* Tooltip / Label */}
      <div className="bg-white px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        <p className="text-gray-700 font-medium text-sm whitespace-nowrap">
          Need Help? <span className="font-bold text-gray-900">Chat with us</span>
        </p>
      </div>
      
      {/* WhatsApp Button */}
      <Link 
        href="https://wa.me/254745087969" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1ebd5a] text-white p-4 rounded-full shadow-xl shadow-[#25D366]/20 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        <MessageCircle size={32} fill="currentColor" />
      </Link>
    </div>
  )
}
