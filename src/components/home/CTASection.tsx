import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CTASection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="text-center relative py-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Start Building</span>?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-lg">
              Join Technovate and be part of a community that codes, creates, and grows together.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform glow-blue"
            >
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
