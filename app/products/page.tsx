import { Hero } from "@/components/Hero";
import { PageContainer } from "@/components/PageContainer";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Footer } from "@/components/Footer";

export default function ProductsPage() {
    return (
        <PageContainer>
            <Hero
                title="FITNESS EQUIPMENT"
                subtitle="Train with world-class machines designed for peak performance."
                backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                showCTA={false}
            />
            <ProductShowcase />
            <Footer />
        </PageContainer>
    );
}
