import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About Us | Acquiescent Consultancy Services",
  description: "Learn more about Acquiescent Consultancy Services and our mission to provide excellent training and consultancy",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Us</h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Empowering professionals through expert training and consultancy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2020, Acquiescent Consultancy Services has been at the forefront of professional training and development. 
                We started with a simple mission: to bridge the gap between academic knowledge and industry requirements.
              </p>
              <p className="text-gray-600">
                Today, we've grown into a trusted partner for both individuals and organizations, providing comprehensive training 
                solutions and expert consultancy services across various domains.
              </p>
            </div>
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Company Image Here
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-primary">Our Values</h2>
            <p className="mt-4 text-gray-600 max-w-[700px] mx-auto">
              The principles that guide us in delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service delivery, ensuring the highest quality of training and consultancy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We continuously evolve our methods and curriculum to stay ahead of industry trends and technological advancements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We maintain the highest standards of professional ethics and transparency in all our dealings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-primary">Why Choose Us</h2>
            <p className="mt-4 text-gray-600 max-w-[700px] mx-auto">
              What sets us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Expert Trainers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our trainers bring years of industry experience and expertise to provide practical, real-world knowledge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customized Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We tailor our training programs to meet specific organizational needs and individual learning goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industry Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strong relationships with industry leaders ensure our training aligns with current market demands.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide ongoing support and resources to ensure successful learning outcomes for all our students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
