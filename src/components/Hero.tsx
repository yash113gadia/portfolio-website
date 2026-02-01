import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { FloatingCodeSymbols, FloatingOrbs, ParticleField, AnimatedGrid } from './FloatingElements';
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <AnimatedGrid />
      <FloatingOrbs />
      <ParticleField />
      <FloatingCodeSymbols />
      
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-violet-500/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1">
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-neutral-400 text-sm font-medium">Available for opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-emerald-400">Yash</span>
              <span className="text-neutral-600">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-neutral-400 max-w-3xl mb-8 leading-relaxed"
            >
          Full-Stack Developer building{' '}
          <Typewriter 
            words={['marketplace platforms', 'scalable applications', 'AI-powered tools', 'seamless user experiences']}
            className="text-white"
          />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-neutral-500 max-w-2xl mb-12"
        >
          Passionate about building products that solve real problems. 
          I specialize in <span className="text-emerald-400 font-medium">Next.js</span>, <span className="text-emerald-400 font-medium">Node.js</span>, and <span className="text-emerald-400 font-medium">PostgreSQL</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-emerald-400 hover:text-black transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-neutral-700 text-white font-semibold rounded-full hover:border-neutral-500 hover:bg-neutral-900 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/yash113gadia", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/yashgadia", label: "LinkedIn" },
            { icon: Mail, href: "mailto:yash113gadia@gmail.com", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-neutral-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-neutral-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
