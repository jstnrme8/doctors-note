'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Assistant } from 'next/font/google'

const assistant = Assistant({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className={`bg-white py-10 border-t border-gray-200 ${assistant.className}`}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8">
            <img src="https://mydoctorsnote.co/cdn/shop/files/bcnjac0hn1ggv3xvmavh.webp?v=1740566885&width=1100" alt="DoctorsNote Logo" className="h-5 mb-6" />
            <p className="text-gray-600 text-base mb-4">
              <strong>Support</strong> (Mon-Fri, 9am-6pm EST)
            </p>
            <p className="text-gray-600 text-base">
              <strong>Email:</strong> help@urgentsupport.co
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-gray-900 mb-3">Customer service</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/contact" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/contact' ? 'underline' : ''
                  }`}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/refund-requests" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/refund-requests' ? 'underline' : ''
                  }`}
                >
                  Refund Requests
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/faq' ? 'underline' : ''
                  }`}
                >
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-gray-900 mb-3">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/terms" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/terms' ? 'underline' : ''
                  }`}
                >
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/refund-policy" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/refund-policy' ? 'underline' : ''
                  }`}
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/privacy-policy' ? 'underline' : ''
                  }`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/disclaimer" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/disclaimer' ? 'underline' : ''
                  }`}
                >
                  Disclaimer Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/intellectual-property" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/intellectual-property' ? 'underline' : ''
                  }`}
                >
                  Intellectual Property Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/jurisdiction" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/jurisdiction' ? 'underline' : ''
                  }`}
                >
                  Jurisdiction Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/liability" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/liability' ? 'underline' : ''
                  }`}
                >
                  Limitation of Liability Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/indemnification" 
                  className={`text-gray-600 hover:text-gray-900 hover:underline text-sm transition-all ${
                    pathname === '/indemnification' ? 'underline' : ''
                  }`}
                >
                  Indemnification Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8">
            <h3 className="text-gray-900 mb-3">Company Details</h3>
            <p className="text-gray-600 text-base mb-4">COMPANY NAME & ADDRESS</p>
            <p className="text-gray-600 text-base">Company registration number: 000000</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-xs">© 2025, My Doctors Note</p>
        </div>
      </div>
    </footer>
  )
}
