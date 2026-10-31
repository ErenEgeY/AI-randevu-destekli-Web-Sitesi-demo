import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, DollarSign, Clock, Smile, Settings } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Artan Verimlilik',
    description: 'Süreçlerinizi otomasyonla hızlandırır, zaman kazandırırız.',
  },
  {
    icon: DollarSign,
    title: 'Düşük Maliyet',
    description: 'Manuel işi azaltıp operasyon maliyetlerinizi düşürürüz.',
  },
  {
    icon: Smile,
    title: 'Müşteri Memnuniyeti',
    description: 'Müşterilerinize her kanalda daha kişisel deneyimler sunarsınız.',
  },
  {
    icon: Clock,
    title: 'Ölçeklenebilirlik',
    description: 'Büyüyen iş hacmine ek ekip kurmadan uyum sağlarsınız.',
  },
  {
    icon: CheckCircle,
    title: 'Hızlı Karar Alma',
    description: 'Verilerinizden aksiyon alınabilir içgörüler üretiriz.',
  },
  {
    icon: Settings,
    title: 'Uyumlu Çözümler',
    description: 'Değişen ihtiyaçlara göre otomasyonlarınızı kolayca güncelleriz.',
  },
];

const BenefitsGrid = () => {
  return (
    <section id="benefits" className="py-24 px-4 bg-gradient-to-b from-white via-cream/30 to-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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
            backgroundImage: `radial-gradient(circle, #2E8B57 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Yapay Zeka{' '}
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              Avantajını
            </motion.span>{' '}
            Yaşayın
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chatpory ile çalıştığınızda otomasyonların işinize kattığı temel kazanımlar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ 
                y: -8,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-forest to-sage rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 bg-gradient-to-br from-forest to-sage rounded-xl flex items-center justify-center mb-5 group-hover:shadow-lg transition-shadow"
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </motion.div>

                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-forest transition-colors"
                >
                  {benefit.title}
                </motion.h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Corner Accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="absolute top-4 right-4 w-2 h-2 bg-sage rounded-full group-hover:scale-150 transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
