import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";

const members = [
  { name: "Arjun Mehta", role: "President", skills: ["Full Stack", "AI/ML", "Leadership"], color: "from-primary to-blue-400" },
  { name: "Priya Sharma", role: "Vice President", skills: ["Web3", "Smart Contracts", "Public Speaking"], color: "from-secondary to-amber-400" },
  { name: "Rohan Verma", role: "Tech Lead", skills: ["React", "Node.js", "System Design"], color: "from-primary to-cyan-400" },
  { name: "Sneha Patel", role: "Design Lead", skills: ["UI/UX", "Figma", "Branding"], color: "from-secondary to-orange-400" },
  { name: "Vikram Rao", role: "Event Coordinator", skills: ["Management", "Marketing", "Content"], color: "from-primary to-indigo-400" },
  { name: "Isha Gupta", role: "AI/ML Lead", skills: ["TensorFlow", "PyTorch", "Data Science"], color: "from-secondary to-yellow-400" },
  { name: "Aditya Nair", role: "Blockchain Lead", skills: ["Solidity", "Ethereum", "DeFi"], color: "from-primary to-teal-400" },
  { name: "Kavya Reddy", role: "Community Manager", skills: ["Discord", "Events", "Outreach"], color: "from-secondary to-rose-400" },
];

const Team = () => (
  <Layout>
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-mono text-secondary uppercase tracking-widest">Our People</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Meet the <span className="text-gradient">Team</span>
          </h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass rounded-xl p-6 text-center hover-glow group"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground`}>
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                  {member.skills.map((skill) => (
                    <span key={skill} className="text-[10px] px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={16} /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={16} /></a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Team;
