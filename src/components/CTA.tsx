import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';

const CTA = () => {
  const meetingLink = import.meta.env.VITE_CALENDLY_LINK || '#';

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest via-sage to-forest" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
ease: 'linear',
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Sparkles className="w-16 h-16 text-white/90 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            İşinizi Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ekibimizle kısa bir keşif görüşmesi planlayın ve yapay zekanın işinize nasıl değer katacağını keşfedin
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={meetingLink} target="_blank" rel="noopener noreferrer">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(255, 255, 255, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-forest hover:text-sage px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center space-x-3 group"
            >
              <Calendar className="w-6 h-6" />
              <span>Görüşme Planla</span>
            </motion.button>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-white/90 text-lg font-medium"
        >
          ✨ Tamamen Ücretsizdir
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
