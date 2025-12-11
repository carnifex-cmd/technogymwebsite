import { Hero, HeroSlide } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { WellnessPrograms } from "@/components/WellnessPrograms";
import { Footer } from "@/components/Footer";

const wellnessSlides: HeroSlide[] = [
    {
        title: "WELLNESS PROGRAMS",
        subtitle: "Holistic programs designed to improve your\nphysical and mental well-being.",
        backgroundImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
        title: "MIND & BODY",
        subtitle: "Connect your physical strength with\ninner peace and clarity.",
        backgroundImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
        title: "RECOVERY & REST",
        subtitle: "Optimize your recovery for\nsustainable long-term results.",
        backgroundImage: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
];

export default function WellnessPage() {
    return (
        <PageContainer>
            <Hero slides={wellnessSlides} showCTA={false} autoAdvance={true} />
            <WellnessPrograms />
            <Footer />
        </PageContainer>
    );
}
