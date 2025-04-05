"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, UserCheck, Clock, DollarSign, Briefcase, Code, HeartHandshake, Lightbulb, BarChart, Headphones, UserPlus } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"

export function ServicesContent() {
  // Track which service card is being hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<string>("training")
  
  // Ref for the services section to track scroll position
  const servicesRef = useRef(null)
  const isInView = useInView(servicesRef, { once: false, margin: "-100px" })
  
  // Refs for scroll-triggered animations
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })
  
  // Parallax scroll effect for header
  const { scrollY } = useScroll()
  const headerY = useTransform(scrollY, [0, 500], [0, 150])
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.6])
  
  const serviceCategories = {
    training: [
      {
        icon: <BookOpen className="h-10 w-10 text-primary" />,
        title: "Technical Skill Development",
        description: "Comprehensive training programs in cutting-edge technologies with hands-on experience and industry-relevant projects."
      },
      {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Corporate Training", 
        description: "Customized training solutions for enterprises to upskill their workforce with the latest technologies and best practices."
      },
      {
        icon: <UserCheck className="h-10 w-10 text-primary" />,
        title: "Soft Skills & Leadership Programs",
        description: "Develop essential soft skills and leadership capabilities to enhance workplace effectiveness and career growth."
      }
    ],
    consultancy: [
      {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: "Business Strategy Consulting",
        description: "Expert guidance to optimize your business operations, improve efficiency, and drive sustainable growth."
      },
      {
        icon: <Code className="h-10 w-10 text-primary" />,
        title: "IT & Digital Transformation", 
        description: "Comprehensive digital transformation services to modernize your technology infrastructure and processes."
      },
      {
        icon: <BarChart className="h-10 w-10 text-primary" />,
        title: "Market Research & Data Analysis",
        description: "In-depth market analysis and data-driven insights to inform strategic business decisions and identify opportunities."
      }
    ],
    outsourcing: [
      {
        icon: <DollarSign className="h-10 w-10 text-primary" />,
        title: "IT & Software Development",
        description: "End-to-end software development services with dedicated teams working as an extension of your organization."
      },
      {
        icon: <Headphones className="h-10 w-10 text-primary" />,
        title: "Customer Support Services", 
        description: "Professional customer service solutions that enhance customer satisfaction and loyalty."
      },
      {
        icon: <UserPlus className="h-10 w-10 text-primary" />,
        title: "HR & Recruitment Solutions",
        description: "Comprehensive HR and talent acquisition services to help you find and retain top talent for your organization."
      }
    ]
  }
  
  // Staggered card appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
  
  // Interactive hover state handlers
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }
  
  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <motion.section 
        className="w-full py-24 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden"
        ref={headerRef}
        style={{ opacity: headerOpacity }}
      >
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5"
            animate={{ 
              x: [0, 20, 0], 
              y: [0, -30, 0],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute -left-32 bottom-10 w-96 h-96 rounded-full bg-white/5"
            animate={{ 
              x: [0, -20, 0], 
              y: [0, 20, 0],
              scale: [1, 1.2, 1] 
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute right-1/4 bottom-1/3 w-48 h-48 rounded-full bg-white/5"
            animate={floatingAnimation}
          />
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="flex flex-col items-center justify-center space-y-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="space-y-4"
              style={{ y: headerY }}
            >
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our Services
              </motion.h1>
              <motion.div 
                className="h-1 w-20 bg-white/60 mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={{ width: headerInView ? 80 : 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              <motion.div 
                className="mx-auto max-w-[700px] text-white/80 text-lg md:text-xl mt-4 h-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: headerInView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <TypeAnimation
                  sequence={[
                    'Tailored solutions designed for your business growth',
                    2000,
                    'Expert training to develop your team\'s skills',
                    2000,
                    'Strategic consulting to transform your business',
                    2000,
                    'Reliable outsourcing to optimize your operations',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-white/90"
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button 
                className="px-8 py-3 text-primary font-medium bg-white rounded-full hover:bg-white/90 transition-all transform hover:scale-105 focus:ring-2 focus:ring-white/50 focus:outline-none shadow-lg"
              >
                Explore Our Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Tabs Section */}
      <section 
        className="w-full py-20 md:py-32 bg-white"
        ref={servicesRef}
      >
        <div className="container px-4 md:px-6">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Offer</h2>
            <div className="h-1 w-16 bg-primary mx-auto my-4 rounded-full" />
            <p className="max-w-2xl mx-auto text-gray-600 mt-4">
              Discover our comprehensive range of services designed to meet your specific needs and help your business thrive.
            </p>
          </motion.div>
          
          {/* Service Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['training', 'consultancy', 'outsourcing'].map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all ${
                  activeTab === category 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {serviceCategories[activeTab as keyof typeof serviceCategories].map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card className="h-full overflow-hidden transform transition-all duration-300 hover:shadow-xl border-t-4 border-primary/70">
                    <CardHeader>
                      <motion.div 
                        className="mb-4 inline-flex p-3 rounded-full bg-primary/10"
                        animate={{
                          scale: hoveredIndex === index ? 1.1 : 1,
                          backgroundColor: hoveredIndex === index ? "rgba(var(--primary), 0.2)" : "rgba(var(--primary), 0.1)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          animate={{
                            color: hoveredIndex === index ? "var(--primary)" : "var(--primary)",
                            rotate: hoveredIndex === index ? 10 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.icon}
                        </motion.div>
                      </motion.div>
                      <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                      <div className="mt-6">
                        <Button variant="link" className={`text-sm font-medium inline-flex items-center p-0 ${hoveredIndex === index ? 'text-primary' : 'text-gray-600'} hover:text-primary transition-colors group`}>
                          Learn more 
                          <motion.span 
                            className="ml-1 transform"
                            animate={{ x: hoveredIndex === index ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* Call to Action Section with Scroll Animation */}
      <section className="w-full py-20 bg-gray-50 relative overflow-hidden">
        {/* Floating background elements */}
        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/5"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-primary/5"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 }
          }}
        />
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary">Ready to transform your business?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Get in touch with our expert team to discuss how our services can be tailored to meet your specific needs.
            </p>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-primary/50 focus:outline-none"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(var(--primary), 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}