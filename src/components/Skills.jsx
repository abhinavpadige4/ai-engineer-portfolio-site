import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Machine Learning',
    skills: [
      { name: 'PyTorch', level: 95 },
      { name: 'TensorFlow', level: 90 },
      { name: 'Scikit-learn', level: 92 },
      { name: 'XGBoost', level: 88 },
    ],
  },
  {
    title: 'LLM & NLP',
    skills: [
      { name: 'LangChain', level: 90 },
      { name: 'Hugging Face', level: 93 },
      { name: 'RAG Systems', level: 88 },
      { name: 'Prompt Engineering', level: 95 },
    ],
  },
  {
    title: 'MLOps & Infra',
    skills: [
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 82 },
      { name: 'MLflow', level: 85 },
      { name: 'AWS / GCP', level: 88 },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 96 },
      { name: 'TypeScript', level: 80 },
      { name: 'SQL', level: 88 },
      { name: 'C++', level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary-300">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-dark-200 font-medium">{skill.name}</span>
                      <span className="text-dark-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}