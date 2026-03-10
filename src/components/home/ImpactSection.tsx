import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";

const impacts = [
  {
    tag: "Featured",
    title: "National Hackathon 2025",
    description: "Our team secured 1st place at the National Hackathon, competing against 200+ teams from across the country.",
    image: event1,
  },
  {
    tag: "Workshop",
    title: "Full Stack Bootcamp",
    description: "A 3-day intensive bootcamp covering React, Node.js, and deployment — attended by 150+ students.",
    image: event2,
  },
  {
    tag: "Community",
    title: "Code & Chill Meetups",
    description: "Monthly casual coding sessions where members collaborate on open-source projects and share knowledge.",
    image: event3,
  },
  {
    tag: "Competition",
    title: "Inter-College Code Wars",
    description: "Organized the biggest inter-college coding competition with 500+ participants and exciting prizes.",
    image: event4,
  },
];

const ImpactSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Impact
          </h2>
          <p className="text-muted-foreground text-lg">
            How We're Making a Difference in the Tech Community
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left: Cards list */}
          <div className="space-y-3">
            {impacts.map((item, i) => (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                className={`p-5 rounded-xl cursor-pointer transition-all border ${
                  active === i
                    ? "glass border-primary/40 glow-blue"
                    : "border-transparent hover:border-border/50"
                }`}
                whileHover={{ x: 4 }}
              >
                <span className={`text-xs font-mono uppercase tracking-widest ${
                  active === i ? "text-secondary" : "text-muted-foreground"
                }`}>
                  {item.tag}
                </span>
                <h3 className={`text-lg font-bold mt-1 ${
                  active === i ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {item.title}
                </h3>
                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="text-sm text-muted-foreground mt-2 overflow-hidden"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden aspect-[4/3] relative"
            >
              <img
                src={impacts[active].image}
                alt={impacts[active].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 rounded-full glass text-xs font-medium text-secondary">
                  {impacts[active].tag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
