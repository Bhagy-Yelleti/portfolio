"use client";

import { motion } from "framer-motion";

interface ProfileSelectionProps {
  onProfileSelect: (type: string) => void;
}

export function ProfileSelection({ onProfileSelect }: ProfileSelectionProps) {
  const profiles = [
    { name: "Recruiter", color: "bg-red-600", icon: "💼" },
    { name: "Student", color: "bg-purple-600", icon: "🎓" },
    { name: "Curious", color: "bg-emerald-600", icon: "🔍" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-40">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-16"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-black text-white"
        >
          Who's watching?
        </motion.h1>

        {/* Profile Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {profiles.map((profile, index) => (
            <motion.button
              key={profile.name}
              onClick={() => onProfileSelect(profile.name)}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl ${profile.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}
              />

              {/* Card */}
              <div
                className={`relative w-40 h-40 rounded-2xl ${profile.color} flex flex-col items-center justify-center space-y-3 border border-white/20 group-hover:border-white/40 transition-all`}
                style={{
                  boxShadow: `0 0 30px ${
                    {
                      red: "rgba(220, 38, 38, 0.4)",
                      purple: "rgba(139, 92, 246, 0.4)",
                      emerald: "rgba(16, 185, 129, 0.4)",
                    }[profile.color.split("-")[1] === "600" ? profile.color.split("-")[0] : "red"]
                  }`,
                }}
              >
                {/* Icon */}
                <div className="text-4xl">{profile.icon}</div>

                {/* Name */}
                <div className="text-white font-bold text-lg">{profile.name}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/60 text-sm"
        >
          Select your viewing mode to continue
        </motion.p>
      </motion.div>
    </div>
  );
}
