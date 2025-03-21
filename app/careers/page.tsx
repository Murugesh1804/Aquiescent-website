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
      title: "Senior Snowflake Data Engineer",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "5+ years",
      description:
        "We are looking for an experienced Snowflake Data Engineer to join our team and help design, build, and maintain our data infrastructure.",
      requirements: [
        "5+ years of experience in data engineering",
        "Strong experience with Snowflake",
        "Proficiency in SQL and Python",
        "Experience with ETL/ELT processes",
        "Knowledge of data modeling and data warehousing concepts",
      ],
      slug: "senior-snowflake-data-engineer",
    },
    {
      title: "Automation Test Lead",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "4+ years",
      description:
        "We are seeking an Automation Test Lead to develop and execute automated test strategies for our software applications.",
      requirements: [
        "4+ years of experience in test automation",
        "Strong knowledge of Selenium, TestNG, and Cucumber",
        "Experience with CI/CD pipelines",
        "Proficiency in Java or Python",
        "Experience leading a team of testers",
      ],
      slug: "automation-test-lead",
    },
    {
      title: "Cloud Solutions Architect",
      location: "Remote",
      type: "Full-time",
      experience: "6+ years",
      description:
        "We are looking for a Cloud Solutions Architect to design and implement cloud-based solutions for our clients.",
      requirements: [
        "6+ years of experience in cloud architecture",
        "Strong knowledge of AWS, Azure, or GCP",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Understanding of microservices architecture",
        "Strong communication and client-facing skills",
      ],
      slug: "cloud-solutions-architect",
    },
    {
      title: "DevOps Engineer",
      location: "Pune, India",
      type: "Full-time",
      experience: "3+ years",
      description: "We are seeking a DevOps Engineer to help automate and streamline our operations and processes.",
      requirements: [
        "3+ years of experience in DevOps",
        "Experience with Docker, Kubernetes, and containerization",
        "Knowledge of CI/CD tools (Jenkins, GitLab CI, GitHub Actions)",
        "Scripting skills (Bash, Python)",
        "Experience with monitoring and logging tools",
      ],
      slug: "devops-engineer",
    },
  ]

  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer competitive compensation packages to attract and retain top talent.",
      icon: "💰",
    },
    {
      title: "Health Insurance",
      description: "Comprehensive health insurance coverage for you and your family.",
      icon: "🏥",
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities and career growth paths.",
      icon: "📚",
    },
    {
      title: "Flexible Work Hours",
      description: "Work-life balance with flexible scheduling options.",
      icon: "⏰",
    },
    {
      title: "Remote Work Options",
      description: "Hybrid work model with remote work possibilities.",
      icon: "🏠",
    },
    {
      title: "Team Events",
      description: "Regular team building activities and social events.",
      icon: "🎉",
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
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {job.experience}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6">
                  <Button asChild>
                    <Link href={`/careers/${job.slug}`}>
                      Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Why Work With Us
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                We offer a range of benefits to support your professional and personal growth
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="h-full hover:shadow-lg transition-all">
                <CardHeader className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
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

