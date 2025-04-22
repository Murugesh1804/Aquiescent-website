"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";

const API_URL = "http://localhost:3500/api/enrollments";

export const submitEnrollment = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error submitting enrollment";
  }
};

// Function to convert course name to slug format
const toSlug = (courseName) => {
  return courseName
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
};

// Google Tag conversion IDs for specific courses
const CONVERSION_TRACKING = {
  "Python Programming": {
    sendTo: "AW-16982692130/Yr3qCPKY7bkaEKKi_aE_" 
  },
  "Software Testing & Automation": {
    sendTo: "AW-16982692130/dEelCMje4bkaEKKi_aE_"
  }
};

export function EnrollmentForm({ courseName = "" }) {
  const router = useRouter();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: courseName || "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Add Google Tag Manager script
  useEffect(() => {
    // Skip if GTM is already loaded
    if (window.dataLayer) return;
    
    // Load Google Tag Manager
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16982692130";
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'AW-16982692130');
    
    window.gtag = gtag;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, course: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitEnrollment(formState);
      const courseSlug = toSlug(formState.course);
      
      // Track conversion if it's one of our tracked courses
      if (window.gtag && CONVERSION_TRACKING[formState.course]) {
        window.gtag('event', 'conversion', {
          'send_to': CONVERSION_TRACKING[formState.course].sendTo
        });
      }
      
      router.push(`${courseSlug}/thank-you/`);
    } catch (error) {
      console.error("Enrollment failed:", error);
      // Handle error state here if needed
      setIsSubmitting(false);
    }
  };

  const courses = [
    "Software Testing & Automation",
    "DevOps Engineering",
    "SQL Server Mastery",
    "Python Programming",
    "AWS Cloud Fundamentals",
    "Snowflake on AWS"
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" name="firstName" value={formState.firstName} onChange={handleChange} placeholder="Enter your first name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" name="lastName" value={formState.lastName} onChange={handleChange} placeholder="Enter your last name" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" value={formState.email} onChange={handleChange} type="email" placeholder="Enter your email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" value={formState.phone} onChange={handleChange} placeholder="Enter your phone number" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="course">Course</Label>
          <Select value={formState.course} onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea id="message" name="message" value={formState.message} onChange={handleChange} placeholder="Any specific requirements or questions?" rows={3} />
        </div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button type="submit" className="w-full" disabled={isSubmitting} aria-busy={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Enroll Now"}
          </Button>
        </motion.div>
      </motion.form>
    </div>
  );
}