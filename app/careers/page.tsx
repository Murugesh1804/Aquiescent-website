import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Clock, Briefcase } from "lucide-react"

export const metadata = {
  title: "Careers | Acquiescent Consultancy Services",
  description: "Join our team at Acquiescent Consultancy Services and build your career with us",
}

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Lead Automation Engineer – Playwright",
      location: "Anywhere, India",
      type: "Full-time",
      experience: "7–10 years (1–2 years Playwright)",
      description: "Lead automation testing efforts, design frameworks, and ensure high-quality product delivery using Playwright.",
      requirements: [
        "Strong programming skills in JavaScript/TypeScript or any modern language",
        "In-depth knowledge of Playwright and automation frameworks",
        "Hands-on API testing and automation integration",
        "CI/CD pipeline setup with Jenkins, GitHub Actions, or Azure DevOps",
        "Database testing and SQL proficiency",
      ],
      slug: "lead-automation-engineer-playwright",
    },
    {
      title: "Java Developer",
      location: "Anywhere, India",
      type: "Full-time",
      experience: "5–10 years",
      description: "Maintain and support business applications in a Run-The-Bank model focusing on automation and ML-driven monitoring.",
      requirements: [
        "5–10 years of Java/J2EE development",
        "Spring Boot and MongoDB exposure preferred",
        "SQL/PLSQL in Sybase, DB2, or DynamoDB",
        "Docker microservices and RESTful API architecture",
      ],
      slug: "java-developer",
    },
    {
      title: "Java Developer + Cloud Experience",
      location: "Anywhere, India",
      type: "Full-time",
      experience: "5–10 years",
      description: "Develop microservices with cloud infrastructure design and provisioning using Terraform on AWS.",
      requirements: [
        "SQL/PLSQL in Sybase, DB2, or DynamoDB",
        "Docker microservices and RESTful API architecture",
        "AWS core services: EC2, S3, ALB, NATGW, EFS, Lambda, APIGW",
        "Design DR strategies and AWS infrastructure",
        "Terraform provisioning on AWS",
      ],
      slug: "java-cloud-developer",
    },
    {
      title: "UI Developer",
      location: "Anywhere, India",
      type: "Full-time",
      experience: "2+ years",
      description: "Build dynamic user interfaces using modern frameworks like Angular or React.",
      requirements: [
        "2+ years experience with Angular or React",
      ],
      slug: "ui-developer",
    },
    {
      title: "Project Manager",
      location: "Anywhere, India",
      type: "Full-time",
      experience: "5–8 years",
      description: "Manage record keeping, retention, and governance initiatives within projects.",
      requirements: [
        "5–8 years in records management or information governance",
      ],
      slug: "project-manager",
    },
    {
      title: "Java Developer",
      location: "Anywhere, India",
      type: "Full-time",
      experience: "3–6 years",
      description: "Provide application and production support, automate monitoring, and manage incidents.",
      requirements: [
        "3–6 years in application and production support",
        "Proficiency in Java programming and complex algorithms",
        "Strong SQL skills for database troubleshooting",
        "Linux/UNIX and shell scripting experience",
        "Debugging and issue resolution skills",
      ],
      slug: "java-application-support",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Join Our Team</h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Explore exciting career opportunities at Acquiescent Consultancy Services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Current Openings
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Find the perfect role to advance your career with us
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <Card key={job.slug} className="h-full hover:shadow-lg transition-all">
                <CardHeader className="p-6">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />{job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />{job.type}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />{job.experience}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6">
                  <Button asChild>
                    <Link href={`/careers/${job.slug}`}>Apply Now <ChevronRight className="ml-2 h-4 w-4" /></Link>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Don't See a Perfect Match?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you
                in mind for future opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" asChild>
                <Link href="/contact">Submit Your Resume</Link>
              </Button>
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
