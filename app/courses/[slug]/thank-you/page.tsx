"use client"

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  // Optional: Track conversion or analytics
  useEffect(() => {
    // You could add analytics tracking code here
    // Example: trackEvent('enrollment_complete')
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full mx-4 bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="bg-primary p-6 text-white text-center">
          <CheckCircle2 className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Thank You!</h1>
          <p className="mt-2 text-white/90">Your enrollment has been successfully submitted.</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="text-center text-gray-700">
            <p className="mb-4">
              We've received your enrollment request and our team will contact you shortly with more details about your course.
            </p>
            <p>
              If you have any questions in the meantime, please feel free to contact our support team.
            </p>
          </div>
          
          <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/courses" className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Browse More Courses
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}