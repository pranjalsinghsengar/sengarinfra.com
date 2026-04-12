'use client'

import React from 'react'
import { 
  ShoppingCart, 
  Headphones, 
  Users, 
  TrendingUp,
  BarChart,
  Megaphone,
  Briefcase,
  Layers,
  Star
} from 'lucide-react'
import { Container } from './ui/Container'

export const UseCases = () => {
  const useCases = [
    {
      icon: Users,
      industry: 'B2B Sales',
      description: 'Automate lead qualification, schedule demos effortlessly, and track pipeline stages without manual data entry.',
      benefits: ['Close deals 3x faster', 'Zero pipeline leakage', 'Automated follow-ups'],
      color: 'from-brand to-brand-dark',
      gradient: 'from-brand/10 to-brand/5',
      emoji: '💼',
    },
    {
      icon: Megaphone,
      industry: 'Marketing Teams',
      description: 'Run targeted campaigns, score inbound leads using predictive AI, and route hot prospects directly to sales.',
      benefits: ['Higher ROI on ad spend', 'Instant lead routing', 'Cross-channel tracking'],
      color: 'from-accent to-accent-light',
      gradient: 'from-accent/10 to-accent/5',
      emoji: '📈',
    },
    {
      icon: Headphones,
      industry: 'Customer Success',
      description: 'Deflect up to 70% of routine tickets with AI bots, while giving human agents full CRM context for complex issues.',
      benefits: ['24/7 autonomous support', 'Instant CRM context sync', 'Reduce churn by 15%'],
      color: 'from-primary to-primary-light',
      gradient: 'from-primary/10 to-primary/5',
      emoji: '🤝',
    },
    {
      icon: ShoppingCart,
      industry: 'SaaS Startups',
      description: 'Track trial conversions, product usage metrics, and automate onboarding emails directly from the platform.',
      benefits: ['Increase trial-to-paid', 'Product-led growth data', 'Automated onboarding'],
      color: 'from-brand-dark to-accent',
      gradient: 'from-brand/10 to-accent/5',
      emoji: '🚀',
    },
    {
      icon: BarChart,
      title: 'RevOps Engine',
      description: 'Align sales, marketing, and CS with a single source of truth for revenue data and forecasting.',
      benefits: ['Unified reporting', 'Accurate sales forecasting', 'End-to-end visibility'],
      color: 'from-accent to-brand',
      gradient: 'from-accent/10 to-brand/5',
      emoji: '📊',
    },
    {
      icon: Layers,
      industry: 'Founders & Ops',
      description: 'Get a bird\'s-eye view of your entire startup\'s performance, runway, and growth metrics in one dashboard.',
      benefits: ['Real-time growth metrics', 'Resource optimization', 'Data-driven decisions'],
      color: 'from-primary to-brand',
      gradient: 'from-primary/10 to-brand/5',
      emoji: '🧠',
    },
  ]

  const additionalRoles = [
    { icon: Briefcase, name: 'Agency Owners', emoji: '🧑‍💼' },
    { icon: Users, name: 'HR & Recruiting', emoji: '👥' },
  ]

  return (
    <section id="use-cases" className="py-24 bg-gradient-to-br from-gray-50 via-white to-brand/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="text-brand" size={16} />
            <span className="text-sm font-semibold text-gray-700">Startup Departments</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6">
            Built For Your Entire <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Startup</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See how different teams leverage our unified CRM and AI platform to drive growth.
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
                    <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <Icon className="text-white opacity-90" size={32} />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 p-6 pt-2">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-brand transition-colors">
                    {useCase.industry || useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <Star size={14} className="text-brand" fill="currentColor" />
                      Key Value
                    </p>
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-brand text-xs font-bold">✓</span>
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

        {/* Additional Teams */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <span className="text-gray-600 font-semibold">Also serving:</span>
          {additionalRoles.map((role, index) => {
            const Icon = role.icon
            return (
              <div key={index} className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200">
                <span className="text-xl">{role.emoji}</span>
                <Icon className="text-accent" size={18} />
                <span className="text-sm font-semibold text-gray-700">{role.name}</span>
              </div>
            )
          })}
          <div className="flex items-center gap-2 bg-gradient-to-r from-brand to-accent text-white px-5 py-2.5 rounded-full shadow-lg font-bold text-sm hover:scale-105 transition-transform">
            + Cross-Functional Teams
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-gray-200/50">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Proven Results for Startups
            </h3>
            <p className="text-gray-600 text-lg">Real metrics from real founders</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '$2.5M+', label: 'Avg Pipeline Generated', icon: '💰', color: 'from-brand to-brand-dark' },
              { metric: '95%', label: 'CRM Adoption Rate', icon: '🔥', color: 'from-accent to-accent-light' },
              { metric: '60%', label: 'Reduction in Stack Costs', icon: '📉', color: 'from-brand-dark to-primary' },
              { metric: '<5 min', label: 'Setup Time for AI Bot', icon: '⚡', color: 'from-primary to-accent' },
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
        <div className="relative bg-gradient-to-br from-primary via-brand-dark to-brand rounded-3xl p-8 md:p-12 text-white overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6 opacity-30">"</div>
            <p className="text-xl md:text-2xl font-medium mb-8 italic leading-relaxed">
              Consolidating our growth stack into this SaaS platform was the best decision for our startup. 
              The combination of a powerful CRM and autonomous AI agents accelerated our pipeline velocity by 300%.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50"></div>
              <div className="text-left">
                <p className="font-bold text-lg">Alex Chen</p>
                <p className="text-sm text-blue-200">Co-Founder, Synthetix AI</p>
              </div>
            </div>

            {/* Star rating */}
            <div className="flex items-center justify-center gap-1 mt-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
