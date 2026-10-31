import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const meetingLink = import.meta.env.VITE_CALENDLY_LINK || '#';

  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.98)']
  );
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 1px 3px rgba(0,0,0,0.05)', '0 10px 40px rgba(0,0,0,0.1)']
  );

  const navLinks = [
    { name: 'Ana Sayfa', path: '', id: 'hero' },
    { name: 'Demo', path: 'demo', id: 'demo' },
    { name: 'Faydalar', path: 'benefits', id: 'benefits' },
    { name: 'Süreç', path: 'process', id: 'process' },
    { name: 'Hizmetler', path: 'services', id: 'services' },
    { name: 'SSS', path: 'faq', id: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (sectionId === '' || sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      const navbarHeight = 90;
      window.scrollTo({ top: offsetTop - navbarHeight, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        boxShadow: navShadow,
      }}
      className="fixed w-full top-0 z-50 backdrop-blur-2xl border-b border-gray-100/80"
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Left Side - LARGER */}
          <a 
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')} 
            className="flex items-center cursor-pointer relative group flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <img
                src="/chatpory-logo.png"
                alt="Chatpory"
                className="h-16 md:h-20 transition-all duration-300 group-hover:drop-shadow-lg"
              />
            </motion.div>
          </a>

          {/* Desktop Navigation - Center - TEXT ONLY with Equal Spacing */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-12">
            <div className="flex items-center gap-8 xl:gap-12">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={`#${link.path}`}
                      onClick={(e) => scrollToSection(e, link.id)}
                      className="relative group py-2"
                    >
                      <span className={`font-semibold text-[15px] transition-all duration-300 ${
                        isActive 
                          ? 'text-forest' 
                          : 'text-gray-700 group-hover:text-forest'
                      }`}>
                        {link.name}
                      </span>
                      
                      {/* Animated Underline */}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-forest to-sage"
                        initial={false}
                        animate={{
                          scaleX: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      />
                      
                      {/* Hover Underline */}
                      <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-sage/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        isActive ? 'hidden' : ''
                      }`}></span>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
            
          {/* CTA Button - Right Side - LARGER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="hidden lg:block flex-shrink-0"
          >
            <a 
              href={meetingLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative group overflow-hidden rounded-xl"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-forest to-sage" />
                
                {/* Animated Shine */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                  }}
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: 'easeInOut',
                  }}
                />
                
                <div className="relative px-8 py-3.5 text-white font-bold text-base flex items-center gap-2.5">
                  <Calendar className="w-5 h-5" />
                  <span>Görüşme Planla</span>
                </div>
              </motion.button>
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              
              return (
                <motion.a
                  key={link.name}
                  href={`#${link.path}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block px-5 py-3.5 rounded-lg font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'text-forest bg-gradient-to-r from-mint/40 to-sage/20' 
                      : 'text-gray-700 hover:text-forest hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </motion.a>
              );
            })}
            
            <a 
              href={meetingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block pt-2"
            >
              <motion.button 
                whileTap={{ scale: 0.98 }}
                className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-forest to-sage text-white px-5 py-4 font-bold flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Görüşme Planla</span>
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
