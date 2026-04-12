'use client'

import React, { useState } from 'react'
import { Rocket, Mail, Phone, ArrowRight, ChevronDown, Sparkles } from 'lucide-react'
import { Container } from './ui/Container'

export const CTA = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How long does it take to deploy the platform?',
      a: 'Most startup environments are ready within 24-48 hours. We handle all data migrations, initial CRM setup, and AI Bot training from your existing documentation.',
    },
    {
      q: 'Do we need a massive engineering team to manage this?',
      a: 'Not at all! The entire platform is built with a no-code visual builder for workflows, making it easy for founders and ops managers to tweak processes directly.',
    },
    {
      q: 'What integrations do you support?',
      a: 'We natively support 100+ tools including Slack, Google Workspace, Stripe, Jira, and various HR tools.',
    },
    {
      q: 'Are the AI bots secure with our customer data?',
      a: 'Absolutely. We employ SOC-2 Type II compliant encryption and strict role-based access. Your data is isolated and never used to train massive public language models out of your control.',
    },
    {
      q: 'How is pricing structured for early-stage startups?',
      a: 'We have special pricing tiers for pre-seed and seed startups to help you get off the ground without burning through your runway. Contact our team to see if you qualify.',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <Container>
        {/* Main CTA */}
        <div className="relative bg-gradient-to-br from-brand via-brand-dark to-primary rounded-3xl p-8 md:p-16 text-white overflow-hidden shadow-2xl mb-16">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto animate-float">
                <Rocket size={32} />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
              Ready to Accelerate Your Startup's Growth?
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join visionary founders using SengarInfra SaaS to blend perfect CRM execution with next-generation AI automation. 
              Start building your growth engine today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group inline-flex items-center justify-center gap-2 bg-white text-brand-dark hover:bg-gray-100 font-extrabold px-8 py-4 rounded-xl shadow-2xl hover:shadow-glow-brand transition-all duration-300 hover:scale-105">
                Start 14-Day Free Trial
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border-2 border-white/30 transition-all duration-300 hover:scale-105 shadow-xl">
                Book a Platform Demo
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-blue-300" />
                <span className="font-semibold">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-blue-300" />
                <span className="font-semibold">White-glove onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-blue-300" />
                <span className="font-semibold">24/7 dedicated support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {[
            {
              icon: Mail,
              title: 'Email Sales',
              description: 'sales@sengarinfra.com',
              action: 'Send Email',
              color: 'brand',
              gradient: 'from-brand to-brand-dark',
            },
            {
              icon: Phone,
              title: 'Call Enterprise Team',
              description: 'Speak with our specialists',
              action: 'Schedule Call',
              color: 'accent',
              gradient: 'from-accent to-accent-light',
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
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-brand transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-medium">
                    {method.description}
                  </p>
                  <button className={`inline-flex items-center gap-2 text-sm font-bold ${method.color === 'brand' ? 'text-brand' : 'text-accent'} hover:gap-3 transition-all`}>
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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand/10 to-accent/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-brand" size={16} />
              <span className="text-sm font-semibold text-gray-700">Got Questions?</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 text-lg">
              Everything you need to know about scaling with our platform
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-brand/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-bold text-primary text-lg pr-4">{faq.q}</h4>
                  <ChevronDown 
                    size={24} 
                    className={`flex-shrink-0 text-brand transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
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
              Contact Our Enterprise Team
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
