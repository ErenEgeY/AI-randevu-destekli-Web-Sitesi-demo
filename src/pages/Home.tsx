import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import VideoDemo from '../components/VideoDemo';
import BenefitsGrid from '../components/BenefitsGrid';
import Features from '../components/Features';
import ProcessTimeline from '../components/ProcessTimeline';
import ServicesGrid from '../components/ServicesGrid';
import AboutSection from '../components/AboutSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

const Home = () => {
  // SEO-optimized section order:
  // 1. Hero (Hook + Primary CTA)
  // 2. Trust Bar (Social Proof - builds credibility immediately)
  // 3. Video Demo (Show, don't tell - visual proof)
  // 4. Benefits (Why choose us - address pain points)
  // 5. Features (What you get - detailed value prop)
  // 6. Process (How it works - reduce friction)
  // 7. Services (What we offer - service details)
  // 8. About (Who we are - build trust)
  // 9. Testimonials (Social proof - reinforce credibility)
  // 10. FAQ (Remove objections)
  // 11. CTA (Final conversion push)

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    },
  };

  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero - Primary Hook */}
      <Hero />
      
      {/* 2. Trust Bar - Immediate Social Proof */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={sectionVariants}
      >
        <TrustBar />
      </motion.div>

      {/* 3. Video Demo - Visual Explanation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <VideoDemo />
      </motion.div>

      {/* 4. Benefits - Why Choose Us */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <BenefitsGrid />
      </motion.div>

      {/* 5. Features - Detailed Value Proposition */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Features />
      </motion.div>

      {/* 6. Process - How It Works */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <ProcessTimeline />
      </motion.div>

      {/* 7. Services - What We Offer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <ServicesGrid />
      </motion.div>

      {/* 8. About - Who We Are */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>

      {/* 9. Testimonials - Customer Stories */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <TestimonialCarousel />
      </motion.div>

      {/* 10. FAQ - Address Objections */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <FAQ />
      </motion.div>

      {/* 11. Final CTA - Conversion */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <CTA />
      </motion.div>
    </div>
  );
};

export default Home;
