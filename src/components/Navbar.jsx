import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaTools, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: FaHome },
    { href: '#projects', label: 'Projects', icon: FaProjectDiagram },
    { href: '#skills', label: 'Skills', icon: FaTools },
    { href: '#contact', label: 'Contact', icon: FaPhoneAlt },
  ];

  const drawerVariants = {
    closed: { x: '-100%' },
    open: { x: '0%' },
  };

  return (
    <>
      {/* Brand Name */}
      <a href="#home" className="fixed top-6 left-6 z-50 text-2xl font-bold text-gray-800 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
        Mohd Husamuddin
      </a>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        whileTap={{ scale: 0.9 }}
      >
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }}><FaBars className="text-2xl text-gray-800" /></motion.div>
      </motion.button>
      
      {/* Side Drawer */}
      <motion.nav
        variants={drawerVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 bottom-0 w-72 bg-gray-900 text-white p-8 z-40 flex flex-col justify-center"
      >
        <ul className="space-y-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-2xl text-gray-300 font-semibold transition-colors hover:text-indigo-400 group"
              >
                <item.icon className="transition-transform group-hover:scale-110" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Optional: Content overlay when menu is open */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-30" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default Navbar;