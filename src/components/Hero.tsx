import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';

const Hero = () => {
  const meetingLink = import.meta.env.VITE_CALENDLY_LINK || '#';

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-white to-mint/20 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-forest/20 to-sage/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-mint/30 to-sage/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-sage/20">
              <Sparkles className="w-5 h-5 text-forest" />
              <span className="text-gray-700 font-semibold">Tercih eden 100+ işletme</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight"
          >
            Müşteri Hizmetlerini{' '}
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="bg-gradient-to-r from-forest via-sage to-forest bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Yapay Zeka
            </motion.span>{' '}
            ile Dönüştürün
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            En kritik iş süreçlerinizi otomatikleştirmek için yapay zekânın gücünü kullanın; zamandan tasarruf edin, maliyetleri düşürün ve ekibinizin odağını gerçekten önemli işlere kaydırın
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a href={meetingLink} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(46, 139, 87, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-forest to-sage hover:from-sage hover:to-forest text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 inline-flex items-center space-x-3 group"
              >
                <span>Hemen Başlayın</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-600"
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm md:text-base font-medium">Kredi kartı gerekmez</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm md:text-base font-medium">5 dakikada kurulum</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span className="text-sm md:text-base font-medium">7/24 destek</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
