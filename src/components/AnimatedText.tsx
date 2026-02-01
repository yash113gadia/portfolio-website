import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

// Letter by letter reveal animation
export const AnimatedText = ({ text, className = '', delay = 0 }: AnimatedTextProps) => {
  const letters = text.split('');
  
  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.03,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};

// Word by word reveal
export const AnimatedWords = ({ text, className = '', delay = 0 }: AnimatedTextProps) => {
  const words = text.split(' ');
  
  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// Typewriter effect
export const TypewriterText = ({ text, className = '', delay = 0 }: AnimatedTextProps) => {
  return (
    <motion.span
      className={`${className} inline-block`}
      initial={{ width: 0 }}
      animate={{ width: 'auto' }}
      transition={{
        duration: text.length * 0.05,
        delay,
        ease: 'linear',
      }}
      style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
    >
      {text}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-emerald-400 ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.span>
  );
};

// Glitch text effect
export const GlitchText = ({ text, className = '' }: Omit<AnimatedTextProps, 'delay'>) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 text-emerald-400 z-0"
        animate={{
          x: [0, -2, 2, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        style={{ clipPath: 'inset(20% 0 30% 0)' }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-violet-400 z-0"
        animate={{
          x: [0, 2, -2, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.05,
        }}
        style={{ clipPath: 'inset(50% 0 20% 0)' }}
      >
        {text}
      </motion.span>
    </span>
  );
};
