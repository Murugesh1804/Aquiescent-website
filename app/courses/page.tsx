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
    title: "AWS Cloud Fundamentals",
    subtitle: "Amazon Web Services Architecture",
    description: "Comprehensive training on AWS services, security, databases, and architecture best practices. Prepare for certification while gaining hands-on experience.",
    image: "/images/courses/aws.jpg",
    slug: "aws",
    duration: "12 Days",
    schedule: "Weekdays",
    level: "Beginner to Intermediate",
  },
  
  {
    title: "DevOps Engineering",
    subtitle: "Modern DevOps Tools and Practices",
    description: "Master industry-standard DevOps tools including Git, Terraform, Jenkins, Ansible, Docker, and monitoring solutions through hands-on projects.",
    image: "/images/courses/devops.jpg",
    slug: "devops",
    duration: "22 Days",
    schedule: "Weekdays",
    level: "Intermediate to Advanced",
  },
  
  {
    title: "Python Programming",
    subtitle: "From Fundamentals to Web Applications",
    description: "Comprehensive Python course covering programming basics, data structures, OOP, database integration, and web development with Django.",
    image: "/images/courses/python.jpg",
    slug: "python",
    duration: "12 Weeks",
    schedule: "Weekdays",
    level: "Beginner to Advanced",
  },
  
  {
    title: "Snowflake on AWS",
    subtitle: "Cloud Data Warehousing",
    description: "Learn cloud data warehousing with Snowflake, including AWS integration, optimization, and data sharing for enterprise-grade analytics solutions.",
    image: "/images/courses/snowflake.jpg",
    slug: "snowflake",
    duration: "4 Weeks",
    schedule: "Weekdays",
    level: "Intermediate",
  },
  
  {
    title: "Software Testing & Automation",
    subtitle: "Manual and Selenium Testing",
    description: "Master software testing fundamentals and automation with Selenium WebDriver, TestNG, Cucumber, and CI/CD integration for quality assurance.",
    image: "/images/courses/testing.jpg",
    slug: "softwareTesting",
    duration: "12 Weeks",
    schedule: "Weekdays",
    level: "Beginner to Advanced",
  },
  {
    title: "SQL Server Mastery",
    subtitle: "Database Development and Management",
    description: "Master SQL Server from fundamentals to advanced concepts. Learn database design, query optimization, stored procedures, and more for enterprise-grade data solutions.",
    image: "/images/courses/sql-server.jpg",
    slug: "sql",
    duration: "4 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Beginner to Advanced",
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

