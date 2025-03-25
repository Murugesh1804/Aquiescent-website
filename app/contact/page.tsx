import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contact Us | Acquiescent Consultancy Services",
  description: "Get in touch with Acquiescent Consultancy Services for training and consultancy services",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Get in touch with our team for more information about our services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader className="p-6">
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter the subject" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        123 Business Park, Tech Hub
                        <br />
                        Bangalore, India 560001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone Number</h3>
                      <p className="text-gray-600">+91 91770 89287</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Address</h3>
                      <p className="text-gray-600">info@Acquiescent.in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">Find Us On Map</h2>
                <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                  {/* Replace with actual map component or iframe */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Interactive Map Goes Here
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Find answers to common questions about our services
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>How can I enroll in a course?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can enroll in any of our courses by filling out the contact form on this page, calling our phone
                  number, or visiting our office in person. Our team will guide you through the enrollment process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you offer online training?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer both in-person and online training options for all our courses. Our online training is
                  interactive and includes live sessions with instructors, hands-on projects, and comprehensive learning
                  materials.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What is the duration of your courses?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The duration of our courses varies depending on the program. Most of our courses range from 4 to 12
                  weeks. We also offer flexible scheduling options to accommodate working professionals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you provide placement assistance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we provide comprehensive placement assistance to our students. This includes resume building,
                  interview preparation, and connections with our corporate partners who are actively hiring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

