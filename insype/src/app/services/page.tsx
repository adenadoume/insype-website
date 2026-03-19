'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Heart, 
  Users, 
  Brain, 
  MessageCircle, 
  Activity,
  Target,
  Shield,
  Lightbulb,
  CheckCircle
} from 'lucide-react'

export default function Services() {
  const mainServices = [
    {
      title: 'Psychopedagogical Assessment',
      description: 'Comprehensive evaluation of learning difficulties, cognitive abilities, and developmental issues to create personalized intervention plans.',
      icon: Brain,
      features: [
        'Cognitive assessment',
        'Learning disability evaluation',
        'Developmental screening',
        'Individualized education plans'
      ]
    },
    {
      title: 'Speech Therapy',
      description: 'Specialized speech and language therapy services for children with communication difficulties, articulation problems, and language delays.',
      icon: MessageCircle,
      features: [
        'Articulation therapy',
        'Language development',
        'Fluency improvement',
        'Voice therapy'
      ]
    },
    {
      title: 'Occupational Therapy',
      description: 'Support for daily living skills, sensory integration, fine and gross motor development, and adaptive behavior training.',
      icon: Activity,
      features: [
        'Sensory integration',
        'Motor skills development',
        'Daily living skills',
        'Adaptive equipment training'
      ]
    },
    {
      title: 'Special Education',
      description: 'Individualized educational programs designed to meet the unique learning needs of children with special educational requirements.',
      icon: BookOpen,
      features: [
        'Individualized instruction',
        'Small group learning',
        'Curriculum adaptation',
        'Progress monitoring'
      ]
    },
    {
      title: 'Behavioral Support',
      description: 'Comprehensive behavioral intervention programs to address challenging behaviors and promote positive social interactions.',
      icon: Target,
      features: [
        'Behavioral assessment',
        'Positive behavior support',
        'Social skills training',
        'Parent training'
      ]
    },
    {
      title: 'Family Counseling',
      description: 'Support services for families to help them understand and cope with their child\'s special needs and develop effective strategies.',
      icon: Heart,
      features: [
        'Family therapy',
        'Parent education',
        'Support groups',
        'Crisis intervention'
      ]
    }
  ]

  const additionalServices = [
    'Autism Spectrum Disorder Support',
    'Down Syndrome Programs',
    'Rett Syndrome Care',
    'Cerebral Palsy Therapy',
    'ADHD Management',
    'Learning Disabilities Support',
    'Sensory Processing Disorders',
    'Communication Disorders',
    'Developmental Delays',
    'Behavioral Challenges'
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive special education services designed to meet the unique needs 
              of each child and support their development and learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card group cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Specialized Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide specialized support for various conditions and challenges, 
              ensuring every child receives the care they need.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  <Shield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At INSYPE, we believe in a holistic approach to special education that 
                considers the whole child and their unique needs, strengths, and challenges.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our evidence-based interventions are designed to promote independence, 
                build confidence, and help each child reach their full potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Innovative Methods</h3>
                    <p className="text-gray-300 text-sm">Using the latest research and technology in special education</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Team Collaboration</h3>
                    <p className="text-gray-300 text-sm">Multidisciplinary team working together for optimal outcomes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Family-Centered Care</h3>
                    <p className="text-gray-300 text-sm">Involving families as partners in the educational process</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose INSYPE?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">25+ years of experience in special education</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Highly qualified and experienced professionals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Individualized programs for each child</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Evidence-based interventions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Comprehensive support services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Family involvement and support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Contact us today to learn more about our services and schedule a consultation 
              to discuss your child's needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Contact Us Today</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
