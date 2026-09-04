import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'NeuroChat — LLM Assistant',
    description: 'A production-grade conversational AI assistant built with a custom RAG pipeline, supporting document Q&A, tool use, and multi-turn memory across 10+ domains.',
    tags: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'PostgreSQL'],
    gradient: 'from-primary-500 to-indigo-600',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'VisionGuard — Defect Detection',
    description: 'Real-time computer vision system for manufacturing quality control, achieving 99.2% accuracy using a custom YOLOv8 model deployed on edge devices.',
    tags: ['PyTorch', 'YOLOv8', 'OpenCV', 'TensorRT', 'Docker'],
    gradient: 'from-accent-500 to-emerald-600',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'SentimentScope — Market Intelligence',
    description: 'NLP platform that analyzes social media and news sentiment to predict market trends, processing 1M+ documents daily with a fine-tuned transformer model.',
    tags: ['Transformers', 'Hugging Face', 'Kafka', 'Spark', 'AWS'],
    gradient: 'from-pink-500 to-rose-600',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'MediPredict — Healthcare AI',
    description: 'Clinical decision support system that predicts patient readmission risk using gradient boosting and deep learning, deployed in 3 hospitals.',
    tags: ['XGBoost', 'Scikit-learn', 'MLflow', 'Kubernetes', 'GCP'],
    gradient: 'from-amber-500 to-orange-600',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AutoML Pipeline',
    description: 'End-to-end automated machine learning platform that handles data preprocessing, feature engineering, model selection, and hyperparameter tuning.',
    tags: ['Python', 'Optuna', 'MLflow', 'Airflow', 'FastAPI'],
    gradient: 'from-cyan-500 to-blue-600',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'SpeechSense — Voice Analytics',
    description: 'Real-time speech-to-text and sentiment analysis system for call centers, using Whisper and custom emotion detection models.',
    tags: ['Whisper', 'PyTorch', 'WebSockets', 'Redis', 'React'],
    gradient: 'from-violet-500 to-purple-600',
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-dark-400 mt-6 max-w-2xl mx-auto">
            A selection of AI systems I've designed, built, and deployed to production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden group hover:border-primary-500/50 transition-colors duration-300 flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-dark-700/50 text-dark-300 border border-dark-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-dark-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-dark-300 hover:text-accent-400 transition-colors duration-200"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}