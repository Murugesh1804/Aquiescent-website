"use client"

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

// Conversion tracking data for specific courses
const CONVERSION_TRACKING = {
  "python-programming": {
    courseName: "Python Programming",
    sendTo: "AW-16982692130/Yr3qCPKY7bkaEKKi_aE_"
  },
  "software-testing-automation": {
    courseName: "Software Testing Training Program",
    sendTo: "AW-16982692130/dEelCMje4bkaEKKi_aE_"
  }
};

export default function ThankYouPage() {
  const params = useParams();
  const courseSlug = params.slug;
  useEffect(() => {
    console.log("Course Slug:", courseSlug);
  }, [courseSlug]);
  
  // Get the course data from our tracking configuration
  const courseData =  CONVERSION_TRACKING[courseSlug] || null;
  
  useEffect(() => {
    console.log("Course Data:", courseData);
    
    if (courseData && typeof window !== 'undefined' && window.gtag) {
      console.log("Sending conversion event:", courseData.sendTo);
      
      // Use setTimeout to ensure gtag has loaded
      setTimeout(() => {
        window.gtag('event', 'conversion', {
          'send_to': courseData.sendTo
        });
      }, 1000);
    }
  }, [courseData]);

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-4">Thank You for Enrolling!</h1>
        
        {courseData ? (
          <p className="text-xl mb-6">
            You have successfully enrolled in our <span className="font-semibold">{courseData.courseName}</span> course.
          </p>
        ) : (
          <p className="text-xl mb-6">
            You have successfully enrolled in our course.
          </p>
        )}
        
        <p className="mb-8">
          We have received your application and will contact you shortly with the next steps.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-md p-6 mb-8">
          <h2 className="text-xl font-medium text-green-800 mb-2">What happens next?</h2>
          <ul className="text-left text-green-700 space-y-2">
            <li>✓ You'll receive a confirmation email within the next 24 hours</li>
            <li>✓ Our team will contact you to discuss course details and payment options</li>
            <li>✓ You'll get access to our pre-course materials to prepare for your classes</li>
          </ul>
        </div>

        <p className="text-gray-600">
          If you have any questions, please don't hesitate to contact our support team.
        </p>
      </motion.div>
    </div>
  );
}