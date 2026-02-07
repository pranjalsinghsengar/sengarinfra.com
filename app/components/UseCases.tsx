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
  Plane
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
    },
    {
      icon: Headphones,
      industry: 'Customer Support',
      description: 'Handle FAQs, troubleshooting, ticket creation, and seamless handoff to human agents.',
      benefits: ['80% faster response time', 'Reduce support costs', 'Improve satisfaction'],
      color: 'from-accent to-accent-light',
    },
    {
      icon: Users,
      industry: 'Lead Generation',
      description: 'Qualify leads, schedule appointments, collect information, and nurture prospects.',
      benefits: ['3x more qualified leads', 'Automated follow-ups', 'Higher conversion rates'],
      color: 'from-primary to-primary-light',
    },
    {
      icon: UtensilsCrossed,
      industry: 'Restaurants & Food',
      description: 'Take orders, manage reservations, share menus, and handle delivery inquiries.',
      benefits: ['Direct orders via WhatsApp', 'Table reservations', 'Menu updates'],
      color: 'from-whatsapp-dark to-accent',
    },
    {
      icon: Heart,
      industry: 'Healthcare',
      description: 'Appointment booking, medication reminders, basic consultations, and health tips.',
      benefits: ['Reduce no-shows', 'Patient engagement', 'Appointment reminders'],
      color: 'from-accent to-whatsapp',
    },
    {
      icon: Home,
      industry: 'Real Estate',
      description: 'Property inquiries, virtual tours, agent connections, and viewing appointments.',
      benefits: ['24/7 property info', 'Schedule viewings', 'Lead qualification'],
      color: 'from-primary to-whatsapp',
    },
  ]

  const additionalIndustries = [
    { icon: GraduationCap, name: 'Education' },
    { icon: Plane, name: 'Travel & Hospitality' },
  ]

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-gray-50 to-whatsapp/5">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Real-World Applications
          </h2>
          <p className="text-xl text-gray-600">
            See how businesses across industries use WhatsApp AI chatbots
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100"
              >
                {/* Gradient accent bar on top */}
                {/* <div className={`h-2 w-full bg-gradient-to-r ${useCase.color}`} /> */}
                
                {/* Card Content */}
                <div className="p-8">
                  {/* Icon with background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-whatsapp transition-colors">
                    {useCase.industry}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {useCase.description}
                  </p>

                  {/* Benefits with better styling */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-whatsapp/10 flex items-center justify-center mt-0.5">
                          <span className="text-whatsapp text-xs font-bold">✓</span>
                        </div>
                        <span className="text-sm text-gray-700 group-hover/item:text-gray-900">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            )
          })}
        </div>

        {/* Additional Industries */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="text-gray-600">Also serving:</span>
          {additionalIndustries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Icon className="text-accent" size={18} />
                <span className="text-sm font-medium text-gray-700">{industry.name}</span>
              </div>
            )
          })}
          <div className="flex items-center gap-2 bg-gradient-to-r from-whatsapp to-accent text-white px-4 py-2 rounded-full shadow-sm font-medium text-sm">
            + Many More
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Proven Results Across Industries
            </h3>
            <p className="text-gray-600">Real metrics from our clients</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '50K+', label: 'Conversations Handled Daily', icon: '💬' },
              { metric: '95%', label: 'Customer Satisfaction Rate', icon: '⭐' },
              { metric: '70%', label: 'Reduction in Support Costs', icon: '💰' },
              { metric: '<2 min', label: 'Average Response Time', icon: '⚡' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.metric}
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-4">"</div>
            <p className="text-xl md:text-2xl font-medium mb-6 italic">
              Since implementing the WhatsApp AI chatbot, we've seen a 40% increase in customer 
              engagement and our support team can focus on complex issues while the bot handles 
              routine inquiries perfectly.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20"></div>
              <div className="text-left">
                <p className="font-semibold">Business Owner</p>
                <p className="text-sm text-white/80">E-commerce Company</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
