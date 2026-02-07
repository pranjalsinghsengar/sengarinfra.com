'use client'

import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
  floating?: boolean
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '1234567890', // Replace with actual number
  message = 'Hi! I would like to know more about your WhatsApp AI chatbot services.',
  className = '',
  floating = false,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  if (floating) {
    return (
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-4 animate-bounce-slow">
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 pr-12 max-w-xs border border-whatsapp/20">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
              <p className="text-sm font-semibold text-primary mb-1">💬 Need help?</p>
              <p className="text-xs text-gray-600">Chat with us on WhatsApp!</p>
              <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-whatsapp/20"></div>
            </div>
          </div>
        )}

        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-whatsapp/30 animate-pulse"></div>

        {/* Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            relative bg-gradient-to-br from-whatsapp to-whatsapp-dark
            text-white rounded-full p-5
            shadow-2xl hover:shadow-glow-whatsapp
            transition-all duration-300
            hover:scale-110 active:scale-95
            ${className}
          `}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={32} className={isHovered ? 'animate-bounce-slow' : ''} />
          
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse border-2 border-white">
            1
          </div>
        </button>

        {/* Label on hover */}
        <div className={`
          absolute right-full mr-4 top-1/2 -translate-y-1/2 
          bg-white rounded-xl shadow-xl px-4 py-2 whitespace-nowrap
          transition-all duration-300 border border-whatsapp/20
          ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}
        `}>
          <p className="text-sm font-bold text-primary">Chat with us!</p>
          <p className="text-xs text-gray-600">We're online now</p>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-t border-whatsapp/20"></div>
        </div>
      </div>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`
        group relative inline-flex items-center justify-center gap-3
        bg-gradient-to-r from-whatsapp to-whatsapp-dark
        text-white font-bold
        px-8 py-4 rounded-xl
        shadow-xl hover:shadow-glow-whatsapp
        transition-all duration-300
        hover:scale-105 active:scale-95
        overflow-hidden
        ${className}
      `}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      <div className="relative z-10 flex items-center gap-3">
        <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
        <span>Chat on WhatsApp</span>
        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
      </div>
    </button>
  )
}
