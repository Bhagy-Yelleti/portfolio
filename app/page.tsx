"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowRight, ChevronDown, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  // Custom cursor position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Horizontal Scroll Reference
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
  const physicsX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const projects = [
    {
      title: "SkyVoyage Booking System",
      impact: "High-concurrency flight booking architecture.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      repo: "SkyVoyage_Booking_System"
    },
    {
      title: "SmartRisk Pro",
      impact: "Real-time analytics dashboard with predictive algorithms.",
      tags: ["React", "Node.js", "TensorFlow", "AWS"],
      repo: "SmartRisk_Pro"
    },
    {
      title: "ImpactBridge",
      impact: "Optimized connection platform reducing query latency.",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      repo: "ImpactBridge"
    },
    {
      title: "Flight Fare Prediction ML",
      impact: "End-to-end ML pipeline forecasting dynamic airfares securely.",
      tags: ["Python", "Scikit", "FastAPI"],
      repo: "flight-fare-prediction-ml"
    },
    {
      title: "FSAD Project",
      impact: "Full Stack Application Development platform with secure auth.",
      tags: ["React", "Express", "MongoDB"],
      repo: "FSAD_project"
    },
    {
      title: "JPM Trail",
      impact: "Mock trading and portfolio tracking interface.",
      tags: ["React", "Financial APIs", "D3.js"],
      repo: "JPM_Trail"
    }
  ];

  if (!mounted) return null;

  return (
    <main className="relative bg-[#050505] text-[#FAFAFA] antialiased overflow-hidden selection:bg-purple-500/30 font-inter">

      {/* Floating Glow Cursor */}
      <motion.div 
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[150px] mix-blend-screen z-0"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 1.5 }}
      />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 w-full z-50 mix-blend-difference"
      >
        <div className="max-w-[1600px] mx-auto px-8 md:px-12 h-24 flex items-center justify-between">
          <Link href="/" className="font-outfit font-bold text-2xl tracking-tighter hover:opacity-70 transition-opacity">
            [ bhagya. ]
          </Link>
          <div className="flex gap-4">
            <Link href="https://github.com/Bhagy-Yelleti" target="_blank" className="p-2 text-white hover:text-white/60 transition-colors">
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center px-8 md:px-12 z-10 snap-center">
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="overflow-hidden mb-4">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-outfit text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.85] uppercase"
              >
                Bhagya <br className="md:hidden" /> Yelleti
              </motion.h1>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 flex flex-col md:flex-row md:items-end gap-6 justify-between border-t border-white/10 pt-8 max-w-4xl"
          >
            <div className="space-y-1">
              <p className="text-xl md:text-2xl font-light text-white/70">
                Software Engineer <span className="mx-2">•</span> AI Developer <span className="mx-2">•</span> Full Stack Developer
              </p>
              <p className="font-mono text-sm uppercase tracking-widest text-indigo-400">
                Building intelligent digital experiences and scalable products.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-8 md:left-12 flex items-center gap-4 text-white/50"
        >
          <span className="font-mono text-xs uppercase tracking-widest rotate-[-90deg] origin-left translate-y-6">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* HORIZONTAL SLIDESHOW PROJECTS SECTION */}
      <section ref={targetRef} className="relative h-[300vh] bg-[#020202]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <div className="absolute top-16 left-8 md:left-12 z-20 mix-blend-difference">
            <h2 className="font-outfit text-4xl md:text-6xl font-bold tracking-tight text-white/20">Selected Works</h2>
          </div>

          <motion.div style={{ x: physicsX }} className="flex gap-12 md:gap-24 pl-8 md:pl-32 pr-[30vw] min-w-max items-center h-full">
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] md:h-[70vh] relative group flex flex-col justify-end"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Visual Glass Box */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl overflow-hidden transition-all duration-700 group-hover:border-indigo-500/30 group-hover:bg-white/[0.05]">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
                  
                  {/* Subtle noise/mesh for premium feel */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="font-mono text-xs text-white/50 tracking-widest uppercase mb-4">
                      0{i + 1}
                    </div>
                    
                    <a href={`https://github.com/Bhagy-Yelleti/${project.repo}`} target="_blank" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 hover:bg-white hover:text-black">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <div>
                    <h3 className="font-outfit text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white/60 mb-8 font-light max-w-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                      {project.impact}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 font-mono text-xs tracking-wider uppercase border border-white/10 rounded-full text-white/70 bg-black/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION - MARBAN INSPIRED END REVEAL */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-8 md:px-12 bg-[#050505] z-10 border-t border-white/5 snap-center">
        <div className="w-full max-w-[1200px] mx-auto text-center relative">
          
          <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <p className="font-mono text-indigo-400 text-sm tracking-widest uppercase mb-6">Open for Opportunities</p>
            <h2 className="font-outfit text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-12">
              LET'S TALK
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="flex flex-wrap justify-center gap-6">
            <a href="mailto:bhagyayelleti@example.com" className="group relative overflow-hidden rounded-full border border-white/20 bg-transparent px-10 py-5 text-lg font-outfit uppercase tracking-widest text-white transition-all hover:border-white">
              <span className="relative z-10 mix-blend-difference flex items-center gap-3">
                Send an Email <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </a>
            
            <a href="https://linkedin.com" className="group relative overflow-hidden rounded-full border border-white/20 bg-transparent px-10 py-5 text-lg font-outfit uppercase tracking-widest text-white transition-all hover:border-indigo-500">
              <span className="relative z-10 mix-blend-difference flex items-center gap-3">
                LinkedIn <Linkedin className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-indigo-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </a>
          </motion.div>

        </div>

        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.8 }} className="absolute bottom-12 w-full max-w-[1600px] flex justify-between items-center px-8 md:px-12 font-mono text-xs text-white/30 uppercase tracking-widest">
          <div>© {new Date().getFullYear()}</div>
          <div>All engines running</div>
        </motion.footer>
      </section>

    </main>
  );
}
