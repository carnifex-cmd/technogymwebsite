import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "Sarah Mitchell",
        quote: "The personalized training program transformed my fitness journey. I've lost 30 pounds and gained confidence I never knew I had.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        rating: 5,
    },
    {
        name: "James Rodriguez",
        quote: "World-class equipment and expert coaching. My strength and endurance have improved dramatically in just 6 months.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        rating: 5,
    },
    {
        name: "Emily Chen",
        quote: "The wellness programs helped me recover from an injury and come back stronger than ever. Truly life-changing experience.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        rating: 5,
    },
];

export function SuccessStories() {
    return (
        <section className="w-full bg-[#f4f2ea] py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-black md:text-4xl">
                        What Our Members Say
                    </h2>
                    <p className="mt-4 text-lg text-black/60">
                        Real stories from real people achieving real results
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.name}
                            className="border-none bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                        >
                            <CardContent className="flex flex-col items-center p-8 text-center">
                                <div className="relative mb-6 h-20 w-20 overflow-hidden rounded-full">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="mb-4 flex items-center gap-1">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <p className="mb-6 text-base leading-relaxed text-black/70">
                                    "{testimonial.quote}"
                                </p>
                                <h4 className="text-lg font-semibold text-black">
                                    {testimonial.name}
                                </h4>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
