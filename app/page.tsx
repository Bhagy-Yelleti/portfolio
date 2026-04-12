"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Cpu, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      title: "SkyVoyage Booking System",
      tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
      desc: "Architected a scalable flight booking platform handling concurrent user sessions and real-time availability sync. Increased booking velocity by 40%.",
      link: "https://github.com/Bhagy-Yelleti/portfolio",
      demo: "#"
    },
    {
      title: "Flight Fare Prediction ML",
      tags: ["Python", "Scikit-Learn", "FastAPI", "React"],
      desc: "Engineered an end-to-end ML pipeline to forecast dynamic airfares with 92% accuracy, deployed via high-performance REST APIs.",
      link: "https://github.com/Bhagy-Yelleti/portfolio",
      demo: "#"
    },
    {
      title: "SmartRisk Pro",
      tags: ["React", "Node.js", "TensorFlow", "AWS"],
      desc: "Developed an intelligent risk assessment dashboard for enterprise clients. Integrated predictive modeling to flag anomalies in real-time streams.",
      link: "https://github.com/Bhagy-Yelleti/portfolio",
      demo: "#"
    },
    {
      title: "ImpactBridge",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      desc: "Built a bridge connecting NGOs with corporate sponsors. Optimized database queries to handle large dataset aggregations instantly.",
      link: "https://github.com/Bhagy-Yelleti/portfolio",
      demo: "#"
    },
    {
      title: "JPM Trail",
      tags: ["React", "Financial APIs", "D3.js"],
      desc: "Constructed a mock trading and portfolio tracking interface with real-time charting and historical data analysis. Designed for latency-sensitive environments.",
      link: "https://github.com/Bhagy-Yelleti/portfolio",
      demo: "#"
    },
    {
      title: "FSAD Project",
      tags: ["Vite", "React", "Express"],
      desc: "Full-Stack Application Development capstone. A robust web platform utilizing modern component architecture and secure authentication workflows.",
      link: "https://github.com/Bhagy-Yelleti/portfolio",
      demo: "#"
    }
  ];

  const skills = [
    "React", "Next.js", "TypeScript", "Python", "Machine Learning", 
    "Tailwind CSS", "REST/GraphQL APIs", "Cloud Infrastructure", "GitHub Actions", "Framer Motion"
  ];

  const achievements = [
    { title: "Hackathon Winner", text: "1st place out of 50+ teams at University Hack. Built an AI accessibility tool." },
    { title: "Internship @ TechCorp", text: "Software Engineering Intern. Reduced bundle size by 35% and migrated legacy codebase." },
    { title: "Club Lead", text: "Technical Lead at the University Coding Club. Mentored 200+ students in web dev." },
    { title: "AWS Certified", text: "AWS Solutions Architect Associate." }
  ];

  return (
    <main className="relative min-h-screen selection:bg-purple-500/30">
      <div className="mesh-bg" />
      
      {/* Dynamic Cursor Light (CSS only overlay for glow) */}
      <div className="fixed inset-0 pointer-events-none z-50 mix-blend-screen bg-[radial-gradient(circle_800px_at_var(--mouse-x,50vw)_var(--mouse-y,50vh),rgba(255,255,255,0.06),transparent_80%)]" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-outfit font-bold text-xl tracking-tight">Bhagya.</span>
          <div className="flex gap-4">
            <Link href="https://github.com/Bhagy-Yelleti" target="_blank" className="text-white/60 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* 1) HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[800px] h-[800px] border border-white/10 rounded-full animate-[spin_60s_linear_infinite] flex items-center justify-center">
            <div className="w-[600px] h-[600px] border border-white/10 rounded-full border-dashed" />
          </div>
        </motion.div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeIn} className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="font-outfit text-6xl md:text-8xl font-bold tracking-tight mb-6">
              Bhagya <span className="heading-gradient">Yelleti</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-white/60 mb-8 max-w-2xl mx-auto font-light">
              Builder of intelligent digital experiences.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4 mb-12">
              {["Full Stack Developer", "AI Engineer", "Problem Solver"].map((role, i) => (
                <span key={i} className="px-4 py-2 rounded-lg border border-white/5 bg-white/5 text-sm uppercase tracking-widest text-white/50 backdrop-blur-sm">
                  {role}
                </span>
              ))}
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-6">
              <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* 2) ABOUT SECTION */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
            <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 text-sm text-blue-400 font-medium tracking-wider uppercase">
                  <Cpu className="w-4 h-4" /> The Engineering Mindset
                </div>
                <h2 className="font-outfit text-3xl md:text-5xl font-bold">Bridging AI & User Experience.</h2>
                <div className="space-y-4 text-white/60 leading-relaxed text-lg font-light">
                  <p>As an engineering student, I have cultivated a strong foundation in both theoretical algorithms and practical, scalable systems.</p>
                  <p>With a deep passion for ML products and frontend systems, my goal is to craft memorable digital interfaces empowered by intelligent, data-driven backends.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 glass-panel rounded-2xl p-6 border border-white/5 space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Status</div>
                  <div className="text-white/90">Engineering Student</div>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Focus</div>
                  <div className="text-white/90">AI & Web Infrastructure</div>
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Vibe</div>
                  <div className="text-white/90">Curious & Relentless</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3) FEATURED PROJECTS */}
      <section id="projects" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
            <h2 className="font-outfit text-4xl md:text-6xl font-bold mb-4">Featured <span className="text-white/40">Work</span></h2>
            <p className="text-xl text-white/50 max-w-2xl">Premium case studies of engineered solutions and full-stack architecture.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group glass-panel rounded-2xl p-1 flex flex-col h-full transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(147,51,234,0.3)]"
              >
                <div className="bg-black/40 rounded-xl p-6 flex flex-col h-full border border-white/5">
                  <div className="h-48 rounded-lg bg-gradient-to-br from-white/5 to-white/0 border border-white/5 mb-6 flex items-center justify-center overflow-hidden relative">
                    <Globe className="w-12 h-12 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <h3 className="font-outfit text-2xl font-semibold mb-2">{proj.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-md text-white/60 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-white/50 font-light flex-grow mb-6">{proj.desc}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <Link href={proj.link} className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors">
                      <Github className="w-4 h-4" />
                    </Link>
                    <Link href={proj.demo} className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) SKILLS & 5) ACHIEVEMENTS */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Skills */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-outfit text-3xl md:text-5xl font-bold mb-8 flex items-center gap-3">
              <Code className="w-8 h-8 text-blue-400" /> Stack & Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.div 
                  key={skill}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="px-5 py-3 rounded-xl glass-panel border border-white/10 text-sm font-medium tracking-wide text-white/80"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-outfit text-3xl md:text-5xl font-bold mb-8">Traction</h2>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <div key={i} className="glass-panel p-5 rounded-xl border border-white/5 flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <span className="text-blue-400 text-xs font-bold">0{i+1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-sm text-white/50 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6) CONTACT SECTION */}
      <section id="contact" className="py-32 relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="font-outfit text-5xl md:text-7xl font-bold mb-6">Let's build.</h2>
            <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto font-light">
              Currently open for new opportunities. Whether it's a full-time role, freelance project, or just casually discussing edge tech.
            </p>
            
            <a href="mailto:bhagyayelleti@example.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform text-lg group">
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" /> Say Hello
            </a>
            
            <div className="flex justify-center gap-6 mt-16 pt-8 border-t border-white/10">
              <Link href="https://github.com/Bhagy-Yelleti" className="text-white/40 hover:text-white transition-colors flex items-center gap-2">
                <Github className="w-5 h-5" /> GitHub
              </Link>
              <Link href="https://linkedin.com" className="text-white/40 hover:text-white transition-colors flex items-center gap-2">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
