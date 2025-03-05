import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Array di immagini per il carosello
  const images = [
    '/path-to-image-1.jpg',
    '/path-to-image-2.jpg',
    '/path-to-image-3.jpg',
    '/path-to-image-4.jpg',
  ];

  // Testi corrispondenti per ogni slide
  const slideContent = [
    {
      title: "Sfincione Fest 2025",
      subtitle: "6-9 Novembre 2025, Bagheria",
      description: "La più grande celebrazione dello sfincione siciliano: quattro giorni di gastronomia, cultura e tradizione"
    },
    {
      title: "Tradizione Culinaria",
      subtitle: "Un viaggio nei sapori",
      description: "Scopri l'autentica ricetta dello sfincione tramandata di generazione in generazione"
    },
    {
      title: "Eventi & Workshop",
      subtitle: "Impara dai maestri",
      description: "Partecipa ai nostri workshop e scopri i segreti della preparazione dello sfincione"
    },
    {
      title: "Cultura & Divertimento",
      subtitle: "Non solo gastronomia",
      description: "Musica dal vivo, spettacoli e intrattenimento per tutta la famiglia"
    }
  ];

  // Funzioni per la navigazione
  const nextSlide = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  };

  // Funzione per la navigazione smooth scroll
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Autoplay per il carosello
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Varianti per le animazioni
  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0
      };
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0
      };
    }
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative h-screen overflow-hidden" id="home">
      {/* Carosello di immagini */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImageIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-black opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-rosso-mattone via-transparent to-nero opacity-70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Contenuto */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            key={currentImageIndex}
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="flex flex-col items-center"
          >
            <motion.h1
              className="font-sunshine text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-beige-chiaro mb-4"
            >
              {slideContent[currentImageIndex].title}
            </motion.h1>
            
            <motion.p
              className="text-beige-chiaro text-lg sm:text-xl md:text-2xl mb-6"
            >
              {slideContent[currentImageIndex].subtitle}
            </motion.p>

            <motion.p
              className="text-beige-chiaro text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8"
            >
              {slideContent[currentImageIndex].description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 px-4 w-full max-w-2xl mx-auto"
              variants={contentVariants}
            >
              <motion.a
                href="#contatti"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contatti');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-rosso-mattone text-beige-chiaro px-6 py-3 rounded-md transition-all duration-300 text-lg sm:text-xl hover:bg-rosso-salsa shadow-lg cursor-pointer text-center min-w-[200px]"
              >
                Acquista Ticket
              </motion.a>
              
              <motion.a
                href="#programma"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('programma');
                }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(242, 234, 218, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 border-2 border-beige-chiaro text-beige-chiaro px-6 py-3 rounded-md transition-all duration-300 text-lg sm:text-xl backdrop-blur-sm shadow-lg cursor-pointer text-center min-w-[200px]"
              >
                Scopri il Programma
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicatori del carosello migliorati */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 items-center bg-black/20 backdrop-blur-sm py-2 px-4 rounded-full">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all duration-300 focus:outline-none relative"
            aria-label={`Vai alla slide ${index + 1}`}
          >
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? "w-10 bg-beige-chiaro" 
                  : "w-3 bg-beige-chiaro/70"
              }`}
            />
          </button>
        ))}
        <div className="text-beige-chiaro text-xs font-light mx-2">
          {currentImageIndex + 1}/{images.length}
        </div>
      </div>

      {/* Frecce di navigazione moderne */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 sm:px-6 md:px-8 pointer-events-none z-40">
        <button
          className="h-12 w-12 rounded-full flex items-center justify-center bg-black/30 text-beige-chiaro backdrop-blur-sm shadow-lg pointer-events-auto border border-beige-chiaro/20 hover:bg-black/60 transition-all duration-300"
          onClick={prevSlide}
          aria-label="Precedente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          className="h-12 w-12 rounded-full flex items-center justify-center bg-black/30 text-beige-chiaro backdrop-blur-sm shadow-lg pointer-events-auto border border-beige-chiaro/20 hover:bg-black/60 transition-all duration-300"
          onClick={nextSlide}
          aria-label="Successiva"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;