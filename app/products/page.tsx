import { Hero, HeroSlide } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Footer } from "@/components/Footer";

const productSlides: HeroSlide[] = [
    {
        title: "FITNESS EQUIPMENT",
        subtitle: "Train with world-class machines\ndesigned for peak performance.",
        backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
        title: "SMART CARDIO",
        subtitle: "Next-generation treadmills and bikes\nwith intelligent tracking systems.",
        backgroundImage: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
        title: "STRENGTH SYSTEMS",
        subtitle: "Professional-grade weight equipment\nfor ultimate muscle development.",
        backgroundImage: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
];

export default function ProductsPage() {
    return (
        <PageContainer>
            <Hero slides={productSlides} showCTA={false} autoAdvance={true} />
            <ProductShowcase />
            <Footer />
        </PageContainer>
    );
}
