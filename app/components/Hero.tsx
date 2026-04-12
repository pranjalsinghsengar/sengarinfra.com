'use client'

import React from 'react'
import { CheckCircle, Zap, Clock, Sparkles, ArrowRight, BarChart3, Bot, Layers } from 'lucide-react'
import { Container } from './ui/Container'

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/5 to-brand/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(124,58,237,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.15),transparent_50%)]"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand/10 to-accent/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-brand/20 hover:border-brand/40 transition-all duration-300 hover:scale-105">
              <Sparkles className="text-brand" size={18} />
              <span className="text-sm font-semibold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                The Ultimate Startup SaaS Platform
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="text-primary block">Scale Faster with</span>
                <span className="bg-gradient-to-r from-brand via-blue-500 to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  AI-Powered CRM
                </span>
                <span className="text-primary block">& Smart Automation</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Unify your sales, marketing, and support. Deploy intelligent multi-channel chatbots and run your Entire Startup from one robust, seamless platform.
              </p>
            </div>

            {/* Value Props Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: BarChart3, text: 'Advanced Analytics', color: 'brand' },
                { icon: Bot, text: 'AI Chatbots', color: 'accent' },
                { icon: Layers, text: 'CRM Pipeline integration', color: 'brand' },
                { icon: Zap, text: 'Workflow Automation', color: 'accent' },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-brand/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color === 'brand' ? 'from-brand/20 to-brand/10' : 'from-accent/20 to-accent/10'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className={item.color === 'brand' ? 'text-brand' : 'text-accent'} size={20} />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative bg-gradient-to-r from-brand to-brand-dark text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Bot size={20} />
                  Start Free Trial
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button className="group bg-white text-primary font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
                Request Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-accent border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {i}K
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">500+ Top Startups</p>
                  <p className="text-xs text-gray-500">Accelerating growth</p>
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
                <p className="text-xs text-gray-500 mt-1">4.9/5 on G2 CRM Tools</p>
              </div>
            </div>
          </div>

          {/* Right Content - Modern SaaS Dashboard Mockup */}
          <div className="relative animate-fade-in-up lg:animate-float" style={{ animationDelay: '200ms' }}>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-accent/20 blur-3xl rounded-full animate-pulse-slow"></div>
            
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-gray-100 hover:shadow-glow-brand transition-all duration-500 overflow-hidden">
              {/* Fake UI Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center shadow-lg">
                    <Layers className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Growth Dashboard</h3>
                    <p className="text-xs text-brand font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
                      Real-time Sync
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 animate-pulse"></div>
                  <div className="w-8 h-8 rounded-full bg-brand/10 animate-pulse"></div>
                </div>
              </div>

              {/* Data Rows */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 relative overflow-hidden group">
                   <div className="absolute right-0 top-0 w-16 h-16 bg-brand/5 rounded-bl-full group-hover:bg-brand/10 transition-colors"></div>
                   <p className="text-sm text-gray-500 mb-1">Active Deals</p>
                   <p className="text-2xl font-bold text-gray-800">$1.2M</p>
                   <div className="mt-2 flex items-center gap-1 text-xs text-brand font-semibold">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      +14.5%
                   </div>
                </div>
                
                <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 relative overflow-hidden group">
                   <div className="absolute right-0 top-0 w-16 h-16 bg-accent/5 rounded-bl-full group-hover:bg-accent/10 transition-colors"></div>
                   <p className="text-sm text-gray-500 mb-1">AI Interactions</p>
                   <p className="text-2xl font-bold text-gray-800">8,542</p>
                   <div className="mt-2 flex items-center gap-1 text-xs text-brand font-semibold">
                      <svg className="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      +22.1%
                   </div>
                </div>
              </div>

              {/* CRM Pipeline Visual */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-700">Pipeline Automation</p>
                
                <div className="flex flex-col gap-2">
                  <div className="h-10 w-full bg-gradient-to-r from-blue-50 to-transparent rounded-lg border border-blue-100 flex items-center px-3 relative overflow-hidden">
                    <div className="w-1/2 h-full absolute left-0 top-0 bg-blue-100/50"></div>
                    <div className="relative z-10 flex w-full justify-between items-center text-xs text-blue-800 font-medium">
                      <span>Lead Captured via AI Bot</span>
                      <span>Just now</span>
                    </div>
                  </div>
                  
                  <div className="h-10 w-full bg-gradient-to-r from-purple-50 to-transparent rounded-lg border border-purple-100 flex items-center px-3 relative overflow-hidden">
                    <div className="w-3/4 h-full absolute left-0 top-0 bg-purple-100/50"></div>
                    <div className="relative z-10 flex w-full justify-between items-center text-xs text-purple-800 font-medium">
                      <span>Qualified & Sync to CRM</span>
                      <span>2m ago</span>
                    </div>
                  </div>

                  <div className="h-10 w-full bg-gradient-to-r from-green-50 to-transparent rounded-lg border border-green-100 flex items-center px-3 relative overflow-hidden">
                    <div className="w-full h-full absolute left-0 top-0 bg-green-100/50"></div>
                    <div className="relative z-10 flex w-full justify-between items-center text-xs text-green-800 font-medium">
                      <span>Meeting Scheduled</span>
                      <span>5m ago</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating Stats Badges */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl px-6 py-4 animate-float border border-brand/20 hover:border-brand/40 transition-colors z-20">
              <p className="text-3xl font-bold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">3x</p>
              <p className="text-xs text-gray-600 font-semibold">Scaling Speed</p>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 animate-float border border-accent/20 hover:border-accent/40 transition-colors z-20" style={{ animationDelay: '1s' }}>
              <p className="text-3xl font-bold bg-gradient-to-r from-accent to-brand bg-clip-text text-transparent">24/7</p>
              <p className="text-xs text-gray-600 font-semibold">AI Lead Gen</p>
            </div>
            
            <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-brand to-brand-dark rounded-2xl shadow-xl px-4 py-3 text-white animate-bounce-slow z-20 hidden md:block">
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-blue-300" />
                <span className="text-sm font-bold">Agents Active</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
