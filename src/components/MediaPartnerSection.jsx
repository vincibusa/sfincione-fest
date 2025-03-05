import { motion } from 'framer-motion';
import { useState } from 'react';
const MediaPartnerSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

    const sponsors = [
    { 
      name: 'Platinum', 
      partners: [
        { name: 'Sponsor 1', logo: '/assets/sponsors/sponsor1.png' },
        { name: 'Sponsor 2', logo: '/assets/sponsors/sponsor2.png' }
      ]
    },
    { 
      name: 'Gold', 
      partners: [
        { name: 'Sponsor 3', logo: '/assets/sponsors/sponsor3.png' },
        { name: 'Sponsor 4', logo: '/assets/sponsors/sponsor4.png' },
        { name: 'Sponsor 5', logo: '/assets/sponsors/sponsor5.png' }
      ]
    },
    { 
      name: 'Silver', 
      partners: [
        { name: 'Sponsor 6', logo: '/assets/sponsors/sponsor6.png' },
        { name: 'Sponsor 7', logo: '/assets/sponsors/sponsor7.png' },
        { name: 'Sponsor 8', logo: '/assets/sponsors/sponsor8.png' },
        { name: 'Sponsor 9', logo: '/assets/sponsors/sponsor9.png' }
      ]
    }
    ];
  
  const galleryImages = [
    { url: '/assets/gallery/img1.jpg', title: 'Evento 2023' },
    { url: '/assets/gallery/img2.jpg', title: 'Workshop Culinario' },
    { url: '/assets/gallery/img3.jpg', title: 'Premiazione' },
    { url: '/assets/gallery/img4.jpg', title: 'Degustazione' },
    { url: '/assets/gallery/img5.jpg', title: 'Show Cooking' },
    { url: '/assets/gallery/img6.jpg', title: 'Masterclass' },
    { url: '/assets/gallery/img7.jpg', title: 'Conferenza' },
    { url: '/assets/gallery/img8.jpg', title: 'Esposizione' },
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

  const ImageModal = ({ image, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        className="relative max-w-4xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={image.url} 
          alt={image.title}
          className="w-full h-auto rounded-xl"
        />
        <motion.h4 
          className="absolute bottom-4 left-4 text-white text-xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {image.title}
        </motion.h4>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.section 
      className="py-20 bg-white"
      id="media-partner"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-sunshine text-5xl md:text-6xl text-blu-notte text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Media & Partner
        </motion.h2>

        {/* Galleria Fotografica */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h3 
            className="font-sunshine text-4xl text-blu-notte text-center mb-8"
            variants={itemVariants}
          >
            Galleria Fotografica
          </motion.h3>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className={`relative rounded-xl overflow-hidden cursor-pointer
                  ${index % 3 === 0 ? 'col-span-2 row-span-2' : ''}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(image)}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blu-notte via-verde-salvia to-beige-chiaro"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.4 }}
                />
                
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover min-h-[200px]"
                />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.span 
                    className="text-white text-lg font-bold"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    {image.title}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Sponsors */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.h3 
            className="font-sunshine text-4xl text-blu-notte text-center mb-12"
            variants={itemVariants}
          >
            I Nostri Sponsor
          </motion.h3>

          {sponsors.map((tier, tierIndex) => (
            <motion.div 
              key={tierIndex} 
              className="mb-12"
              variants={containerVariants}
            >
              <motion.h4 
                className="text-2xl font-bold text-center mb-8"
                variants={itemVariants}
              >
                <motion.span 
                  className="inline-block px-6 py-2 bg-blu-notte text-beige-chiaro rounded-full shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  Sponsor {tier.name}
                </motion.span>
              </motion.h4>

              <motion.div 
                className="flex flex-wrap justify-center gap-8"
                variants={containerVariants}
              >
                {tier.partners.map((partner, partnerIndex) => (
                  <motion.div
                    key={partnerIndex}
                    className="w-40 h-40 bg-beige-chiaro bg-opacity-30 rounded-xl flex items-center justify-center shadow-md"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(245, 230, 211, 0.5)"
                    }}
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Press Kit */}
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.button
            className="bg-verde-salvia text-beige-chiaro px-8 py-4 rounded-full text-lg font-semibold shadow-lg
                     hover:bg-opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Scarica Press Kit
          </motion.button>
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </div>
    </motion.section>
  );
};
export default MediaPartnerSection;
