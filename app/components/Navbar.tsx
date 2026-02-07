'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'
import { Container } from './ui/Container'
import { Button } from './ui/Button'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#use-cases', label: 'Use Cases' },
  ]

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-xl py-3 border-b border-gray-200/50' 
          : 'bg-transparent py-6'}
      `}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-whatsapp to-accent rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-whatsapp to-accent rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                <Sparkles className="text-white" size={20} />
              </div>
            </div>
            <div>
              <span className={`text-2xl font-extrabold transition-colors ${isScrolled ? 'bg-gradient-to-r from-whatsapp via-accent to-primary bg-clip-text text-transparent' : 'text-white'}`}>
                SengarInfra
              </span>
              <div className="text-[10px] font-semibold text-whatsapp -mt-1">
                AI AUTOMATION
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  relative px-4 py-2 font-semibold transition-all duration-300 rounded-lg
                  ${isScrolled 
                    ? 'text-gray-700 hover:text-whatsapp' 
                    : 'text-white/90 hover:text-white'}
                  group
                `}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-whatsapp to-accent rounded-full group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            ))}
            
            <div className="ml-4 flex items-center gap-3">
              <button className={`
                font-semibold px-4 py-2 rounded-lg transition-all duration-300
                ${isScrolled 
                  ? 'text-gray-700 hover:text-accent' 
                  : 'text-white/90 hover:text-white'}
              `}>
                Sign In
              </button>
              
              <button className="group relative bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white font-bold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-glow-whatsapp transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-whatsapp-dark to-whatsapp opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`
              md:hidden p-2 rounded-lg transition-colors
              ${isScrolled ? 'text-gray-700' : 'text-white'}
            `}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4 animate-slide-down">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 space-y-4 border border-gray-200/50">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 hover:text-whatsapp font-semibold py-3 px-4 rounded-lg hover:bg-whatsapp/5 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button className="w-full text-gray-700 hover:text-accent font-semibold py-3 px-4 rounded-lg hover:bg-accent/5 transition-all">
                  Sign In
                </button>
                <button className="w-full bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-glow-whatsapp transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}
