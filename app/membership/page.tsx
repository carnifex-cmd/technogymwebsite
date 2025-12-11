import { Hero, HeroSlide } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { MembershipPlans } from "@/components/MembershipPlans";
import { Footer } from "@/components/Footer";

const membershipSlides: HeroSlide[] = [
    {
        title: "MEMBERSHIP PLANS",
        subtitle: "Choose the plan that fits\nyour goals and lifestyle.",
        backgroundImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
        title: "FLEXIBLE OPTIONS",
        subtitle: "From day passes to annual memberships,\nwe have you covered.",
        backgroundImage: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
        title: "EXCLUSIVE BENEFITS",
        subtitle: "Get access to premium facilities,\nclasses, and personal training.",
        backgroundImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
];

export default function MembershipPage() {
    return (
        <PageContainer>
            <Hero slides={membershipSlides} showCTA={false} autoAdvance={true} />
            <MembershipPlans />
            <Footer />
        </PageContainer>
    );
}
