"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin, Clock, Briefcase } from "lucide-react"
import { ApplyPopup } from "@/components/apply-popup"

type Job = {
  title: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  slug: string
}

export default function CareersPage() {
  const [jobOpenings, setJobOpenings] = useState<Job[]>([])
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:3500/api/careers/get")
        if (!res.ok) throw new Error("Failed to fetch job openings.")
        const data = await res.json()
        setJobOpenings(data)
      } catch (err: any) {
        setError(err.message || "An error occurred.")
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

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

          {loading ? (
            <p className="text-center text-gray-500">Loading job openings...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
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
                    <Button onClick={() => setSelectedJob(job.title)}>
                      Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Apply Popup */}
      <ApplyPopup
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob || ""}
      />
    </main>
  )
}
