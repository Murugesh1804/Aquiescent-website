"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CoursePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

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
                <h3 className="text-xl font-bold">New Course Launch!</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Limited Seats
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-2">AWS Cloud Practitioner</h4>
                <p className="text-gray-600 mb-4">
                  Master cloud essentials with our comprehensive AWS Cloud Practitioner certification course. Starting
                  next week!
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                    <span>Hands-on labs and projects</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                    <span>Industry expert instructors</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                    <span>Certification preparation</span>
                  </li>
                </ul>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-primary">₹15,000</p>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild className="font-semibold">
                      <Link href="/courses/aws-cloud-practitioner">Enroll Now</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

