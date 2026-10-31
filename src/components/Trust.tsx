import { motion } from 'framer-motion';

const companies = [
  { name: 'TechCorp', width: 'w-32' },
  { name: 'StartupHub', width: 'w-36' },
  { name: 'InnovateCo', width: 'w-32' },
  { name: 'DigitalWave', width: 'w-40' },
  { name: 'CloudSync', width: 'w-32' },
];

const Trust = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-mint/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            500+ İşletme Tarafından Güvenilir
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`${company.width} h-12 bg-gray-200 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300`}
              >
                <span className="text-gray-600 font-bold text-sm">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
