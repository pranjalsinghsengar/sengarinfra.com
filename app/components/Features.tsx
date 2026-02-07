'use client'

import React from 'react'
import { 
  Smartphone, 
  Brain, 
  Clock, 
  TrendingUp, 
  Link2, 
  Languages,
  BarChart3,
  DollarSign,
  Star
} from 'lucide-react'
import { Container } from './ui/Container'
import { Card } from './ui/Card'

export const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'WhatsApp Native',
      description: 'Direct integration with WhatsApp Business API for seamless communication.',
      color: 'from-whatsapp/20 to-whatsapp/10',
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Smart responses using advanced natural language processing and machine learning.',
      color: 'from-accent/20 to-accent/10',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock automated responses.',
      color: 'from-whatsapp/20 to-whatsapp/10',
    },
    {
      icon: TrendingUp,
      title: 'Scalable',
      description: 'Handle unlimited conversations simultaneously without any performance issues.',
      color: 'from-accent/20 to-accent/10',
    },
    {
      icon: Link2,
      title: 'Easy Integration',
      description: 'Connect seamlessly with your CRM, database, and existing business tools.',
      color: 'from-primary/20 to-primary/10',
    },
    {
      icon: Languages,
      title: 'Multi-language',
      description: 'Serve customers in their preferred language with automatic detection.',
      color: 'from-whatsapp/20 to-whatsapp/10',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track performance, response times, and customer satisfaction metrics.',
      color: 'from-accent/20 to-accent/10',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Reduce support costs by up to 80% while improving response times.',
      color: 'from-primary/20 to-primary/10',
    },
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-white via-gray-50 to-whatsapp/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-whatsapp/5 rounded-full blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-whatsapp/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Star className="text-whatsapp" size={16} />
            <span className="text-sm font-semibold text-gray-700">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6">
            Powerful <span className="bg-gradient-to-r from-whatsapp to-accent bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to transform your customer communication
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className={index % 2 === 0 ? 'text-whatsapp' : 'text-accent'} size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-whatsapp transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-200/50">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2B+', label: 'WhatsApp Users Worldwide', icon: '🌍' },
              { value: '98%', label: 'Message Open Rate', icon: '📊' },
              { value: '24/7', label: 'Automated Support', icon: '🤖' },
              { value: '80%', label: 'Cost Reduction', icon: '💰' },
            ].map((stat, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-whatsapp via-accent to-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why WhatsApp Section */}
        <div className="relative bg-gradient-to-br from-whatsapp via-whatsapp-dark to-primary rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Why WhatsApp for Business?
              </h3>
              <p className="text-lg text-white/90">
                WhatsApp is the world's most popular messaging platform, trusted by billions. 
                Your customers are already there – meet them where they are.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { stat: '2+ Billion', label: 'Active Users', icon: '👥' },
                { stat: '98%', label: 'Open Rate vs 20% Email', icon: '📧' },
                { stat: '#1', label: 'Preferred Channel', icon: '⭐' },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-4xl font-bold mb-2">{item.stat}</div>
                  <p className="text-sm text-white/90 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
