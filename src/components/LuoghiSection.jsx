import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LuoghiSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4
      }
    }
  };

  const titleGradientVariants = {
    hidden: { backgroundPosition: "0%" },
    visible: {
      backgroundPosition: ["0%", "100%"],
      transition: { 
        duration: 8, 
        repeat: Infinity, 
        repeatType: "reverse" 
      }
    }
  };

  const editionTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.5 }
    }
  };

  const dividerVariants = {
    hidden: { width: 0 },
    visible: { 
      width: 96,
      transition: { duration: 1, delay: 0.8 }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 1 }
    }
  };

  const getCardVariants = (index) => {
    const baseTransition = {
      duration: 0.8,
      ease: "easeOut"
    };

    switch (index % 3) {
      case 0:
        return {
          hidden: { 
            x: -100,
            opacity: 0,
            rotate: -10
          },
          visible: {
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
              ...baseTransition,
              type: "spring",
              stiffness: 100,
              damping: 15
            }
          }
        };
      case 1:
        return {
          hidden: { 
            y: 100,
            opacity: 0,
            scale: 0.8
          },
          visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              ...baseTransition,
              type: "spring",
              stiffness: 100,
              damping: 15
            }
          }
        };
      case 2:
        return {
          hidden: { 
            x: 100,
            opacity: 0,
            rotate: 10
          },
          visible: {
            x: 0,
            opacity: 1,
            rotate: 0,
            transition: {
              ...baseTransition,
              type: "spring",
              stiffness: 100,
              damping: 15
            }
          }
        };
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const footerLineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: 64,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const locations = [
    {
      title: "SPACE ARENA",
      description: "Ampio spazio dedicato al gruppo Arena e alla sponsorizzazione di grandi marchi, sottolineando il ruolo centrale dell'azienda nel supporto e nella valorizzazione di brand di prestigio.",
      icon: "🏟️"
    },
    {
      title: "FOOD VILLAGE",
      description: "È un villaggio gastronomico ed espositivo dedicato ai migliori prodotti ed eccellenze siciliane. Due padiglioni principali saranno dedicati alla pasticceria siciliana e alla birra artigianale Made in Sicily.",
      icon: "🍽️"
    },
    {
      title: "SFINCIONE TASTE",
      description: "È il palcoscenico centrale dello Sfincione Fest dove grandi chef testimoni, pizzaioli, panificatori, personaggi tv e opinion leader presentano o raccontano ricette che il pubblico può degustare gratuitamente.",
      icon: "👨‍🍳"
    },
    {
      title: "LIVE ROOM",
      description: "Un'area dedicata e riservata alla creazione di contenuti, pensata appositamente per influencer e sponsor, offerto spazi attrezzati e soluzioni innovative.",
      icon: "🎥"
    },
    {
      title: "SFINCIONE TASTING BOX",
      description: "Una biglietteria dedicata dove poter gustare sfincioni prelibati accompagnati da vino o acqua e, per concludere, caffè o amaro, il tutto con un unico ticket.",
      icon: "🎫"
    },
    {
      title: "SFINCIONE LIVE SHOW",
      description: "Si tratta dell'area dedicata agli spettacoli di cabaret e concerti di musica in concomitanza all'evento.",
      icon: "🎭"
    },
    {
      title: "LE CASE DELLO SFINCIONE",
      description: "Sono i punti dove poter gustare e acquistare le diverse tipologie di sfincione o pietanze tipiche siciliane e vari comuni partecipanti.",
      icon: "🏠"
    },
    {
      title: "LOUNGE VIP",
      description: "Uno spazio dedicato agli sponsor cui si potranno provare cooking speciali o incontrare i personaggi protagonisti dell'edizione.",
      icon: "⭐"
    }
  ];

  return (
    <div 
      id="luoghi"
      className="min-h-screen bg-gradient-to-br from-bianco via-beige-chiaro to-marroncino/20 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div 
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-sunshine font-bold bg-gradient-to-r from-rosso-mattone to-rosso-salsa text-transparent bg-clip-text mb-4"
            variants={titleGradientVariants}
          >
            SFINCIONE FEST
          </motion.h1>
          <motion.p 
            className="text-2xl font-gotham text-nero/80 mb-2"
            variants={editionTextVariants}
          >
            8^ EDIZIONE
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-rosso-mattone mx-auto mb-6"
            variants={dividerVariants}
          />
          <motion.p 
            className="text-xl font-gotham text-nero/70 max-w-2xl mx-auto"
            variants={descriptionVariants}
          >
            L'EVENTO PIÙ GOLOSO DELL'ANNO tra divertimento, spettacolo e cooking
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {locations.map((location, index) => (
            <div key={index} className="h-[220px]">
              <motion.div
                variants={getCardVariants(index)}
                whileHover={{ 
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-bianco rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <motion.div 
                      className="text-3xl"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {location.icon}
                    </motion.div>
                    <motion.h2 
                      className="text-xl font-gotham font-bold text-rosso-salsa"
                      whileHover={{ 
                        x: 10,
                        transition: { type: "spring", stiffness: 200 }
                      }}
                    >
                      {location.title}
                    </motion.h2>
                  </div>
                  
                  <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                    <p className="font-gotham text-nero/70 leading-relaxed text-sm">
                      {location.description}
                    </p>
                  </div>
                </div>
                
                <motion.div 
                  className="h-1 bg-gradient-to-r from-rosso-mattone to-rosso-salsa mt-auto"
                  whileHover={{ 
                    scaleX: 1.1,
                    transition: { type: "spring", stiffness: 200 }
                  }}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={footerVariants}
          className="text-center mt-16"
        >
          <motion.h3 
            className="text-3xl font-sunshine font-semibold text-rosso-salsa"
            whileHover={{ 
              scale: 1.1,
              transition: { type: "spring", stiffness: 200 }
            }}
          >
            I LUOGHI DELLO SFINCIONE FEST
          </motion.h3>
          <motion.div 
            className="w-16 h-1 bg-rosso-salsa mx-auto mt-4"
            variants={footerLineVariants}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const styles = `
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(204, 51, 51, 0.3) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(204, 51, 51, 0.3);
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(204, 51, 51, 0.5);
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default LuoghiSection;