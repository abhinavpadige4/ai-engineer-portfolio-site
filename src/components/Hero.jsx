import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-dark-800/50 border border-primary-500/30 text-primary-300 text-sm font-medium mb-6">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Hi, I'm <span className="gradient-text">Alex Chen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-dark-300 mb-4 max-w-2xl mx-auto"
        >
          AI Engineer & Machine Learning Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-dark-400 max-w-2xl mx-auto mb-10"
        >
          I build intelligent systems that solve real-world problems. From large language models
          to computer vision, I turn complex AI research into production-ready applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-dark-600 text-dark-200 font-semibold rounded-lg hover:border-primary-500 hover:text-primary-400 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-dark-800/50 border border-dark-700 hover:border-primary-500 hover:text-primary-400 transition-colors duration-200">
            <FiGithub className="text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-dark-800/50 border border-dark-700 hover:border-primary-500 hover:text-primary-400 transition-colors duration-200">
            <FiLinkedin className="text-xl" />
          </a>
          <a href="mailto:alex@example.com" className="p-3 rounded-full bg-dark-800/50 border border-dark-700 hover:border-primary-500 hover:text-primary-400 transition-colors duration-200">
            <FiMail className="text-xl" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-dark-400 hover:text-primary-400 transition-colors duration-200">
          <FiArrowDown className="text-2xl animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}