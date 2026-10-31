import { motion } from 'framer-motion';
import { Clock, BarChart3, Zap, Users, Shield, Globe, Brain, Headphones } from 'lucide-react';

const allFeatures = [
  {
    icon: Clock,
    title: '7/24 Destek',
    description: 'Müşterileriniz her zaman yanıt alır. Gece yarısı dahi olsa, chatbot\'unuz aktif.',
    details: 'Tatil günleri, hafta sonları veya gece saatlerinde bile müşterileriniz anında yanıt alır.'
  },
  {
    icon: BarChart3,
    title: 'Gelişmiş Analitik',
    description: 'Detaylı raporlar ile müşteri davranışlarını anlayın, stratejinizi geliştirin.',
    details: 'Konuşma geçmişi, müşteri memnuniyeti, en çok sorulan sorular ve daha fazlası.'
  },
  {
    icon: Zap,
    title: 'Kolay Kurulum',
    description: '5 dakikada entegrasyon. Kodlama bilgisi gerektirmez, hemen başlayın.',
    details: 'Drag & drop arayüzü ile chatbot\'unuzu kolayca özelleştirin ve sitenize ekleyin.'
  },
  {
    icon: Brain,
    title: 'Yapay Zeka Öğrenme',
    description: 'Her konuşmadan öğrenen yapay zeka, zamanla daha iyi hale gelir.',
    details: 'GPT-4 destekli NLP teknolojisi ile doğal sohbet deneyimi.'
  },
  {
    icon: Users,
    title: 'Çoklu Dil Desteği',
    description: 'Türkçe, İngilizce ve 50+ dilde müşterileriniz ile iletişim kurun.',
    details: 'Otomatik dil algılama ile global müşteri kitlenize ulaşın.'
  },
  {
    icon: Shield,
    title: 'Güvenlik & Gizlilik',
    description: 'KVKK uyumlu, şifreli veri saklama ile müşteri bilgileri güvende.',
    details: 'SSL sertifikalı iletişim ve ISO 27001 sertifikalı sunucular.'
  },
  {
    icon: Globe,
    title: 'Çoklu Platform',
    description: 'Web, mobil, WhatsApp, Instagram, Facebook Messenger entegrasyonu.',
    details: 'Tek panelden tüm platformları yönetin.'
  },
  {
    icon: Headphones,
    title: 'Canlı Destek Geçişi',
    description: 'Chatbot çözemediği durumlarda otomatik canlı desteğe yönlendirir.',
    details: 'Sorunsuz insan-bot geçişi ile müşteri memnuniyetini artırın.'
  }
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      <section className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Özellikler
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chatpory, işletmenizi geleceğe taşıyacak güçlü özelliklerle donatılmıştır.
            İşte sunduğumuz tüm yetenekler.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {allFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-forest to-sage text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.details}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-forest to-sage p-12 rounded-2xl text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tüm Özellikleri Denemeye Hazır mısınız?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            14 gün ücretsiz deneme ile başlayın, kredi kartı gerekmez.
          </p>
          <button className="bg-white text-forest px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Ücretsiz Başlayın
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default FeaturesPage;
