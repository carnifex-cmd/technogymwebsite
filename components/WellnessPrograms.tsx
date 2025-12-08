import { Sparkles, AlignVerticalSpaceAround, HeartPulse, Wind } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
    {
        icon: Sparkles,
        title: "Yoga & Mobility",
        description: "Improve posture, flexibility, and range of motion.",
    },
    {
        icon: AlignVerticalSpaceAround,
        title: "Posture Correction",
        description: "Reduce pain and enhance alignment.",
    },
    {
        icon: HeartPulse,
        title: "Recovery & Rehab",
        description: "Assist muscle recovery with guided therapy.",
    },
    {
        icon: Wind,
        title: "Breathwork & Meditation",
        description: "Calm your mind and improve focus.",
    },
];

export function WellnessPrograms() {
    return (
        <section className="w-full bg-[#f4f2ea] py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-black md:text-4xl">
                        Our Programs
                    </h2>
                    <p className="mt-4 text-lg text-black/60">
                        Holistic approaches to transform your well-being
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {programs.map((program) => {
                        const IconComponent = program.icon;
                        return (
                            <Card
                                key={program.title}
                                className="group border-none bg-white/80 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-lg"
                            >
                                <CardHeader className="pb-4">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400/10 transition-colors group-hover:bg-yellow-400">
                                        <IconComponent className="h-7 w-7 text-yellow-600 transition-colors group-hover:text-black" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold tracking-tight text-black">
                                        {program.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-black/60">
                                        {program.description}
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
