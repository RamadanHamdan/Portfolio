import { motion } from 'motion/react'
import { ArrowDown, Github, Heart, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      {/* Animated background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-blue-900/20' />
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-pulse' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-6'
          >
            <span className='text-primary text-lg md:text-xl'>Hi, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-primary bg-clip-text text-transparent'
          >
            Ramadhan Hamdan
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl sm:text-2xl md:text-3xl text-foreground/80 mb-8'
          >
            Full Stack Web Developer
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-12'
          >
            I am a full-stack web developer with experience in building
            responsive and user-friendly web applications. I am passionate about
            clean code and innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
          >
            <button
              onClick={() => scrollToSection('projects')}
              className='px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg transition-all hover:scale-105 active:scale-95'
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-all hover:scale-105 active:scale-95'
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='flex gap-6 justify-center'
          >
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform'
            >
              <Github size={24} />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform'
            >
              <Linkedin size={24} />
            </a>
            <a
              href='mailto:contact@example.com'
              className='text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform'
            >
              <Mail size={24} />
            </a>
            <a
              href='https://wa.me/+6285158278924'
              className='text-foreground/60 hover:text-primary transition-colors'
            >
              <Phone size={24} />
            </a>
            <a
              href='https://www.instagram.com/ramahmdnn/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-foreground/60 hover:text-primary transition-colors'
            >
              <Instagram size={24} />
            </a>
            <a
              href='https://www.threads.com/@ramahmdnn'
              target='_blank'
              rel='noopener noreferrer'
              className='text-foreground/60 hover:text-primary transition-colors'
            >
              <Heart size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
      >
        <button
          onClick={() => scrollToSection('about')}
          className='text-primary animate-bounce'
        >
          <ArrowDown size={32} />
        </button>
      </motion.div>
    </section>
  )
}
