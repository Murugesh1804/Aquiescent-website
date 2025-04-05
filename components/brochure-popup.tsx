"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BrochurePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  const handleDownload = async () => {
    try {
      // Replace with your actual PDF URL
      const pdfUrl = '/placeholder.svg'
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = 'Company-Brochure-2025.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setDownloaded(true)
      setTimeout(() => {
        setIsOpen(false)
        setTimeout(() => {
          setDownloaded(false)
        }, 500)
      }, 2000)
    } catch (error) {
      console.error('Download failed:', error)
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
                {!downloaded ? (
                  <>
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <FileDown className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h4 className="text-center text-xl font-bold mb-2">Download Our 2025 Brochure</h4>
                    <p className="text-gray-600 mb-6 text-center">
                      Get instant access to our complete course catalog and company services.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button onClick={handleDownload} className="w-full font-semibold">
                        Download Brochure
                      </Button>
                    </motion.div>
                  </>
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