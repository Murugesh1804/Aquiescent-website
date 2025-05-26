"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function PopupCourse() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full"
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Course Content */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Master Snowflake</h2>
            <p className="text-gray-600 text-lg">The Future of Data Warehousing</p>

            {/* Features List */}
            <ul className="mt-4 space-y-2 text-left text-gray-700">
              <li>✅ Snowflake Core Concepts (Admin & Developer)</li>
              <li>✅ DWH & SQL Basics</li>
              <li>✅ Cloud (AWS) Fundamentals</li>
              <li>✅ Real-time Projects & Scenarios</li>
              <li>✅ SnowPro Certification Guidelines</li>
            </ul>

            {/* Contact Information */}
            <div className="mt-6">
              <p className="text-gray-700 font-semibold">📞 7829889287</p>
              <p className="text-gray-700 font-semibold">🌐 www.Acquiescent.in</p>
            </div>
          </div>
        </motion.div>
      </div>
    )
  );
}
