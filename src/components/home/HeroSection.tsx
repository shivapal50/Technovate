import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const rotatingWords = ["Innovators", "Developers", "Builders", "Problem Solvers", "Creators"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Corner decorations */}
      <div className="absolute top-20 left-8 w-40 h-40 border border-border/40 rounded-sm opacity-30 rotate-12" />
      <div className="absolute top-24 left-12 w-32 h-32 border border-primary/20 rounded-sm opacity-20 rotate-12" />
      <div className="absolute bottom-20 right-8 w-40 h-40 border border-border/40 rounded-sm opacity-30 -rotate-12" />
      <div className="absolute bottom-24 right-12 w-32 h-32 border border-primary/20 rounded-sm opacity-20 -rotate-12" />

      {/* Dot grid decorations */}
      <div className="absolute top-32 right-20 opacity-20 hidden lg:block">
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-32 left-20 opacity-20 hidden lg:block">
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
          ))}
        </div>
      </div>

      {/* Subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-secondary font-semibold tracking-[0.3em] uppercase text-sm mb-8"
        >
          Code.&nbsp;&nbsp;Build.&nbsp;&nbsp;Innovate.
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
        >
          The Coding Club That
          <br />
          Builds{" "}
          <span className="relative inline-block">
            <span className=" absolute -inset-x-3 -inset-y-1 border-2 border-secondary/70 rounded-md mt-2" />
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[index]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="inline-block text-secondary"
              >
                {rotatingWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join a growing community of student developers at Technovate — where we learn, hack, and create together.
        </motion.p>

        {/* Avatar stack + member count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="flex -space-x-3">
            {["A", "R", "P", "S"].map((letter, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-xs font-bold text-primary-foreground"
              >
                {letter}
              </div>
            ))}
          </div>
          <div className="text-left">
            <span className="text-secondary font-bold">500+</span>
            <span className="text-muted-foreground text-sm ml-1.5">Members building together</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:scale-105 transition-all glow-blue"
          >
            Join Technovate
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
