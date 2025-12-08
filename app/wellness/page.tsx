import { Hero } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { WellnessPrograms } from "@/components/WellnessPrograms";
import { Footer } from "@/components/Footer";

export default function WellnessPage() {
    return (
        <PageContainer>
            <Hero
                title="WELLNESS PROGRAMS"
                subtitle="Holistic programs designed to improve your physical and mental well-being."
                backgroundImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                showCTA={false}
            />
            <WellnessPrograms />
            <Footer />
        </PageContainer>
    );
}
