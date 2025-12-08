import { Dumbbell, User, Activity, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    {
        icon: Dumbbell,
        title: "Strength Training",
        description: "Build muscle and improve performance with expert guidance.",
    },
    {
        icon: User,
        title: "Personal Coaching",
        description: "Tailored programs to match your fitness goals.",
    },
    {
        icon: Activity,
        title: "Functional Training",
        description: "Enhance mobility, stability, and real-world strength.",
    },
    {
        icon: Heart,
        title: "Cardio & Conditioning",
        description: "Improve endurance with science-backed sessions.",
    },
];

export function HomeServices() {
    return (
        <section className="w-full bg-[#f4f2ea] py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-black md:text-4xl">
                        Our Services
                    </h2>
                    <p className="mt-4 text-lg text-black/60">
                        Premium fitness experiences tailored to your goals
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <Card
                                key={service.title}
                                className="group border-none bg-white/80 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-lg"
                            >
                                <CardHeader className="pb-4">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400/10 transition-colors group-hover:bg-yellow-400">
                                        <IconComponent className="h-7 w-7 text-yellow-600 transition-colors group-hover:text-black" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold tracking-tight text-black">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-black/60">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
