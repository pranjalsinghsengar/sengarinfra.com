'use client'

import React, { useState } from 'react'
import { MessageCircle, Mail, Phone, ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { Container } from './ui/Container'
import { WhatsAppButton } from './ui/WhatsAppButton'

export const CTA = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How long does it take to set up?',
      a: 'Most chatbots are ready within 24-48 hours. We handle all technical setup, including WhatsApp Business API integration, bot training, and testing.',
    },
    {
      q: 'Do I need technical knowledge?',
      a: 'No! Our team handles everything. You just provide business information and we configure the AI chatbot to match your needs.',
    },
    {
      q: 'Can the bot handle multiple languages?',
      a: 'Yes, our AI chatbots support 50+ languages with automatic detection. Your customers can communicate in their preferred language.',
    },
    {
      q: 'What if the bot can\'t answer a question?',
      a: 'The bot seamlessly transfers to a human agent when needed. You maintain full control and can set up escalation rules.',
    },
    {
      q: 'How much does it cost?',
      a: 'Pricing varies based on conversation volume and features. Contact us for a custom quote tailored to your business needs.',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-whatsapp/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <Container>
        {/* Main CTA */}
        <div className="relative bg-gradient-to-br from-whatsapp via-whatsapp-dark to-primary rounded-3xl p-8 md:p-16 text-white overflow-hidden shadow-2xl mb-16">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto animate-float">
                <MessageCircle size={32} />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
              Ready to Automate Your WhatsApp Customer Service?
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of businesses transforming their customer communication with AI-powered WhatsApp chatbots. 
              Start automating today and see results within days.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <WhatsAppButton 
                className="bg-white hover:bg-gray-100 text-whatsapp-dark shadow-2xl hover:shadow-glow-whatsapp"
              />
              <button className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border-2 border-white/30 transition-all duration-300 hover:scale-105 shadow-xl">
                Schedule a Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-yellow-300" />
                <span className="font-semibold">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-yellow-300" />
                <span className="font-semibold">Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-yellow-300" />
                <span className="font-semibold">Setup in 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: MessageCircle,
              title: 'Message on WhatsApp',
              description: 'Experience our AI chatbot firsthand',
              action: 'Chat Now',
              color: 'whatsapp',
              gradient: 'from-whatsapp to-whatsapp-dark',
            },
            {
              icon: Mail,
              title: 'Email Us',
              description: 'contact@sengarinfra.com',
              action: 'Send Email',
              color: 'accent',
              gradient: 'from-accent to-accent-light',
            },
            {
              icon: Phone,
              title: 'Call Us',
              description: 'Speak with our team directly',
              action: 'Schedule Call',
              color: 'primary',
              gradient: 'from-primary to-primary-light',
            },
          ].map((method, index) => {
            const Icon = method.icon

            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-whatsapp transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-medium">
                    {method.description}
                  </p>
                  <button className={`inline-flex items-center gap-2 text-sm font-bold ${method.color === 'whatsapp' ? 'text-whatsapp' : method.color === 'accent' ? 'text-accent' : 'text-primary'} hover:gap-3 transition-all`}>
                    {method.action}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ Section with Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-whatsapp/10 to-accent/10 px-4 py-2 rounded-full mb-6">
              <MessageCircle className="text-whatsapp" size={16} />
              <span className="text-sm font-semibold text-gray-700">Got Questions?</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 text-lg">
              Everything you need to know about our WhatsApp AI chatbot service
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-whatsapp/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-bold text-primary text-lg pr-4">{faq.q}</h4>
                  <ChevronDown 
                    size={24} 
                    className={`flex-shrink-0 text-whatsapp transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-bold text-lg hover:gap-3 transition-all">
              Contact Our Team
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </Container>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton floating />
    </section>
  )
}
