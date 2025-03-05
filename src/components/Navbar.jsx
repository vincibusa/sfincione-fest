import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    'Home', "L'Evento", 'Programma', 'Dove Mangiare',
    'Competizioni', 'Media & Partner', 'Contatti', 'FAQ'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = menuItems.map(item => 
        document.getElementById(item.toLowerCase().replace(/\s+/g, '-'))
      ).filter(Boolean); // Filter out any undefined sections
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        
        // Consider a section in view if its top is within viewport or if we've scrolled past it but it's the last section
        if (rect.top <= 150) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  const handleMenuItemClick = (itemId) => {
    const element = document.getElementById(itemId);
    if (!element) return;
    
    // Close menu first to avoid layout shifts during scrolling
    setMobileMenuOpen(false);
    
    // Calculate position after a short delay to let any animations complete
    setTimeout(() => {
      const navHeight = document.querySelector('nav').offsetHeight;
      const extraOffset = window.innerWidth < 768 ? 20 : 0; // Extra buffer for mobile
      
      window.scrollTo({
        top: element.offsetTop - navHeight - extraOffset,
        behavior: "smooth"
      });
      
      setActiveSection(itemId);
    }, 10);
  };

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-rosso-mattone/95 backdrop-blur-sm py-2 shadow-md' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-beige-chiaro font-sunshine text-2xl lg:text-3xl cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
            onClick={() => handleMenuItemClick('home')}
          >
            Sfincione Fest
          </motion.div>

          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item, index) => {
              const itemId = item.toLowerCase().replace(/\s+/g, '-');
              return (
                <motion.a
                  key={index}
                  href={`#${itemId}`}
                  className={`relative block text-beige-chiaro text-lg py-2 px-4 rounded-lg
                    ${activeSection === itemId ? 'bg-rosso-salsa/20 text-giallo-ocra' : ''}`}
                  variants={menuItemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick(itemId);
                  }}
                >
                  {item}
                  {activeSection === itemId && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-giallo-ocra"
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </motion.a>
              );
            })}
            <motion.button
              className="bg-rosso-salsa text-beige-chiaro px-6 py-2 rounded-lg text-lg font-medium 
                         hover:bg-rosso-mattone shadow-md transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
            >
              Acquista Ticket
            </motion.button>
          </div>

          <motion.button
            className="lg:hidden text-beige-chiaro p-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="lg:hidden bg-rosso-mattone/95 backdrop-blur-sm mt-4 rounded-lg overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2">
                {menuItems.map((item, index) => {
                  const itemId = item.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <motion.a
                      key={index}
                      href={`#${itemId}`}
                      className={`block text-beige-chiaro text-lg py-3 px-4 rounded-lg
                                ${activeSection === itemId ? 'bg-rosso-salsa/20 text-giallo-ocra' : ''}`}
                      variants={menuItemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.1 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMenuItemClick(itemId);
                      }}
                    >
                      {item}
                    </motion.a>
                  );
                })}
                <motion.button
                  className="w-full bg-giallo-ocra text-nero px-6 py-3 rounded-lg text-lg font-medium mt-4
                            hover:bg-beige-chiaro transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuItemClick('contatti');
                  }}
                >
                  Acquista Ticket
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;