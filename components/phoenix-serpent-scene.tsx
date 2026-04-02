"use client";

import { motion } from "framer-motion";

const sparkles = [
  { left: "10%", top: "20%", size: 7, color: "#f2ca76", duration: 8, delay: 0.2 },
  { left: "22%", top: "66%", size: 5, color: "#e56f38", duration: 9, delay: 1.1 },
  { left: "31%", top: "38%", size: 4, color: "#7ed4aa", duration: 10, delay: 1.8 },
  { left: "48%", top: "14%", size: 6, color: "#f7dfa8", duration: 11, delay: 0.7 },
  { left: "59%", top: "74%", size: 5, color: "#0f9d68", duration: 9.5, delay: 2.1 },
  { left: "73%", top: "32%", size: 6, color: "#d8a84b", duration: 10.5, delay: 0.9 },
  { left: "84%", top: "56%", size: 4, color: "#f18957", duration: 8.6, delay: 1.6 },
  { left: "88%", top: "18%", size: 5, color: "#82d8b2", duration: 9.8, delay: 2.4 },
];

export function PhoenixSerpentScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="scene-shell relative mx-auto flex w-full max-w-[44rem] items-center justify-center"
    >
      <motion.div
        aria-hidden
        className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(227,183,94,0.24),rgba(157,38,33,0.15)_35%,rgba(8,69,43,0.12)_58%,transparent_74%)] blur-[80px]"
        animate={{ scale: [1, 1.08, 0.98, 1], opacity: [0.6, 0.88, 0.55, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="scene-frame relative h-[32rem] w-full overflow-hidden rounded-[2.8rem] border border-[rgba(214,177,97,0.18)] bg-[radial-gradient(circle_at_top,rgba(255,244,224,0.08),transparent_26%),linear-gradient(180deg,rgba(16,14,10,0.8),rgba(5,6,8,0.96))] shadow-[0_45px_140px_rgba(0,0,0,0.46)] md:h-[40rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_22%,rgba(247,221,172,0.12),transparent_18%),radial-gradient(circle_at_70%_72%,rgba(31,129,89,0.16),transparent_20%),linear-gradient(160deg,rgba(255,255,255,0.02),transparent_48%)]" />

        <motion.div
          className="absolute left-[18%] top-[18%] h-[16rem] w-[16rem] rounded-full border border-[rgba(255,228,177,0.14)]"
          animate={{ rotate: 360, scale: [1, 1.02, 1] }}
          transition={{ rotate: { duration: 24, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
          style={{ transformStyle: "preserve-3d" }}
        />
        <motion.div
          className="absolute right-[16%] top-[30%] h-[12rem] w-[12rem] rounded-full border border-[rgba(54,180,127,0.18)]"
          animate={{ rotate: -360, scale: [0.96, 1.04, 0.96] }}
          transition={{ rotate: { duration: 22, repeat: Infinity, ease: "linear" }, scale: { duration: 9, repeat: Infinity, ease: "easeInOut" } }}
          style={{ transformStyle: "preserve-3d" }}
        />

        <motion.div
          className="absolute left-[17%] top-[14%] h-[48%] w-[52%]"
          animate={{ y: [0, -10, 0], rotate: [-3, 2, -3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="absolute inset-[18%_18%_32%_18%] rounded-[48%_52%_38%_44%/40%_44%_56%_52%] bg-[radial-gradient(circle_at_38%_30%,rgba(255,242,208,0.95),rgba(242,198,107,0.9)_24%,rgba(171,82,34,0.82)_58%,rgba(88,21,16,0.28)_100%)] shadow-[0_0_60px_rgba(228,171,77,0.4)]"
            animate={{ rotateX: [0, 8, 0], rotateY: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[34%] top-[30%] h-[20%] w-[20%] rounded-full bg-[radial-gradient(circle,rgba(255,250,232,0.96),rgba(246,199,111,0.85)_55%,rgba(154,44,29,0.12)_100%)] blur-[1px]"
            animate={{ opacity: [0.65, 1, 0.7], scale: [0.96, 1.12, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute left-[12%] top-[8%] h-[54%] w-[42%] rounded-[62%_38%_60%_40%/55%_48%_52%_45%] bg-[linear-gradient(140deg,rgba(255,244,222,0.95),rgba(238,192,95,0.88)_36%,rgba(176,74,32,0.7)_70%,rgba(121,23,15,0.12)_100%)] shadow-[0_0_50px_rgba(214,155,66,0.26)]"
            animate={{ rotate: [-18, -10, -18], x: [0, -8, 0], y: [0, -6, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[6%] top-[10%] h-[56%] w-[40%] rounded-[40%_60%_42%_58%/44%_44%_56%_56%] bg-[linear-gradient(220deg,rgba(255,246,224,0.96),rgba(243,188,88,0.88)_38%,rgba(180,72,35,0.7)_72%,rgba(129,22,15,0.12)_100%)] shadow-[0_0_50px_rgba(214,155,66,0.24)]"
            animate={{ rotate: [14, 22, 14], x: [0, 8, 0], y: [0, -8, 0] }}
            transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute left-[40%] top-[12%] h-[18%] w-[12%] rounded-[50%_50%_42%_58%/36%_32%_68%_64%] bg-[linear-gradient(180deg,rgba(255,244,215,0.96),rgba(234,180,82,0.92),rgba(176,80,28,0.72))] shadow-[0_0_30px_rgba(231,175,80,0.26)]"
            animate={{ y: [0, -6, 0], rotate: [-4, 4, -4] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute left-[44%] top-[20%] h-[34%] w-[8%] rounded-full bg-[linear-gradient(180deg,rgba(255,241,207,0.94),rgba(231,173,78,0.88),rgba(154,46,26,0.72))]"
            animate={{ y: [0, 8, 0], rotate: [-4, 3, -4] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute left-[28%] bottom-[14%] h-[30%] w-[34%] rounded-[45%_55%_55%_45%/58%_44%_56%_42%] bg-[linear-gradient(150deg,rgba(227,184,94,0.9),rgba(167,69,28,0.7),rgba(77,20,13,0.18))] blur-[0.5px]"
            animate={{ rotate: [12, 20, 12], x: [0, -6, 0] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute right-[26%] bottom-[12%] h-[28%] w-[30%] rounded-[55%_45%_44%_56%/50%_50%_42%_58%] bg-[linear-gradient(200deg,rgba(232,191,102,0.88),rgba(176,72,31,0.68),rgba(77,20,13,0.14))] blur-[0.5px]"
            animate={{ rotate: [-18, -10, -18], x: [0, 7, 0] }}
            transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="absolute left-[26%] top-[24%] h-[50%] w-[50%]"
          animate={{ rotate: [0, 8, 0], y: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="absolute inset-[8%] rounded-[52%_48%_44%_56%/42%_56%_44%_58%] border border-[rgba(95,213,156,0.1)]"
            animate={{ rotate: [0, -12, 0], opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[24%] top-[8%] h-[16%] w-[12%] rounded-[60%_40%_45%_55%/36%_44%_56%_64%] bg-[linear-gradient(180deg,rgba(239,214,143,0.9),rgba(176,137,62,0.84),rgba(74,52,18,0.5))] shadow-[0_0_24px_rgba(207,163,69,0.28)]"
            animate={{ rotate: [4, -6, 4], x: [0, 4, 0] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[30%] top-[16%] h-[15%] w-[10%] rounded-full bg-[radial-gradient(circle,rgba(250,238,190,0.95),rgba(37,173,118,0.88)_45%,rgba(6,76,51,0.95)_100%)]"
            animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.82] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-[16%_10%_12%_24%] rounded-[52%_48%_56%_44%/44%_48%_52%_56%] bg-[linear-gradient(135deg,rgba(33,145,102,0.95),rgba(15,115,78,0.95)_32%,rgba(6,70,47,0.98)_62%,rgba(245,210,118,0.84)_84%,rgba(16,105,72,0.95))] shadow-[0_0_48px_rgba(21,132,88,0.32)]"
            animate={{ rotate: [-10, -20, -10], scale: [1, 1.03, 1] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-[26%_18%_20%_38%] rounded-[55%_45%_50%_50%/58%_42%_58%_42%] border border-[rgba(247,219,143,0.18)]"
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[16%] bottom-[6%] h-[34%] w-[22%] rounded-[50%_50%_40%_60%/40%_46%_54%_60%] bg-[linear-gradient(180deg,rgba(18,120,82,0.98),rgba(7,73,49,0.98),rgba(224,187,101,0.72))]"
            animate={{ rotate: [20, 36, 20], x: [0, 10, 0], y: [0, 8, 0] }}
            transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[18%] bottom-[8%] h-[18%] w-[14%] rounded-full bg-[radial-gradient(circle,rgba(248,236,192,0.65),rgba(31,136,95,0.22),transparent_72%)] blur-md"
            animate={{ opacity: [0.35, 0.78, 0.35], scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="absolute inset-x-[18%] bottom-[16%] h-[16%] rounded-full bg-[radial-gradient(circle,rgba(250,230,183,0.26),rgba(244,173,89,0.12)_38%,rgba(11,43,27,0.04)_72%,transparent_76%)] blur-2xl"
          animate={{ scale: [0.9, 1.08, 0.94], opacity: [0.4, 0.75, 0.45] }}
          transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 1000" fill="none" aria-hidden>
          <motion.path
            d="M280 620C380 540 500 520 618 560C702 590 772 654 812 730"
            stroke="url(#goldTrail)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="18 14"
            animate={{ strokeDashoffset: [0, -120] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M286 414C390 366 510 374 612 424C710 472 788 562 812 662"
            stroke="url(#emeraldTrail)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="12 16"
            animate={{ strokeDashoffset: [0, 110] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="goldTrail" x1="280" y1="620" x2="812" y2="730" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(243,215,150,0)" />
              <stop offset="0.45" stopColor="#e1b25a" />
              <stop offset="1" stopColor="rgba(243,215,150,0)" />
            </linearGradient>
            <linearGradient id="emeraldTrail" x1="286" y1="414" x2="812" y2="662" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(125,219,176,0)" />
              <stop offset="0.5" stopColor="#3eb984" />
              <stop offset="1" stopColor="rgba(125,219,176,0)" />
            </linearGradient>
          </defs>
        </svg>

        {sparkles.map((particle) => (
          <motion.span
            key={`${particle.left}-${particle.top}`}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              background: particle.color,
              boxShadow: `0 0 24px ${particle.color}`,
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, 10, -6, 0],
              opacity: [0.15, 0.92, 0.2],
              scale: [0.8, 1.22, 0.85],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
