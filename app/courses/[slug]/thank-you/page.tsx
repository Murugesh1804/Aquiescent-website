"use client"

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

declare global {
  interface Window {
    gtag: (command: string, action: string, params: object) => void;
  }
}

// Conversion tracking data for specific courses
const CONVERSION_TRACKING = {
  "python-programming": {
    courseName: "Python Programming",
    sendTo: "AW-1698269213/Yr3qCPKY7bkaEKKi_aE_"
  },
  "software-testing-automation": {
    courseName: "Software Testing & Automation",
    sendTo: "AW-1698269213/dEelCMje4bkaEKKi_aE_"
  }
};

export default function ThankYouPage() {
  const params = useParams();
  const courseSlug = params.courseSlug as string;
  const courseData = CONVERSION_TRACKING[courseSlug as keyof typeof CONVERSION_TRACKING];

  useEffect(() => {
    console.log("Course Data:", courseData);
    if (courseData && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': courseData.sendTo
      });
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
        
        {courseData && (
          <p className="text-xl mb-6">
            You have successfully enrolled in our <span className="font-semibold">{courseData.courseName}</span> course.
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