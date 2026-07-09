import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Landing() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <>
      <Helmet>
        <title>BinaryWebEngine | Secure Infrastructure | Advanced Security Operations Dashboard</title>
        <meta name="description" content="BinaryWebEngine is the foundational layer for secure operations. An enterprise-grade security operations dashboard with advanced threat intelligence and Cloudflare Worker integration." />
        <meta property="og:title" content="BinaryWebEngine | Secure Infrastructure" />
        <meta property="og:description" content="The foundational layer for secure operations. Enterprise-grade security dashboard with advanced threat intelligence." />
      </Helmet>

      <motion.header 
        className="hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeInUp} className="tag">InfraSphere Domain</motion.div>
        <motion.h1 variants={fadeInUp}>The Foundational Layer for Secure Operations</motion.h1>
        <motion.p variants={fadeInUp}>A resilient security operations dashboard integrating Cloudflare Worker intelligence with rapid threat analysis.</motion.p>
        <motion.div variants={fadeInUp} className="hero-actions">
          <a href="/login.html" className="btn-primary">View Live Demo</a>
          <a href="/docs" className="btn-outline">Read Documentation</a>
        </motion.div>
      </motion.header>

      <motion.div 
        className="dashboard-preview"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="preview-inner"></div>
      </motion.div>

      <section id="features">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Security Meets Intelligence
        </motion.h2>
        <motion.p 
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Built for the International Builders Congress, BinaryWebEngine provides deep visibility into your network events and infrastructure.
        </motion.p>
      </section>
    </>
  );
}
