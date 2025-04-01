"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, User, X, Lock, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

// Employee Login Modal Component
function EmployeeLoginModal({ isOpen, onClose }) {
  const [employeeId, setEmployeeId] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const modalRef = useRef(null)
  
  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscapeKey);
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);
  
  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Set focus to the first focusable element in the modal
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    
    if (!employeeId || !password) {
      setError("Please enter both Employee ID and Password")
      return
    }
    
    try {
      setLoading(true)
      // Replace with your actual authentication logic
      // await authenticateEmployee(employeeId, password)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Reset form and close modal
      setEmployeeId("")
      setPassword("")
      onClose()
      
      // Redirect or update state as needed
      // window.location.href = "/employee-dashboard"
    } catch (err) {
      setError("Invalid employee credentials. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div 
              ref={modalRef}
              className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 id="modal-title" className="text-xl font-semibold text-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  Employee Login
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8 rounded-full"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {error && (
                  <div className="p-3 text-sm bg-red-50 border border-red-200 text-red-600 rounded" role="alert">
                    {error}
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="employeeId">Employee ID</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="employeeId"
                      type="text"
                      value={employeeId}
                      onChange={(e) => setEmployeeId(e.target.value)}
                      placeholder="Enter your employee ID"
                      className="pl-10"
                      disabled={loading}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button variant="link" className="text-xs p-0 h-auto" type="button">
                      Forgot password?
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="pl-10"
                      disabled={loading}
                      required
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    <>
                      <LogIn className="h-4 w-4" />
                      Log In
                    </>
                  )}
                </Button>
              </form>
              
              {/* Footer */}
              {/* <div className="bg-gray-50 px-6 py-3 text-center text-sm">
                <p>For technical support, please contact IT helpdesk</p>
                <p className="text-primary font-medium">helpdesk@acquiescent.com</p>
              </div> */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Acquiescent Logo"
              width={200}
              height={200}
              className="h-100 w-100"
            />
          </Link>
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-6 mr-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-sm font-medium transition-colors hover:text-primary"
                    tabIndex={loginModalOpen ? -1 : 0}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              >
                <Button 
                  asChild
                  tabIndex={loginModalOpen ? -1 : 0}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: (navLinks.length * 0.1) + 0.1 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-1"
                  onClick={() => setLoginModalOpen(true)}
                  tabIndex={loginModalOpen ? -1 : 0}
                >
                  <User className="h-4 w-4 mr-1" />
                  Employee Login
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="flex md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Toggle Menu" 
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={loginModalOpen ? -1 : 0}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && !loginModalOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-2 text-lg font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: navLinks.length * 0.05,
                  }}
                  className="pt-4"
                >
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </motion.div>
                
                {/* Employee Login Button for mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: (navLinks.length * 0.05) + 0.05,
                  }}
                  className="pt-2"
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full flex items-center justify-center gap-1"
                    onClick={() => {
                      setIsOpen(false);
                      setLoginModalOpen(true);
                    }}
                  >
                    <User className="h-4 w-4" /> Employee Login
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Employee Login Modal */}
      <EmployeeLoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </header>
  )
}