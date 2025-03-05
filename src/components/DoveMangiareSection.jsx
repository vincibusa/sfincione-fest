import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Immagini degli stand (assicurati di avere queste immagini nella cartella assets)
const standImages = {
  'Antica Focacceria': '/assets/antica-focacceria.jpg',
  'Da Pippo': '/assets/da-pippo.jpg',
  'La Bella Sicilia': '/assets/bella-sicilia.jpg',
  'Forno Moderno': '/assets/forno-moderno.jpg',
  "Sapori dell'Isola": '/assets/sapori-isola.jpg',
  'Maestri Fornai': '/assets/maestri-fornai.jpg',
};

const DoveMangiareSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('Tutti');

  const stands = [
    { 
      name: 'Antica Focacceria', 
      desc: 'Sfincione palermitano tradizionale', 
      type: 'Tradizionale',
      address: 'Via Roma 123, Palermo',
      rating: 4.8
    },
    { 
      name: 'Da Pippo', 
      desc: 'Variante baariota con tuma e acciughe', 
      type: 'Gourmet',
      address: 'Corso Vittorio 45, Palermo',
      rating: 4.6
    },
    { 
      name: 'La Bella Sicilia', 
      desc: 'Street food e sfincione da passeggio', 
      type: 'Street Food',
      address: 'Piazza Marina 67, Palermo',
      rating: 4.7
    },
    { 
      name: 'Forno Moderno', 
      desc: 'Reinterpretazioni creative dello sfincione', 
      type: 'Innovativo',
      address: 'Via Maqueda 89, Palermo',
      rating: 4.5
    },
    { 
      name: "Sapori dell'Isola", 
      desc: 'Sfincione con ingredienti a km zero', 
      type: 'Bio',
      address: 'Via Libertà 234, Palermo',
      rating: 4.9
    },
    { 
      name: 'Maestri Fornai', 
      desc: 'Degustazione guidata di diverse tipologie', 
      type: 'Degustazione',
      address: 'Corso Calatafimi 56, Palermo',
      rating: 4.7
    }
  ];

  const filters = ['Tutti', 'Tradizionale', 'Gourmet', 'Street Food', 'Innovativo', 'Bio', 'Degustazione'];

  const filteredStands = selectedFilter === 'Tutti' 
    ? stands 
    : stands.filter(stand => stand.type === selectedFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const StandCard = ({ stand }) => (
    <motion.div
      layout
      variants={cardVariants}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      whileHover={{ 
        y: -10,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      <motion.div 
        className="relative h-56 overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rosso-mattone/60 to-giallo-ocra/60 z-10" />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${standImages[stand.name] || '/assets/default-stand.jpg'})`,
          }}
        />
      </motion.div>

      <motion.div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <motion.span 
            className="inline-block px-4 py-2 text-sm font-semibold bg-verde-salvia text-beige-chiaro rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            {stand.type}
          </motion.span>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-giallo-ocra">★</span>
            <span className="ml-1 text-blu-notte">{stand.rating}</span>
          </motion.div>
        </div>

        <motion.h3 
          className="font-sunshine text-3xl text-rosso-mattone mb-3"
          whileHover={{ x: 5 }}
        >
          {stand.name}
        </motion.h3>

        <motion.p 
          className="text-blu-notte text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
        >
          {stand.desc}
        </motion.p>

        <motion.p 
          className="text-sm text-blu-notte/70 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {stand.address}
        </motion.p>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.section 
      className="py-20 bg-beige-chiaro"
      id="dove-mangiare"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-sunshine text-5xl md:text-6xl text-rosso-mattone text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Scopri i sapori della Sicilia
        </motion.h2>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-all
                ${selectedFilter === filter 
                  ? 'bg-verde-salvia text-beige-chiaro shadow-lg scale-105' 
                  : 'bg-verde-salvia bg-opacity-20 text-verde-salvia hover:bg-opacity-30'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Stand Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredStands.map((stand) => (
              <StandCard key={stand.name} stand={stand} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Map using Google Maps iframe */}
        <motion.div 
          className="w-full h-96 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <iframe
            title="Mappa di Palermo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991452154!2d13.32912431633222!3d38.1156928852631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1318ef92a2e7a44b%3A0x1b65fc432ca99a4f!2sPalermo!5e0!3m2!1sit!2sit!4v1681921921920!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DoveMangiareSection;
