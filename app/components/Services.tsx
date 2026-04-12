'use client'

import React from 'react'
import { MessageCircle, Cloud, Zap, BarChart, Lock, Globe, ArrowRight, Star, Database, Bot, Share2 } from 'lucide-react'
import { Container } from './ui/Container'

export const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'Startup CRM & Pipeline',
      description: 'A powerful, unified CRM built for high-growth startups to track leads, manage pipelines, and close deals faster.',
      features: ['Real-time sync', 'Custom data fields', 'Smart lead scoring'],
      color: 'brand',
      gradient: 'from-brand/20 via-brand/10 to-transparent',
      featured: true,
      stats: { value: '3x', label: 'Faster closing' }
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Streamline operations by automating repetitive tasks, from data entry to customer follow-ups using advanced AI.',
      features: ['Drag-and-drop builder', '100+ native integrations', 'Predictive analytics'],
      color: 'accent',
      gradient: 'from-accent/20 via-accent/10 to-transparent',
      featured: false,
      stats: { value: '85%', label: 'Time saved' }
    },
    {
      icon: Bot,
      title: 'Omni-Channel AI Bots',
      description: 'Deploy intelligent agents across WhatsApp, Website, Slack, and Email to provide 24/7 support and qualify leads instantly.',
      features: ['Natural language processing', 'Tone training', 'Seamless CRM handoff'],
      color: 'primary',
      gradient: 'from-primary/20 via-primary/10 to-transparent',
      featured: false,
      stats: { value: '99%', label: 'Response rate' }
    },
  ]

  const additionalServices = [
    { icon: BarChart, title: 'In-Depth Analytics', description: 'Monitor pipeline health and agent performance in real-time.', color: 'brand' },
    { icon: Lock, title: 'Enterprise-Grade Security', description: 'SOC-2 compliant infrastructure protecting your startup data.', color: 'accent' },
    { icon: Share2, title: 'API-First Architecture', description: 'Extend the platform with robust APIs and Webhooks.', color: 'primary' },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Star className="text-brand" size={16} />
            <span className="text-sm font-semibold text-gray-700">Platform Capabilities</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6">
            Built for <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Scale</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything your startup needs to accelerate growth from seed to series A and beyond.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const colorClasses = {
              brand: { bg: 'from-brand to-brand-dark', text: 'text-brand', border: 'border-brand' },
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
                  ${service.featured ? 'ring-2 ring-brand/50 lg:scale-105 z-10' : 'ring-1 ring-gray-200'}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {service.featured && (
                  <div className="absolute top-6 right-6 z-10">
                    <div className="bg-gradient-to-r from-brand to-brand-dark text-white text-xs px-4 py-1.5 rounded-full font-bold shadow-lg flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      <span>Core Engine</span>
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
              brand: 'from-brand/10 to-brand/5',
              accent: 'from-accent/10 to-accent/5',
              primary: 'from-primary/10 to-primary/5',
            }

            return (
              <div 
                key={index} 
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-white border border-gray-200 hover:border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className={item.color === 'brand' ? 'text-brand' : item.color === 'accent' ? 'text-accent' : 'text-primary'} size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2 group-hover:text-brand transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-block bg-gradient-to-r from-brand/5 via-accent/5 to-primary/5 rounded-3xl p-1">
            <div className="bg-white rounded-3xl px-8 py-6">
              <p className="text-gray-700 mb-4">
                <span className="font-bold text-primary">Need a custom enterprise solution?</span> Let's discuss your requirements.
              </p>
              <button className="bg-gradient-to-r from-brand to-brand-dark text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-glow-brand transition-all duration-300 hover:scale-105">
                Contact Sales Team
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
