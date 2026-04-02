"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Trail = {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
};

type Burst = {
  id: number;
  x: number;
  y: number;
};

const interactiveSelector = 'a, button, [data-magic-hover="true"]';

export function WandCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState<Trail[]>([]);
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    let trailId = 0;
    let burstId = 0;

    const spawnTrail = (x: number, y: number) => {
      const palette = [
        { color: "rgba(243, 210, 138, 0.9)", size: 6 },
        { color: "rgba(46, 159, 111, 0.62)", size: 4 },
        { color: "rgba(222, 136, 77, 0.54)", size: 5 },
      ];
      const token = palette[trailId % palette.length];
      const next = {
        id: trailId++,
        x,
        y,
        color: token.color,
        size: token.size,
      };

      setTrails((current) => [...current.slice(-14), next]);
      window.setTimeout(() => {
        setTrails((current) => current.filter((item) => item.id !== next.id));
      }, 720);
    };

    const spawnBurst = (x: number, y: number) => {
      const next = { id: burstId++, x, y };
      setBursts((current) => [...current, next]);
      window.setTimeout(() => {
        setBursts((current) => current.filter((item) => item.id !== next.id));
      }, 900);
    };

    const handlePointerMove = (event: PointerEvent) => {
      setVisible(true);
      setPosition({ x: event.clientX, y: event.clientY });
      spawnTrail(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      setVisible(false);
      setHovering(false);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest(interactiveSelector) : null;
      if (!target) return;
      setHovering(true);
      spawnBurst(position.x, position.y);
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target.closest(interactiveSelector) : null;
      if (!target) return;
      setHovering(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
    };
  }, [position.x, position.y]);

  const burstOffsets = useMemo(
    () => [
      { x: 0, y: -18 },
      { x: 16, y: -8 },
      { x: 18, y: 10 },
      { x: 0, y: 18 },
      { x: -16, y: 10 },
      { x: -18, y: -8 },
    ],
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 hidden md:block">
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.span
            key={trail.id}
            initial={{ opacity: 0.9, scale: 0.8, x: trail.x - trail.size / 2, y: trail.y - trail.size / 2 }}
            animate={{ opacity: 0, scale: 1.9, x: trail.x - trail.size / 2, y: trail.y - 28 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="absolute rounded-full"
            style={{
              width: trail.size,
              height: trail.size,
              background: trail.color,
              boxShadow: `0 0 18px ${trail.color}`,
            }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {bursts.map((burst) => (
          <div key={burst.id}>
            <motion.span
              initial={{ opacity: 0.45, scale: 0.4, x: burst.x - 14, y: burst.y - 14 }}
              animate={{ opacity: 0, scale: 1.8, x: burst.x - 14, y: burst.y - 14 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute h-7 w-7 rounded-full border border-[rgba(244,215,156,0.7)]"
              style={{ boxShadow: "0 0 28px rgba(244,215,156,0.35)" }}
            />
            {burstOffsets.map((offset, index) => (
              <motion.span
                key={`${burst.id}-${index}`}
                initial={{ opacity: 0.9, scale: 0.7, x: burst.x, y: burst.y }}
                animate={{ opacity: 0, scale: 1.35, x: burst.x + offset.x, y: burst.y + offset.y }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, delay: index * 0.02, ease: "easeOut" }}
                className="absolute rounded-full"
                style={{
                  width: index % 2 === 0 ? 5 : 4,
                  height: index % 2 === 0 ? 5 : 4,
                  background: index % 3 === 0 ? "rgba(244,215,156,0.92)" : index % 3 === 1 ? "rgba(55,174,124,0.7)" : "rgba(226,138,80,0.72)",
                  boxShadow: index % 3 === 0 ? "0 0 18px rgba(244,215,156,0.72)" : "0 0 14px rgba(55,174,124,0.52)",
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>

      <motion.div
        animate={{
          opacity: visible ? 1 : 0,
          x: position.x,
          y: position.y,
          rotate: hovering ? -18 : -24,
          scale: hovering ? 1.04 : 1,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 34, mass: 0.25 }}
        className="absolute left-0 top-0"
      >
        <div className="relative -translate-x-2 -translate-y-5">
          <div className="h-[66px] w-[4px] rounded-full bg-[linear-gradient(180deg,#20130d_0%,#3a2419_42%,#120a06_100%)] shadow-[0_0_22px_rgba(0,0,0,0.35)]" />
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,240,204,1)_0%,rgba(236,196,103,0.95)_46%,rgba(236,196,103,0)_76%)] shadow-[0_0_24px_rgba(236,196,103,0.75)]" />
          <div className="absolute top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[rgba(58,174,124,0.5)] blur-[2px]" />
        </div>
      </motion.div>
    </div>
  );
}
