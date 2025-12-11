import { Hero, HeroSlide } from "@/components/Hero";
import { HomeServices } from "@/components/HomeServices";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FinalCTA } from "@/components/FinalCTA";
import { PageContainer } from "@/components/PageContainer";
import { Footer } from "@/components/Footer";

const homeSlides: HeroSlide[] = [
  {
    title: "FITNESS JOURNEY",
    subtitle: "Transform Your Body, Mind, And Performance\nWith Purpose And Power.",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "Start Workout Plan",
  },
  {
    title: "STRENGTH TRAINING",
    subtitle: "Build Power And Endurance\nWith Expert Guidance.",
    backgroundImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "Explore Programs",
  },
  {
    title: "CARDIO EXCELLENCE",
    subtitle: "Boost Your Heart Health\nAnd Stamina Today.",
    backgroundImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "Get Started",
  },
];

export default function HomePage() {
  return (
    <PageContainer>
      <Hero slides={homeSlides} showCTA={true} autoAdvance={true} />
      <HomeServices />
      <WhyChooseUs />
      <FinalCTA />
      <Footer />
    </PageContainer>
  );
}
