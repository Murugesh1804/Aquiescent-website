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
    aws: {
      "title": "AWS Cloud Fundamentals",
      "subtitle": "Master Amazon Web Services Architecture and Services",
      "description": "Comprehensive AWS training covering cloud computing concepts, core AWS services, security, databases, and architecture best practices. Prepare for AWS certification while gaining hands-on experience with real-world AWS implementations.",
      "image": "/images/courses/aws.jpg",
      "duration": "12 Days",
      "schedule": "Weekdays",
      "level": "Beginner to Intermediate",
      "certification": "AWS Cloud Practitioner or Developer/Sysops-Associate",
      "syllabus": [
        {
          "title": "Module 1: Cloud Computing Fundamentals",
          "topics": [
            "What is Cloud Computing",
            "Cloud Computing Types and Service Models",
            "Introduction to AWS and Benefits",
            "AWS Region, AZ, Edge Location, LocalZone",
            "AWS Pricing and Purchase Options"
          ]
        },
        {
          "title": "Module 2: AWS Compute and Networking",
          "topics": [
            "AWS Computing Services Overview",
            "EC2 and Instance Types",
            "EC2 IP Addressing (Public, Private, Elastic)",
            "Security Groups and Network Configuration",
            "Amazon VPC, Subnets, and Gateways",
            "Network Access Control Lists (NACLs)",
            "Load Balancers (ALB, NLB)"
          ]
        },
        {
          "title": "Module 3: AWS Storage Solutions",
          "topics": [
            "AMI and AWS Marketplace",
            "Metadata and Userdata",
            "EBS and Instance Store",
            "EBS Types and Performance Options",
            "Object and Block Storage Services",
            "Storage Classes and Lifecycle Management",
            "EFS and FSx Block Storage Solutions"
          ]
        },
        {
          "title": "Module 4: AWS Infrastructure as Code",
          "topics": [
            "AWS CLI Installation and Configuration",
            "Automation with CLI Commands",
            "Infrastructure as Code (IaaC) Concepts",
            "CloudFormation Fundamentals",
            "YAML and JSON Templates",
            "Sample CloudFormation Implementations"
          ]
        },
        {
          "title": "Module 5: AWS Database Services",
          "topics": [
            "RDS Overview and Use Cases",
            "Database Engine Options",
            "RDS Backup and Snapshots",
            "SQL and NoSQL Database Offerings",
            "Aurora Instance Types",
            "DynamoDB and ElastiCache"
          ]
        },
        {
          "title": "Module 6: AWS Security and Management",
          "topics": [
            "Identity and Access Management (IAM)",
            "IAM Users, Roles, and Policies",
            "Access Keys and Security Best Practices",
            "CloudWatch Monitoring",
            "CloudTrail and VPC Flow Logs",
            "Custom Metrics and Alarms",
            "Auto-Scaling Groups"
          ]
        },
        {
          "title": "Module 7: AWS Applications and Serverless",
          "topics": [
            "DNS and Route 53",
            "Routing Policies",
            "Elastic Beanstalk",
            "CloudFront and Content Delivery",
            "AWS Cognito",
            "Lambda Functions and Serverless Computing",
            "Step Functions and API Gateway",
            "AWS Athena and Event Bridge"
          ]
        },
        {
          "title": "Module 8: DevOps and Cost Management",
          "topics": [
            "AWS Developer Services (CodeCommit, CodeDeploy, CodeBuild)",
            "CI/CD Implementation",
            "AWS Cost and Billing Explorer",
            "Billing Alerts and Budget Management",
            "Cost Optimization Strategies"
          ]
        }
      ],
      "features": [
        "Hands-on labs with AWS console",
        "Infrastructure automation practice",
        "Security implementation exercises",
        "Serverless application deployment",
        "Certification preparation materials"
      ]
    },
    
    devops: {
      "title": "AWSome DevOps Engineering",
      "subtitle": "Master Modern DevOps Tools and Practices",
      "description": "Comprehensive DevOps training covering industry-standard tools including Git, Terraform, Jenkins, Ansible, Docker, and monitoring solutions. Learn infrastructure as code, CI/CD pipelines, configuration management, and containerization through hands-on projects.",
      "image": "/images/courses/devops.jpg",
      "duration": "22 Days",
      "schedule": "Weekdays",
      "level": "Intermediate to Advanced",
      "certification": "Terraform or Ansible Certification",
      "syllabus": [
        {
          "title": "Module 1: DevOps Fundamentals",
          "topics": [
            "What is DevOps",
            "DevOps Culture and Principles",
            "Tools and Technologies Overview",
            "DevOps Processes and Workflows"
          ]
        },
        {
          "title": "Module 2: Source Control Management",
          "topics": [
            "GitHub and Git Client",
            "GitLab, Bitbucket, and Azure Repos",
            "GitHub Actions",
            "Common Git Commands and Workflows",
            "Git Branching Strategies"
          ]
        },
        {
          "title": "Module 3: Infrastructure as Code with Terraform",
          "topics": [
            "Introduction to Terraform and Advantages",
            "Terraform Providers",
            "Key Terraform Commands",
            "Backend and State Management",
            "Working with Terraform Modules"
          ]
        },
        {
          "title": "Module 4: CI/CD with Jenkins",
          "topics": [
            "Introduction to CI/CD",
            "Jenkins Installation and Setup",
            "Freestyle and Pipeline Jobs",
            "Jenkins Slave Configuration",
            "Groovy Scripting for Jenkins"
          ]
        },
        {
          "title": "Module 5: Configuration Management with Ansible",
          "topics": [
            "Introduction to Configuration Management",
            "Ansible vs. Chef and Puppet",
            "Ansible Installation and Setup",
            "Ad-hoc Commands and Modules",
            "Ansible Playbooks and Real-world Examples",
            "Working with Variables and Loops",
            "Handlers and Error Handling"
          ]
        },
        {
          "title": "Module 6: Containerization with Docker",
          "topics": [
            "Introduction to Microservices and Containers",
            "Docker Installation and Commands",
            "Writing Dockerfiles",
            "Docker Volumes and Data Persistence",
            "DockerHub Registry",
            "Container Dependencies and Environment Variables",
            "Docker Compose",
            "Docker Networking",
            "Container Orchestration with Docker Swarm"
          ]
        },
        {
          "title": "Module 7: Logging and Monitoring",
          "topics": [
            "CloudWatch Logs",
            "ELK Stack and Splunk",
            "Infrastructure Monitoring Tools",
            "Grafana and Prometheus Setup",
            "Metrics Collection and Visualization"
          ]
        },
        {
          "title": "Module 8: Agile Development",
          "topics": [
            "Introduction to Agile Development",
            "Jira for Project Management",
            "Sprint Planning and Daily Standups",
            "Agile Stories, Backlogs, and Retrospectives"
          ]
        },
        {
          "title": "Module 9: Azure DevOps",
          "topics": [
            "Introduction to Azure DevOps",
            "Azure Boards, Repos, Pipelines, and Artifacts",
            "Running Sample Jobs",
            "Azure DevOps Integration"
          ]
        }
      ],
      "features": [
        "Hands-on infrastructure automation",
        "CI/CD pipeline implementation",
        "Container orchestration practice",
        "Configuration management exercises",
        "End-to-end DevOps workflow experience"
      ]
    },
    
    python: {
      "title": "Python Programming Mastery",
      "subtitle": "From Fundamentals to Web Applications",
      "description": "Comprehensive Python course covering programming fundamentals, data structures, object-oriented programming, database integration, and web application development with Django. Gain practical skills through hands-on exercises and real-world projects.",
      "image": "/images/courses/python.jpg",
      "duration": "12 Weeks",
      "schedule": "Weekdays",
      "level": "Beginner to Advanced",
      "certification": "Python Developer Certification",
      "syllabus": [
        {
          "title": "Module 1: Programming Fundamentals",
          "topics": [
            "Introduction to Programming Concepts",
            "Programming Language Types",
            "Python Installation and Environment Setup",
            "REPL and PyCharm IDE",
            "Variables, Constants, and Data Types",
            "Operators (Arithmetic, Relational, Logical)",
            "Built-in Functions",
            "Conditional Statements",
            "Looping Structures (while and for)",
            "Using range() Function"
          ]
        },
        {
          "title": "Module 2: Python Data Structures",
          "topics": [
            "Working with Strings",
            "Indexing and Slicing",
            "Lists and List Comprehension",
            "Sets and Set Comprehension",
            "Tuples and Their Applications",
            "Comparing List, Set, and Tuple",
            "Nested Data Structures",
            "Dictionaries and Dictionary Comprehension",
            "Built-in Functions (enumerate and zip)"
          ]
        },
        {
          "title": "Module 3: Functions and Modules",
          "topics": [
            "Creating and Calling Functions",
            "Positional and Keyword Arguments",
            "Default Parameter Values",
            "Variable Arguments with *args",
            "Keyword-only and Position-only Arguments",
            "Arbitrary Arguments with **kwargs",
            "Parameter Passing in Python",
            "Lambda Expressions",
            "Functions as Objects",
            "map(), sorted(), and filter()",
            "Variable Scope",
            "Modules and Packages",
            "Importing and Using Modules",
            "Using PIP for Library Installation"
          ]
        },
        {
          "title": "Module 4: Object-Oriented Programming",
          "topics": [
            "Classes and Objects",
            "Constructors and Special Methods",
            "Operator Overloading",
            "Static Methods and Class Methods",
            "Inheritance and Overriding",
            "Multiple Inheritance and MRO",
            "Working with Iterators",
            "Creating Iterators and Iterables",
            "Generators and Generator Functions",
            "Exception Handling",
            "User-defined Exceptions"
          ]
        },
        {
          "title": "Module 5: Python Libraries and File Handling",
          "topics": [
            "File Operations (Reading and Writing)",
            "Pickle for Serialization",
            "Working with JSON",
            "OS and Sys Modules",
            "Regular Expressions",
            "DateTime Module",
            "HTTP Requests with Requests Library",
            "Web Scraping with BeautifulSoup",
            "Multithreading with Threading Module"
          ]
        },
        {
          "title": "Module 6: Database Programming",
          "topics": [
            "Introduction to Database Systems",
            "SQLite Database Fundamentals",
            "Basic SQL Commands",
            "DB-API Introduction",
            "Connection and Cursor Objects",
            "Database Operations with DB-API"
          ]
        },
        {
          "title": "Module 7: Web Development with Django",
          "topics": [
            "Web Application Fundamentals",
            "HTML, CSS, and JavaScript Basics",
            "Django Installation and Project Setup",
            "MVC/MVT Architecture",
            "Views, Models, and Templates",
            "Template Inheritance",
            "Filters and Tags",
            "Forms and Validation",
            "Static Files in Django",
            "AJAX with jQuery",
            "Cookies and Sessions",
            "Object Relational Mapping (ORM)",
            "Database Operations with Managers",
            "ModelForms",
            "Class-based and Generic Views",
            "Authentication System",
            "RESTful Services with Django REST Framework"
          ]
        }
      ],
      "features": [
        "Hands-on coding exercises",
        "Real-world project development",
        "Database integration practice",
        "Web application development",
        "File processing and data manipulation"
      ]
    },
    
    sql: {
      "title": "SQL Server Mastery",
      "subtitle": "Complete Database Development and Management",
      "description": "Comprehensive SQL Server course covering database design, query optimization, stored procedures, functions, triggers, and advanced concepts. Learn practical skills for creating and maintaining efficient database systems in enterprise environments.",
      "image": "/images/courses/sql.jpg",
      "duration": "4 Weeks",
      "schedule": "Weekends & Weekday Evenings",
      "level": "Beginner to Advanced",
      "certification": "SQL Server Associate Certification",
      "syllabus": [
        {
          "title": "Module 1: SQL Server Fundamentals",
          "topics": [
            "Introduction to SQL Server",
            "Database Constraints",
            "Normalization and Denormalization",
            "SQL Clauses and Syntax",
            "Indexes and Types of Indexes"
          ]
        },
        {
          "title": "Module 2: Data Manipulation and Retrieval",
          "topics": [
            "Joins and Join Types",
            "Sequences and Identity Columns",
            "Built-in Functions",
            "Temporary Tables",
            "Views (Simple, Complex, and Materialized)"
          ]
        },
        {
          "title": "Module 3: Advanced Query Techniques",
          "topics": [
            "Common Table Expressions (CTE)",
            "Derived Tables and Table Variables",
            "Subqueries and Correlated Queries",
            "Pivot and Unpivot Operations",
            "Error Handling Techniques"
          ]
        },
        {
          "title": "Module 4: Programming Objects",
          "topics": [
            "Triggers and Trigger Types",
            "User-Defined Functions",
            "Stored Procedures",
            "Cursors",
            "Transactions and ACID Properties"
          ]
        }
      ],
      "features": [
        "Hands-on database design exercises",
        "Query optimization techniques",
        "Performance tuning practice",
        "Transaction management scenarios",
        "Interview preparation"
      ]
    },
    
    snowflake: {
      "title": "Snowflake on AWS",
      "subtitle": "Cloud Data Warehousing and Analytics",
      "description": "Comprehensive Snowflake training focusing on cloud data warehousing architecture, AWS integration, performance optimization, and data sharing. Learn to design, implement, and manage enterprise-grade data solutions with Snowflake's cloud-native platform.",
      "image": "/images/courses/snowflake.jpg",
      "duration": "4 Weeks",
      "schedule": "Weekdays",
      "level": "Intermediate",
      "certification": "SnowPro Core Certification",
      "syllabus": [
        {
          "title": "Module 1: Data Warehousing Fundamentals",
          "topics": [
            "Basics of Data Warehousing",
            "Dimensional Data Modeling",
            "Fact Tables and Dimensional Tables",
            "Star Schema and Snowflake Schema"
          ]
        },
        {
          "title": "Module 2: AWS Cloud Essentials",
          "topics": [
            "Introduction to AWS Cloud",
            "Core AWS Services (S3, RDS, DMS, SNS, SQS, Lambda, IAM)",
            "AWS Account Setup and Management"
          ]
        },
        {
          "title": "Module 3: Snowflake Fundamentals",
          "topics": [
            "History and Introduction to Snowflake",
            "Snowflake Architecture",
            "Account Creation and Setup",
            "Database Objects and User Management",
            "Access Control Management",
            "AWS and Snowflake Integration"
          ]
        },
        {
          "title": "Module 4: Data Operations",
          "topics": [
            "Snowflake Core Concepts and Features",
            "Data Loading and Unloading Techniques",
            "Performance Optimization Strategies",
            "Data Sharing Capabilities",
            "Data Protection Methods"
          ]
        },
        {
          "title": "Module 5: Certification and Interview Preparation",
          "topics": [
            "Real-world Scenarios and Case Studies",
            "Interview Questions and Answers",
            "SnowPro Certification Preparation",
            "Sample Tests and Quiz Materials"
          ]
        }
      ],
      "features": [
        "Hands-on Snowflake environment practice",
        "AWS integration exercises",
        "Performance optimization techniques",
        "Data loading and transformation scenarios",
        "Certification preparation materials"
      ]
    },
    
    softwareTesting: {
      "title": "Software Testing & Automation",
      "subtitle": "Manual and Automated Testing with Selenium",
      "description": "Comprehensive software testing course covering manual testing fundamentals, test design techniques, automation with Selenium WebDriver, frameworks like TestNG and Cucumber, and CI/CD integration. Build a complete test automation framework with industry best practices.",
      "image": "/images/courses/testing.jpg",
      "duration": "12 Weeks",
      "schedule": "Weekdays",
      "level": "Beginner to Advanced",
      "certification": "Certified Software Tester",
      "syllabus": [
        {
          "title": "Module 1: Manual Testing Fundamentals",
          "topics": [
            "Introduction to Software Testing",
            "Verification vs. Validation",
            "Software Development Life Cycle (SDLC)",
            "Software Testing Life Cycle (STLC)",
            "Test Cases, Use Cases, and Scenarios",
            "Test Plan and Strategy Development",
            "Bug Life Cycle and Reporting",
            "Types of Testing (Functional & Non-Functional)",
            "Testing Techniques (Black Box & White Box)"
          ]
        },
        {
          "title": "Module 2: Test Design Techniques",
          "topics": [
            "Boundary Value Analysis",
            "Equivalence Partitioning",
            "Decision Table Testing",
            "State Transition Diagrams",
            "Use Case Testing",
            "Integration Testing Approaches",
            "System and User Acceptance Testing",
            "Test Environment Setup"
          ]
        },
        {
          "title": "Module 3: Java for Automation",
          "topics": [
            "Java Environment Setup",
            "Java Syntax and Variables",
            "Control Flow and OOP Concepts",
            "Exception Handling",
            "Collections Framework",
            "Multithreading",
            "SQL for Testers"
          ]
        },
        {
          "title": "Module 4: Selenium WebDriver",
          "topics": [
            "Selenium WebDriver Architecture",
            "Setting Up Selenium with Eclipse",
            "Maven Introduction",
            "WebDriver Manager",
            "Locators in Selenium",
            "XPath and CSS Selectors",
            "Handling Web Elements",
            "Waits in Selenium",
            "Screenshot Capture"
          ]
        },
        {
          "title": "Module 5: Testing Frameworks",
          "topics": [
            "TestNG Framework",
            "TestNG Annotations",
            "Assertions and Grouping",
            "Data Provider for Data-Driven Testing",
            "TestNG Listeners",
            "BDD Framework with Cucumber",
            "Gherkin Syntax and Step Definitions"
          ]
        },
        {
          "title": "Module 6: Advanced Automation",
          "topics": [
            "Test Automation Framework Types",
            "Data-Driven Framework",
            "Keyword-Driven Framework",
            "Hybrid Framework Development",
            "Page Object Model",
            "Test Data Management",
            "Logging and Reporting"
          ]
        },
        {
          "title": "Module 7: CI/CD Integration",
          "topics": [
            "Git and Version Control",
            "GitHub Workflow",
            "Jenkins Introduction",
            "Continuous Integration Setup",
            "Build Automation",
            "Test Execution in CI Pipeline"
          ]
        },
        {
          "title": "Module 8: Specialized Testing",
          "topics": [
            "Mobile Application Testing",
            "API Testing Basics",
            "Testing AI Applications",
            "Performance Testing Introduction",
            "Security Testing Fundamentals"
          ]
        }
      ],
      "features": [
        "Hands-on test case creation",
        "Automation framework development",
        "Real-world project implementation",
        "CI/CD integration practice",
        "Interview preparation and resume building"
      ]
    }
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
    title: `${course.title} | Acquiescent`,
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

