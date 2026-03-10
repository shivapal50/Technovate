import { Brain, Globe, Cpu, Database, Code2, Blocks } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";

const technologies = [
  { icon: Brain, name: "Artificial Intelligence", desc: "Deep learning, NLP, and computer vision projects" },
  { icon: Globe, name: "Web3 & Blockchain", desc: "Smart contracts, dApps, and decentralized systems" },
  { icon: Cpu, name: "Machine Learning", desc: "Data-driven solutions and predictive models" },
  { icon: Code2, name: "Full Stack Development", desc: "Modern web apps with cutting-edge frameworks" },
  { icon: Database, name: "Cloud & DevOps", desc: "Scalable infrastructure and CI/CD pipelines" },
  { icon: Blocks, name: "Open Source", desc: "Contributing to and building open source tools" },
];

const timeline = [
  { year: "2020", title: "Club Founded", desc: "Technovate was established by a group of 10 passionate students." },
  { year: "2021", title: "First Hackathon", desc: "Organized our first 24-hour hackathon with 100+ participants." },
  { year: "2022", title: "National Recognition", desc: "Won 3 national-level coding competitions back-to-back." },
  { year: "2023", title: "500+ Members", desc: "Crossed 500 active members and launched mentorship program." },
  { year: "2024", title: "Industry Partnerships", desc: "Partnered with tech companies for workshops and internships." },
  { year: "2025", title: "AI & Web3 Labs", desc: "Launched dedicated labs for AI research and Web3 development." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[120px]" />
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="max-w-3xl">
          <span className="text-xs font-mono text-secondary uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            The Story of <span className="text-gradient">Technovate</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Born from a shared passion for technology and innovation, Technovate started as a small group of 
            10 students who believed that coding could change the world. Today, we're a thriving community of 
            500+ developers, designers, and tech enthusiasts pushing the boundaries of what's possible.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding border-t border-border">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="glass rounded-xl p-8 h-full hover-glow">
              <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower students with cutting-edge technical skills, foster a culture of innovation, 
                and create opportunities for collaborative learning through hands-on projects, hackathons, 
                and industry connections.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="glass rounded-xl p-8 h-full hover-glow">
              <h3 className="text-xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most impactful student-led tech community that bridges the gap between 
                academic learning and industry demands, producing innovators who shape the future of technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Technologies */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Technologies We <span className="text-gradient">Explore</span>
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <AnimatedSection key={tech.name} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 hover-glow group cursor-default">
                <tech.icon className="w-10 h-10 text-primary mb-4 group-hover:text-secondary transition-colors" />
                <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding border-t border-border">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-gradient">Journey</span>
          </h2>
        </AnimatedSection>
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.1}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-xs font-mono text-primary font-bold shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
