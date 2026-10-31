import { motion } from 'framer-motion';
import { Play, CheckCircle2, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const features = [
    'Kolay kurulum - 5 dakikada başlayın',
    '7/24 otomatik müşteri desteği',
    'Çoklu platform entegrasyonu',
  ];

  return (
    <section id="demo" className="py-24 px-4 bg-gradient-to-b from-white via-mint/10 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(46, 139, 87, 0.08) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-forest/10 to-sage/10 px-6 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-forest" />
            <span className="text-forest font-bold text-sm">Nasıl Çalışır?</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Chatpory'yi{' '}
            <span className="bg-gradient-to-r from-forest to-sage bg-clip-text text-transparent">
              2 Dakikada
            </span>{' '}
            Keşfedin
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kurulum sürecini ve platform özelliklerini videomuzda inceleyin
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Video Container with Shadow */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-forest via-sage to-forest rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                style={{ backgroundSize: '200% 200%' }}
              />

              <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                {/* Simple HTML5 Video */}
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/We Are The People  Slowed + Best Part (tiktok version).mp4" type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>

                {/* Custom Play Button Overlay - Only when not playing */}
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm cursor-pointer"
                    onClick={handlePlayPause}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative"
                    >
                      {/* Pulsing Ring */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-white rounded-full"
                      />
                      
                      {/* Play Button */}
                      <div className="relative bg-white rounded-full p-8 shadow-2xl">
                        <Play className="w-16 h-16 text-forest fill-forest ml-2" />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Video Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-8 mt-6"
            >
              <div className="text-center">
                <div className="text-3xl font-black text-forest">2 dk</div>
                <div className="text-sm text-gray-600">Video Süresi</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-3xl font-black text-forest">5 dk</div>
                <div className="text-sm text-gray-600">Kurulum</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Videoda Neler Öğreneceksiniz?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Chatpory'nin kurulumu ve temel özelliklerini adım adım inceleyin. 
                Platform üzerinden nasıl chatbot oluşturacağınızı ve müşterilerinize 
                nasıl hizmet vereceğinizi öğrenin.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-forest to-sage rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <a href={import.meta.env.VITE_CALENDLY_LINK || '#'} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto bg-gradient-to-r from-forest to-sage text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Hemen Başlayın
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
