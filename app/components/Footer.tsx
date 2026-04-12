'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Rocket, Mail, MapPin, Twitter, Linkedin, Github, Instagram, ArrowUp, Send } from 'lucide-react'
import { Container } from './ui/Container'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubmitMessage('Thanks for subscribing to growth insights! Check your email.')
      setEmail('')
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 3000)
    }, 1000)
  }

  const footerLinks = {
    services: [
      { label: 'Startup CRM', href: '#services' },
      { label: 'AI Workflow Automation', href: '#services' },
      { label: 'Omni-channel Chatbots', href: '#services' },
      { label: 'Custom Enterprise Solutions', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Investors', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Sales', href: '#' },
    ],
    resources: [
      { label: 'Startup Blog', href: '/blog' },
      { label: 'Developer Docs', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Help Center', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Security & Compliance', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white pt-20 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <Container>
        {/* Main Footer Content */}
        <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket size={20} className="text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
                  SengarInfra SaaS
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Empowering high-growth startups with an all-in-one CRM and AI workflow automation platform to scale faster.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <a 
                href="mailto:hello@sengarinfra.com" 
                className="flex items-start gap-3 text-gray-400 hover:text-brand transition-colors group"
              >
                <Mail className="text-brand flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                <span>hello@sengarinfra.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-brand flex-shrink-0 mt-0.5" size={18} />
                <span>San Francisco, CA • Remote Global</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-brand transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative z-10 border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Startup Growth Newsletter</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Get the latest insights on building scalable SaaS pipelines, AI automation, and CRM best practices.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-gray-700 focus:border-brand focus:outline-none text-white placeholder-gray-500 transition-all"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="group bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand text-white font-bold px-8 py-3 rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-glow-brand flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Subscribing...' : (
                  <>
                    Subscribe
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
            {submitMessage && (
              <p className="mt-4 text-brand-light text-sm font-semibold animate-fade-in">
                {submitMessage}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SengarInfra SaaS. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-11 h-11 rounded-full bg-white/5 hover:bg-brand/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                >
                  <Icon size={18} className="text-gray-400" />
                </a>
              )
            })}
          </div>

          {/* Badges */}
          <div className="flex items-center gap-3">
            <div className="bg-white/5 px-4 py-1.5 rounded-full text-xs text-gray-400 border border-gray-800 hover:border-brand/30 transition-colors">
              SOC-2 Certified
            </div>
            <div className="bg-white/5 px-4 py-1.5 rounded-full text-xs text-gray-400 border border-gray-800 hover:border-brand/30 transition-colors">
              Made in SF
            </div>
          </div>
        </div>

        {/* Made with love */}
        <div className="relative z-10 text-center mt-8 text-sm text-gray-500">
          Built with <span className="text-blue-500 animate-pulse">⚙️</span> for ambitious founders
        </div>
      </Container>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-brand text-white flex items-center justify-center shadow-2xl hover:shadow-glow-brand transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  )
}
