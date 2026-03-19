'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen, Heart, Star, MapPin, Clock, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Psychopedagogical Assessment',
      description: 'Comprehensive evaluation of learning difficulties and developmental issues.',
      icon: BookOpen,
    },
    {
      title: 'Speech Therapy',
      description: 'Specialized speech and language therapy services for all ages.',
      icon: Heart,
    },
    {
      title: 'Occupational Therapy',
      description: 'Support for daily living skills and sensory integration.',
      icon: Users,
    },
  ]

  const stats = [
    { number: '25+', label: 'Years of Experience' },
    { number: '1000+', label: 'Children Helped' },
    { number: '15+', label: 'Specialists' },
    { number: '24/7', label: 'Support Available' },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">INSYPE</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white">
              Institute for Special Education
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering children with special needs through innovative education, 
              comprehensive therapy, and compassionate care since 1986.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/services" className="btn-primary inline-flex items-center space-x-2">
                  <span>Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-secondary inline-flex items-center space-x-2">
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass-card"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive special education services tailored to meet the unique needs 
              of each child and family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card group cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                About INSYPE
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Since 1986, INSYPE has been at the forefront of special education in Greece. 
                We provide comprehensive services for children with special needs, offering 
                innovative approaches to learning and development.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our team of experienced professionals is dedicated to creating a supportive 
                environment where every child can thrive and reach their full potential.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/personnel" className="btn-primary inline-flex items-center space-x-2">
                  <span>Meet Our Team</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">
                      Provide high-quality special education services
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">
                      Support families through comprehensive care
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">
                      Innovate in special education approaches
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">
                      Create inclusive learning environments
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card text-center p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our services and how we can help 
              your child reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/cases" className="btn-secondary inline-flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Find Us</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}