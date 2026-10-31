import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles, KeyRound } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-mint/30 to-sage/20 flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-forest/20 to-sage/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-mint/30 to-forest/20 rounded-full blur-3xl"
      />

      {/* Forgot Password Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/chatpory-logo.png"
              alt="Chatpory"
              className="h-20 mx-auto mb-6"
            />
          </Link>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-2 mb-2"
          >
            <KeyRound className="w-6 h-6 text-forest" />
            <h1 className="text-3xl font-bold text-gray-900">Şifremi Unuttum</h1>
          </motion.div>
          <p className="text-gray-600">
            {submitted 
              ? 'E-posta adresinizi kontrol edin' 
              : 'Şifre sıfırlama bağlantısı göndereceğiz'}
          </p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-posta Adresi
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:border-forest focus:ring-4 focus:ring-forest/10 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-forest to-sage text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Sıfırlama Bağlantısı Gönder</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 bg-gradient-to-br from-forest to-sage rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Mail className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-posta Gönderildi!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>{email}</strong> adresine şifre sıfırlama bağlantısı gönderdik. 
                Lütfen gelen kutunuzu kontrol edin.
              </p>
              <p className="text-sm text-gray-500">
                E-postayı görmüyor musunuz? Spam klasörünü kontrol edin.
              </p>
            </motion.div>
          )}

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <Link
              to="/login"
              className="text-forest hover:text-sage font-bold transition inline-flex items-center space-x-1"
            >
              <span>←</span>
              <span>Giriş sayfasına dön</span>
            </Link>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 font-medium transition inline-flex items-center space-x-1"
          >
            <span>←</span>
            <span>Ana sayfaya dön</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
