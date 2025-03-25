import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EnrollmentForm } from "@/components/enrollment-form"
import { CheckCircle, Clock, Calendar, Users, Award, ChevronLeft } from "lucide-react"

// Course data
const courses = {
  java: {
    title: "Java Programming",
    subtitle: "Comprehensive Java Development Training",
    description:
      "Master Java programming from fundamentals to advanced concepts with our comprehensive training program. Learn object-oriented programming, Spring framework, Hibernate, and microservices architecture.",
    image: "/images/courses/java.jpg",
    duration: "12 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Beginner to Advanced",
    certification: "Oracle Certified Professional, Java SE Programmer",
    syllabus: [
      {
        title: "Module 1: Java Fundamentals",
        topics: [
          "Introduction to Java and JVM",
          "Variables, Data Types, and Operators",
          "Control Flow Statements",
          "Arrays and Collections",
          "Exception Handling",
        ],
      },
      {
        title: "Module 2: Object-Oriented Programming",
        topics: [
          "Classes and Objects",
          "Inheritance and Polymorphism",
          "Interfaces and Abstract Classes",
          "Encapsulation and Data Hiding",
          "Design Patterns in Java",
        ],
      },
      {
        title: "Module 3: Java Advanced Features",
        topics: [
          "Multithreading and Concurrency",
          "Java I/O and NIO",
          "Java Generics",
          "Lambda Expressions and Functional Interfaces",
          "Stream API",
        ],
      },
      {
        title: "Module 4: Java Frameworks",
        topics: [
          "Spring Framework Fundamentals",
          "Spring Boot Applications",
          "Hibernate ORM",
          "RESTful Web Services",
          "Microservices Architecture",
        ],
      },
    ],
    features: [
      "Hands-on coding exercises and projects",
      "Real-world application development",
      "Industry expert instructors",
      "Job placement assistance",
      "Certification preparation",
    ],
  },
  "software-testing": {
    title: "Software Testing",
    subtitle: "Manual and Automation Testing",
    description:
      "Comprehensive training in software testing methodologies covering both manual and automation testing. Learn test planning, execution, reporting, and master tools like Selenium, TestNG, and JUnit.",
    image: "/images/courses/testing.jpg",
    duration: "10 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Beginner to Intermediate",
    certification: "ISTQB Certified Tester",
    syllabus: [
      {
        title: "Module 1: Testing Fundamentals",
        topics: [
          "Introduction to Software Testing",
          "Software Development Life Cycle",
          "Testing Methodologies",
          "Test Planning and Documentation",
          "Defect Management",
        ],
      },
      {
        title: "Module 2: Manual Testing",
        topics: [
          "Test Case Design Techniques",
          "Functional Testing",
          "UI Testing",
          "Regression Testing",
          "Exploratory Testing",
        ],
      },
      {
        title: "Module 3: Automation Testing",
        topics: [
          "Introduction to Test Automation",
          "Selenium WebDriver",
          "TestNG Framework",
          "Data-Driven Testing",
          "Keyword-Driven Framework",
        ],
      },
      {
        title: "Module 4: Advanced Testing",
        topics: [
          "API Testing with Postman and RestAssured",
          "Performance Testing Basics",
          "Mobile Testing Introduction",
          "Continuous Integration with Jenkins",
          "Test Management Tools",
        ],
      },
    ],
    features: [
      "Comprehensive test case development",
      "Hands-on experience with testing tools",
      "Real project testing scenarios",
      "Industry expert instructors",
      "Certification preparation",
    ],
  },
  "apache-kafka": {
    title: "Apache Kafka",
    subtitle: "Event Streaming Platform",
    description:
      "Master Apache Kafka, the distributed event streaming platform used for high-performance data pipelines, streaming analytics, and data integration. Learn architecture, deployment, and application development.",
    image: "/images/courses/kafka.jpg",
    duration: "8 Weeks",
    schedule: "Weekends",
    level: "Intermediate to Advanced",
    certification: "Confluent Certified Developer for Apache Kafka",
    syllabus: [
      {
        title: "Module 1: Kafka Fundamentals",
        topics: [
          "Introduction to Event Streaming",
          "Kafka Architecture",
          "Topics, Partitions, and Brokers",
          "Producers and Consumers",
          "Kafka Cluster Setup",
        ],
      },
      {
        title: "Module 2: Kafka Development",
        topics: [
          "Kafka Producer API",
          "Kafka Consumer API",
          "Serialization and Deserialization",
          "Stream Processing Concepts",
          "Error Handling and Monitoring",
        ],
      },
      {
        title: "Module 3: Kafka Streams",
        topics: [
          "Stream Processing Architecture",
          "Stateless Operations",
          "Stateful Operations",
          "Windowing and Joining",
          "Testing Kafka Streams Applications",
        ],
      },
      {
        title: "Module 4: Kafka Ecosystem",
        topics: [
          "Kafka Connect",
          "Schema Registry",
          "KSQL and Kafka Streams",
          "Monitoring and Management",
          "Security and Authentication",
        ],
      },
    ],
    features: [
      "Hands-on Kafka cluster setup",
      "Real-time data pipeline development",
      "Stream processing applications",
      "Industry expert instructors",
      "Certification preparation",
    ],
  },
  devops: {
    title: "DevOps Engineering",
    subtitle: "CI/CD and Infrastructure Automation",
    description:
      "Comprehensive DevOps training covering continuous integration, continuous deployment, infrastructure automation, and monitoring. Master tools like Docker, Kubernetes, Jenkins, and Terraform.",
    image: "/images/courses/devops.jpg",
    duration: "12 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Intermediate to Advanced",
    certification: "AWS Certified DevOps Engineer",
    syllabus: [
      {
        title: "Module 1: DevOps Fundamentals",
        topics: [
          "Introduction to DevOps",
          "Version Control with Git",
          "Linux Administration Essentials",
          "Scripting for Automation",
          "Infrastructure as Code Concepts",
        ],
      },
      {
        title: "Module 2: Containerization",
        topics: [
          "Docker Fundamentals",
          "Building and Managing Images",
          "Docker Compose",
          "Kubernetes Architecture",
          "Kubernetes Deployments and Services",
        ],
      },
      {
        title: "Module 3: CI/CD Pipeline",
        topics: ["Jenkins Pipeline", "GitLab CI/CD", "GitHub Actions", "Artifact Management", "Deployment Strategies"],
      },
      {
        title: "Module 4: Infrastructure Automation",
        topics: [
          "Terraform for Infrastructure Provisioning",
          "Ansible for Configuration Management",
          "Cloud Infrastructure (AWS/Azure)",
          "Monitoring and Logging",
          "Security in DevOps",
        ],
      },
    ],
    features: [
      "Hands-on infrastructure setup",
      "CI/CD pipeline implementation",
      "Container orchestration with Kubernetes",
      "Industry expert instructors",
      "Certification preparation",
    ],
  },
  python: {
    title: "Python Programming",
    subtitle: "From Basics to Advanced Applications",
    description:
      "Comprehensive Python programming course covering fundamentals, data structures, web development, data analysis, and machine learning applications. Build real-world projects and master Python libraries.",
    image: "/images/courses/python.jpg",
    duration: "10 Weeks",
    schedule: "Weekends & Weekday Evenings",
    level: "Beginner to Advanced",
    certification: "Python Institute PCEP & PCAP",
    syllabus: [
      {
        title: "Module 1: Python Fundamentals",
        topics: [
          "Introduction to Python",
          "Variables, Data Types, and Operators",
          "Control Flow and Loops",
          "Functions and Modules",
          "Exception Handling",
        ],
      },
      {
        title: "Module 2: Data Structures and OOP",
        topics: [
          "Lists, Tuples, and Dictionaries",
          "Sets and Collections",
          "Object-Oriented Programming",
          "File Handling and I/O",
          "Regular Expressions",
        ],
      },
      {
        title: "Module 3: Python for Data Science",
        topics: [
          "NumPy for Numerical Computing",
          "Pandas for Data Analysis",
          "Data Visualization with Matplotlib and Seaborn",
          "Data Cleaning and Preprocessing",
          "Introduction to Machine Learning with Scikit-learn",
        ],
      },
      {
        title: "Module 4: Python Applications",
        topics: [
          "Web Development with Flask/Django",
          "API Development and Integration",
          "Database Connectivity",
          "Automation and Scripting",
          "Python for DevOps",
        ],
      },
    ],
    features: [
      "Hands-on coding exercises and projects",
      "Real-world application development",
      "Data analysis and visualization",
      "Industry expert instructors",
      "Certification preparation",
    ],
  },
}

// Generate metadata for each course page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = courses[params.slug]

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    }
  }

  return {
    title: `${course.title} | ACQUIESCENT Technologies`,
    description: course.description,
  }
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses[params.slug]

  if (!course) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <Link href="/courses" className="inline-flex items-center text-white/80 hover:text-white mb-2">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Courses
              </Link>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{course.title}</h1>
              <p className="text-xl text-white/80">{course.subtitle}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-white/70" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-white/70" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-white/70" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-white/70" />
                  <span>{course.certification}</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={course.image || "/placeholder.svg?height=400&width=600"}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Course Overview</h2>
                    <p className="text-gray-700 leading-relaxed">{course.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Duration</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{course.duration}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Schedule</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{course.schedule}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Level</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{course.level}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Certification</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{course.certification}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="syllabus" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Course Syllabus</h2>
                    <div className="space-y-8">
                      {course.syllabus.map((module, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardHeader className="bg-primary/5">
                            <CardTitle>{module.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-6">
                            <ul className="space-y-2">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start">
                                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Course Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {course.features.map((feature, index) => (
                        <Card key={index}>
                          <CardContent className="pt-6">
                            <div className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                              <p>{feature}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-primary text-white">
                    <CardTitle className="text-xl">Enroll in this Course</CardTitle>
                    <CardDescription className="text-white/80">Fill out the form below to get started</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <EnrollmentForm courseName={course.title} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Related Courses</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Explore other courses that might interest you
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(courses)
              .filter(([slug, _]) => slug !== params.slug)
              .slice(0, 3)
              .map(([slug, relatedCourse]) => (
                <Card key={slug} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-video relative">
                    <Image
                      src={relatedCourse.image || "/placeholder.svg?height=200&width=400"}
                      alt={relatedCourse.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{relatedCourse.title}</CardTitle>
                    <CardDescription>{relatedCourse.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 line-clamp-2 mb-4">{relatedCourse.description}</p>
                    <Button asChild>
                      <Link href={`/courses/${slug}`}>View Course</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}

