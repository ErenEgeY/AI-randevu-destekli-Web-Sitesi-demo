import { motion } from 'framer-motion';
import { MessageSquare, Phone, MessageCircle, BarChart } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'Müşteri Hizmetleri Chatbot',
    description: 'Mesajlaşma kanallarınız için chatbot kuruyoruz. Müşterileriniz 7/24 yanıt alırken, ekibiniz daha karmaşık taleplere odaklanır.',
  },
  {
    icon: Phone,
    title: 'Sesli Asistan',
    description: 'Telefon hatlarınız için sesli yapay zeka asistanları kuruyoruz. Randevu alımı ve yönlendirme işlemlerini otomatikleştirin.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Entegrasyonu',
    description: 'WhatsApp üzerinden müşterilerinizle etkileşim kurun. Sipariş takibi, destek ve bilgilendirme mesajlarını otomatik gönderin.',
  },
  {
    icon: BarChart,
    title: 'Analitik & Raporlama',
    description: 'Detaylı müşteri içgörüleri ve raporlarla işinizi büyütün. Yapay zeka destekli analizlerle kararlarınızı veriye dayandırın.',
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-32 h-32 bg-sage/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-mint/20 rounded-full blur-2xl"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Yeni Nesil Yapay Zeka Çözümleri
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına göre tasarlanan yapay zeka çözümleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Animated Gradient Border */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-forest via-sage to-mint rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ backgroundSize: '200% 200%' }}
              />

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative bg-gradient-to-br from-white to-mint/10 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-forest to-sage rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-forest transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Shine Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 0', '-200% 0'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
