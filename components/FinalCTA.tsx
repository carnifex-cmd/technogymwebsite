import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="w-full bg-[#f4f2ea] py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col items-center text-center">
                    <h2 className="max-w-3xl text-4xl font-bold uppercase tracking-tight text-black md:text-5xl lg:text-6xl">
                        Start Your Fitness Journey Today
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-black/60">
                        Join our expert-led programs and transform your body and mind.
                    </p>
                    <Button
                        size="lg"
                        className="mt-10 rounded-full bg-yellow-400 px-10 py-6 text-base font-bold uppercase tracking-wide text-black transition-all hover:bg-yellow-300 hover:scale-105"
                    >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
