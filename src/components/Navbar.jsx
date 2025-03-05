import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Funzione modificata per chiudere il menu senza interrompere la navigazione
  const handleMenuItemClick = () => {
    // Chiude il menu con un breve ritardo per consentire alla navigazione di avvenire
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 100);
  };

  const menuItems = [
    'Home', "L'Evento", 'Programma', 'Dove Mangiare', 
    'Competizioni', 'Media & Partner', 'Contatti', 'FAQ'
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-rosso-mattone py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-beige-chiaro font-sunshine text-2xl lg:text-3xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sfincione Fest
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-beige-chiaro hover:text-giallo-ocra transition-colors duration-300 text-lg"
                variants={menuItemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}

            <motion.button
              className="bg-rosso-mattone text-beige-chiaro px-6 py-2 rounded-lg text-lg font-medium hover:bg-rosso-salsa"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Acquista Ticket
            </motion.button>
          </div>

          <motion.button
            className="lg:hidden text-beige-chiaro p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              className="lg:hidden bg-rosso-mattone mt-4 rounded-lg overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-beige-chiaro hover:text-giallo-ocra transition-colors duration-300 text-lg py-2"
                    variants={menuItemVariants}
                    whileHover={{ x: 10 }}
                    onClick={handleMenuItemClick} // Chiude il menu quando viene cliccato un link
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button
                  className="w-full bg-verde-salvia text-beige-chiaro px-6 py-3 rounded-lg text-lg font-medium mt-6 hover:bg-giallo-ocra hover:text-nero"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleMenuItemClick} // Chiude il menu quando viene cliccato il bottone
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