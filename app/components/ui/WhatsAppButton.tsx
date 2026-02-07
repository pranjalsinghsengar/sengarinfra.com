'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

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
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  if (floating) {
    return (
      <button
        onClick={handleClick}
        className={`
          fixed bottom-6 right-6 z-50
          bg-whatsapp hover:bg-whatsapp-dark
          text-white rounded-full p-4
          shadow-2xl hover:shadow-whatsapp/50
          transition-all duration-300
          hover:scale-110 active:scale-95
          animate-float
          ${className}
        `}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`
        inline-flex items-center justify-center gap-2
        bg-whatsapp hover:bg-whatsapp-dark
        text-white font-semibold
        px-6 py-3 rounded-lg
        shadow-lg hover:shadow-xl
        transition-all duration-200
        hover:transform hover:scale-105 active:scale-95
        ${className}
      `}
    >
      <MessageCircle size={20} />
      <span>Chat on WhatsApp</span>
    </button>
  )
}

