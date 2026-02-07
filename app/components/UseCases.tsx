'use client'

import React from 'react'
import { 
  ShoppingCart, 
  Headphones, 
  Users, 
  UtensilsCrossed, 
  Heart,
  Home,
  GraduationCap,
  Plane,
  Star,
  TrendingUp
} from 'lucide-react'
import { Container } from './ui/Container'
import { Card } from './ui/Card'

export const UseCases = () => {
  const useCases = [
    {
      icon: ShoppingCart,
      industry: 'E-commerce',
      description: 'Product recommendations, order tracking, cart recovery, and automated customer support.',
      benefits: ['Increase sales by 30%', 'Reduce cart abandonment', '24/7 shopping assistance'],
      color: 'from-whatsapp to-whatsapp-dark',
      gradient: 'from-whatsapp/10 to-whatsapp/5',
      emoji: '🛒',
    },
    {
      icon: Headphones,
      industry: 'Customer Support',
      description: 'Handle FAQs, troubleshooting, ticket creation, and seamless handoff to human agents.',
      benefits: ['80% faster response time', 'Reduce support costs', 'Improve satisfaction'],
      color: 'from-accent to-accent-light',
      gradient: 'from-accent/10 to-accent/5',
      emoji: '🎧',
    },
    {
      icon: Users,
      industry: 'Lead Generation',
      description: 'Qualify leads, schedule appointments, collect information, and nurture prospects.',
      benefits: ['3x more qualified leads', 'Automated follow-ups', 'Higher conversion rates'],
      color: 'from-primary to-primary-light',
      gradient: 'from-primary/10 to-primary/5',
      emoji: '👥',
    },
    {
      icon: UtensilsCrossed,
      industry: 'Restaurants & Food',
      description: 'Take orders, manage reservations, share menus, and handle delivery inquiries.',
      benefits: ['Direct orders via WhatsApp', 'Table reservations', 'Menu updates'],
      color: 'from-whatsapp-dark to-accent',
      gradient: 'from-whatsapp/10 to-accent/5',
      emoji: '🍽️',
    },
    {
      icon: Heart,
      industry: 'Healthcare',
      description: 'Appointment booking, medication reminders, basic consultations, and health tips.',
      benefits: ['Reduce no-shows', 'Patient engagement', 'Appointment reminders'],
      color: 'from-accent to-whatsapp',
      gradient: 'from-accent/10 to-whatsapp/5',
      emoji: '❤️',
    },
    {
      icon: Home,
      industry: 'Real Estate',
      description: 'Property inquiries, virtual tours, agent connections, and viewing appointments.',
      benefits: ['24/7 property info', 'Schedule viewings', 'Lead qualification'],
      color: 'from-primary to-whatsapp',
      gradient: 'from-primary/10 to-whatsapp/5',
      emoji: '🏠',
    },
  ]

  const additionalIndustries = [
    { icon: GraduationCap, name: 'Education', emoji: '🎓' },
    { icon: Plane, name: 'Travel & Hospitality', emoji: '✈️' },
  ]

  return (
    <section id="use-cases" className="py-24 bg-gradient-to-br from-gray-50 via-white to-whatsapp/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-whatsapp/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-whatsapp/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="text-whatsapp" size={16} />
            <span className="text-sm font-semibold text-gray-700">Real-World Success</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6">
            Industry <span className="bg-gradient-to-r from-whatsapp to-accent bg-clip-text text-transparent">Applications</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See how businesses across industries use WhatsApp AI chatbots to grow
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`relative w-full p-6`}>
                  <div className="flex items-center justify-between">
                    <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white  opacity-80" size={32} />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-whatsapp transition-colors">
                    {useCase.industry}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <Star size={14} className="text-whatsapp" fill="currentColor" />
                      Key Benefits
                    </p>
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-whatsapp/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-whatsapp text-xs font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Industries */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <span className="text-gray-600 font-semibold">Also serving:</span>
          {additionalIndustries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div key={index} className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200">
                <span className="text-xl">{industry.emoji}</span>
                <Icon className="text-accent" size={18} />
                <span className="text-sm font-semibold text-gray-700">{industry.name}</span>
              </div>
            )
          })}
          <div className="flex items-center gap-2 bg-gradient-to-r from-whatsapp to-accent text-white px-5 py-2.5 rounded-full shadow-lg font-bold text-sm hover:scale-105 transition-transform">
            + Many More Industries
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-200/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Proven Results Across Industries
            </h3>
            <p className="text-gray-600 text-lg">Real metrics from our clients</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '50K+', label: 'Conversations Handled Daily', icon: '💬', color: 'from-whatsapp to-whatsapp-dark' },
              { metric: '95%', label: 'Customer Satisfaction Rate', icon: '⭐', color: 'from-accent to-accent-light' },
              { metric: '70%', label: 'Reduction in Support Costs', icon: '💰', color: 'from-whatsapp-dark to-primary' },
              { metric: '<2 min', label: 'Average Response Time', icon: '⚡', color: 'from-primary to-accent' },
            ].map((stat, index) => (
              <div key={index} className="group text-center hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.metric}
                </div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-gradient-to-br from-primary via-accent/90 to-whatsapp rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6 opacity-50">"</div>
            <p className="text-xl md:text-2xl font-medium mb-8 italic leading-relaxed">
              Since implementing the WhatsApp AI chatbot, we've seen a 40% increase in customer 
              engagement and our support team can focus on complex issues while the bot handles 
              routine inquiries perfectly.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50"></div>
              <div className="text-left">
                <p className="font-bold text-lg">Sarah Johnson</p>
                <p className="text-sm text-white/80">CEO, TechCommerce Inc.</p>
              </div>
            </div>

            {/* Star rating */}
            <div className="flex items-center justify-center gap-1 mt-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="text-yellow-300" fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
