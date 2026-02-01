import { motion } from 'framer-motion';

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-primary pointer-events-none">
      {/* Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Orb 1 - Cyan */}
      <motion.div
        animate={{
          x: [0, 150, -80, 0],
          y: [0, -80, 150, 0],
          scale: [1, 1.3, 0.8, 1],
          opacity: [0.3, 0.5, 0.2, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-15%] left-[-15%] w-[60vw] h-[60vw] bg-cyan-500/20 rounded-full blur-[150px]"
      />

      {/* Orb 2 - Violet */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -60, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.25, 0.4, 0.15, 0.25],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-15%] right-[-15%] w-[70vw] h-[70vw] bg-violet-600/20 rounded-full blur-[160px]"
      />

      {/* Orb 3 - Pink (Accent) */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, 60, -80, 0],
          scale: [1, 1.4, 0.7, 1],
          opacity: [0.15, 0.3, 0.1, 0.15],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-[40%] left-[40%] w-[45vw] h-[45vw] bg-pink-500/15 rounded-full blur-[120px]"
      />

      {/* Orb 4 - Blue */}
      <motion.div
        animate={{
          x: [0, -50, 100, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.2, 0.35, 0.15, 0.2],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
        className="absolute top-[10%] right-[20%] w-[40vw] h-[40vw] bg-blue-600/15 rounded-full blur-[130px]"
      />
      
      {/* Animated Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={`${i * 10}%`}
            x2="100%"
            y2={`${i * 10}%`}
            stroke="url(#gridGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </svg>
      
      {/* Texture Overlay - Subtle Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.07] brightness-100 contrast-150 mix-blend-overlay" />
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.9)_100%)] pointer-events-none" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-20" />
    </div>
  );
};

export default LiquidBackground;