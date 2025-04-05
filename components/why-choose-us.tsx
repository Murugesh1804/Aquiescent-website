"use client";

import { BookOpen, Video, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function WhyChooseUs() {
    const features = [
        {
            icon: <BookOpen className="h-10 w-10 text-primary" />,
            title: "Best Coaching",
            description: "We provide top-notch coaching to help you master industry-leading technologies and build a successful career.",
        },
        {
            icon: <Calendar className="h-10 w-10 text-primary" />,
            title: "Convenient Practice",
            description: "Enhance your learning with hands-on exercises and real-world projects, tailored for flexibility and deep understanding.",
        },
        {
            icon: <Video className="h-10 w-10 text-primary" />,
            title: "Video Lectures",
            description: "Access high-quality video lectures anytime, anywhere, and learn at your own pace from industry experts.",
        },
        {
            icon: <Users className="h-10 w-10 text-primary" />,
            title: "Live Classes",
            description: "Join interactive live sessions with expert instructors for real-time learning and doubt resolution.",
        }
    ];

    return (
        <section className="py-20 bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h1 
                    className="text-5xl font-bold text-center mb-12 text-primary"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Why Choose Us?
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300">
                                <CardHeader className="p-6 flex flex-col items-center">
                                    <div className="mb-4">{feature.icon}</div>
                                    <h3 className="text-lg font-semibold text-center text-primary">
                                        {feature.title}
                                    </h3>
                                </CardHeader>
                                <CardContent className="p-6 text-center">
                                    <p className="text-gray-600">{feature.description}</p>
                                    <div className="flex justify-center mt-4">
                                        <Button variant="link" className="text-primary hover:text-primary/80 transition">
                                            Learn More →
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
