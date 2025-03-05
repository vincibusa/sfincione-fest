import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FaqSection = () => {
    const [activeItem, setActiveItem] = useState(null);
  
    const faqs = [
      { 
        q: 'Quanto costa il biglietto per l\'evento?', 
      a: "I biglietti giornalieri costano €15, mentre l'abbonamento per tutti e quattro i giorni costa €45. I bambini sotto i 12 anni entrano gratis.",
      icon: '🎟️'
      },
      { 
        q: 'Come posso raggiungere Bagheria?', 
      a: "Bagheria è facilmente raggiungibile in treno o in auto. L'autostrada A19 collega Palermo a Catania, con uscita a Bagheria.",
      icon: '🚗'
      },
      { 
        q: 'Posso portare il mio sfincione?', 
      a: "Gli sfincioni fatti in casa non sono ammessi all'interno dell'area fiera per ragioni igieniche e di sicurezza.",
      icon: '🥖'
      },
      { 
      q: "C'è un'area ristoro all'interno?",
      a: "Sì, ci sono diversi stand gastronomici che offrono sfincioni tradizionali e varianti creative, oltre a bevande e dessert.",
      icon: '🍽️'
      },
      { 
        q: 'Posso partecipare alle competizioni?', 
      a: 'Le competizioni sono aperte a tutti i panificatori, professionisti e appassionati, che possono iscriversi online sul nostro sito ufficiale.',
      icon: '🏆'
      },
      { 
      q: "C'è un'area giochi per bambini?",
      a: "Sì, è prevista un'area dedicata ai più piccoli con laboratori, giochi e attività didattiche per scoprire il mondo della panificazione.",
      icon: '👶'
      }
    ];
  
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const contentVariants = {
    hidden: { 
      height: 0,
      opacity: 0 
    },
    visible: { 
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          type: "spring",
          stiffness: 100,
          damping: 20
        },
        opacity: {
          duration: 0.2
        }
      }
    }
  };

  return (
    <motion.section
      className="py-20 bg-beige-chiaro"
      id="faq"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="font-sunshine text-5xl md:text-6xl text-rosso-mattone text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Domande Frequenti
        </motion.h2>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                onClick={() => setActiveItem(activeItem === index ? null : index)}
          >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{faq.icon}</span>
                  <span className="font-bold text-blu-notte text-xl">
                    {faq.q}
                  </span>
      </div>
                <motion.span
                  animate={{ rotate: activeItem === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-verde-salvia text-2xl"
                >
                  ⌄
                </motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {activeItem === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-6 pb-4 text-blu-notte/80 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {faq.a}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-blu-notte mb-4">
            Non hai trovato la risposta che cercavi?
          </p>
          <motion.button
            className="bg-verde-salvia text-beige-chiaro px-6 py-3 rounded-full font-semibold
                     hover:bg-opacity-90 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contattaci
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
