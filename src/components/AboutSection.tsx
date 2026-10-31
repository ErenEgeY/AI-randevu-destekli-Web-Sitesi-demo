import { motion } from 'framer-motion';
import { Users, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-white to-mint/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Biz <span className="bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent">Kimiz?</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Chatpory</strong>, işletmelerin müşteri hizmetlerini yapay zeka ile dönüştüren yenilikçi bir teknoloji platformudur.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Misyonumuz, her büyüklükteki işletmenin 7/24 kusursuz müşteri deneyimi sunmasını sağlamak. Manuel iş yükünü azaltırken, müşteri memnuniyetini ve verimliliği maksimize ediyoruz.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Yapay zeka entegrasyonlu sistemlerimizle destek ve randevu yükünüzü çözüyor, <strong>her dilde kusursuz müşteri deneyimi</strong> sağlıyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-forest"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-forest to-sage rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">100+ İşletme</h3>
                  <p className="text-gray-600">Türkiye'nin her yerinden işletmeler Chatpory'ye güveniyor</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-sage"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sage to-mint rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">%98 Müşteri Memnuniyeti</h3>
                  <p className="text-gray-600">Müşterilerimiz yapay zeka destekli çözümlerimizden çok memnun</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-mint"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-mint to-forest rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5 Dakikada Kurulum</h3>
                  <p className="text-gray-600">Hızlı ve kolay kurulum ile aynı gün hizmete başlayın</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
