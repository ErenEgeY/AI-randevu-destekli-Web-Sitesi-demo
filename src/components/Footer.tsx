import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    { name: 'Süreç', path: '#process' },
    { name: 'Hizmetler', path: '#services' },
    { name: 'Faydalar', path: '#benefits' },
    { name: 'Görüşler', path: '#testimonials' },
    { name: 'SSS', path: '#faq' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      const navbarHeight = 80;
      window.scrollTo({ top: offsetTop - navbarHeight, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/chatpory-logo.png"
                alt="Chatpory"
                className="h-18"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Yapay zeka destekli müşteri hizmetleri ile işletmenizi güçlendirin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">Hızlı Linkler</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => scrollToSection(e, link.path)}
                    className="text-gray-300 hover:text-sage transition-colors duration-200 inline-flex items-center group text-base font-medium"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                <span>info@chatpory.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                <span>+90 (212) 123 45 67</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Chatpory. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
