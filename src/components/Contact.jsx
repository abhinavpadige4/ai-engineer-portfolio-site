import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="text-dark-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Let's build something amazing together</h3>
            <p className="text-dark-400 leading-relaxed">
              I'm currently open to new opportunities, collaborations, and interesting AI projects.
              Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:alex@example.com" className="flex items-center gap-4 text-dark-300 hover:text-primary-400 transition-colors duration-200">
                <div className="p-3 rounded-lg bg-dark-800/50 border border-dark-700">
                  <FiMail className="text-xl" />
                </div>
                alex@example.com
              </a>
              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-primary-500 hover:text-primary-400 transition-colors duration-200">
                  <FiGithub className="text-xl" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-primary-500 hover:text-primary-400 transition-colors duration-200">
                  <FiLinkedin className="text-xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-primary-500 hover:text-primary-400 transition-colors duration-200">
                  <FiTwitter className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-dark-100 placeholder-dark-500 transition-colors duration-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-dark-100 placeholder-dark-500 transition-colors duration-200"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-dark-100 placeholder-dark-500 transition-colors duration-200 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              <FiSend /> Send Message
            </button>
            {submitted && (
              <p className="text-accent-400 text-center text-sm">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}