'use client'

import React from 'react'
import { Link2, Settings, Rocket, LineChart } from 'lucide-react'
import { Container } from './ui/Container'

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Link2,
      title: 'Connect Your WhatsApp',
      description: 'Link your WhatsApp Business account to our platform in minutes. We handle all the technical setup.',
      color: 'from-whatsapp to-whatsapp-dark',
    },
    {
      number: '02',
      icon: Settings,
      title: 'Train Your AI Bot',
      description: 'Customize responses, set up conversation flows, and train the AI on your business knowledge.',
      color: 'from-accent to-accent-light',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Go Live',
      description: 'Launch your chatbot and start handling customer conversations automatically, 24/7.',
      color: 'from-whatsapp-dark to-primary',
    },
    {
      number: '04',
      icon: LineChart,
      title: 'Monitor & Optimize',
      description: 'Track performance metrics, analyze conversations, and continuously improve your bot.',
      color: 'from-primary to-accent',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Get your WhatsApp AI chatbot up and running in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-whatsapp via-accent to-primary opacity-20"></div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                  {/* Step Number */}
                  <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Timeline Alternative View for Mobile */}
        <div className="mt-16 lg:hidden">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-whatsapp via-accent to-primary"></div>
            {steps.map((step, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                <div className={`absolute left-4 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {index + 1}
                </div>
                <h4 className="font-bold text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-whatsapp/5 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses automating their customer service with WhatsApp AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Schedule a Demo
            </button>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
