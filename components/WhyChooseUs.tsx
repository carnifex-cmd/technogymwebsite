import { Award, Target, Cpu, TrendingUp } from "lucide-react";

const benefits = [
    {
        icon: Award,
        title: "Certified Trainers",
        description: "Learn from highly qualified and experienced professionals.",
    },
    {
        icon: Target,
        title: "Personalized Programs",
        description: "Tailored plans designed for your unique fitness goals.",
    },
    {
        icon: Cpu,
        title: "Modern Equipment",
        description: "Train with elite-grade machines and functional tools.",
    },
    {
        icon: TrendingUp,
        title: "Proven Results",
        description: "Thousands of clients achieving consistent, measurable progress.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="w-full bg-[#f4f2ea] py-24">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="mb-20 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-black md:text-4xl">
                        Why Choose Us
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-black/60">
                        Science-backed training, world-class equipment, and expert coaching.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={benefit.title}
                                className="group flex flex-col items-center text-center"
                            >
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/60 transition-all duration-300 group-hover:bg-yellow-400">
                                    <IconComponent className="h-10 w-10 text-black/70 transition-colors group-hover:text-black" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold tracking-tight text-black">
                                    {benefit.title}
                                </h3>
                                <p className="text-base leading-relaxed text-black/60">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
