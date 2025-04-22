"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, FileDown, User, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"

export function BrochurePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState("form") // "form", "success"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDownload = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Send form data to backend
      const response = await axios.post('https://api.acquiescent.in/api/brochure/save', formData)

      // Download the file
      const pdfUrl = '/placeholder.svg' // Replace with your actual PDF URL
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = 'Company-Brochure-2025.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Show success message
      setStep("success")
      
      // Close popup after delay
      setTimeout(() => {
        setIsOpen(false)
        setTimeout(() => {
          setStep("form")
          setFormData({ name: "", email: "", phone: "" })
        }, 500)
      }, 3000)
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="absolute top-2 right-2">
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-primary text-white p-4 text-center">
                <h3 className="text-xl font-bold">Company Brochure</h3>
              </div>
              <div className="p-6">
                {step === "form" ? (
                  <form onSubmit={handleDownload}>
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <FileDown className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="text-center text-xl font-bold mb-2">Download Our 2025 Brochure</h4>
                    <p className="text-gray-600 mb-6 text-center">
                      Enter your details to get instant access to our complete course catalog.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="name"
                            name="name"
                            className="pl-10"
                            placeholder="Enter your name" 
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      
                      <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            className="pl-10"
                            placeholder="Enter your email" 
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      
                      <div className="space-y-1">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="phone"
                            name="phone"
                            className="pl-10"
                            placeholder="Enter your phone number" 
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button 
                        type="submit" 
                        className="w-full font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Download Brochure"}
                      </Button>
                    </motion.div>
                  </form>
                ) : (
                  <div className="py-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                    <p className="text-gray-600">Your brochure is being downloaded.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}