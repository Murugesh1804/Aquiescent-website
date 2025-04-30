import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, Users, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Courses | Acquiescent",
  description: "Explore our comprehensive training programs to advance your career in IT and technology",
}

const courses = [
    {
      "title": "AWS Security Engineer",
      "subtitle": "Master Cloud Security on AWS Platform",
      "description": "Comprehensive AWS security training covering the shared responsibility model, IAM, network security, data protection, compliance frameworks, and incident response. Gain hands-on experience with security tools and implement best practices for securing AWS infrastructure.",
      "image": "/images/courses/awssecurity.jpg",
      "duration": "60 Days",
      "schedule": "Weekdays",
      "level": "Intermediate to Advanced",
      "slug": "awsSecurity"
    },
    {
      "title": "Confluent Kafka",
      "subtitle": "Master Distributed Event Streaming Platform",
      "description": "Comprehensive Confluent Kafka training covering architecture, implementation, administration, and security. Learn to set up, configure, and manage Kafka clusters while integrating with various data sources using connectors, schema registry, and REST proxy.",
      "image": "/images/courses/kafka.jpg",
      "duration": "45 Days",
      "schedule": "Flexible",
      "level": "Intermediate",
      "slug": "confluenKafka"
    },
    {
      "title": "Snowflake on AWS",
      "subtitle": "Cloud Data Warehousing Solutions",
      "description": "Comprehensive Snowflake training covering data warehousing fundamentals, Snowflake architecture, advanced features, and AWS integration. Learn to design, implement, and optimize data solutions while understanding Snowflake's unique pricing model and performance capabilities.",
      "image": "/images/courses/snowflake.jpg",
      "duration": "60 Days",
      "schedule": "Weekdays/Weekends",
      "level": "Beginner to Advanced",
      "slug": "snowflake"
    },
    {
      "title": "Python Full Stack Development",
      "subtitle": "Master Web Development with Python & Modern Frameworks",
      "description": "Comprehensive full-stack Python development course covering frontend technologies (HTML, CSS, JavaScript), core Python programming, database interaction, and backend frameworks like Django/Flask. Learn to build complete web applications with modern responsive designs and RESTful APIs.",
      "image": "/images/courses/pythonfullstack.jpg",
      "duration": "150 Days",
      "schedule": "Flexible",
      "level": "Beginner to Advanced",
      "slug": "python_full_stack"
    },
    {
      "title": "AWS & DevOps",
      "subtitle": "Cloud Infrastructure Automation & Continuous Delivery",
      "description": "Comprehensive AWS and DevOps course covering cloud infrastructure, automation tools, containerization, and CI/CD pipelines. Learn to implement infrastructure as code with Terraform, configuration management with Ansible, continuous integration with Jenkins, and container orchestration with Docker.",
      "image": "/images/courses/awsdevops.jpg",
      "duration": "60-90 Days",
      "schedule": "Weekdays",
      "level": "Intermediate",
      "slug": "aws_devops"
    },
    {
      "title": "Oracle APEX",
      "subtitle": "Low-Code Application Development Platform",
      "description": "Comprehensive Oracle APEX course covering application development concepts, SQL Workshop, page building, and security implementation. Learn to create interactive reports, forms, and secure data-driven applications with minimal coding requirements using Oracle's enterprise-grade development platform.",
      "image": "/images/courses/oracleapex.jpg",
      "duration": "45 Days",
      "schedule": "Flexible",
      "level": "Beginner to Intermediate",
      "slug": "oracle_apex"
    },
    {
      "title": "Software Testing Training Program",
    "subtitle": "Master Manual and Automated Testing with Real-Time Projects",
    "description": "Comprehensive training in manual testing, automation with Selenium, BDD with Cucumber, SQL, Git, Jenkins, and more. Includes hands-on project work, resume preparation, and mock interviews to help you become job-ready.",
    "image": "/images/courses/softwaretesting.jpg",
    "duration": "60-90 Days",
    "schedule": "Weekdays",
    "level": "Beginner to Advanced",
    "slug": "softwareTesting"
    },
    {
      "title": "Data Science Professional",
      "subtitle": "Master Data Science with Python, ML, Deep Learning & Visualization",
      "description": "End-to-end Data Science training covering Python programming, data analysis, statistics, machine learning, deep learning, NLP, and BI tools like Tableau or Power BI. Build real-world projects and prepare for data science roles with industry-relevant skills.",
      "image": "/images/courses/datascience.jpg",
      "duration": "150 Days",
      "schedule": "Weekdays and Weekends",
      "level": "Beginner to Advanced",
      "slug": "dataScience"
    },
    {
      "title": "Java Full Stack Development",
      "subtitle": "Master Java Programming with Core Concepts and Real-Time Projects",
      "description": "Comprehensive training in Java, covering core concepts, web technologies, frameworks, database handling, and much more. Includes hands-on projects, career readiness, and interview preparation.",
      "image": "/images/courses/javafullstack.jpg",
      "duration": "90 Days",
      "schedule": "Weekdays and Weekends",
      "level": "Beginner to Advanced",
      "slug": "javafullstack"
    },
    {
      "title": "SQL Server Training Program",
    "subtitle": "Master SQL Server Database Management and Azure Data Pipelines",
    "description": "Comprehensive course covering SQL Server fundamentals, database operations, and Azure Data Factory for ETL pipeline development. Ideal for aspiring data engineers and analysts.",
    "image": "/images/courses/sqlserver.jpg",
    "duration": "45 Days",
    "schedule": "Weekdays",
    "level": "Beginner to Intermediate",
    "slug": "sqlServer"
    },
    {
      "title": "Azure Data Factory Training Program",
    "subtitle": "Master Azure Data Engineering Workflows",
    "description": "A comprehensive hands-on course to master Azure Data Factory pipelines, data flows, triggers, Databricks integration, and real-time project experience.",
    "image": "/images/courses/azuredatafactory.jpg",
    "duration": "30 Days",
    "schedule": "Weekdays",
    "level": "Intermediate",
    "slug": "azureADF"
    }
]

export default function CoursesPage() {
  const featuredCourses = courses.filter((course) => course.featured)
  const regularCourses = courses.filter((course) => !course.featured)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      {/* <section
        className="w-full py-20 bg-primary text-white"
        style={{
          // backgroundImage: "url('https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          opacity: 0.9,
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Courses
          </h1>
        </div>
          </div>
        </div>
      </section> */}
         <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Courses</h1>
              {/* <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Explore exciting career opportunities at Acquiescent Consultancy Services
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses
      {featuredCourses.length > 0 && (
        <section className="w-full py-12 md:py-24 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                  New
                </span>
                <h2 className="text-3xl font-bold tracking-tighter text-primary">Featured Courses</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Our latest and most popular training programs
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCourses.map((course) => (
              <Card
                key={course.slug}
                className="overflow-hidden hover:shadow-xl transition-all border-2 border-yellow-200"
              >
                <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 relative">
                  <div className="aspect-[4/3] relative">
                  <Image
                    src={course.image || "/placeholder.svg?height=300&width=400"}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  </div>
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Featured
                  </div>
                </div>
                <div className="w-full md:w-3/5">
                  <CardHeader>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mb-4">
                    <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-primary" />
                    <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                    <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-primary" />
                    <span>{course.level}</span>
                    </div>
                  </div>
                  </CardContent>
                  <CardFooter>
                  <Button asChild>
                    <Link href={`/courses/${course.slug}`}>View Course Details</Link>
                  </Button>
                  </CardFooter>
                </div>
                </div>
              </Card>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* All Courses */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">All Courses</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Browse our comprehensive range of training programs
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCourses.map((course) => (
              <Card key={course.slug} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={course.image || "/placeholder.svg?height=300&width=400"}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 line-clamp-2 mb-4">{course.description}</p>
                  <div className="grid grid-cols-1 gap-2 text-sm mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-primary" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-primary" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/courses/${course.slug}`}>View Course Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Your Learning Journey?</h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Contact us today to learn more about our courses and how we can help you advance your career
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                <Link href="/courses">
                  Explore All Courses <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

