// src/components/StarParallax.tsx
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect } from "react";

interface Sparkle {
  className: string;
  top: string;
  left: string;
}

const sparkles: Sparkle[] = [
  { className: "sparkle-large", top: "top-[20%]", left: "left-[20%]" },
  { className: "sparkle-small", top: "top-[40%]", left: "left-[80%]" },
  { className: "sparkle-large", top: "top-[60%]", left: "left-[30%]" },
  { className: "sparkle-small", top: "top-[80%]", left: "left-[70%]" },
  { className: "sparkle-large", top: "top-[30%]", left: "left-[50%]" },
  { className: "sparkle-small", top: "top-[70%]", left: "left-[40%]" },
];

export default function StarParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();

  const translateX = useTransform(mouseX, [0, window.innerWidth], [20, -20]);
  const translateY = useTransform(mouseY, [0, window.innerHeight], [20, -20]);
  const scrollYProgress = useTransform(scrollY, [0, 1000], [0, 0.5]);

  // Combine mouse Y and scroll Y effects
  const combinedY = useTransform(
    [translateY, scrollYProgress],
    (latest) => {
      const [mouseY, scrollY] = latest as [number, number];
      return mouseY + scrollY * 200;
    }
  );

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{ 
        x: translateX, 
        y: combinedY
      }}
    >
      {sparkles.map((s, i) => (
        <div key={i} className={`${s.className} ${s.top} ${s.left}`} />
      ))}
    </motion.div>
  );
}
