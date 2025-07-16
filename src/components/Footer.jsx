import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// npm install react-icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="relative bg-gray-900 text-white py-8 px-6 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <p className="font-semibold">© {new Date().getFullYear()} Mohd Husamuddin</p>
          <p className="text-sm text-gray-400 mt-1">Made with 💙 using React & Tailwind</p>
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/husam26" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/mohd-husamuddin-7b7a77339/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <HiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;