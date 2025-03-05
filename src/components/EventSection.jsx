import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const EventSection = () => {
  // Refs per le animazioni in-view
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  // Controlli per elementi in viewport
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.5 });
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  // Funzione per la navigazione smooth scroll
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Varianti per le animazioni - più fluide e naturali
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.1, 0.25, 1] // Curve Bezier personalizzata per movimento più organico
      } 
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: "easeInOut"
      }
    }
  };

  // Timeline items
  const timelineItems = [
    { year: '2015', event: 'Prima edizione', description: 'Nasce la prima celebrazione dello Sfincione a Palermo' },
    { year: '2018', event: 'Evento internazionale', description: 'Lo Sfincione Festival attira visitatori da tutto il mondo' },
    { year: '2022', event: 'Record di visitatori', description: 'Oltre 5000 persone partecipano alla manifestazione' },
    { year: '2025', event: 'Decimo anniversario', description: 'Una celebrazione speciale per il decennale del festival' }
  ];

  return (
    <section className="py-20 bg-beige-chiaro relative overflow-hidden" id="l'evento">
      {/* Elementi decorativi con animazioni più fluide */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-verde-salvia opacity-10"
        animate={{
          scale: [1, 1.15, 1.05, 1.15, 1],
          rotate: [0, 8, 3, 10, 0],
          x: [0, 5, -3, 7, 0],
          y: [0, -5, 3, -7, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      />
      <motion.div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-giallo-ocra opacity-10"
        animate={{
          scale: [1, 1.2, 1.1, 1.25, 1],
          rotate: [0, -6, -2, -8, 0],
          x: [0, -7, 4, -10, 0],
          y: [0, 6, -2, 8, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          times: [0, 0.3, 0.5, 0.7, 1],
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          ref={titleRef}
          className="font-sunshine text-4xl md:text-6xl text-verde-salvia text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ 
            duration: 1.4, 
            ease: [0.22, 1, 0.36, 1], // Custom ease (cubic-bezier)
            opacity: { duration: 1.8 }
          }}
        >
          La Storia dello Sfincione
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Immagine con animazione */}
          <motion.div
            ref={imageRef}
            className="w-full md:w-1/2 h-80 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.34, 1.56, 0.64, 1], // Spring-like easing
              opacity: { duration: 1.5, ease: "easeInOut" }
            }}
          >
            <motion.div 
              className="w-full h-full bg-gradient-to-br from-giallo-ocra to-rosso-mattone rounded-lg"
              whileHover={{ 
                scale: 1.03, 
                backgroundPosition: ["0% 0%", "100% 100%"],
                filter: "brightness(1.05)"
              }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                backgroundPosition: { duration: 3, ease: "linear" }
              }}
            >
              {/* Qui potrai inserire un'immagine reale */}
            </motion.div>
          </motion.div>

          {/* Testo con animazione */}
          <motion.div
            ref={textRef}
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1], // Smooth ease out
              opacity: { duration: 1.3 },
              delay: 0.1 
            }}
          >
            <motion.h3 
              className="text-3xl font-medium text-verde-salvia mb-4"
              whileInView={{ 
                scale: [1, 1.015, 1.02, 1.015, 1],
                color: ["#5a7d66", "#6a8e77", "#5a7d66"]
              }}
              transition={{ 
                duration: 2.5, 
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
            >
              Una tradizione secolare
            </motion.h3>
            <motion.p className="text-blu-notte text-lg mb-4">
              Lo sfincione, dal latino "spongia" (spugna), è una specialità panificata tipica della cucina
              palermitana che rappresenta l'anima e la storia della Sicilia.
            </motion.p>
            <motion.p className="text-blu-notte text-lg mb-6">
              Nato come piatto povero e popolare, oggi lo sfincione è diventato un simbolo della gastronomia siciliana,
              apprezzato in tutto il mondo per il suo sapore autentico e la sua consistenza unica.
            </motion.p>
            <motion.a
              href="#programma"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('programma');
              }}
              className="bg-verde-salvia text-beige-chiaro px-6 py-3 rounded-lg font-medium shadow-md inline-block cursor-pointer"
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "#506d5b",
                boxShadow: "0 4px 12px rgba(80, 109, 91, 0.3)"
              }}
              whileTap={{ 
                scale: 0.97,
                backgroundColor: "#465e50" 
              }}
              transition={{ 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1],
                scale: { type: "spring", stiffness: 400, damping: 17 }
              }}
            >
              Scopri di più
            </motion.a>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div 
          ref={timelineRef}
          className="mt-24"
          initial="hidden"
          animate={isTimelineInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <motion.h3 
            className="text-3xl font-medium text-verde-salvia text-center mb-12"
            whileInView={{ 
              scale: [1, 1.02, 1.03, 1.02, 1],
              opacity: [0.9, 1, 1, 1, 0.9],
              y: [0, -2, -4, -2, 0]
            }}
            transition={{ 
              duration: 2.8, 
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
            }}
          >
            La nostra storia
          </motion.h3>

          <motion.div 
            className="relative border-l-2 border-verde-salvia ml-6 md:ml-0 md:mx-auto md:max-w-4xl md:flex md:flex-col"
            variants={staggerChildren}
          >
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index} 
                className={`mb-16 relative md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'}`}
                variants={fadeInUp}
              >
                {/* Dot aligned with the first line of text */}
                <motion.div 
                  className="absolute w-5 h-5 bg-verde-salvia rounded-full"
                  style={{ 
                    left: '-3px',
                    top: '6px',
                    [index % 2 === 0 ? 'md:left' : 'md:right']: '-12px',
                    transform: 'translateX(-50%)',
                    [index % 2 === 0 ? 'md:transform' : 'md:transform']: index % 2 === 0 ? 'translateX(-50%)' : 'translateX(50%)'
                  }}
                  whileInView={{ 
                    scale: [1, 1.3, 1.4, 1.2, 1.3, 1],
                    boxShadow: [
                      "0 0 0 rgba(90, 125, 102, 0)",
                      "0 0 8px rgba(90, 125, 102, 0.5)",
                      "0 0 0 rgba(90, 125, 102, 0)"
                    ],
                    backgroundColor: [
                      "#5a7d66", 
                      "#73967f", 
                      "#8fb69b", 
                      "#73967f", 
                      "#5a7d66"
                    ]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    delay: index * 0.1
                  }}
                />
                
                <div className="pl-6 md:pl-0">
                  <h4 className="font-bold text-verde-salvia text-xl mb-2">{item.year}</h4>
                  <h5 className="font-medium text-blu-notte text-lg mb-1">{item.event}</h5>
                  <p className="text-blu-notte">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;