import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Basic",
        price: "$49",
        period: "/month",
        description: "Perfect for getting started",
        features: [
            "Unlimited gym access",
            "Locker room access",
            "Free fitness assessment",
            "Access to group classes",
        ],
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$99",
        period: "/month",
        description: "Most popular choice",
        features: [
            "Everything in Basic",
            "4 personal coaching sessions",
            "Custom diet plan",
            "Priority equipment booking",
            "Recovery zone access",
        ],
        highlighted: true,
    },
    {
        name: "Elite",
        price: "$199",
        period: "/month",
        description: "For serious athletes",
        features: [
            "Everything in Pro",
            "Unlimited coaching sessions",
            "Advanced body composition analysis",
            "VIP lounge access",
            "Guest passes (2/month)",
            "24/7 gym access",
        ],
        highlighted: false,
    },
];

export function MembershipPlans() {
    return (
        <section className="w-full bg-[#f4f2ea] py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-black md:text-4xl">
                        Choose Your Plan
                    </h2>
                    <p className="mt-4 text-lg text-black/60">
                        Flexible options to match your fitness journey
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`relative flex h-full flex-col border-2 transition-all duration-300 ${plan.highlighted
                                    ? "scale-105 border-yellow-400 bg-white shadow-xl"
                                    : "border-transparent bg-white shadow-sm hover:shadow-lg"
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold uppercase tracking-wide text-black">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader className="pb-4 pt-8 text-center">
                                <CardTitle className="text-xl font-semibold text-black">
                                    {plan.name}
                                </CardTitle>
                                <p className="mt-1 text-sm text-black/60">{plan.description}</p>
                                <div className="mt-6">
                                    <span className="text-5xl font-bold text-black">{plan.price}</span>
                                    <span className="text-black/60">{plan.period}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex flex-1 flex-col p-6">
                                <div className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-3">
                                            <Check className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                                            <span className="text-sm text-black/70">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto pt-6">
                                    <Button
                                        className={`w-full rounded-full py-6 text-sm font-bold uppercase tracking-wide transition-all ${plan.highlighted
                                                ? "bg-yellow-400 text-black hover:bg-yellow-300"
                                                : "bg-black text-white hover:bg-black/80"
                                            }`}
                                    >
                                        Join Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
