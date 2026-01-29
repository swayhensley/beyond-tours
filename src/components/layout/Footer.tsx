import Link from "next/link"
import { Instagram, MessageCircle, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-3xl font-black tracking-tighter text-[#e67e22]">
              BEYOND TOURS
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Crafting authentic Kenyan journeys that go beyond the ordinary. 
              Join us for safaris, coastal escapes, and urban adventures.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com" className="p-2 bg-white/5 rounded-full hover:bg-[#e67e22] transition-all text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="https://wa.me/254745087969" className="p-2 bg-white/5 rounded-full hover:bg-[#e67e22] transition-all text-gray-400 hover:text-white">
                <MessageCircle size={20} />
              </Link>
              <Link href="https://facebook.com" className="p-2 bg-white/5 rounded-full hover:bg-[#e67e22] transition-all text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#e67e22] w-fit pr-4 pb-1">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/#about-us" className="hover:text-[#e67e22] transition-colors">About Us</Link></li>
              <li><Link href="/destinations" className="hover:text-[#e67e22] transition-colors">Destinations</Link></li>
              <li><Link href="/#packages" className="hover:text-[#e67e22] transition-colors">Tour Packages</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#e67e22] w-fit pr-4 pb-1">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-[#e67e22]">📍</span>
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e67e22]">📞</span>
                <div>
                  <p>+254 745 087 969</p>
                  <p>+254 700 364 908</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e67e22]">📧</span>
                <span>hensleyomondi@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-[#e67e22] w-fit pr-4 pb-1">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Subscribe to get latest travel updates and special offers.
            </p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e67e22] transition-colors"
              />
              <button className="bg-[#e67e22] hover:bg-[#d67219] text-white font-bold py-3 px-6 rounded-lg transition-all active:scale-95 shadow-lg shadow-[#e67e22]/10">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Beyond Tours. Built with passion in Kenya.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#e67e22] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#e67e22] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
