import { Hero, HeroSlide } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { SuccessStories } from "@/components/SuccessStories";
import { Footer } from "@/components/Footer";

const storiesSlides: HeroSlide[] = [
    {
        title: "SUCCESS STORIES",
        subtitle: "Real people. Real transformation.\nReal results.",
        backgroundImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
        title: "TRANSFORMATIONS",
        subtitle: "Witness incredible journeys\nfrom members just like you.",
        backgroundImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
        title: "COMMUNITY",
        subtitle: "Join thousands who have achieved\ntheir fitness goals with us.",
        backgroundImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
];

export default function StoriesPage() {
    return (
        <PageContainer>
            <Hero slides={storiesSlides} showCTA={false} autoAdvance={true} />
            <SuccessStories />
            <Footer />
        </PageContainer>
    );
}
