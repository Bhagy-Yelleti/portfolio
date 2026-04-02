"use client";

import { motion } from "framer-motion";

interface ProfileSelectionProps {
  onProfileSelect: (type: string) => void;
}

export function ProfileSelection({ onProfileSelect }: ProfileSelectionProps) {
  const profiles = [
    { name: "Recruiter", color: "from-red-600 to-red-700", icon: "💼" },
    { name: "Student", color: "from-purple-600 to-purple-700", icon: "🎓" },
    { name: "Curious", color: "from-emerald-600 to-emerald-700", icon: "🔍" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-40"
    >
      {/* Netflix Logo or Brand */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-8 left-8"
      >
        <div className="text-3xl font-black text-red-600">B</div>
      </motion.div>

      {/* Main Content */}
      <div className="text-center space-y-16">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tight"
        >
          Who's watching?
        </motion.h1>

        {/* Profile Cards Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {profiles.map((profile, index) => (
            <motion.button
              key={profile.name}
              onClick={() => onProfileSelect(profile.name)}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center space-y-4 cursor-pointer"
            >
              {/* Glow background */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${profile.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300 w-40 h-40`}
              />

              {/* Card */}
              <div
                className={`relative w-40 h-40 rounded-3xl bg-gradient-to-br ${profile.color} flex flex-col items-center justify-center space-y-3 border border-white/20 group-hover:border-white/50 transition-all duration-300 overflow-hidden`}
                style={{
                  boxShadow: `0 0 50px currentColor`,
                }}
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="relative z-10 text-6xl">{profile.icon}</div>

                {/* Name */}
                <div className="relative z-10 text-white font-bold text-lg">{profile.name}</div>
              </div>

              {/* Underline on hover */}
              <motion.div
                className="h-1 bg-white rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: 80 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-white/60 text-sm mt-8"
        >
          Select your viewing profile to continue
        </motion.p>
      </div>

      {/* Manage Profiles link (Netflix style) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 px-6 py-2 border border-white/30 text-white/60 hover:text-white hover:border-white/60 rounded transition-all text-sm"
      >
        Manage Profiles
      </motion.button>
    </motion.div>
  );
}
