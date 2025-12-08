import { Hero } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { MembershipPlans } from "@/components/MembershipPlans";
import { Footer } from "@/components/Footer";

export default function MembershipPage() {
    return (
        <PageContainer>
            <Hero
                title="MEMBERSHIP PLANS"
                subtitle="Choose the plan that fits your goals and lifestyle."
                backgroundImage="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                showCTA={false}
            />
            <MembershipPlans />
            <Footer />
        </PageContainer>
    );
}
