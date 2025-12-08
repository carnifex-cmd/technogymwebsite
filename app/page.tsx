import { Hero } from "@/components/Hero";
import { HomeServices } from "@/components/HomeServices";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FinalCTA } from "@/components/FinalCTA";
import { PageContainer } from "@/components/PageContainer";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <PageContainer>
      <Hero />
      <HomeServices />
      <WhyChooseUs />
      <FinalCTA />
      <Footer />
    </PageContainer>
  );
}
