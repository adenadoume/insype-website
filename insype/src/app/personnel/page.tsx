'use client'

import { motion } from 'framer-motion'
import { Users, Award, BookOpen, Heart, Mail, Phone } from 'lucide-react'

export default function Personnel() {
  const teamMembers = [
    {
      name: 'Dr. Aigli Konstantopoulou',
      title: 'Director & Founder',
      specialization: 'Special Education',
      experience: '25+ years',
      description: 'Leading expert in special education with extensive experience in developing innovative programs for children with special needs.',
      qualifications: [
        'PhD in Special Education',
        'Certified Special Education Teacher',
        '25+ years of experience',
        'Published researcher'
      ]
    },
    {
      name: 'Dr. Trifon Zaxariadis',
      title: 'Co-Director',
      specialization: 'Psychology',
      experience: '20+ years',
      description: 'Experienced psychologist specializing in child development and behavioral interventions for children with special needs.',
      qualifications: [
        'PhD in Psychology',
        'Licensed Clinical Psychologist',
        'Child Development Specialist',
        'Behavioral Intervention Expert'
      ]
    },
    {
      name: 'Dimitrios Adamis',
      title: 'Senior Therapist',
      specialization: 'Speech Therapy',
      experience: '15+ years',
      description: 'Dedicated speech therapist with expertise in communication disorders and language development for children of all ages.',
      qualifications: [
        'Master\'s in Speech Therapy',
        'Licensed Speech Therapist',
        'Communication Disorders Specialist',
        'Language Development Expert'
      ]
    }
  ]

  const additionalStaff = [
    'Special Education Teachers',
    'Occupational Therapists',
    'Physical Therapists',
    'Behavioral Specialists',
    'Social Workers',
    'Administrative Staff',
    'Support Personnel'
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
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet our dedicated team of professionals who are committed to providing 
              the highest quality care and education for children with special needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of expertise in special education 
              and child development to INSYPE.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card group cursor-pointer"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-1">
                    {member.title}
                  </p>
                  <p className="text-gray-400 text-sm mb-2">
                    {member.specialization} • {member.experience}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 text-center">
                  {member.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white mb-3">Qualifications</h4>
                  {member.qualifications.map((qualification, qualIndex) => (
                    <div key={qualIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <Award className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span>{qualification}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Staff */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Our Complete Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In addition to our leadership team, INSYPE employs a diverse group of 
              professionals dedicated to supporting children with special needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalStaff.map((staff, index) => (
                <motion.div
                  key={staff}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  <Users className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{staff}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At INSYPE, our team is united by a shared commitment to excellence, 
                compassion, and innovation in special education.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Compassion</h3>
                    <p className="text-gray-300 text-sm">We approach every child with empathy and understanding</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Excellence</h3>
                    <p className="text-gray-300 text-sm">We strive for the highest standards in everything we do</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Collaboration</h3>
                    <p className="text-gray-300 text-sm">We work together as a team to achieve the best outcomes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Innovation</h3>
                    <p className="text-gray-300 text-sm">We embrace new methods and technologies to improve care</p>
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
                <h3 className="text-2xl font-bold text-white mb-6">Why Our Team Matters</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <strong>Experience:</strong> Combined decades of experience in special education
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <strong>Qualifications:</strong> Advanced degrees and professional certifications
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <strong>Dedication:</strong> Passionate about helping children reach their potential
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <strong>Continuous Learning:</strong> Regular training and professional development
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">
                      <strong>Family Focus:</strong> Working closely with families as partners
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card text-center p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Want to Meet Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to meet our team and learn more about how we can 
              help your child reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Us</span>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="tel:210-2281031"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
