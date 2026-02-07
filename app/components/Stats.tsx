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
      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-whatsapp via-accent to-primary bg-clip-text text-transparent mb-3">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-600 text-base md:text-lg font-semibold">{label}</p>
    </div>
  )
}

export const Stats = () => {
  const stats = [
    { end: 100, suffix: '+', label: 'Happy Clients', duration: 2000, icon: '👥' },
    { end: 50000, suffix: '+', label: 'Conversations Handled', duration: 2500, icon: '💬' },
    { end: 99, suffix: '%', label: 'Customer Satisfaction', duration: 2000, icon: '⭐' },
    { end: 24, suffix: '/7', label: 'Always Available', duration: 1500, icon: '🤖' },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-light to-accent text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-whatsapp rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <TrendingUp className="text-whatsapp" size={16} />
              <span className="text-sm font-semibold">Our Impact</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Numbers That Speak
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Real results from businesses using our WhatsApp AI solutions
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                duration={stat.duration}
                icon={stat.icon}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 text-center">
            <p className="text-lg text-white/80 mb-6">
              Join the growing list of businesses transforming their customer service
            </p>
            <button className="group bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-glow-whatsapp transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                Get Started Today
                <TrendingUp size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
