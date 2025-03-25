import CoursesContent from "@/components/courses-content"

export const metadata = {
  title: "Our Courses | Acquiescent Consultancy Services",
  description: "Explore our comprehensive training courses in Data, Testing, and more",
}

export default function CoursesPage() {
  return <CoursesContent />
}
// "use client"
// import React, { useState } from 'react'
// import { motion } from 'framer-motion'

// export default function SnowflakePage() {
//   const [activeModule, setActiveModule] = useState<number | null>(null)

//   const courseHighlights = [
//     {
//       title: "Data Warehousing Fundamentals",
//       description: "Deep dive into cloud data architecture and Snowflake's unique approach to data storage."
//     },
//     {
//       title: "SQL for Snowflake",
//       description: "Advanced SQL techniques optimized for Snowflake's performance-driven environment."
//     },
//     {
//       title: "Data Loading & Transformation",
//       description: "Master ETL processes with Snowflake's powerful data integration capabilities."
//     },
//     {
//       title: "Performance Optimization",
//       description: "Learn techniques to maximize query performance and minimize computational costs."
//     }
//   ]

//   const curriculum = [
//     {
//       title: "Snowflake Architecture",
//       modules: [
//         "Multi-cluster shared data architecture",
//         "Separation of compute and storage",
//         "Virtual warehouse concepts"
//       ]
//     },
//     {
//       title: "Data Engineering",
//       modules: [
//         "Snowpipe streaming",
//         "External table integration",
//         "Data transformation pipelines"
//       ]
//     },
//     {
//       title: "Advanced Analytics",
//       modules: [
//         "Time travel and data sharing",
//         "Machine learning integration",
//         "Complex analytics patterns"
//       ]
//     }
//   ]

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
//       {/* Hero Section with Animated Background */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative overflow-hidden bg-primary text-white py-24 px-6"
//       >
//         <div className="container mx-auto relative z-10">
//           <motion.h1 
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-5xl font-extrabold mb-6 text-center"
//           >
//             Snowflake Mastery Program
//           </motion.h1>
//           <motion.p
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="text-xl text-center max-w-3xl mx-auto text-white/80"
//           >
//             Transform Your Data Engineering Skills with Cutting-Edge Cloud Analytics Training
//           </motion.p>
//         </div>
//       </motion.div>

//       {/* Course Highlights */}
//       <section className="container mx-auto py-16 px-4">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <motion.div 
//             initial={{ x: -100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             {courseHighlights.map((highlight, index) => (
//               <motion.div 
//                 key={index}
//                 whileHover={{ scale: 1.03 }}
//                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
//               >
//                 <h3 className="text-xl font-bold text-primary mb-2">{highlight.title}</h3>
//                 <p className="text-gray-600">{highlight.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="bg-white rounded-xl overflow-hidden shadow-2xl"
//           >
//             <img 
//               src="/placeholder.svg?height=500&width=600" 
//               alt="Snowflake Training Visualization" 
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Interactive Curriculum */}
//       <section className="bg-gray-100 py-16">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold text-center text-primary mb-12">
//             Comprehensive Curriculum
//           </h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {curriculum.map((section, index) => (
//               <motion.div 
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className={`bg-white p-8 rounded-xl shadow-lg cursor-pointer 
//                   ${activeModule === index ? 'border-4 border-primary' : ''}`}
//                 onClick={() => setActiveModule(activeModule === index ? null : index)}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.6 }}
//               >
//                 <h3 className="text-2xl font-bold text-primary mb-4">{section.title}</h3>
//                 <motion.ul 
//                   initial={false}
//                   animate={{ 
//                     height: activeModule === index ? 'auto' : 0,
//                     opacity: activeModule === index ? 1 : 0
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   {section.modules.map((module, moduleIndex) => (
//                     <li 
//                       key={moduleIndex} 
//                       className="text-gray-600 mb-2 pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full"
//                     >
//                       {module}
//                     </li>
//                   ))}
//                 </motion.ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="bg-gradient-to-r from-primary to-blue-600 text-white py-20 text-center"
//       >
//         <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Data Skills?</h2>
//         <p className="text-xl mb-8 max-w-2xl mx-auto">
//           Join our Snowflake Mastery Program and transform your data engineering career
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="bg-white text-primary px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
//         >
//           Enroll Now
//         </motion.button>
//       </motion.section>
//     </div>
//   )
// }
