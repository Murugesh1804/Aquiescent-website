import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Calendar, Users, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Courses | Acquiescent Technologies",
  description: "Explore our comprehensive training programs to advance your career in IT and technology",
}

const courses = [
  {
    title: "Java Programming",
    subtitle: "Comprehensive Java Development Training",
    description:
      "Master Java programming from fundamentals to advanced concepts with our comprehensive training program.",
    image: "/images/courses/java.jpg",
    slug: "java",
    duration: "12 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Beginner to Advanced",
  },
  {
    title: "Software Testing",
    subtitle: "Manual and Automation Testing",
    description:
      "Comprehensive training in software testing methodologies covering both manual and automation testing.",
    image: "/images/courses/testing.jpg",
    slug: "software-testing",
    duration: "10 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Beginner to Intermediate",
  },
  {
    title: "Apache Kafka",
    subtitle: "Event Streaming Platform",
    description:
      "Master Apache Kafka, the distributed event streaming platform used for high-performance data pipelines.",
    image: "/images/courses/kafka.jpg",
    slug: "apache-kafka",
    duration: "8 Weeks",
    schedule: "Weekends",
    level: "Intermediate to Advanced",
  },
  {
    title: "MQ",
    subtitle: "Message Queuing Technologies",
    description: "Learn message queuing technologies for reliable, secure messaging and integration solutions.",
    image: "/images/courses/mq.jpg",
    slug: "mq",
    duration: "6 Weeks",
    schedule: "Weekends",
    level: "Intermediate",
  },
  {
    title: "DevOps Engineering",
    subtitle: "CI/CD and Infrastructure Automation",
    description:
      "Comprehensive DevOps training covering continuous integration, continuous deployment, and infrastructure automation.",
    image: "/images/courses/devops.jpg",
    slug: "devops",
    duration: "12 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Intermediate to Advanced",
  },
  {
    title: "Data Engineer",
    subtitle: "Data Pipeline and Infrastructure",
    description: "Learn to design, build and maintain data pipelines and infrastructure for efficient data processing.",
    image: "/images/courses/data-engineer.jpg",
    slug: "data-engineer",
    duration: "10 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Intermediate to Advanced",
  },
  {
    title: "Data Scientist",
    subtitle: "Data Analysis and Machine Learning",
    description:
      "Master data analysis, machine learning, and statistical modeling to extract insights from complex datasets.",
    image: "/images/courses/data-scientist.jpg",
    slug: "data-scientist",
    duration: "12 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Intermediate to Advanced",
  },
  {
    title: "Salesforce",
    subtitle: "CRM Platform Administration and Development",
    description: "Comprehensive training on Salesforce CRM platform, administration, and development.",
    image: "/images/courses/salesforce.jpg",
    slug: "salesforce",
    duration: "8 Weeks",
    schedule: "Weekends",
    level: "Beginner to Intermediate",
  },
  {
    title: "Python Programming",
    subtitle: "From Basics to Advanced Applications",
    description:
      "Learn Python programming for web development, data analysis, automation, and artificial intelligence.",
    image: "/images/courses/python.jpg",
    slug: "python",
    duration: "10 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Beginner to Advanced",
  },
  {
    title: "Power BI",
    subtitle: "Data Visualization and Business Intelligence",
    description: "Master data visualization and business intelligence using Microsoft Power BI tools and techniques.",
    image: "/images/courses/power-bi.jpg",
    slug: "power-bi",
    duration: "6 Weeks",
    schedule: "Weekends",
    level: "Beginner to Intermediate",
  },
  {
    title: "AWS Cloud Practitioner",
    subtitle: "Cloud Essentials and Fundamentals",
    description: "Master cloud essentials with our comprehensive AWS Cloud Practitioner certification course.",
    image: "/images/courses/aws.jpg",
    slug: "aws-cloud-practitioner",
    duration: "6 Weeks",
    schedule: "Weekends",
    level: "Beginner to Intermediate",
    featured: true,
  },
]

export default function CoursesPage() {
  const featuredCourses = courses.filter((course) => course.featured)
  const regularCourses = courses.filter((course) => !course.featured)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Courses</h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Advance your career with our industry-leading training programs
              </p>
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

