import { motion } from 'framer-motion';
import { Users, Target, Rocket, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      {/* Hero Section */}
      <section className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Hakkımızda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          Chatpory olarak, müşteri hizmetlerini yapay zeka ile dönüştürerek
          işletmelerin müşteri memnuniyetini artırmalarına yardımcı oluyoruz.
        </motion.p>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 max-w-6xl mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vizyonumuz
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              2024 yılında kurulan Chatpory, müşteri deneyimini merkeze alarak
              yapay zeka destekli chatbot çözümleri sunmaktadır.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Amacımız, her büyüklükteki işletmenin 7/24 erişilebilir, hızlı ve
              etkili müşteri hizmeti sunmasını sağlamaktır.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-sage/20 to-forest/20 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
            <p className="text-gray-600 leading-relaxed">
              Türkiye'deki işletmelere en gelişmiş yapay zeka teknolojilerini
              erişilebilir kılmak ve müşteri hizmetlerini otomatikleştirerek
              verimliliği artırmak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Değerlerimiz
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Users,
              title: 'Müşteri Odaklılık',
              desc: 'Her zaman müşteri memnuniyeti önceliğimizdir'
            },
            {
              icon: Target,
              title: 'İnovasyon',
              desc: 'Sürekli gelişim ve yenilikçi çözümler'
            },
            {
              icon: Rocket,
              title: 'Hız',
              desc: 'Hızlı kurulum ve anında sonuçlar'
            },
            {
              icon: Award,
              title: 'Kalite',
              desc: 'Yüksek kaliteli hizmet standardı'
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="bg-forest text-white w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
