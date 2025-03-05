import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PresentersSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const presenters = [
    {
      name: 'SASA SALVAGGIO',
      description: 'Comico, conduttore e attore televisivo siciliano, noto per il suo umorismo.',
      imagePlaceholder: '/api/placeholder/300/400'
    },
    {
      name: 'NADIA LA MALFA',
      description: 'Giornalista sportiva e comunicatrice istituzionale palermitana.',
      imagePlaceholder: '/api/placeholder/300/400'
    },
    {
      name: 'MASSIMO MINUTELLA',
      description: 'Conduttore di Casa Minutella, un talk show basato principalmente su problematiche locali.',
      imagePlaceholder: '/api/placeholder/300/400'
    },
    {
      name: 'BARBARA POLITI',
      description: 'Giornalista e conduttrice televisiva. Ha lavorato per Gazzetta del Mezzogiorno, Camerro Rosso e Rai.',
      imagePlaceholder: '/api/placeholder/300/400'
    }
  ];

  const liveShows = [
    {
      name: 'CUGINI DI CAMPAGNA',
      description: 'Gruppo musicale',
      imagePlaceholder: '/api/placeholder/400/300'
    },
    {
      name: 'I QUARANTA CHE BALLANO I 90',
      description: 'Spettacolo musicale',
      imagePlaceholder: '/api/placeholder/400/300'
    },
    {
      name: 'SUGARTREE',
      description: 'Gruppo musicale',
      imagePlaceholder: '/api/placeholder/400/300'
    }
  ];

  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-beige-chiaro to-white min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-sunshine font-bold text-rosso-mattone mb-4 relative inline-block">
            I Presentatori di questa Edizione
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rosso-mattone via-marroncino to-rosso-salsa"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </h1>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-20"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {presenters.map((presenter, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className="group relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
                <img
                  src={presenter.imagePlaceholder}
                  alt={presenter.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="text-2xl font-gotham font-bold text-white mb-2">
                      {presenter.name}
                    </h2>
                    <p className="text-white/90 text-sm">
                      {presenter.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-sunshine font-bold text-rosso-salsa mb-8">
            Live Show 2024
            <motion.div 
              className="h-1 bg-rosso-salsa mx-auto mt-2 w-24"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {liveShows.map((show, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className="group relative h-full"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white h-full flex flex-col">
                <div className="relative h-[400px]">
                  <img
                    src={show.imagePlaceholder}
                    alt={show.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rosso-mattone/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 bg-white flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-gotham font-bold text-rosso-salsa mb-4 group-hover:text-rosso-mattone transition-colors duration-300">
                      {show.name}
                    </h2>
                    <p className="text-nero/80 mb-4">{show.description}</p>
                  </div>
                  <motion.div 
                    className="w-20 h-1 bg-marroncino"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PresentersSection;