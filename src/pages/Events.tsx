import { Calendar, Clock, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";
import Layout from "@/components/Layout";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";

const upcomingEvents = [
  {
    title: "Hackathon 2026",
    date: "April 15-17, 2026",
    time: "9:00 AM onwards",
    description: "48-hour coding marathon. Build innovative solutions using AI, Web3, and emerging tech. ₹1,00,000 in prizes!",
    targetDate: new Date("2026-04-15T09:00:00"),
  },
  {
    title: "AI/ML Workshop Series",
    date: "May 5, 2026",
    time: "2:00 PM - 5:00 PM",
    description: "Hands-on workshop covering neural networks, computer vision, and natural language processing.",
    targetDate: new Date("2026-05-05T14:00:00"),
  },
  {
    title: "Web3 Bootcamp",
    date: "May 20-22, 2026",
    time: "10:00 AM onwards",
    description: "3-day intensive bootcamp on Solidity, smart contracts, and building decentralized applications.",
    targetDate: new Date("2026-05-20T10:00:00"),
  },
];

const pastEvents = [
  { title: "CodeSprint 3.0", description: "24-hour competitive programming contest with 200+ participants from 15 colleges.", image: event1 },
  { title: "Hackathon 2025", description: "Our flagship hackathon saw 50 teams building solutions for real-world problems.", image: event2 },
  { title: "Tech Talk: Future of AI", description: "Industry experts shared insights on AI trends and career opportunities.", image: event3 },
  { title: "Open Source Day", description: "A day dedicated to contributing to open source projects and learning Git workflows.", image: event4 },
];

const Events = () => (
  <Layout>
    {/* Upcoming */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto relative z-10">
        <AnimatedSection>
          <span className="text-xs font-mono text-secondary uppercase tracking-widest">Mark Your Calendar</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-12">
            Upcoming <span className="text-gradient">Events</span>
          </h1>
        </AnimatedSection>

        <div className="space-y-6">
          {upcomingEvents.map((event, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass rounded-2xl p-6 md:p-8 hover-glow">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {event.date}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {event.time}</span>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-4">
                    <CountdownTimer targetDate={event.targetDate} />
                    <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform text-sm">
                      Register <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Past Events */}
    <section className="section-padding border-t border-border">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Past <span className="text-gradient">Events</span>
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {pastEvents.map((event, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass rounded-xl overflow-hidden group hover-glow">
                <div className="aspect-video overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Events;
