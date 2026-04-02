"use client";

import { motion } from "framer-motion";
import { usePortfolioSound } from "@/components/sound-provider";

export function BrandCrest({
  size = "hero",
  className = "",
}: {
  size?: "hero" | "nav" | "footer";
  className?: string;
}) {
  const { introAccent, playLogoSpark } = usePortfolioSound();
  const dimensions =
    size === "nav"
      ? "h-14 w-14"
      : size === "footer"
        ? "h-28 w-28 md:h-32 md:w-32"
        : "h-[320px] w-[320px] md:h-[420px] md:w-[420px]";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.03, rotate: 1.2 }}
      onHoverStart={playLogoSpark}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${dimensions} ${className}`}
    >
      <motion.div
        aria-hidden
        className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(196,154,76,0.2),rgba(126,17,38,0.12)_38%,rgba(11,44,30,0.12)_66%,transparent_74%)] blur-2xl"
        animate={{
          opacity: introAccent ? [0.7, 1, 0.58] : [0.5, 0.9, 0.55],
          scale: introAccent ? [0.98, 1.1, 1] : [0.96, 1.04, 0.98],
        }}
        transition={{ duration: introAccent ? 1.2 : 6, repeat: introAccent ? 0 : Infinity, ease: "easeInOut" }}
      />

      <svg viewBox="0 0 400 400" className="h-full w-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <defs>
          <linearGradient id="crestStroke" x1="48" y1="42" x2="330" y2="338" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f0d28e" />
            <stop offset="36%" stopColor="#8a1f33" />
            <stop offset="68%" stopColor="#0c5b3e" />
            <stop offset="100%" stopColor="#c99c48" />
          </linearGradient>
          <linearGradient id="crestFill" x1="88" y1="54" x2="288" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(232,197,118,0.22)" />
            <stop offset="50%" stopColor="rgba(119,20,42,0.18)" />
            <stop offset="100%" stopColor="rgba(10,55,38,0.16)" />
          </linearGradient>
          <radialGradient id="serpentEye" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(228 141) rotate(90) scale(12)">
            <stop offset="0%" stopColor="#7cffbf" />
            <stop offset="100%" stopColor="rgba(124,255,191,0)" />
          </radialGradient>
          <filter id="goldGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M200 42C226 64 234 95 228 129C245 116 271 111 300 118C279 130 262 148 252 170C287 166 321 175 346 200C318 206 292 219 274 241C255 264 244 292 240 324C223 301 209 270 200 236C191 270 177 301 160 324C156 292 145 264 126 241C108 219 82 206 54 200C79 175 113 166 148 170C138 148 121 130 100 118C129 111 155 116 172 129C166 95 174 64 200 42Z"
          fill="url(#crestFill)"
          stroke="url(#crestStroke)"
          strokeWidth="6"
          filter="url(#goldGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        <motion.path
          d="M197 77C214 101 219 132 213 166C228 160 244 160 261 166C245 178 236 196 233 219C252 214 271 217 289 227C269 235 254 247 244 264C233 282 229 300 230 321C214 309 204 291 200 268C196 291 186 309 170 321C171 300 167 282 156 264C146 247 131 235 111 227C129 217 148 214 167 219C164 196 155 178 139 166C156 160 172 160 187 166C181 132 186 101 197 77Z"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.75"
          animate={{ opacity: introAccent ? [0.72, 1, 0.66] : [0.55, 0.95, 0.6] }}
          transition={{ duration: introAccent ? 1.1 : 5.5, repeat: introAccent ? 0 : Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M126 107C143 121 154 145 155 171C140 166 123 166 108 171C117 153 122 131 126 107Z"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, delay: 0.3 }}
        />
        <motion.path
          d="M274 107C257 121 246 145 245 171C260 166 277 166 292 171C283 153 278 131 274 107Z"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, delay: 0.3 }}
        />

        <motion.path
          d="M176 104C166 129 167 153 176 181C159 181 145 184 133 192C148 204 156 222 159 245C173 232 186 223 200 219"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.25 }}
        />
        <motion.path
          d="M198 112C222 140 228 176 217 214C208 244 206 277 214 317"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.35 }}
        />
        <motion.path
          d="M215 120C239 117 255 125 264 143C272 159 270 178 257 198C247 213 241 226 240 241C238 267 251 288 279 304"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.45 }}
        />

        <motion.path
          d="M218 141C226 135 237 135 245 142C238 149 229 153 219 154"
          fill="none"
          stroke="url(#crestStroke)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: [0.7, 1, 0.75] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.circle
          cx="228"
          cy="141"
          r="2.8"
          fill="#6df8b1"
          animate={{ opacity: [0.5, 1, 0.55], scale: [0.9, 1.2, 0.95] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="228"
          cy="141"
          r="10"
          fill="url(#serpentEye)"
          animate={{ opacity: [0.25, 0.75, 0.3] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M84 230C112 206 136 195 158 192"
          fill="none"
          stroke="rgba(201,156,72,0.45)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="9 10"
          animate={{ strokeDashoffset: [0, -24] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M316 230C288 206 264 195 242 192"
          fill="none"
          stroke="rgba(201,156,72,0.45)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="9 10"
          animate={{ strokeDashoffset: [0, 24] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {[
          { cx: 135, cy: 102, fill: "#b11f33", delay: 0 },
          { cx: 264, cy: 92, fill: "#b11f33", delay: 0.8 },
          { cx: 304, cy: 188, fill: "#0f6b48", delay: 1.1 },
          { cx: 98, cy: 200, fill: "#c99c48", delay: 1.6 },
          { cx: 198, cy: 56, fill: "#d7b26b", delay: 0.4 },
        ].map((particle) => (
          <motion.circle
            key={`${particle.cx}-${particle.cy}`}
            cx={particle.cx}
            cy={particle.cy}
            r="2.5"
            fill={particle.fill}
            animate={{ opacity: [0.15, 0.85, 0.15], cy: [particle.cy, particle.cy - 8, particle.cy] }}
            transition={{ duration: 4.6, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
