import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false 
}) => {
  return (
    <div
      className={`
        relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50
        ${hover ? 'hover:shadow-2xl hover:-translate-y-2 transition-all duration-500' : ''}
        ${glow ? 'hover:shadow-glow-whatsapp' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
