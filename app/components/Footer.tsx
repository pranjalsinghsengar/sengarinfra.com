'use client'

import React from 'react'
import Link from 'next/link'
import { MessageCircle, Mail, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react'
import { Container } from './ui/Container'

export const Footer = () => {
  const footerLinks = {
    services: [
      { label: 'WhatsApp AI Chatbot', href: '#services' },
      { label: 'SaaS Development', href: '#services' },
      { label: 'Business Automation', href: '#services' },
      { label: 'Custom Solutions', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Use Cases', href: '#use-cases' },
      { label: 'Pricing', href: '#' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Support Center', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <Container>
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="bg-gradient-to-r from-whatsapp to-accent bg-clip-text text-transparent">
                <span className="text-2xl font-bold">SengarInfra</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with AI-powered WhatsApp chatbots and cutting-edge SaaS solutions 
              to scale and succeed.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="text-whatsapp flex-shrink-0 mt-0.5" size={18} />
                <a href="mailto:contact@sengarinfra.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@sengarinfra.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="text-whatsapp flex-shrink-0 mt-0.5" size={18} />
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  WhatsApp: +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-whatsapp flex-shrink-0 mt-0.5" size={18} />
                <span className="text-gray-400">
                  Serving businesses worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-whatsapp transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-whatsapp transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-whatsapp transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-whatsapp transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Get the latest insights on WhatsApp automation and AI chatbots
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-whatsapp focus:outline-none text-white placeholder-gray-500"
              />
              <button className="bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SengarInfra. All rights reserved.
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
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-whatsapp/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon size={18} className="text-gray-400 hover:text-whatsapp" />
                </a>
              )
            })}
          </div>

          {/* Badges */}
          <div className="flex items-center gap-3">
            <div className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400 border border-gray-800">
              WhatsApp Partner
            </div>
            <div className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400 border border-gray-800">
              ISO Certified
            </div>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Made with <span className="text-red-500">♥</span> for businesses worldwide
        </div>
      </Container>
    </footer>
  )
}
