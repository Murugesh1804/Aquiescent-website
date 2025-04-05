"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  BookOpen,
  Users,
  UserCheck,
  DollarSign,
  Briefcase,
  Code,
  Lightbulb,
  BarChart,
  Headphones,
  UserPlus,
  Cpu,
  Database,
  Globe,
  Server,
  Layers,
  GitBranch,
  Terminal,
  FileCode,
  Coffee,
  Hash,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ServicesContent() {
  // Track which service card is being hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<string>("training")

  // Ref for the services section to track scroll position
  const servicesRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(servicesRef, { once: false, margin: "-100px" })

  // Refs for scroll-triggered animations
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  // Parallax scroll effect for header
  const { scrollY } = useScroll()
  const headerY = useTransform(scrollY, [0, 500], [0, 150])
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0.6])

  // Programming languages with icons
  const programmingLanguages = [
    { name: "JavaScript", icon: <FileCode className="h-6 w-6" /> },
    { name: "Python", icon: <Terminal className="h-6 w-6" /> },
    { name: "Java", icon: <Coffee className="h-6 w-6" /> },
    { name: "C#", icon: <Hash className="h-6 w-6" /> },
    { name: "PHP", icon: <Globe className="h-6 w-6" /> },
    { name: "Ruby", icon: <Cpu className="h-6 w-6" /> },
    { name: "Swift", icon: <Layers className="h-6 w-6" /> },
    { name: "Go", icon: <Server className="h-6 w-6" /> },
    { name: "Rust", icon: <Database className="h-6 w-6" /> },
    { name: "TypeScript", icon: <GitBranch className="h-6 w-6" /> },
  ]

  const serviceCategories = {
    training: [
      {
        icon: <BookOpen className="h-10 w-10 text-primary" />,
        title: "Technical Skill Development",
        description:
          "Comprehensive training programs in cutting-edge technologies with hands-on experience and industry-relevant projects.",
      },
      {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Corporate Training",
        description:
          "Customized training solutions for enterprises to upskill their workforce with the latest technologies and best practices.",
      },
      {
        icon: <UserCheck className="h-10 w-10 text-primary" />,
        title: "Soft Skills & Leadership Programs",
        description:
          "Develop essential soft skills and leadership capabilities to enhance workplace effectiveness and career growth.",
      },
    ],
    consultancy: [
      {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: "Business Strategy Consulting",
        description:
          "Expert guidance to optimize your business operations, improve efficiency, and drive sustainable growth.",
      },
      {
        icon: <Code className="h-10 w-10 text-primary" />,
        title: "IT & Digital Transformation",
        description:
          "Comprehensive digital transformation services to modernize your technology infrastructure and processes.",
      },
      {
        icon: <BarChart className="h-10 w-10 text-primary" />,
        title: "Market Research & Data Analysis",
        description:
          "In-depth market analysis and data-driven insights to inform strategic business decisions and identify opportunities.",
      },
    ],
    outsourcing: [
      {
        icon: <DollarSign className="h-10 w-10 text-primary" />,
        title: "IT & Software Development",
        description:
          "End-to-end software development services with dedicated teams working as an extension of your organization.",
      },
      {
        icon: <Headphones className="h-10 w-10 text-primary" />,
        title: "Customer Support Services",
        description: "Professional customer service solutions that enhance customer satisfaction and loyalty.",
      },
      {
        icon: <UserPlus className="h-10 w-10 text-primary" />,
        title: "HR & Recruitment Solutions",
        description:
          "Comprehensive HR and talent acquisition services to help you find and retain top talent for your organization.",
      },
    ],
  }

  // Main service categories with images
  const mainServices = [
    {
      id: "training",
      title: "Training",
      description:
        "Comprehensive training programs designed to develop technical and soft skills for individuals and organizations.",
      icon: <BookOpen className="h-10 w-10" />,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      color: "from-blue-600 to-blue-800",
    },
    {
      id: "consultancy",
      title: "Consultancy",
      description:
        "Strategic consulting services to help businesses optimize operations and achieve sustainable growth.",
      icon: <Lightbulb className="h-10 w-10" />,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: "outsourcing",
      title: "Outsourcing",
      description:
        "End-to-end outsourcing solutions that provide access to specialized talent and reduce operational costs.",
      icon: <Briefcase className="h-10 w-10" />,
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      color: "from-blue-700 to-blue-900",
    },
  ]

  // Interactive hover state handlers
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  // Marquee animation variants
  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  }

  const reverseMarqueeVariants = {
    animate: {
      x: [-2000, 0],
      transition: {
        x: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
              <motion.div
                className="h-1 w-20 bg-white/70 mx-auto mt-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services Overview - Top Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="max-w-2xl mx-auto text-gray-600 mt-4">
              Discover our comprehensive range of services designed to meet your specific needs and help your business
              thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveTab(service.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br bg-opacity-70 z-10 transition-all duration-300 group-hover:bg-opacity-80">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`}></div>
                </div>

                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  <motion.div
                    className="bg-white/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 mb-4">{service.description}</p>
                  <motion.div className="flex items-center text-sm font-medium" whileHover={{ x: 5 }}>
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Languages Marquee */}
      <section className="w-full py-8 bg-gray-50 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 z-10 pointer-events-none w-full h-full" />

          <div className="flex space-x-4 whitespace-nowrap">
            <motion.div className="flex space-x-8 items-center" variants={marqueeVariants} animate="animate">
              {[...programmingLanguages, ...programmingLanguages].map((lang, index) => (
                <motion.div
                  key={`lang-${index}`}
                  className="p-3 rounded-full bg-primary/10 text-primary shadow-md flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 3, 0, -3, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2 + (index % 3),
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                    rotate: {
                      duration: 4 + (index % 2),
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    },
                  }}
                >
                  {lang.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section with Tabs */}
      <section className="w-full py-20 bg-white" ref={servicesRef}>
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="training" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                {mainServices.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {mainServices.map((service, mainIndex) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">{service.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-8 text-lg">
                      {service.description} Our {service.title.toLowerCase()} services are designed to help you achieve
                      your business goals and stay ahead of the competition.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {serviceCategories[service.id as keyof typeof serviceCategories].map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="bg-white border-l-4 border-primary p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                          whileHover={{ x: 5, y: -5 }}
                        >
                          <div className="flex items-start">
                            <div className="mr-4 p-2 bg-primary/10 rounded-full">{item.icon}</div>
                            <div>
                              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                              <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="mt-8"
                    >
                      <Button
                        className="bg-primary text-white rounded-full px-6 py-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn more about {service.title}
                      </Button>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="order-1 lg:order-2"
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-30`}></div>

                      {/* Floating tech icons overlay */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {programmingLanguages.slice(0, 5).map((lang, index) => (
                          <motion.div
                            key={`float-${service.id}-${index}`}
                            className="absolute p-3 rounded-full bg-white/20 text-white"
                            style={{
                              left: `${10 + index * 20}%`,
                              top: `${20 + index * 15}%`,
                            }}
                            animate={{
                              y: [0, -15, 0],
                              x: [0, 10, 0],
                              rotate: [0, 10, 0, -10, 0],
                            }}
                            transition={{
                              duration: 4 + index,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "reverse",
                            }}
                          >
                            {lang.icon}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
              <p className="text-white/90 mb-6">
                Get in touch with our expert team to discuss how our services can be tailored to meet your specific
                needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-6 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-6 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Business meeting"
                className="rounded-xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

