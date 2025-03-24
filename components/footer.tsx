import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="ACQUIESCENT Technologies Logo"
                width={180}
                height={45}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-gray-400 max-w-xs">
              ACQUIESCENT Technologies provides professional IT training, staffing and consultancy services to help
              advance your career since 2010.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/snowflake" className="text-gray-400 hover:text-white transition-colors">
                  Master Snowflake
                </Link>
              </li>
              <li>
                <Link href="/courses/testing" className="text-gray-400 hover:text-white transition-colors">
                  Automation and Manual Testing
                </Link>
              </li>
              <li>
                <Link href="/courses/data-science" className="text-gray-400 hover:text-white transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/courses/cloud" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Computing
                </Link>
              </li>
              <li>
                <Link href="/courses/devops" className="text-gray-400 hover:text-white transition-colors">
                  DevOps
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400">123 Business Park, Tech Hub, Bangalore, India 560001</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0" />
                <Link href="tel:+919177089287" className="text-gray-400 hover:text-white transition-colors">
                  +91 91770 89287
                </Link>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0" />
                <Link href="mailto:info@acquiescent.in" className="text-gray-400 hover:text-white transition-colors">
                  info@acquiescent.in
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Acquiescent Consultancy Services India Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

