'use client'

import React from 'react'
import { Link2, Settings, Rocket, LineChart, ArrowRight } from 'lucide-react'
import { Container } from './ui/Container'

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Link2,
      title: 'Connect Your WhatsApp',
      description: 'Link your WhatsApp Business account to our platform in minutes. We handle all the technical setup.',
      color: 'from-whatsapp to-whatsapp-dark',
      details: ['Quick setup wizard', 'No coding required', 'Secure connection'],
    },
    {
      number: '02',
      icon: Settings,
      title: 'Train Your AI Bot',
      description: 'Customize responses, set up conversation flows, and train the AI on your business knowledge.',
      color: 'from-accent to-accent-light',
      details: ['Custom responses', 'Flow builder', 'AI training'],
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Go Live',
      description: 'Launch your chatbot and start handling customer conversations automatically, 24/7.',
      color: 'from-whatsapp-dark to-primary',
      details: ['Instant deployment', 'Test mode available', '24/7 active'],
    },
    {
      number: '04',
      icon: LineChart,
      title: 'Monitor & Optimize',
      description: 'Track performance metrics, analyze conversations, and continuously improve your bot.',
      color: 'from-primary to-accent',
      details: ['Real-time analytics', 'Performance insights', 'Continuous improvement'],
    },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-whatsapp/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-whatsapp/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Rocket className="text-whatsapp" size={16} />
            <span className="text-sm font-semibold text-gray-700">Simple Process</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6">
            How It <span className="bg-gradient-to-r from-whatsapp to-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get your WhatsApp AI chatbot up and running in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Animated Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-whatsapp via-accent to-primary rounded-full animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative z-10 border border-gray-200/50 overflow-hidden">
                  {/* Hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  {/* Step Number Badge */}
                  <div className={`absolute -top-4 -right-4 w-14 h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold shadow-xl group-hover:scale-110 transition-transform z-20`}>
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-whatsapp transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details (shown on hover) */}
                    <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-whatsapp"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Timeline Alternative View for Mobile */}
        <div className="mt-16 lg:hidden">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-whatsapp via-accent to-primary rounded-full"></div>
            {steps.map((step, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                <div className={`absolute left-4 w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                  {index + 1}
                </div>
                <h4 className="font-bold text-primary mb-2 text-lg">{step.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                <div className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1 h-1 rounded-full bg-whatsapp"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-whatsapp/5 rounded-3xl"></div>
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses automating their customer service with WhatsApp AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-glow-whatsapp transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Schedule a Demo
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-whatsapp-dark to-whatsapp opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
