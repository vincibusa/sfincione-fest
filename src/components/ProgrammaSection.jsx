import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProgrammaSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
    
    const days = ['6 Novembre', '7 Novembre', '8 Novembre', '9 Novembre'];
    const events = [
      [
        { time: '10:00', title: 'Apertura Fiera', desc: 'Cerimonia di inaugurazione con le autorità' },
        { time: '12:00', title: 'Show Cooking', desc: 'Preparazione dello sfincione tradizionale' },
        { time: '16:00', title: 'Storia dello Sfincione', desc: 'Conferenza con storici della gastronomia' },
        { time: '20:00', title: 'Cena di Gala', desc: 'Degustazione premium con chef stellati' }
      ],
      [
        { time: '10:00', title: 'Laboratori per Bambini', desc: 'Piccoli panificatori crescono' },
        { time: '14:00', title: 'Gara Amatoriale', desc: 'Sfida tra appassionati di cucina' },
        { time: '18:00', title: 'Wine Pairing', desc: 'Abbinamenti vino e sfincione' },
        { time: '21:00', title: 'Concerto Live', desc: 'Musica tradizionale siciliana' }
      ],
      [
        { time: '09:00', title: 'Competizione Professionale', desc: 'Sfida tra i migliori panificatori' },
        { time: '13:00', title: 'Street Food Tour', desc: 'Tour guidato tra gli stand gastronomici' },
        { time: '17:00', title: 'Masterclass', desc: 'Tecniche avanzate di panificazione' },
        { time: '20:00', title: 'Notte Bianca', desc: 'Festa nelle strade con degustazioni' }
      ],
      [
        { time: '10:00', title: 'Brunch Siciliano', desc: 'Colazione tradizionale con prodotti locali' },
        { time: '14:00', title: 'Premiazioni', desc: 'Cerimonia di premiazione delle competizioni' },
        { time: '17:00', title: 'Show Finale', desc: 'Spettacolo di chiusura con ospiti speciali' },
        { time: '19:00', title: 'Arrivederci', desc: 'Chiusura dell\'evento e saluti finali' }
      ]
    ];
  
  useEffect(() => {
    if (isInView) {
      // Animation effects when the section is in view
    }
  }, [isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const tabVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "transparent",
      color: "#1A1B41", // blu-notte color
      borderBottom: "2px solid #CC3333" // rosso-salsa color
    },
    active: {
      scale: 1.05,
      backgroundColor: "#CC3333", // rosso-salsa color
      color: "#F5F5DC", // beige-chiaro color
      borderBottom: "none"
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-16 bg-beige-chiaro bg-opacity-90 relative"
      id="programma"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Subtle decoration for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-b from-beige-chiaro via-beige-chiaro to-beige-chiaro/80 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="font-sunshine text-5xl md:text-6xl text-rosso-salsa text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Programma
        </motion.h2>

        {/* Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {days.map((day, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 mx-3 mb-3 rounded-lg text-lg font-medium transition-all shadow-sm`}
              variants={tabVariants}
              animate={activeTab === index ? "active" : "inactive"}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: activeTab === index ? "#CC3333" : "rgba(204, 51, 51, 0.1)" 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
            >
              {day}
            </motion.button>
          ))}
        </motion.div>

        {/* Event Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit={{ opacity: 0 }}
          >
            {events[activeTab].map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md border border-rosso-salsa/10"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderColor: "rgba(204, 51, 51, 0.3)",
                  boxShadow: "0 10px 25px -5px rgba(204, 51, 51, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div 
                  className="text-rosso-salsa font-bold text-2xl mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {event.time}
                </motion.div>
                <motion.h3 
                  className="font-sunshine text-3xl text-nero mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {event.title}
                </motion.h3>
                <motion.p 
                  className="text-nero/80 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {event.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default ProgrammaSection;