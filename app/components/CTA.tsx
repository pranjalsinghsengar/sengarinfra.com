'use client'

import React from 'react'
import { MessageCircle, Mail, Phone, ArrowRight } from 'lucide-react'
import { Container } from './ui/Container'
import { WhatsAppButton } from './ui/WhatsAppButton'

export const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-whatsapp via-whatsapp-dark to-primary rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                <MessageCircle size={32} />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Automate Your WhatsApp Customer Service?
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses transforming their customer communication with AI-powered WhatsApp chatbots. 
              Start automating today and see results within days.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <WhatsAppButton 
                className="bg-white hover:bg-gray-100 text-whatsapp-dark shadow-2xl"
              />
              <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg border-2 border-white/30 transition-all duration-200 hover:scale-105">
                Schedule a Demo
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-white/80">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/80">✓</span>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/80">✓</span>
                <span>Setup in 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: MessageCircle,
              title: 'Message on WhatsApp',
              description: 'Experience our AI chatbot firsthand',
              action: 'Chat Now',
              color: 'whatsapp',
            },
            {
              icon: Mail,
              title: 'Email Us',
              description: 'contact@sengarinfra.com',
              action: 'Send Email',
              color: 'accent',
            },
            {
              icon: Phone,
              title: 'Call Us',
              description: 'Speak with our team directly',
              action: 'Schedule Call',
              color: 'primary',
            },
          ].map((method, index) => {
            const Icon = method.icon
            const colorClasses = {
              whatsapp: 'from-whatsapp to-whatsapp-dark',
              accent: 'from-accent to-accent-light',
              primary: 'from-primary to-primary-light',
            }

            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[method.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <button className="text-sm font-semibold text-accent hover:text-accent-light transition-colors">
                  {method.action} →
                </button>
              </div>
            )
          })}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-whatsapp/5 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  q: 'How long does it take to set up?',
                  a: 'Most chatbots are ready within 24-48 hours. We handle all technical setup.',
                },
                {
                  q: 'Do I need technical knowledge?',
                  a: 'No! Our team handles everything. You just provide business information.',
                },
                {
                  q: 'Can the bot handle multiple languages?',
                  a: 'Yes, our AI chatbots support 50+ languages with automatic detection.',
                },
                {
                  q: 'What if the bot can\'t answer a question?',
                  a: 'The bot seamlessly transfers to a human agent when needed.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-primary mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="text-accent hover:text-accent-light font-semibold">
                View All FAQs →
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton floating />
    </section>
  )
}
