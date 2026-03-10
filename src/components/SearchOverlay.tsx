import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const searchableItems = [
  { title: "Home", path: "/", category: "Page" },
  { title: "About Us", path: "/about", category: "Page" },
  { title: "Events", path: "/events", category: "Page" },
  { title: "Team", path: "/team", category: "Page" },
  { title: "Gallery", path: "/gallery", category: "Page" },
  { title: "Contact", path: "/contact", category: "Page" },
  { title: "Hackathon 2026", path: "/events", category: "Event" },
  { title: "AI/ML Workshop", path: "/events", category: "Event" },
  { title: "Web3 Bootcamp", path: "/events", category: "Event" },
  { title: "CodeSprint 3.0", path: "/events", category: "Event" },
  { title: "Arjun Mehta – President", path: "/team", category: "Member" },
  { title: "Priya Sharma – Vice President", path: "/team", category: "Member" },
  { title: "Rohan Verma – Tech Lead", path: "/team", category: "Member" },
  { title: "Sneha Patel – Design Lead", path: "/team", category: "Member" },
  { title: "AI & Machine Learning", path: "/about", category: "Technology" },
  { title: "Blockchain & Web3", path: "/about", category: "Technology" },
  { title: "Full Stack Development", path: "/about", category: "Technology" },
];

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ open, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        open ? onClose() : undefined;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const results = query.length > 0
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg mx-4 glass-strong rounded-xl overflow-hidden glow-blue"
          >
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <Search size={18} className="text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events, members, pages..."
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
                <X size={18} />
              </button>
            </div>
            {results.length > 0 && (
              <div className="max-h-64 overflow-y-auto p-2">
                {results.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(item.path)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-left hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-sm text-foreground">{item.title}</span>
                    <span className="text-xs text-muted-foreground font-mono">{item.category}</span>
                  </button>
                ))}
              </div>
            )}
            {query.length > 0 && results.length === 0 && (
              <div className="p-8 text-center text-muted-foreground text-sm">No results found</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
