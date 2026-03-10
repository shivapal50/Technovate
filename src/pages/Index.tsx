import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Calendar, Code2, Trophy, ArrowRight, Quote, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Active Members" },
  { icon: Calendar, value: "50+", label: "Events Conducted" },
  { icon: Code2, value: "120+", label: "Projects Built" },
  { icon: Trophy, value: "15+", label: "Hackathons Hosted" },
];

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
    quote: "The Web3 workshops opened my eyes to blockchain development. I built my first dApp within weeks of joining the club!",
  },
];

const spotlightMember = {
  name: "Arjun Mehta",
  role: "Club President",
  achievement: "Led the team to victory at National Hackathon 2025 and mentored 50+ students in full-stack development.",
};

const nextEventDate = new Date("2026-04-15T09:00:00");

const galleryImages = [event1, event2, event3, event4];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary mb-6">
              <Sparkles size={14} /> The Coding Club of Our College
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            We Are
            <br />
            <span className="text-gradient">
              <RotatingText />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            A community of passionate coders building real projects, winning hackathons, and growing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover-glow glow-blue transition-all hover:scale-105"
            >
              Join the Club
            </Link>
            <Link
              to="/events"
              className="px-8 py-3 rounded-lg glass font-semibold text-foreground hover-glow transition-all hover:scale-105"
            >
              Explore Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Club Intro */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to <span className="text-gradient">Technovate</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Technovate is a student-led coding club dedicated to fostering innovation and technical excellence. 
              We bring together passionate developers, designers, and tech enthusiasts to collaborate on projects, 
              participate in hackathons, and explore emerging technologies like AI, Web3, and blockchain.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl glass hover-glow group cursor-default">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-secondary transition-colors" />
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event with Countdown */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-secondary uppercase tracking-widest">Upcoming Event</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-2">Hackathon 2026</h2>
                <p className="text-muted-foreground mb-8 max-w-xl">
                  48-hour coding marathon challenging teams to build innovative solutions using AI, Web3, 
                  and emerging technologies. ₹1,00,000 in prizes!
                </p>
                <CountdownTimer targetDate={nextEventDate} className="mb-8" />
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform"
                >
                  Register Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Moments from <span className="text-gradient">Past Events</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-xl overflow-hidden aspect-[4/3] group">
                  <img
                    src={img}
                    alt={`Event ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-8">
            <Link to="/gallery" className="text-primary hover:text-secondary transition-colors inline-flex items-center gap-2 font-medium">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding border-t border-border">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our <span className="text-gradient">Members Say</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="glass rounded-xl p-6 h-full flex flex-col hover-glow">
                  <Quote size={24} className="text-primary/40 mb-4" />
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-4">"{t.quote}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Member Spotlight */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="glass rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl font-bold text-primary-foreground shrink-0">
                {spotlightMember.name[0]}
              </div>
              <div>
                <span className="text-xs font-mono text-secondary uppercase tracking-widest">Member Spotlight</span>
                <h3 className="text-2xl font-bold mt-2">{spotlightMember.name}</h3>
                <p className="text-primary text-sm mb-2">{spotlightMember.role}</p>
                <p className="text-muted-foreground">{spotlightMember.achievement}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to <span className="text-gradient">Innovate</span>?
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto mb-8 text-lg">
                  Join Technovate and be part of a community that builds, learns, and grows together.
                </p>
                <Link
                  to="/contact"
                  className="px-10 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:scale-105 transition-transform glow-blue inline-block"
                >
                  Join Technovate
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
