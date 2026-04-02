"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface ProfileSelectionProps {
  onProfileSelect: (type: string) => void;
}

export function ProfileSelection({ onProfileSelect }: ProfileSelectionProps) {
  const profiles = [
    { name: "Recruiter", hex: "#1e40af", accent: "blue" },
    { name: "Student", hex: "#7c3aed", accent: "purple" },
    { name: "Curious", hex: "#059669", accent: "emerald" },
  ];

  useEffect(() => {
    // Play soft click sound on profile hover (optional)
    const handleMouseMove = () => {
      try {
        // Could play subtle hover sound here
      } catch (error) {}
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-40"
    >
      {/* Brand Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 left-8"
      >
        <div className="text-2xl font-black text-red-600 tracking-tight">B</div>
      </motion.div>

      {/* Main Section */}
      <div className="w-full max-w-4xl px-6 flex flex-col items-center justify-center space-y-20">
        {/* Heading - Mature typography */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center space-y-4"
        >
          <h1 className="text-6xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Who's watching?
          </h1>
          <p className="text-white/50 text-sm font-medium tracking-wide">
            Select your profile to view curated content
          </p>
        </motion.div>

        {/* Profile Cards - Mature styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
          {profiles.map((profile, index) => (
            <motion.button
              key={profile.name}
              onClick={() => {
                // Play click sound
                try {
                  const click = new Audio("/sounds/click.mp3");
                  click.volume = 0.3;
                  click.play().catch(() => {});
                } catch (error) {}
                onProfileSelect(profile.name);
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative cursor-pointer focus:outline-none"
            >
              {/* Subtle glow on hover - not childish */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: `${profile.hex}40` }}
              />

              {/* Card - Premium solid color, not gradient */}
              <div
                className="relative w-full aspect-square rounded-2xl border border-white/10 group-hover:border-white/30 flex flex-col items-center justify-center space-y-4 transition-all duration-500 overflow-hidden"
                style={{ backgroundColor: `${profile.hex}08` }}
              >
                {/* Premium accent bar */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full group-hover:w-20 transition-all duration-300"
                  style={{ backgroundColor: profile.hex }}
                />

                {/* Profile name - Clean typography */}
                <div className="relative z-10 space-y-2 text-center">
                  <div className="text-4xl font-black text-white">{profile.name}</div>
                  <div className="text-xs text-white/40 font-medium tracking-widest uppercase">
                    {profile.name === "Recruiter" &&
                      "Professional Focus"}
                    {profile.name === "Student" && "Learning Path"}
                    {profile.name === "Curious" && "Full Spectrum"}
                  </div>
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-4 text-white/40 group-hover:text-white text-sm font-medium"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Select →
                </motion.div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 h-px w-16 bg-gradient-to-r from-transparent via-red-600 to-transparent"
      />
    </motion.div>
  );
}
