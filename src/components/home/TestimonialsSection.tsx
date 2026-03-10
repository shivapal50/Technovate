import { Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Ananya Singh",
    role: "3rd Year CSE",
    quote: "Technovate completely transformed my approach to coding. The hackathons pushed me to think beyond textbooks and build real-world solutions.",
  },
  {
    name: "Karan Desai",
    role: "4th Year IT",
    quote: "Being part of Technovate gave me the confidence and skills to land my dream internship. The mentorship from seniors was invaluable.",
  },
  {
    name: "Meera Joshi",
    role: "2nd Year CSE",
    quote: "The workshops opened my eyes to modern development practices. I built my first full-stack app within weeks of joining the club!",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Hear from Our <span className="text-gradient">Members</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          We Help Students Become Industry-Ready Developers.
        </p>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="glass rounded-2xl p-8 h-full flex flex-col hover-glow group transition-all hover:border-primary/30">
              <Quote size={28} className="text-secondary/40 mb-5 group-hover:text-secondary transition-colors" />
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6 text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
