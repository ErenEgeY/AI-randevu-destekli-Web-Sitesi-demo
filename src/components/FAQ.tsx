import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Chatpory nedir, nasıl çalışır?',
    answer: 'Chatpory, yapay zeka destekli müşteri hizmetleri chatbot platformudur. İşletmenizin verilerini öğrenerek müşterilerinize 7/24 otomatik destek sağlar. Kurulum sonrası yapay zeka, sık sorulan soruları yanıtlar, randevu alır ve ihtiyaç durumunda insan temsilcilere yönlendirir.',
  },
  {
    question: 'Kurulum ne kadar sürer?',
    answer: 'Chatpory kurulumu oldukça hızlıdır! Basit entegrasyonlar 5-10 dakika içinde tamamlanır. Özel yapılandırmalar ve eğitim gerektiren projeler için 1-3 iş günü içinde sisteminizi tamamen hazır hale getiririz.',
  },
  {
    question: 'Hangi platformları destekliyorsunuz?',
    answer: 'Chatpory, web siteniz, WhatsApp, Facebook Messenger, Instagram, Telegram ve özel mobil uygulamalarınız ile entegre çalışabilir. Ayrıca CRM sistemlerinizle (Salesforce, HubSpot vs.) de  kolayca bağlantı kurabilirsiniz.',
  },
  {
    question: 'Fiyatlandırma nasıl çalışıyor?',
    answer: 'Esnek fiyatlandırma seçeneklerimiz var. Küçük işletmeler için başlangıç paketlerimiz aylık 299 TL\'den başlar. Büyük ölçekli projeler için özel fiyatlandırma yapıyoruz. İlk 14 gün tamamen ücretsiz deneyebilirsiniz, kredi kartı gerekmez.',
  },
  {
    question: 'Teknik bilgi gerekir mi?',
    answer: 'Hayır, hiçbir teknik bilgiye ihtiyacınız yok! Chatpory\'yi kullanmak için sadece birkaç tıklama yeterli. Sürükle-bırak arayüzümüz sayesinde chatbotunuzu kolayca kişiselleştirebilirsiniz. Kurulum için teknik destek ekibimiz size yardımcı olur.',
  },
  {
    question: 'Kurulum sonrası destek sağlıyor musunuz?',
    answer: 'Kesinlikle! Tüm müşterilerimize 7/24 teknik destek sağlıyoruz. Email, canlı chat ve telefon ile bize ulaşabilirsiniz. Ayrıca düzenli güncellemeler, eğitim videoları ve dokümantasyon ile sürekli yanınızdayız.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 bg-gradient-to-b from-mint/20 via-white to-cream/30 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-sage/20 to-mint/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-forest/10 to-sage/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-forest to-sage text-white px-6 py-2 rounded-full text-sm font-bold">
              Sık Sorulan Sorular
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="text-xl text-gray-600">
            Chatpory hakkında merak edilenlerin cevapları
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-forest to-sage rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"
              />

              <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-mint/10 hover:to-transparent transition-all duration-200 group"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8 group-hover:text-forest transition-colors">
                    {faq.question}
                  </span>
                  
                  {/* Animated Icon Container */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 relative"
                  >
                    <motion.div
                      className="absolute -inset-2 bg-gradient-to-r from-forest to-sage rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity"
                    />
                    <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index ? 'bg-gradient-to-r from-forest to-sage' : 'bg-gray-100 group-hover:bg-forest/10'
                    }`}>
                      <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-forest'}`} />
                    </div>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
