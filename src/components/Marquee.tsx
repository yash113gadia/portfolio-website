import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  speed?: number;
  className?: string;
}

const Marquee = ({ text, speed = 20, className = '' }: MarqueeProps) => {
  // Create multiple copies for seamless loop
  const items = Array(4).fill(text);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-8 text-5xl md:text-7xl font-bold text-neutral-700"
          >
            {item}
            <span className="mx-8 text-emerald-500">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
