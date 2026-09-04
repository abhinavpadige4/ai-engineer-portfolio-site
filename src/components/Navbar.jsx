import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-sm border-b border-dark-800/50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-accent-400 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">AI</span>
            </div>
            <h1 className="text-xl font-bold gradient-text">Alex Chen</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-primary-400 transition-colors duration-200">About</a>
            <a href="#skills" className="hover:text-primary-400 transition-colors duration-200">Skills</a>
            <a href="#projects" className="hover:text-primary-400 transition-colors duration-200">Projects</a>
            <a href="#experience" className="hover:text-primary-400 transition-colors duration-200">Experience</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors duration-200">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-dark-800/50"
            >
              {isOpen ? <FiX className="text-primary-400" /> : <FiMenu className="text-primary-400" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-6 space-y-4">
            <a href="#about" className="block py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-colors duration-200">About</a>
            <a href="#skills" className="block py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-colors duration-200">Skills</a>
            <a href="#projects" className="block py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-colors duration-200">Projects</a>
            <a href="#experience" className="block py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-colors duration-200">Experience</a>
            <a href="#contact" className="block py-3 px-4 rounded-lg hover:bg-dark-800/50 transition-colors duration-200">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}