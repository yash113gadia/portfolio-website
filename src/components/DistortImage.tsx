import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

interface DistortImageProps {
  src: string;
  alt: string;
  className?: string;
}

const DistortImage = ({ src, alt, className = '' }: DistortImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / 10);
    y.set((e.clientY - centerY) / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          rotateX: ySpring,
          rotateY: xSpring,
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
            filter: isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(1) saturate(1)',
          }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Overlay gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
            transform: 'translateX(-100%)',
          }}
          animate={{
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default DistortImage;
