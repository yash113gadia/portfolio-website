import { motion } from 'framer-motion';

const RetroGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Primary Perspective Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{
          transform: 'perspective(600px) rotateX(65deg) translateY(-50px) translateZ(-100px)',
          transformOrigin: 'top center',
        }}
      />
      
      {/* Glowing Horizon Line */}
      <motion.div 
        className="absolute top-1/3 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.5) 20%, rgba(139,92,246,0.5) 50%, rgba(236,72,153,0.5) 80%, transparent 100%)',
          boxShadow: '0 0 30px rgba(6,182,212,0.5), 0 0 60px rgba(139,92,246,0.3)',
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated Vertical Lines */}
      <div className="absolute inset-0 flex justify-around opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scaleY: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      
      {/* Corner Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px]" />
    </div>
  );
};

export default RetroGrid;
