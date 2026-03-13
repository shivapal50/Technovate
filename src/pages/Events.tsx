import { useState } from "react";
import { Calendar, Clock, ArrowRight, X, Plus, Trash2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountdownTimer from "@/components/CountdownTimer";
import Layout from "@/components/Layout";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";

// ─── Data ─────────────────────────────────────────────────────────────────────

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

// ─── Types ────────────────────────────────────────────────────────────────────

type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type LeaderForm = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  teamname: string;
  org: string;
};

// ─── Small Reusable Components (defined BEFORE they are used) ─────────────────

const SectionDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 my-1">
    <span className="text-xs font-mono text-secondary uppercase tracking-widest whitespace-nowrap">
      {label}
    </span>
    <div className="flex-1 h-px bg-border" />
  </div>
);

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
};

const Field = ({ label, name, type = "text", placeholder, value, onChange, error, className = "" }: FieldProps) => (
  <div className={`flex flex-col gap-1 ${className}`}>
    <label className="text-xs font-mono text-secondary uppercase tracking-widest">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`px-4 py-2.5 rounded-lg bg-white/5 border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-colors ${
        error ? "border-red-500/70" : "border-border"
      }`}
    />
    {error && <span className="text-xs text-red-400 mt-0.5">{error}</span>}
  </div>
);

// ─── Registration Modal ───────────────────────────────────────────────────────

let _idCounter = 1;
const newMember = (): TeamMember => ({ id: _idCounter++, name: "", email: "", role: "" });

const emptyLeader: LeaderForm = { fname: "", lname: "", email: "", phone: "", teamname: "", org: "" };

function RegistrationModal({
  eventTitle,
  onClose,
}: {
  eventTitle: string;
  onClose: () => void;
}) {
  const [leader, setLeader] = useState<LeaderForm>(emptyLeader);
  const [members, setMembers] = useState<TeamMember[]>([newMember()]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Leader field change
  const onLeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLeader((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Member field change
  const onMemberChange = (id: number, field: keyof Omit<TeamMember, "id">, value: string) => {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, [field]: value } : m)));
    setErrors((prev) => ({ ...prev, [`m-${id}-${field}`]: "" }));
  };

  const addMember = () => setMembers((prev) => [...prev, newMember()]);

  const removeMember = (id: number) => {
    if (members.length <= 1) return;
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const validate = (): Record<string, string> => {
    const errs: Record<string, string> = {};
    if (!leader.fname.trim()) errs.fname = "Required";
    if (!leader.email.trim() || !leader.email.includes("@")) errs.email = "Valid email required";
    if (!leader.teamname.trim()) errs.teamname = "Required";
    members.forEach((m) => {
      if (!m.name.trim()) errs[`m-${m.id}-name`] = "Required";
      if (m.email && !m.email.includes("@")) errs[`m-${m.id}-email`] = "Valid email";
    });
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    console.log({ event: eventTitle, leader, members });
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="glass rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 pb-2">
          <div>
            <span className="text-xs font-mono text-secondary uppercase tracking-widest">
              Register Now
            </span>
            <h2 className="text-2xl font-bold mt-1">{eventTitle}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
          >
            <X size={20} />
          </button>
        </div>

        {/* Success State */}
        {submitted ? (
          <div className="p-8 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold mb-2">Registration Successful!</h3>
            <p className="text-muted-foreground mb-2">
              <span className="text-foreground font-semibold">{leader.teamname}</span> is now
              registered for{" "}
              <span className="text-foreground font-semibold">{eventTitle}</span>.
            </p>
            <p className="text-muted-foreground mb-6">
              Details will be sent to{" "}
              <span className="text-secondary">{leader.email}</span>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform text-sm"
            >
              Close <ArrowRight size={14} />
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">

            {/* Leader Info */}
            <SectionDivider label="Leader Information" />
            <div className="grid grid-cols-2 gap-3">
              <Field
                label="First Name" name="fname" placeholder="Arjun"
                value={leader.fname} onChange={onLeaderChange} error={errors.fname}
              />
              <Field
                label="Last Name" name="lname" placeholder="Sharma"
                value={leader.lname} onChange={onLeaderChange}
              />
              <Field
                label="Email" name="email" type="email" placeholder="you@example.com"
                value={leader.email} onChange={onLeaderChange} error={errors.email}
              />
              <Field
                label="Phone" name="phone" type="tel" placeholder="+91 98765 43210"
                value={leader.phone} onChange={onLeaderChange}
              />
            </div>

            {/* Team Info */}
            <SectionDivider label="Team Details" />
            <div className="grid grid-cols-2 gap-3">
              <Field
                label="Team Name" name="teamname" placeholder="e.g. ByteBusters"
                value={leader.teamname} onChange={onLeaderChange} error={errors.teamname}
              />
              <Field
                label="Organization" name="org" placeholder="College / Company"
                value={leader.org} onChange={onLeaderChange}
              />
            </div>

            {/* Dynamic Team Members */}
            <SectionDivider label={`Team Members (${members.length})`} />

            <div className="space-y-3">
              {members.map((member, index) => (
                <div
                  key={member.id}
                  className="rounded-xl border border-border bg-white/5 p-4"
                >
                  {/* Member card header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-secondary uppercase tracking-widest">
                      Member {index + 1}
                    </span>
                    {members.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMember(member.id)}
                        className="p-1.5 rounded-md hover:bg-red-500/10 text-muted-foreground hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>

                  {/* Member fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <Field
                      label="Name" name={`m-${member.id}-name`} placeholder="Full name"
                      value={member.name}
                      onChange={(e) => onMemberChange(member.id, "name", e.target.value)}
                      error={errors[`m-${member.id}-name`]}
                    />
                    <Field
                      label="Role" name={`m-${member.id}-role`} placeholder="e.g. Frontend Dev"
                      value={member.role}
                      onChange={(e) => onMemberChange(member.id, "role", e.target.value)}
                    />
                    <Field
                      label="Email" name={`m-${member.id}-email`} type="email"
                      placeholder="member@example.com"
                      value={member.email}
                      onChange={(e) => onMemberChange(member.id, "email", e.target.value)}
                      error={errors[`m-${member.id}-email`]}
                      className="col-span-2"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Add Member Button */}
            <button
              type="button"
              onClick={addMember}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:text-foreground hover:border-secondary hover:bg-white/5 transition-all"
            >
              <Plus size={15} />
              Add Another Member
            </button>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-1">
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

// ─── Events Page ──────────────────────────────────────────────────────────────

const Events = () => {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  return (
    <Layout>
      {/* Upcoming Events */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <span className="text-xs font-mono text-secondary uppercase tracking-widest">
              Mark Your Calendar
            </span>
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
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {event.time}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-4">
                      <CountdownTimer targetDate={event.targetDate} />
                      <button
                        type="button"
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
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
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