'use client'

import React from 'react'
import { 
  Database, 
  Brain, 
  Settings, 
  TrendingUp, 
  Link2, 
  Share2,
  BarChart3,
  ShieldCheck,
  Star
} from 'lucide-react'
import { Container } from './ui/Container'

export const Features = () => {
  const features = [
    {
      icon: Database,
      title: 'Unified Startup Data',
      description: 'Centralize all your customer interactions, leads, and sales pipelines in one view.',
      color: 'from-brand/20 to-brand/10',
      iconColor: 'text-brand'
    },
    {
      icon: Brain,
      title: 'Predictive AI',
      description: 'Leverage machine learning to score leads and predict the probability of closing deals.',
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent'
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Build complex automation rules visually without writing a single line of code.',
      color: 'from-brand/20 to-brand/10',
      iconColor: 'text-brand'
    },
    {
      icon: TrendingUp,
      title: 'Infinite Scale',
      description: 'Built on a microservices architecture that grows effortlessly alongside your startup.',
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent'
    },
    {
      icon: Link2,
      title: '1-Click Integrations',
      description: 'Sync effortlessly with Slack, Stripe, Gmail, and 100+ other essential startup tools.',
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: Share2,
      title: 'Omnichannel Routing',
      description: 'Intelligently route chats from Website, WhatsApp, and Socials to the right agent.',
      color: 'from-brand/20 to-brand/10',
      iconColor: 'text-brand'
    },
    {
      icon: BarChart3,
      title: 'Custom Dashboards',
      description: 'Visualize your MRR, churn rate, and AI agent deflection metrics in real-time.',
      color: 'from-accent/20 to-accent/10',
      iconColor: 'text-accent'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Keep your proprietary data safe with end-to-end encryption and SOC-2 compliance.',
      color: 'from-primary/20 to-primary/10',
      iconColor: 'text-primary'
    },
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-white via-gray-50 to-brand/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Star className="text-brand" size={16} />
            <span className="text-sm font-semibold text-gray-700">Platform Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6">
            Everything You Need To <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Dominate</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive suite of tools specifically engineered for modern SaaS and Tech Startups.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-50/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className={feature.iconColor} size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-brand transition-colors">
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
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-bl-full blur-2xl"></div>
          <div className="grid md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { value: '10M+', label: 'API Requests/Day', icon: '⚡' },
              { value: '99.9%', label: 'Platform Uptime', icon: '🛡️' },
              { value: '24/7', label: 'AI Agent Activity', icon: '🤖' },
              { value: '40hrs', label: 'Saved Per Week', icon: '⏳' },
            ].map((stat, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand via-blue-500 to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Platform Section */}
        <div className="relative bg-gradient-to-br from-brand via-brand-dark to-primary rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Why SengarInfra SaaS?
              </h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Stop piecing together disparate tools. We give startups a unified, massively scalable engine that blends CRM with state-of-the-art AI automation out of the box.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { stat: '1 Unified', label: 'Data Source', icon: '🎯' },
                { stat: '3x', label: 'Sales Velocity', icon: '🚀' },
                { stat: '#1', label: 'For Tech Startups', icon: '🏆' },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 shadow-xl"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-4xl font-bold mb-2 text-white">{item.stat}</div>
                  <p className="text-sm text-blue-100 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
