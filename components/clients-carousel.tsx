"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const clients = [
  {
    name: "Accenture",
    logo: "/clients/client-1.png",
    description:
      "Global professional services company providing a range of services in strategy, consulting, digital, technology and operations.",
  },
  {
    name: "Tech Mahindra",
    logo: "/clients/client-3.png",
    description:
      "Leading provider of digital transformation, consulting and business reengineering services and solutions.",
  },
  {
    name: "Wipro",
    logo: "/clients/client-4.png",
    description: "Leading global information technology, consulting and business process services company.",
  },
  {
    name: "Larsen & Toubro",
    logo: "/clients/client-2.png",
    description:
      "Indian multinational conglomerate company engaged in technology, engineering, construction, manufacturing and financial services.",
  },
]

export function ClientsCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % clients.length)
  }

  const prev = () => {
    setCurrent((current - 1 + clients.length) % clients.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 4000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Our Trusted Clients
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              We partner with leading organizations to deliver exceptional talent and training solutions
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="flex items-center justify-center">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-40 h-40 relative flex-shrink-0 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                      <Image
                        src={clients[current].logo || "/placeholder.svg"}
                        alt={clients[current].name}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-4 text-primary">{clients[current].name}</h3>
                      <p className="text-gray-600">{clients[current].description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full" aria-label="Previous client">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            {clients.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full p-2 ${current === index ? "bg-primary" : "bg-gray-300"}`}
                aria-label={`Go to client ${index + 1}`}
              />
            ))}
            <Button variant="outline" size="icon" onClick={next} className="rounded-full" aria-label="Next client">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-32 h-32 bg-white rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

