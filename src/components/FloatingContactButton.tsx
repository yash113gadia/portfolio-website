import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Mail, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: Mail, href: "mailto:yash113gadia@gmail.com", label: "Email", color: "bg-emerald-500" },
    { icon: Linkedin, href: "https://linkedin.com/in/yashgadia", label: "LinkedIn", color: "bg-blue-500" },
    { icon: Github, href: "https://github.com/yash113gadia", label: "GitHub", color: "bg-neutral-700" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 flex flex-col gap-3 mb-2"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} p-3 rounded-full shadow-lg hover:scale-110 transition-transform`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 rounded-full shadow-lg shadow-emerald-500/25 flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <MessageCircle className="w-6 h-6 text-black" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingContactButton;
