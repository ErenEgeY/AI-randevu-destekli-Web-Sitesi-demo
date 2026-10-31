import { motion } from 'framer-motion';
import { Clock, BarChart3, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '7/24 Destek',
    description: 'Müşterileriniz her zaman yanıt alır, siz uyurken bile.',
  },
  {
    icon: BarChart3,
    title: 'Gelişmiş Analitik',
    description: 'Detaylı raporlar ve müşteri içgörüleri ile işinizi büyütün.',
  },
  {
    icon: Zap,
    title: 'Kolay Kurulum',
    description: '5 dakikada başlayın, kod bilgisi gerektirmez.',
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-mint/10 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Neden <span className="bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent">Chatpory</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            <span className="bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent font-bold">Yapay zeka entegrasyonlu sistemlerimizle</span> destek ve randevu yükünüzü çözüyor, 
            <span className="text-forest font-bold"> her dilde kusursuz müşteri deneyimi</span> sağlıyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-forest/20 to-sage/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white to-mint/30 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-forest to-sage rounded-2xl mb-6 shadow-lg"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
