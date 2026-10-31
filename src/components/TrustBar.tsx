import { motion } from 'framer-motion';
import { Star, Shield, Users, TrendingUp } from 'lucide-react';

const TrustBar = () => {
  const stats = [
    { icon: Users, value: '100+', label: 'Mutlu Müşteri' },
    { icon: Star, value: '4.9/5', label: 'Müşteri Puanı' },
    { icon: Shield, value: '%99.9', label: 'Uptime Garantisi' },
    { icon: TrendingUp, value: '%40', label: 'Verimlilik Artışı' },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-forest via-sage to-forest relative overflow-hidden">
      {/* Animated Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 20px)',
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mb-3"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-3xl md:text-4xl font-black text-white mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/90 text-sm font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
