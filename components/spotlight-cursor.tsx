"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function SpotlightCursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  const background = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(109, 123, 255, 0.16), transparent 45%)`;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{ background }}
    />
  );
}
