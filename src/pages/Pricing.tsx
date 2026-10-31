import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Başlangıç',
    price: '₺299',
    period: '/ay',
    description: 'Küçük işletmeler için ideal',
    features: [
      { text: '1.000 konuşma/ay', included: true },
      { text: 'Temel analitik', included: true },
      { text: '1 chatbot', included: true },
      { text: 'E-posta desteği', included: true },
      { text: 'Çoklu platform entegrasyonu', included: false },
      { text: 'Özel AI eğitimi', included: false },
      { text: 'Öncelikli destek', included: false },
    ],
    highlighted: false
  },
  {
    name: 'Profesyonel',
    price: '₺799',
    period: '/ay',
    description: 'Büyüyen işletmeler için',
    features: [
      { text: '10.000 konuşma/ay', included: true },
      { text: 'Gelişmiş analitik', included: true },
      { text: '5 chatbot', included: true },
      { text: 'Öncelikli destek', included: true },
      { text: 'Çoklu platform entegrasyonu', included: true },
      { text: 'Özel AI eğitimi', included: true },
      { text: 'API erişimi', included: false },
    ],
    highlighted: true
  },
  {
    name: 'Kurumsal',
    price: 'Özel',
    period: '',
    description: 'Büyük ölçekli işletmeler için',
    features: [
      { text: 'Sınırsız konuşma', included: true },
      { text: 'Kurumsal analitik', included: true },
      { text: 'Sınırsız chatbot', included: true },
      { text: '7/24 destek', included: true },
      { text: 'Tüm platform entegrasyonları', included: true },
      { text: 'Özel AI eğitimi', included: true },
      { text: 'API erişimi', included: true },
    ],
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-12">
      <section className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fiyatlandırma
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            İhtiyaçlarınıza uygun planı seçin. Tüm planlar 14 gün ücretsiz deneme ile gelir.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.highlighted ? 'ring-4 ring-forest scale-105' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="bg-forest text-white text-center py-2 font-semibold text-sm">
                  En Popüler
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-forest text-white hover:bg-sage shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.price === 'Özel' ? 'İletişime Geçin' : 'Başlayın'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Sık Sorulan Sorular
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Ücretsiz deneme süresi boyunca kredi kartı bilgisi gerekli mi?',
                a: 'Hayır, 14 günlük ücretsiz deneme için kredi kartı bilgisi gerekmez.'
              },
              {
                q: 'İstediğim zaman iptal edebilir miyim?',
                a: 'Evet, herhangi bir taahhüt olmadan istediğiniz zaman iptal edebilirsiniz.'
              },
              {
                q: 'Plan yükseltme nasıl yapılır?',
                a: 'Dashboard\'dan tek tıkla planınızı yükseltebilirsiniz. Fark ücreti hesaplanır.'
              },
              {
                q: 'Kurumsal plan için hangi ek özellikler var?',
                a: 'Kurumsal planda özel AI eğitimi, API erişimi ve özel destek ekibi bulunur.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Pricing;
