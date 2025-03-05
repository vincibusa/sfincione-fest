import { motion } from 'framer-motion';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const ContattiSection = () => {
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    oggetto: '',
    messaggio: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleInputFocus = (fieldName) => setFocusedField(fieldName);
  const handleInputBlur = () => setFocusedField(null);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-24 relative overflow-hidden"
      id="contatti"
    >
      {/* Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-verde-salvia via-verde-salvia/90 to-verde-salvia/80 z-0" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#F5F5DC_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-sunshine text-5xl md:text-7xl text-beige-chiaro mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contattaci
          </motion.h2>
          <motion.p 
            className="text-beige-chiaro/90 text-lg md:text-xl font-gotham"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Siamo qui per rispondere a tutte le tue domande
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500"
          >
            <form className="space-y-6">
              {[
                { name: 'nome', label: 'Nome', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'oggetto', label: 'Oggetto', type: 'text' },
              ].map((field) => (
                <motion.div 
                  key={field.name}
                  initial={false}
                  animate={{ 
                    scale: focusedField === field.name ? 1.02 : 1,
                    y: focusedField === field.name ? -5 : 0
                  }}
                  className="relative"
                >
                  <input
                    type={field.type}
                    placeholder={field.label}
                    onFocus={() => handleInputFocus(field.name)}
                    onBlur={handleInputBlur}
                    className="w-full bg-white/5 border-2 border-beige-chiaro/20 rounded-xl px-6 py-4 text-beige-chiaro placeholder-beige-chiaro/50 focus:border-giallo-ocra focus:outline-none transition-all duration-300 font-gotham"
                  />
                  <motion.div
                    initial={false}
                    animate={{
                      width: focusedField === field.name ? '100%' : '0%'
                    }}
                    className="absolute bottom-0 left-0 h-0.5 bg-giallo-ocra transition-all duration-300"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={false}
                animate={{ 
                  scale: focusedField === 'messaggio' ? 1.02 : 1,
                  y: focusedField === 'messaggio' ? -5 : 0
                }}
              >
                <textarea
                  placeholder="Messaggio"
                  rows="4"
                  onFocus={() => handleInputFocus('messaggio')}
                  onBlur={handleInputBlur}
                  className="w-full bg-white/5 border-2 border-beige-chiaro/20 rounded-xl px-6 py-4 text-beige-chiaro placeholder-beige-chiaro/50 focus:border-giallo-ocra focus:outline-none transition-all duration-300 font-gotham"
                />
              </motion.div>

              <motion.div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-5 h-5 rounded border-beige-chiaro/20 bg-white/5 checked:bg-giallo-ocra focus:ring-giallo-ocra"
                />
                <label htmlFor="privacy" className="text-beige-chiaro/90 text-sm font-gotham">
                  Accetto la privacy policy
                </label>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-rosso-mattone hover:bg-rosso-mattone/90 text-beige-chiaro font-gotham py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-2xl"
              >
                Invia Messaggio
              </motion.button>
            </form>
          </motion.div>

          {/* Info Card */}
          <motion.div
            variants={cardVariants}
            className="space-y-8"
          >
            {/* Contact Info */}
            <motion.div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500">
              <h3 className="text-2xl font-sunshine text-beige-chiaro mb-6">Informazioni di Contatto</h3>
              
              {[
                { icon: "📧", title: "Email", content: "info@sfincione-fest.it" },
                { icon: "📞", title: "Telefono", content: "+39 123 456 7890" },
                { icon: "📍", title: "Indirizzo", content: "Piazza Municipio, 90011 Bagheria (PA)" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 mb-6 group"
                >
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-beige-chiaro font-gotham">{item.title}</h4>
                    <p className="text-beige-chiaro/80">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-500">
              <h3 className="text-2xl font-sunshine text-beige-chiaro mb-6">Social Media</h3>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="bg-white/5 p-4 rounded-xl text-beige-chiaro hover:bg-giallo-ocra/20 transition-all duration-300"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div 
              variants={cardVariants}
              className="rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <iframe
                title="Mappa di Bagheria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.508937310558!2d13.327551515495135!3d38.10563307967109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1318ef88e6f1a5f7%3A0x25c2c2c2c2c2c2c2!2sBagheria%20PA!5e0!3m2!1sit!2sit!4v1580000000000!5m2!1sit!2sit"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContattiSection;