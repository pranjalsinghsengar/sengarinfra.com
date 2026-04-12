'use client'

import React, { useEffect, useState, useRef } from 'react'
import { TrendingUp } from 'lucide-react'
import { Container } from './ui/Container'

interface StatItemProps {
  end: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
  icon: string
}

const StatItem: React.FC<StatItemProps> = ({ end, suffix = '', prefix = '', label, duration = 2000, icon }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const increment = end / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="group text-center hover:scale-105 transition-all duration-300">
      <div className="text-6xl mb-4">{icon}</div>
      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-brand via-blue-400 to-accent bg-clip-text text-transparent mb-3">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-white/80 text-base md:text-lg font-semibold">{label}</p>
    </div>
  )
}

export const Stats = () => {
  const stats = [
    { end: 500, suffix: '+', label: 'Startups Scaling', duration: 2000, icon: '🚀' },
    { prefix: '$', end: 1, suffix: 'B+', label: 'Pipeline Managed', duration: 2500, icon: '💰' },
    { end: 10, suffix: 'M+', label: 'Tasks Automated', duration: 2000, icon: '⚡' },
    { end: 99, suffix: '.9%', label: 'Platform Uptime', duration: 1500, icon: '🛡️' },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-light to-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative z-10">
   
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <TrendingUp className="text-brand-light" size={16} />
              <span className="text-sm font-semibold">Platform Impact</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Empowering High-Growth Startups
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Real momentum achieved by companies running on SengarInfra SaaS
            </p>
          </div>

   
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                end={stat.end}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                duration={stat.duration}
                icon={stat.icon}
              />
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-lg text-white/80 mb-6">
              Join top-tier founders building the next generation of decacorns.
            </p>
            <button className="group bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-glow-brand transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                Start Free Trial
                <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
