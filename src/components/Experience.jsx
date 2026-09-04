import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Senior AI Engineer',
    company: 'TechNova AI',
    period: '2022 — Present',
    description: 'Leading a team of 5 engineers building LLM-powered products. Architected a RAG platform serving 2M+ daily queries and reduced inference costs by 40% through model optimization.',
    achievements: [
      'Led development of enterprise RAG platform',
      'Reduced inference latency by 60% via quantization',
      'Mentored 3 junior engineers to senior roles',
    ],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'DataSphere Labs',
    period: '2020 — 2022',
    description: 'Built and deployed computer vision and NLP models for Fortune 500 clients. Designed MLOps infrastructure that automated the full model lifecycle.',
    achievements: [
      'Deployed 15+ models to production',
      'Built CI/CD pipeline for ML models',
      'Achieved 99% model monitoring coverage',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'Insight Analytics',
    period: '2018 — 2020',
    description: 'Developed predictive models and analytics solutions for clients across finance and healthcare. Focused on time-series forecasting and anomaly detection.',
    achievements: [
      'Improved forecast accuracy by 25%',
      'Built real-time anomaly detection system',
      'Delivered 20+ client projects',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-dark-700 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full -translate-x-1/2 md:-translate-x-1/2 border-4 border-dark-950" />

                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="glass-card p-6 hover:border-primary-500/50 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-lg font-semibold text-primary-300">{exp.role}</h3>
                      <span className="text-sm text-dark-400 bg-dark-700/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm text-dark-300">
                          <span className="text-accent-400 mt-1">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}