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
      backgroundColor: "rgba(255, 255, 255, 0)",
      color: "#1A1B41",
      borderBottom: "2px solid #CC3333"
    },
    active: {
      scale: 1.05,
      backgroundColor: "#CC3333",
      color: "#F5F5DC",
      borderBottom: "none"
    }
  };

  const eventListVariants = {
    enter: {
      opacity: 0,
      y: 20
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
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

        {/* Tabs container with horizontal scroll */}
        <div className="overflow-x-auto mb-12 -mx-4 px-4 md:px-0 md:mx-0">
        <motion.div 
            className="flex flex-nowrap md:flex-wrap justify-start md:justify-center min-w-max"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {days.map((day, index) => (
            <motion.button
              key={index}
                className={`
                  px-6 py-3 mx-2 rounded-lg text-lg font-medium 
                  transition-all shadow-sm whitespace-nowrap
                  first:ml-0 last:mr-0
                `}
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
      </div>

        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={eventListVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {events[activeTab].map((event, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md border border-rosso-salsa/10"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderColor: "rgba(204, 51, 51, 0.3)",
                  boxShadow: "0 10px 25px -5px rgba(204, 51, 51, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="text-rosso-salsa font-bold text-2xl mb-3">
                  {event.time}
                </div>
                <h3 className="font-sunshine text-3xl text-nero mb-3">
                  {event.title}
                </h3>
                <p className="text-nero/80 text-lg">
                  {event.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default ProgrammaSection;