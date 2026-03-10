import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import logo from "@/assets/technovate-logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <img src={logo} alt="Technovate" className="h-8 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Empowering student developers & innovators through collaboration, learning, and building.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Events", "Team", "Gallery", "Contact"].map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">We Explore</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>Artificial Intelligence</span>
            <span>Web3 & Blockchain</span>
            <span>Machine Learning</span>
            <span>Full Stack Development</span>
            <span>Open Source</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
          <div className="flex gap-3 mb-4">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Mail, href: "mailto:technovate@college.edu" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">technovate@college.edu</p>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Technovate. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Powering Innovation 🚀
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
