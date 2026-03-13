import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsCards from "@/components/home/StatsCards";
import ImpactSection from "@/components/home/ImpactSection";
import FeaturedEvent from "@/components/home/FeaturedEvent";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsCards />
      <ImpactSection />
      <FeaturedEvent />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
