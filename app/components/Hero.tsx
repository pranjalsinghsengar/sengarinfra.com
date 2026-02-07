'use client'

import React from 'react'
import { MessageCircle, CheckCircle, Zap, Clock } from 'lucide-react'
import { Container } from './ui/Container'
import { Button } from './ui/Button'

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-whatsapp/5">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-whatsapp/10 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-whatsapp/10 text-whatsapp-dark px-4 py-2 rounded-full text-sm font-semibold">
                🚀 AI-Powered WhatsApp Automation
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Automate Customer Service on{' '}
              <span className="bg-gradient-to-r from-whatsapp to-whatsapp-dark bg-clip-text text-transparent">
                WhatsApp
              </span>{' '}
              with AI
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We build intelligent AI chatbots that integrate seamlessly with WhatsApp Business - 
              handling customer inquiries, generating leads, and closing sales while you focus on 
              growing your business.
            </p>

            {/* Value Props */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MessageCircle, text: 'Responds instantly to every message' },
                { icon: Clock, text: 'Works 24/7 without breaks' },
                { icon: Zap, text: 'Handles unlimited conversations' },
                { icon: CheckCircle, text: 'Integrates with your systems' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className="text-whatsapp flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" size="lg">
                Get Your WhatsApp Bot
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-whatsapp border-2 border-white"></div>
                  ))}
                </div>
                <span>Trusted by 100+ businesses</span>
              </div>
            </div>
          </div>

          {/* Right Content - WhatsApp Mockup */}
          <div className="relative animate-slide-up lg:animate-float">
            <div className="relative bg-white rounded-3xl shadow-2xl p-4 max-w-sm mx-auto">
              {/* WhatsApp Header */}
              <div className="bg-whatsapp rounded-t-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Your Business AI</p>
                  <p className="text-white/80 text-xs">Online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 space-y-3 bg-gray-50 min-h-[400px]">
                {/* Customer Message */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-800">Hi! Do you provide AI chatbot services?</p>
                    <span className="text-xs text-gray-400">10:23 AM</span>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex justify-end">
                  <div className="bg-whatsapp/90 rounded-lg rounded-tr-none px-4 py-2 shadow-sm max-w-[80%]">
                    <p className="text-sm text-white">Yes! We build custom AI chatbots for WhatsApp. We can automate your customer service 24/7. Would you like to know more?</p>
                    <span className="text-xs text-white/70">10:23 AM ✓✓</span>
                  </div>
                </div>

                {/* Customer Message */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-800">Yes! How much does it cost?</p>
                    <span className="text-xs text-gray-400">10:24 AM</span>
                  </div>
                </div>

                {/* Bot Response with Quick Replies */}
                <div className="flex justify-end">
                  <div className="bg-whatsapp/90 rounded-lg rounded-tr-none px-4 py-2 shadow-sm max-w-[80%]">
                    <p className="text-sm text-white">We offer flexible pricing based on your needs. Would you like to:</p>
                    <div className="mt-2 space-y-1">
                      <button className="w-full bg-white/20 hover:bg-white/30 text-white text-xs py-1 px-2 rounded border border-white/30">
                        📅 Schedule a Demo
                      </button>
                      <button className="w-full bg-white/20 hover:bg-white/30 text-white text-xs py-1 px-2 rounded border border-white/30">
                        💰 View Pricing
                      </button>
                    </div>
                    <span className="text-xs text-white/70 block mt-1">10:24 AM ✓✓</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Input (decorative) */}
              <div className="bg-gray-100 rounded-b-2xl px-4 py-2 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-400">
                  Type a message...
                </div>
                <div className="w-8 h-8 bg-whatsapp rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white" size={16} />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-2 animate-float">
              <p className="text-sm font-semibold text-primary">98% Response Rate</p>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg px-4 py-2 animate-float" style={{ animationDelay: '1s' }}>
              <p className="text-sm font-semibold text-whatsapp">24/7 Available</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
