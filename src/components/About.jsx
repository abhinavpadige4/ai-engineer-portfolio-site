import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiTrendingUp } from 'react-icons/fi'

const highlights = [
  { icon: FiCpu, title: 'Deep Learning', desc: 'Building and fine-tuning neural networks for NLP and vision tasks.' },
  { icon: FiCode, title: 'LLM Engineering', desc: 'Designing RAG pipelines and agentic systems with modern LLMs.' },
  { icon: FiDatabase, title: 'MLOps', desc: 'Deploying and monitoring models at scale with robust infrastructure.' },
  { icon: FiTrendingUp, title: 'Data Science', desc: 'Extracting insights and building predictive models from complex data.' },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-dark-300 leading-relaxed mb-6">
              I'm an AI Engineer with 6+ years of experience building production machine learning
              systems. My journey began with a fascination for how machines can learn, and it has
              evolved into a career dedicated to pushing the boundaries of what's possible with AI.
            </p>
            <p className="text-dark-300 leading-relaxed mb-6">
              I specialize in large language models, computer vision, and MLOps. I've led teams
              that deployed AI solutions serving millions of users, and I'm passionate about
              building systems that are not just intelligent, but also reliable, ethical, and scalable.
            </p>
            <p className="text-dark-300 leading-relaxed">
              When I'm not training models, you'll find me contributing to open-source projects,
              writing technical blog posts, or mentoring aspiring AI engineers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 hover:border-primary-500/50 transition-colors duration-300"
              >
                <item.icon className="text-3xl text-primary-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}