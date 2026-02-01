import { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

const TiltCard = ({ 
  children, 
  className = "", 
  glowColor = "rgba(245, 158, 11, 0.3)" // Amber default
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative transform-gpu perspective-1000 ${className}`}
    >
      <div 
        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        {children}
      </div>
      
      {/* Dynamic Glow Gradient */}
      <motion.div
        style={{
          opacity: useTransform(mouseX, [-0.5, 0.5], [0, 0.4]),
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
          zIndex: -1,
        }}
        className="absolute inset-0 blur-3xl transition-opacity duration-500"
      />
    </motion.div>
  );
};

export default TiltCard;
