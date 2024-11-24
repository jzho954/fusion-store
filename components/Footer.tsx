import Link from 'next/link'
import { Facebook, Instagram, Twitter, Music } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FusionSnacks</h3>
            <p className="text-sm">Blending the best of Asian and Latino flavors for your snacking pleasure!</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-yellow-300 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-yellow-300 transition-colors">All Products</Link></li>
              <li><Link href="/recipes" className="hover:text-yellow-300 transition-colors">Recipes</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-yellow-300 transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-yellow-300 transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-yellow-300 transition-colors">Returns</Link></li>
              <li><Link href="/privacy" className="hover:text-yellow-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-tiktok"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; 2024 FusionSnacks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}