import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "About Us | Acquiescent Technologies",
  description:
    "Learn about Acquiescent Technologies and our mission to provide professional IT training and staffing services",
}

export default function AboutPage() {
  const domains = [
    "Telecom domain",
    "Corporate Training",
    "Retail domain",
    "Banking domain",
    "Financial domain",
    "Insurance domain",
  ]

  const preScreeningServices = [
    "Skill Assessments",
    "Resume sourcing",
    "Interviewing",
    "Drug Testing",
    "Background Checks",
  ]

  const actionPlans = [
    {
      title: "Recruiting",
      description:
        "Our Goal is to develop a true partnership with your company and become extension of Human Resources.",
    },
    {
      title: "Retention",
      description:
        "Our Goal is to manage the temporary workforce and offer initiatives that help in creating & maintaining a positive working atmosphere.",
    },
    {
      title: "Customer Service",
      description:
        "Our Goal is to solidify a strong working relationship with all levels of supervision. This will be accomplished through continuous communication with Acquiescent Technologies POC and supervisors who have direct contact with temporary staff.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                About Acquiescent Technologies
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Established in 2010, providing professional IT training and staffing services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-primary mb-6">Company Overview</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Acquiescent (Acquiescent Technologies) was established in 2010 in Bangalore. All offices of
                  Acquiescent staffing and training solutions are owned and operated by experienced business executives
                  who have provided staffing to major corporations.
                </p>
                <p>
                  Acquiescent Technologies is into the business of providing manpower recruitment services and
                  psychometric assessment to various clients across the globe.
                </p>
                <p>
                  Acquiescent Technologies undertakes recruitment of all verticals in almost all the Training sectors
                  like IT, Non-IT Banking and Embedded System.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/placeholder.svg?height=400&width=600" alt="Acquiescent Office" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Domain Specialization */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Areas of Domain Specialization</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Our expertise spans across multiple industry domains
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {domains.map((domain, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{domain}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Specialized expertise and solutions tailored for the {domain.toLowerCase()} sector.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Screening Services */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Pre-Screening Services</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Comprehensive screening to ensure the highest quality candidates
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {preScreeningServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service}</h3>
                    <p className="text-gray-600">
                      {service === "Skill Assessments" &&
                        "Thorough evaluation of technical and soft skills relevant to the position."}
                      {service === "Resume sourcing" &&
                        "Identifying qualified candidates through multiple channels and databases."}
                      {service === "Interviewing" &&
                        "Structured interviews to assess candidate suitability and cultural fit."}
                      {service === "Drug Testing" &&
                        "Comprehensive drug screening as per industry standards and requirements."}
                      {service === "Background Checks" &&
                        "Detailed verification of employment history, education, and credentials."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/placeholder.svg?height=500&width=600" alt="Pre-Screening Process" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Action Plan */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Action Plan</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Our strategic approach to ensure successful partnerships
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actionPlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{plan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

