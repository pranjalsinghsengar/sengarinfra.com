'use client'

import React from 'react'
import { MessageCircle, Cloud, Zap, BarChart, Lock, Globe } from 'lucide-react'
import { Container } from './ui/Container'
import { Card } from './ui/Card'

export const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: 'WhatsApp AI Chatbot',
      description: 'Deploy intelligent chatbots on WhatsApp to handle customer queries, take orders, and provide instant support 24/7.',
      features: ['Natural conversations', 'Multi-language', 'CRM integration'],
      color: 'whatsapp',
      featured: true,
    },
    {
      icon: Cloud,
      title: 'SaaS Platform Development',
      description: 'Custom SaaS solutions built to scale your operations and streamline your business processes.',
      features: ['Cloud-based', 'Scalable', 'Secure'],
      color: 'accent',
      featured: false,
    },
    {
      icon: Zap,
      title: 'Business Automation',
      description: 'Automate workflows, integrate systems, and eliminate manual tasks to boost efficiency.',
      features: ['Workflow automation', 'Integration', 'Analytics'],
      color: 'primary',
      featured: false,
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive tech solutions to help your business scale and succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const colorClasses = {
              whatsapp: 'from-whatsapp to-whatsapp-dark',
              accent: 'from-accent to-accent-light',
              primary: 'from-primary to-primary-light',
            }

            return (
              <Card
                key={index}
                className={`relative overflow-hidden ${service.featured ? 'ring-2 ring-whatsapp' : ''}`}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-whatsapp text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Popular
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colorClasses[service.color as keyof typeof colorClasses]}`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="text-sm font-semibold text-accent hover:text-accent-light transition-colors">
                  Learn More →
                </button>
              </Card>
            )
          })}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { icon: BarChart, title: 'Analytics & Insights', description: 'Track performance and make data-driven decisions' },
            { icon: Lock, title: 'Enterprise Security', description: 'Bank-level security and data protection' },
            { icon: Globe, title: 'Global Reach', description: 'Multi-language and multi-region support' },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex gap-4 items-start p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-whatsapp/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
