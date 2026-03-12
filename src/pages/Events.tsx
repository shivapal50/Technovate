import { useState } from "react";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
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

// ─── Registration Form ────────────────────────────────────────────────────────

const INDUSTRIES = ["Technology", "Healthcare", "Finance", "Education", "Legal", "Engineering", "Design & Creative", "Other"];
const EXPERIENCE = ["0–1 year", "1–3 years", "3–5 years", "5–10 years", "10+ years"];

const emptyForm = {
  fname: "", lname: "", email: "", phone: "",
  jobtitle: "", industry: "", org: "", experience: "",
  summary: "", password: "", confirm: "",
};

function RegistrationModal({ eventTitle, onClose }: { eventTitle: string; onClose: () => void }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fname.trim()) errs.fname = "Required";
    if (!formData.email.includes("@")) errs.email = "Valid email required";
    if (!formData.jobtitle.trim()) errs.jobtitle = "Required";
    if (!formData.industry) errs.industry = "Required";
    if (formData.password.length < 8) errs.password = "Min 8 characters";
    if (formData.password !== formData.confirm) errs.confirm = "Passwords don't match";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    console.log({ event: eventTitle, ...formData });
    setSubmitted(true);
  };

  // Prevent background scroll when modal open
  const stopProp = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="glass rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative"
        onClick={stopProp}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            <span className="text-xs font-mono text-secondary uppercase tracking-widest">Register Now</span>
            <h2 className="text-2xl font-bold mt-1">{eventTitle}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
            <p className="text-muted-foreground mb-6">
              You're registered for <span className="text-foreground font-semibold">{eventTitle}</span>. We'll send details to <span className="text-secondary">{formData.email}</span>.
            </p>
            <button onClick={onClose} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform text-sm">
              Close <ArrowRight size={14} />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">

            {/* Personal Info */}
            <SectionDivider label="Personal Information" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="First Name" name="fname" placeholder="Arjun" value={formData.fname} onChange={handleChange} error={errors.fname} />
              <Field label="Last Name" name="lname" placeholder="Sharma" value={formData.lname} onChange={handleChange} />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} error={errors.email} />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
            </div>

            {/* Professional Details */}
            <SectionDivider label="Professional Details" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Job Title" name="jobtitle" placeholder="Software Engineer" value={formData.jobtitle} onChange={handleChange} error={errors.jobtitle} />
              <SelectField label="Industry" name="industry" options={INDUSTRIES} value={formData.industry} onChange={handleChange} error={errors.industry} />
              <Field label="Organization" name="org" placeholder="Company / Institute" value={formData.org} onChange={handleChange} />
              <SelectField label="Experience" name="experience" options={EXPERIENCE} value={formData.experience} onChange={handleChange} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-mono text-secondary uppercase tracking-widest">Professional Summary</label>
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Brief overview of your expertise and goals..."
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 resize-none transition-colors"
              />
            </div>

            {/* Account Setup */}
            <SectionDivider label="Account Setup" />
            <div className="grid grid-cols-2 gap-4">
              <Field label="Password" name="password" type="password" placeholder="Min 8 characters" value={formData.password} onChange={handleChange} error={errors.password} />
              <Field label="Confirm Password" name="confirm" type="password" placeholder="Repeat password" value={formData.confirm} onChange={handleChange} error={errors.confirm} />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg border border-border text-sm text-muted-foreground hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform text-sm"
              >
                Register Now <ArrowRight size={14} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── Reusable sub-components ──────────────────────────────────────────────────

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3">
    <span className="text-xs font-mono text-secondary uppercase tracking-widest whitespace-nowrap">{label}</span>
    <div className="flex-1 h-px bg-border" />
  </div>
);

interface FieldProps {
  label: string; name: string; type?: string;
  placeholder?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
const Field = ({ label, name, type = "text", placeholder, value, onChange, error }: FieldProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-mono text-secondary uppercase tracking-widest">{label}</label>
    <input
      type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}
      className={`px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-colors ${error ? "border-red-500/70" : "border-border"}`}
    />
    {error && <span className="text-xs text-red-400">{error}</span>}
  </div>
);

interface SelectFieldProps {
  label: string; name: string; options: string[];
  value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}
const SelectField = ({ label, name, options, value, onChange, error }: SelectFieldProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-mono text-secondary uppercase tracking-widest">{label}</label>
    <select
      name={name} value={value} onChange={onChange}
      className={`px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-colors ${error ? "border-red-500/70" : "border-border"}`}
    >
      <option value="">Select...</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
    {error && <span className="text-xs text-red-400">{error}</span>}
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

const Events = () => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  return (
    <Layout>
      {/* Upcoming Events */}
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
                      <button
                        onClick={() => setActiveEvent(event.title)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform text-sm"
                      >
                        Register Now <ArrowRight size={14} />
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

      {/* Registration Modal */}
      {activeEvent && (
        <RegistrationModal
          eventTitle={activeEvent}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </Layout>
  );
};

export default Events;