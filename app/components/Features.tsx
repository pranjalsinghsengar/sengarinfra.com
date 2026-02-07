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
  DollarSign 
} from 'lucide-react'
import { Container } from './ui/Container'
import { Card } from './ui/Card'

export const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'WhatsApp Native',
      description: 'Direct integration with WhatsApp Business API for seamless communication.',
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Smart responses using advanced natural language processing and machine learning.',
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock automated responses.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable',
      description: 'Handle unlimited conversations simultaneously without any performance issues.',
    },
    {
      icon: Link2,
      title: 'Easy Integration',
      description: 'Connect seamlessly with your CRM, database, and existing business tools.',
    },
    {
      icon: Languages,
      title: 'Multi-language',
      description: 'Serve customers in their preferred language with automatic detection.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track performance, response times, and customer satisfaction metrics.',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Reduce support costs by up to 80% while improving response times.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-whatsapp/5">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to transform your customer communication
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-whatsapp/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-whatsapp-dark" size={28} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2B+', label: 'WhatsApp Users Worldwide' },
              { value: '98%', label: 'Message Open Rate' },
              { value: '24/7', label: 'Automated Support' },
              { value: '80%', label: 'Cost Reduction' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-whatsapp to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why WhatsApp Section */}
        <div className="mt-16 bg-gradient-to-r from-whatsapp to-whatsapp-dark rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why WhatsApp for Business?
            </h3>
            <p className="text-lg text-white/90 mb-8">
              WhatsApp is the world's most popular messaging platform, trusted by billions. 
              Your customers are already there – meet them where they are.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { stat: '2+ Billion', label: 'Active Users' },
                { stat: '98%', label: 'Open Rate vs 20% Email' },
                { stat: '#1', label: 'Preferred Channel' },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold mb-1">{item.stat}</div>
                  <p className="text-sm text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
