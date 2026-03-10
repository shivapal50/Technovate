import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[120px]" />
        <div className="container mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-mono text-secondary uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Contact <span className="text-gradient">Us</span>
            </h1>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={1000}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-[1.02] transition-transform glow-blue flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={16} /> {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </AnimatedSection>

            {/* Info + Map */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="glass rounded-xl p-6 hover-glow">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail size={18} className="text-primary" />
                    <h3 className="font-semibold">Email Us</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">technovate@college.edu</p>
                </div>
                <div className="glass rounded-xl p-6 hover-glow">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin size={18} className="text-primary" />
                    <h3 className="font-semibold">Visit Us</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Computer Science Department, Main Campus</p>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-border aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.8!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="College Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
