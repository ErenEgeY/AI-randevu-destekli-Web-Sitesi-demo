import { motion } from 'framer-motion';
import { Search, Palette, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Keşif & Analiz',
    description: 'İş süreçlerinizi derinlemesine inceliyoruz. Otomasyona uygun adımları tespit ediyor, ekibinizle görüşüyor ve yapay zekânın en büyük etkiyi yaratacağı noktaları netleştiriyoruz.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Tasarım & Kurulum',
    description: 'Size özel çözümleri tasarlayıp hayata geçiriyoruz. İş akışlarınıza sorunsuz uyum sağlayan arayüzler ve otomasyon senaryoları oluşturuyoruz.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Devreye Alma & Destek',
    description: 'Çözümleri işleyişinize entegre ediyor, ekibinize eğitim veriyor ve sorunsuz bir geçiş için yanınızda oluyoruz. Performansı izleyip iyileştirmeleri yapmaya devam ediyoruz.',
    color: 'from-forest to-sage',
  },
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="py-24 px-4 bg-gradient-to-br from-sage/10 via-mint/30 to-cream relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(46, 139, 87, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(138, 154, 91, 0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-forest to-sage text-white px-6 py-2 rounded-full text-sm font-bold">
              Sürecimiz
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fikirden canlı kullanıma kadar, 3 adımda işinize özel yapay zeka çözümü
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Animated Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-forest via-sage to-mint rounded-full origin-left"
          />

          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${step.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                />

                {/* Number Circle with Premium Effects */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`relative z-10 w-20 h-20 mx-auto mb-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-shadow`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                  
                  {/* Rotating Ring */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50"
                >
                  {/* Corner Decoration */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-3 h-3 bg-gradient-to-br ${step.color} rounded-full`}
                    />
                  </div>

                  <div className="text-7xl font-black text-gray-100 mb-2 group-hover:text-sage/20 transition-colors">
                    {step.number}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-forest group-hover:to-sage group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for connection hint */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute -right-8 top-1/2 -translate-y-1/2 text-sage/50 hidden xl:block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0">
                <motion.div
                  whileTap={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
              
              <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md group-hover:shadow-lg transition-shadow">
                <div className="text-4xl font-black text-gray-100 mb-1">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
