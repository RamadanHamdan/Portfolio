import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { Code2, Palette, Rocket } from 'lucide-react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description:
        'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Modern Design',
      description:
        'Creating beautiful, intuitive interfaces that users love to interact with.',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Fast Performance',
      description:
        'Optimizing applications for speed and performance across all devices.',
    },
  ]

  return (
    <section id='about' className='py-20 md:py-32 relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-black via-primary/5 to-black' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent'>
            About Me
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full' />
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='relative'>
              <div className='absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3' />
              <img
                src='src/assets/ram.png'
                alt='Developer'
                className='relative rounded-2xl w-full h-[400px] object-cover'
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='space-y-6'
          >
            <p className='text-muted-foreground text-lg leading-relaxed'>
              Seorang Web Developer profesional yang berdedikasi dalam membangun
              aplikasi web modern, responsif, dan berorientasi pada pengguna.
              Berawal dari rasa penasaran tentang bagaimana sebuah situs web
              bekerja, kini saya fokus menciptakan solusi digital yang kuat—baik
              dari sisi antarmuka yang intuitif (frontend) maupun sistem
              belakang layar yang andal (backend).
            </p>
          </motion.div>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className='bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105'
            >
              <div className='text-primary mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
              <p className='text-muted-foreground'>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
