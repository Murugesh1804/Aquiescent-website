import Link from "next/link"
import Image from "next/image"
import { Facebook, MessageCircle, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Acquiescent Logo"
                width={180}
                height={45}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-gray-400 max-w-xs">
              Acquiescent provides professional IT training, staffing and consultancy services to help
              advance your career since 2010.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/people/Acquiescent-It-Training-and-Consulting/61574164829042/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=919177089287" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Whatsapp</span>
              </Link>
              <Link href="https://www.instagram.com/acquiescentittraining/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/acquiescent-it-training-and-consulting" className="text-gray-400 hover:text-white transition-colors">
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
                <Link href="/courses/awsSecurity" className="text-gray-400 hover:text-white transition-colors">
                AWS Security Engineer
                </Link>
              </li>
              <li>
                <Link href="/courses/confluenKafka" className="text-gray-400 hover:text-white transition-colors">
                Confluent Kafka
                </Link>
              </li>
              <li>
                <Link href="/courses/snowflake" className="text-gray-400 hover:text-white transition-colors">
                Snowflake on AWS
                </Link>
              </li>
              <li>
                <Link href="/courses/python_full_stack" className="text-gray-400 hover:text-white transition-colors">
                Python Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="/courses/aws_devops" className="text-gray-400 hover:text-white transition-colors">
                AWS & DevOps
                </Link>
              </li>
              <li>
                <Link href="/courses/oracle_apex" className="text-gray-400 hover:text-white transition-colors">
                Oracle APEX
                </Link>
              </li>
              <li>
                <Link href="/courses/softwareTesting" className="text-gray-400 hover:text-white transition-colors">
                Software Testing Training Program
                </Link>
              </li>
              <li>
                <Link href="/courses/dataScience" className="text-gray-400 hover:text-white transition-colors">
                Data Science Professional
                </Link>
              </li>
              <li>
                <Link href="/courses/javafullstack" className="text-gray-400 hover:text-white transition-colors">
                Java Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="/courses/sqlServer" className="text-gray-400 hover:text-white transition-colors">
                SQL Server Training Program
                </Link>
              </li>
              <li>
                <Link href="/courses/azureADF" className="text-gray-400 hover:text-white transition-colors">
                Azure Data Factory Training Program
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400"> Plot No. 26, H.No. 2-53/1/4, Ground Floor, LAXMI ENCLAVE, Gachibowli, near EPTRI, Ranga Reddy District, Hyderabad - 500032</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0" />
                <Link href="tel:+919177089287" className="text-gray-400 hover:text-white transition-colors">
                  +91 91770 89287 <br/> +91 90593 18889
                </Link>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0" />
                <Link href="mailto:info@acquiescent.in" className="text-gray-400 hover:text-white transition-colors">
                info@acquiescent.in
                </Link>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0" />
                <Link href="mailto:info@acquiescents.in" className="text-gray-400 hover:text-white transition-colors">
                info@acquiescents.in
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

