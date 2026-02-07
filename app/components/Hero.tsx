'use client'

import React from 'react'
import { MessageCircle, CheckCircle, Zap, Clock, Sparkles, ArrowRight } from 'lucide-react'
import { Container } from './ui/Container'
import { Button } from './ui/Button'

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/5 to-whatsapp/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(124,58,237,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,211,102,0.15),transparent_50%)]"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-whatsapp/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-whatsapp/10 to-accent/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-whatsapp/20 hover:border-whatsapp/40 transition-all duration-300 hover:scale-105">
              <Sparkles className="text-whatsapp" size={18} />
              <span className="text-sm font-semibold bg-gradient-to-r from-whatsapp to-accent bg-clip-text text-transparent">
                AI-Powered WhatsApp Automation Platform
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="text-primary block">Automate Your</span>
                <span className="bg-gradient-to-r from-whatsapp via-whatsapp-dark to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  WhatsApp Business
                </span>
                <span className="text-primary block">with AI Chatbots</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Transform customer conversations into revenue. Our AI chatbots handle inquiries, 
                generate leads, and close sales on <span className="font-semibold text-whatsapp">WhatsApp</span> — 
                where your customers already are.
              </p>
            </div>

            {/* Value Props Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: MessageCircle, text: 'Instant AI Responses', color: 'whatsapp' },
                { icon: Clock, text: '24/7 Availability', color: 'accent' },
                { icon: Zap, text: 'Unlimited Conversations', color: 'whatsapp' },
                { icon: CheckCircle, text: 'Easy Integration', color: 'accent' },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-whatsapp/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color === 'whatsapp' ? 'from-whatsapp/20 to-whatsapp/10' : 'from-accent/20 to-accent/10'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className={item.color === 'whatsapp' ? 'text-whatsapp' : 'text-accent'} size={20} />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <MessageCircle size={20} />
                  Get Your WhatsApp Bot
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-whatsapp-dark to-whatsapp opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button className="group bg-white text-primary font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                Watch Live Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-whatsapp to-accent border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {i}K
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">100+ Happy Clients</p>
                  <p className="text-xs text-gray-500">Trusted worldwide</p>
                </div>
              </div>

              <div className="border-l border-gray-200 pl-8">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">4.9/5 from 200+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced WhatsApp Mockup */}
          <div className="relative animate-fade-in-up lg:animate-float" style={{ animationDelay: '200ms' }}>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-whatsapp/20 to-accent/20 blur-3xl rounded-full animate-pulse-slow"></div>
            
            <div className="relative bg-white rounded-[3rem] shadow-2xl p-6 max-w-sm mx-auto hover:shadow-glow-whatsapp transition-all duration-500">
              {/* WhatsApp Header */}
              <div className="bg-gradient-to-r from-whatsapp to-whatsapp-dark rounded-t-3xl px-5 py-4 flex items-center gap-3 shadow-lg">
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/50 pulse-ring">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold text-lg">Your Business AI</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <p className="text-white/90 text-sm">Online • Lightning fast</p>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>

              {/* Chat Messages with enhanced styling */}
              <div className="p-5 space-y-4 bg-gradient-to-br from-gray-50 to-whatsapp-50/30 min-h-[450px] rounded-b-3xl">
                {/* Customer Message */}
                <div className="flex justify-start animate-slide-right">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-5 py-3 shadow-md max-w-[80%] hover:shadow-lg transition-shadow">
                    <p className="text-sm text-gray-800 font-medium">Hi! Do you provide AI chatbot services for WhatsApp?</p>
                    <span className="text-xs text-gray-400 mt-1 block">10:23 AM</span>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-br from-whatsapp to-whatsapp-dark rounded-2xl rounded-tr-sm px-5 py-3 shadow-lg max-w-[85%]">
                    <div className="flex gap-1.5 py-1">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex justify-end animate-slide-left">
                  <div className="bg-gradient-to-br from-whatsapp to-whatsapp-dark rounded-2xl rounded-tr-sm px-5 py-3 shadow-lg max-w-[85%] hover:shadow-xl transition-shadow">
                    <p className="text-sm text-white font-medium leading-relaxed">
                      Yes! 🎉 We build custom AI chatbots for WhatsApp. We can automate your customer service 24/7. Would you like to know more?
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-white/80">10:23 AM</span>
                      <div className="flex gap-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Message */}
                <div className="flex justify-start animate-slide-right" style={{ animationDelay: '100ms' }}>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-5 py-3 shadow-md max-w-[80%] hover:shadow-lg transition-shadow">
                    <p className="text-sm text-gray-800 font-medium">Yes! How much does it cost? 💰</p>
                    <span className="text-xs text-gray-400 mt-1 block">10:24 AM</span>
                  </div>
                </div>

                {/* Bot Response with Quick Replies */}
                <div className="flex justify-end animate-slide-left" style={{ animationDelay: '150ms' }}>
                  <div className="bg-gradient-to-br from-whatsapp to-whatsapp-dark rounded-2xl rounded-tr-sm px-5 py-3 shadow-lg max-w-[85%] hover:shadow-xl transition-shadow">
                    <p className="text-sm text-white font-medium mb-3">
                      We offer flexible pricing based on your needs. Choose what you'd like to explore:
                    </p>
                    <div className="space-y-2">
                      <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-sm py-2.5 px-4 rounded-lg border border-white/30 transition-all duration-200 hover:scale-105 flex items-center gap-2">
                        <span>📅</span>
                        <span className="font-medium">Schedule a Demo</span>
                      </button>
                      <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-sm py-2.5 px-4 rounded-lg border border-white/30 transition-all duration-200 hover:scale-105 flex items-center gap-2">
                        <span>💰</span>
                        <span className="font-medium">View Pricing Plans</span>
                      </button>
                      <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-sm py-2.5 px-4 rounded-lg border border-white/30 transition-all duration-200 hover:scale-105 flex items-center gap-2">
                        <span>💬</span>
                        <span className="font-medium">Chat with Sales</span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-white/80">10:24 AM</span>
                      <div className="flex gap-0.5">
                        <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Input */}
              <div className="mt-4 bg-gray-100 rounded-full px-5 py-3 flex items-center gap-3 shadow-inner">
                <button className="text-gray-400 hover:text-whatsapp transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <div className="flex-1 text-sm text-gray-500">
                  Type a message...
                </div>
                <button className="w-10 h-10 bg-gradient-to-br from-whatsapp to-whatsapp-dark rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110">
                  <MessageCircle className="text-white" size={18} />
                </button>
              </div>
            </div>

            {/* Floating Stats Badges */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-4 animate-float border border-whatsapp/20 hover:border-whatsapp/40 transition-colors">
              <p className="text-3xl font-bold bg-gradient-to-r from-whatsapp to-accent bg-clip-text text-transparent">98%</p>
              <p className="text-xs text-gray-600 font-semibold">Response Rate</p>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 animate-float border border-accent/20 hover:border-accent/40 transition-colors" style={{ animationDelay: '1s' }}>
              <p className="text-3xl font-bold bg-gradient-to-r from-accent to-whatsapp bg-clip-text text-transparent">24/7</p>
              <p className="text-xs text-gray-600 font-semibold">Always Online</p>
            </div>

            <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-whatsapp to-whatsapp-dark rounded-2xl shadow-xl px-5 py-3 text-white animate-bounce-slow">
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-yellow-300" />
                <span className="text-sm font-bold">Instant AI</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
