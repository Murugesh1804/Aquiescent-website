import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Phone, Globe } from "lucide-react"

interface CourseCardProps {
  title: string
  subtitle: string
  imageUrl: string
  features: string[]
  date: string
  phone: string
  website: string
}

export function CourseCard({ title, subtitle, imageUrl, features, date, phone, website }: CourseCardProps) {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
      <div className="relative h-48 w-full overflow-hidden bg-primary">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="p-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500">{subtitle}</p>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="rounded-lg bg-gray-50 p-4 mb-4">
          <h4 className="text-lg font-semibold mb-2">What You'll Learn?</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-primary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-primary" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-2 text-primary" />
            <span>{website}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6">
        <Button className="w-full" asChild>
          <Link href="/contact">Enroll For Free Demo</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

