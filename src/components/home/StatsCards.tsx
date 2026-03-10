import { Users, Calendar, Code2, Trophy } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const stats = [
  { icon: Users, value: "500+", label: "Active Members", subtitle: "Growing every semester" },
  { icon: Calendar, value: "50+", label: "Events Conducted", subtitle: "Workshops, talks & hackathons" },
  { icon: Code2, value: "120+", label: "Projects Built", subtitle: "Real-world applications" },
  { icon: Trophy, value: "15+", label: "Hackathons Won", subtitle: "National & international" },
];

const StatsCards = () => (
  <section className="relative py-8 px-4 md:px-8 -mt-8">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <AnimatedSection key={stat.label} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 hover-glow group cursor-default transition-all hover:border-primary/30">
              <stat.icon className="w-6 h-6 text-primary mb-4 group-hover:text-secondary transition-colors" />
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default StatsCards;
