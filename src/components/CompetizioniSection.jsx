import { motion } from 'framer-motion';
import { useState } from 'react';
const CompetizioniSection = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const competitions = [
    {
      title: "Campionato Pizze dell'Identità",
      description: "La competizione che premia il miglior sfincione tradizionale siciliano, giudicato da una giuria di esperti.",
      rules: [
        'Ingredienti autentici',
        'Rispetto della tradizione',
        'Creatività nella presentazione',
        'Profilo gustativo equilibrato'
      ],
      buttonText: "Vota",
      buttonAction: () => console.log("Vota clicked")
    },
    {
      title: "Sicily Young Bakery Competition",
      description: "Contest dedicato ai giovani talenti della panificazione siciliana, con focus su innovazione e creatività.",
      rules: [
        'Under 30',
        'Innovazione nelle tecniche',
        'Uso creativo degli ingredienti',
        'Sostenibilità e km0'
      ],
      buttonText: "Iscriviti",
      buttonAction: () => console.log("Iscriviti clicked")
    }
  ];

  // Gallery images (sostituisci con i tuoi percorsi immagine reali)
  const galleryImages = [
    '/assets/gallery/comp1.jpg',
    '/assets/gallery/comp2.jpg',
    '/assets/gallery/comp3.jpg',
    '/assets/gallery/comp4.jpg',
    '/assets/gallery/comp5.jpg',
    '/assets/gallery/comp6.jpg',
    '/assets/gallery/comp7.jpg',
    '/assets/gallery/comp8.jpg',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
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
        stiffness: 100,
        damping: 12
      }
    }
  };

  const CompetitionCard = ({ competition }) => (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500"
      whileHover={{ 
        y: -10,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      <motion.h3 
        className="font-sunshine text-4xl text-blu-notte mb-6"
        initial={{ x: -20 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {competition.title}
      </motion.h3>

      <motion.p 
        className="text-blu-notte text-lg mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {competition.description}
      </motion.p>

      <motion.ul className="mb-8 space-y-4">
        {competition.rules.map((rule, index) => (
          <motion.li 
            key={index}
            className="flex items-center"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.span 
              className="text-verde-salvia text-xl mr-3"
              whileHover={{ scale: 1.2, rotate: 360 }}
            >
              ✓
            </motion.span>
            <span className="text-blu-notte">{rule}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        className="bg-rosso-mattone text-beige-chiaro px-6 py-3 rounded-full text-lg font-semibold
                   hover:bg-opacity-90 shadow-md hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={competition.buttonAction}
      >
        {competition.buttonText}
      </motion.button>
    </motion.div>
  );

  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-beige-chiaro to-giallo-ocra/30"
      id="competizioni"
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
          Competizioni
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {competitions.map((competition, index) => (
            <CompetitionCard key={index} competition={competition} />
          ))}
        </motion.div>

        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="font-sunshine text-4xl text-blu-notte mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Galleria Edizioni Precedenti
          </motion.h3>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredImage(index)}
                onHoverEnd={() => setHoveredImage(null)}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-rosso-mattone to-giallo-ocra"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.9 }}
                />
                
                <motion.img
                  src={image}
                  alt={`Competizione ${index + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hoveredImage === index ? 1.1 : 1,
                    transition: { duration: 0.3 }
                  }}
                />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.span 
                    className="text-beige-chiaro text-lg font-semibold"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    Edizione {2023 - index}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default CompetizioniSection;
