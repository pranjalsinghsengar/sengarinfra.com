'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Container } from './ui/Container'

interface StatItemProps {
  end: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

const StatItem: React.FC<StatItemProps> = ({ end, suffix = '', prefix = '', label, duration = 2000 }) => {
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
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-whatsapp via-accent to-primary bg-clip-text text-transparent mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-600 text-sm md:text-base">{label}</p>
    </div>
  )
}

export const Stats = () => {
  const stats = [
    { end: 100, suffix: '+', label: 'Happy Clients', duration: 2000 },
    { end: 50000, suffix: '+', label: 'Conversations Handled', duration: 2500 },
    { end: 99, suffix: '%', label: 'Customer Satisfaction', duration: 2000 },
    { end: 24, suffix: '/7', label: 'Always Available', duration: 1500 },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Numbers That Speak
          </h2>
          <p className="text-xl text-white/80">
            Real results from businesses using our WhatsApp AI solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              duration={stat.duration}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

