"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Bhagy-Yelleti", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:contact@bhagyayelleti.com", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <h3 className="text-xl font-black text-white mb-4">BHAGYA</h3>
              <p className="text-sm text-white/60">
                Designer & developer crafting premium digital experiences with code and motion.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Work</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#featured" className="text-sm text-white/60 hover:text-white transition-colors">
                    Featured Projects
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-sm text-white/60 hover:text-white transition-colors">
                    All Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/resume.pdf" className="text-sm text-white/60 hover:text-white transition-colors">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="https://blog.bhagyayelleti.com" className="text-sm text-white/60 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Stay Updated */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Connect</h4>
              <p className="text-sm text-white/60 mb-4">Follow for new projects and design explorations.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            {/* Social Links */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-6 py-2 rounded-md border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm font-medium transition-all duration-300"
              >
                Back to Top
              </button>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-white/40">
              <p>© {currentYear} Bhagya Yelleti. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
