// components/TermsAndConditions.jsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TermsAndConditions.module.css'; // Optional for custom styling

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function TermsAndConditions ()  {
  return (
    <motion.div 
      className="container mx-auto px-4 py-10"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Hero Section */}
      <motion.div variants={fadeInUp} className="text-center mb-10">
        <div className="relative h-64 w-full mb-6">
          <Image
            src="/assets/images/about.jpg"
            alt="Education Images"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">Terms and Conditions</h1>
      </motion.div>

      <motion.div variants={fadeInUp} className="max-w-3xl mx-auto space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold">Welcome to Acquiescent Consultancy Services India Pvt. Ltd.</h2>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>
              The privacy of our visitors to <Link href="https://acquiescent.in/" className="text-blue-600 underline">acquiescent.in</Link> is important to us.
            </li>
            <li>
              At <Link href="https://acquiescent.in/" className="text-blue-600 underline">acquiescent.in</Link>, we recognize that privacy of your personal information is important. We explain the types of personal information we collect when you visit our site, and how we safeguard your information. We never sell or share your personal information or emails with third parties.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Log Files</h2>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>
              Like most websites, we collect data through log files including your IP address, ISP, browser used, time of visit, and visited pages.
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Cookies</h2>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>
              We use cookies to store information such as your preferences when visiting our site. This may include showing you a popup once per visit or enabling login for features like forums.
            </li>
          </ol>
        </div>
      </motion.div>
    </motion.div>
  );
};

