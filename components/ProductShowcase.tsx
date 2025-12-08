import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const products = [
    {
        name: "Power Rack",
        feature: "Commercial-grade strength training foundation",
        image: "https://images.unsplash.com/photo-1534368270820-9de3d8053204?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "Adjustable Bench",
        feature: "Multi-angle versatility for every exercise",
        image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "Selectorized Machine",
        feature: "Targeted muscle isolation with precision",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "Treadmill Pro",
        feature: "Advanced cardio with smart performance tracking",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "Dumbbell Set",
        feature: "Full range from 5 to 100 lbs",
        image: "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
        name: "Rowing Machine",
        feature: "Full-body conditioning with low impact",
        image: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
];

export function ProductShowcase() {
    return (
        <section className="w-full bg-[#f4f2ea] py-24">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-black md:text-4xl">
                        Our Equipment
                    </h2>
                    <p className="mt-4 text-lg text-black/60">
                        World-class machines engineered for performance
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <Card
                            key={product.name}
                            className="group overflow-hidden border-none bg-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold tracking-tight text-black">
                                    {product.name}
                                </h3>
                                <p className="mt-2 text-sm text-black/60">
                                    {product.feature}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
