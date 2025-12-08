import { Hero } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { SuccessStories } from "@/components/SuccessStories";
import { Footer } from "@/components/Footer";

export default function StoriesPage() {
    return (
        <PageContainer>
            <Hero
                title="SUCCESS STORIES"
                subtitle="Real people. Real transformation. Real results."
                backgroundImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                showCTA={false}
            />
            <SuccessStories />
            <Footer />
        </PageContainer>
    );
}
