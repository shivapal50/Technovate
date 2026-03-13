import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const categories = ["All", "Hackathons", "Workshops", "Meetups", "Sessions"];

const photos = [
  { src: event1, category: "Workshops", caption: "Coding Workshop 2025" },
  { src: event2, category: "Hackathons", caption: "Hackathon 2025 Winners" },
  { src: event3, category: "Sessions", caption: "Tech Talk Session" },
  { src: event4, category: "Workshops", caption: "AI/ML Workshop" },
  { src: heroBg, category: "Hackathons", caption: "CodeSprint 3.0" },
  { src: event1, category: "Meetups", caption: "Community Meetup" },
  { src: event3, category: "Sessions", caption: "Open Source Day" },
  { src: event2, category: "Hackathons", caption: "National Hackathon" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? photos : photos.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto relative z-10">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-mono text-secondary uppercase tracking-widest">Memories</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Our <span className="text-gradient">Gallery</span>
            </h1>
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground glow-blue"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, i) => (
                <motion.div
                  key={`${photo.caption}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl overflow-hidden group relative aspect-[4/3]"
                >
                  <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <p className="text-sm font-semibold">{photo.caption}</p>
                      <p className="text-xs text-muted-foreground">{photo.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
