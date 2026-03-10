import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";

const nextEventDate = new Date("2026-04-15T09:00:00");

const FeaturedEvent = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden border-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-[60px]" />
          <div className="relative z-10">
            <span className="text-xs font-mono text-secondary uppercase tracking-widest">Upcoming Event</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-2">Hackathon 2026</h2>
            <p className="text-muted-foreground mb-8 max-w-xl">
              48-hour coding marathon challenging teams to build innovative solutions. ₹1,00,000 in prizes!
            </p>
            <CountdownTimer targetDate={nextEventDate} className="mb-8" />
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform"
            >
              Register Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FeaturedEvent;
