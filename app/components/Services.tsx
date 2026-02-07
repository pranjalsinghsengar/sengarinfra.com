'use client'

import React from 'react'
import { MessageCircle, Cloud, Zap, BarChart, Lock, Globe, ArrowRight, Star } from 'lucide-react'
import { Container } from './ui/Container'

export const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'WhatsApp AI Chatbot',
      description: 'Deploy intelligent chatbots on WhatsApp to handle customer queries, take orders, and provide instant support 24/7.',
      features: ['Natural conversations', 'Multi-language support', 'CRM integration'],
      color: 'whatsapp',
      gradient: 'from-whatsapp/20 via-whatsapp/10 to-transparent',
      featured: true,
      stats: { value: '50K+', label: 'Messages/day' }
    },
    {
      icon: Cloud,
      title: 'SaaS Platform Development',
      description: 'Custom SaaS solutions built to scale your operations and streamline your business processes.',
      features: ['Cloud-based architecture', 'Infinitely scalable', 'Bank-grade security'],
      color: 'accent',
      gradient: 'from-accent/20 via-accent/10 to-transparent',
      featured: false,
      stats: { value: '99.9%', label: 'Uptime' }
    },
    {
      icon: Zap,
      title: 'Business Automation',
      description: 'Automate workflows, integrate systems, and eliminate manual tasks to boost efficiency.',
      features: ['Workflow automation', 'API integration', 'Real-time analytics'],
      color: 'primary',
      gradient: 'from-primary/20 via-primary/10 to-transparent',
      featured: false,
      stats: { value: '80%', label: 'Time saved' }
    },
  ]

  const additionalServices = [
    { icon: BarChart, title: 'Analytics & Insights', description: 'Track performance and make data-driven decisions', color: 'whatsapp' },
    { icon: Lock, title: 'Enterprise Security', description: 'Bank-level security and data protection', color: 'accent' },
    { icon: Globe, title: 'Global Reach', description: 'Multi-language and multi-region support', color: 'primary' },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-whatsapp/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-whatsapp/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Star className="text-whatsapp" size={16} />
            <span className="text-sm font-semibold text-gray-700">What We Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6">
            Our <span className="bg-gradient-to-r from-whatsapp to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive tech solutions designed to help your business scale and succeed
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const colorClasses = {
              whatsapp: { bg: 'from-whatsapp to-whatsapp-dark', text: 'text-whatsapp', border: 'border-whatsapp' },
              accent: { bg: 'from-accent to-accent-light', text: 'text-accent', border: 'border-accent' },
              primary: { bg: 'from-primary to-primary-light', text: 'text-primary', border: 'border-primary' },
            }
            const colors = colorClasses[service.color as keyof typeof colorClasses]

            return (
              <div
                key={index}
                className={`
                  group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl 
                  transition-all duration-500 hover:-translate-y-2 overflow-hidden
                  ${service.featured ? 'ring-2 ring-whatsapp/50 lg:scale-105' : 'ring-1 ring-gray-200'}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {service.featured && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white text-xs px-4 py-1.5 rounded-full font-bold shadow-lg flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:${colors.text} transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 group/item">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.bg} group-hover/item:scale-150 transition-transform`}></div>
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} border ${colors.border}/20 mb-6`}>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-bold ${colors.text}`}>{service.stats.value}</span>
                      <span className="text-sm text-gray-600">{service.stats.label}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className={`
                    group/btn w-full flex items-center justify-center gap-2 
                    ${colors.text} font-semibold py-3 rounded-xl 
                    hover:bg-gradient-to-r ${colors.bg} hover:text-white 
                    transition-all duration-300 border-2 ${colors.border}/20 hover:${colors.border}
                  `}>
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
          {additionalServices.map((item, index) => {
            const Icon = item.icon
            const colorClasses = {
              whatsapp: 'from-whatsapp/10 to-whatsapp/5',
              accent: 'from-accent/10 to-accent/5',
              primary: 'from-primary/10 to-primary/5',
            }

            return (
              <div 
                key={index} 
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className={item.color === 'whatsapp' ? 'text-whatsapp' : item.color === 'accent' ? 'text-accent' : 'text-primary'} size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 group-hover:text-whatsapp transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-block bg-gradient-to-r from-whatsapp/5 via-accent/5 to-primary/5 rounded-3xl p-1">
            <div className="bg-white rounded-3xl px-8 py-6">
              <p className="text-gray-700 mb-4">
                <span className="font-bold text-primary">Not sure which service you need?</span> Let's talk about your goals.
              </p>
              <button className="bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-glow-whatsapp transition-all duration-300 hover:scale-105">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
