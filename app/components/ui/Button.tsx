import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  icon,
}) => {
  const baseStyles = 'group relative inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary-light text-white shadow-xl hover:shadow-2xl',
    secondary: 'bg-gradient-to-r from-accent to-accent-light text-white shadow-xl hover:shadow-glow-accent',
    whatsapp: 'bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white shadow-xl hover:shadow-glow-whatsapp',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-xl',
    ghost: 'text-primary hover:bg-primary/5',
  }
  
  const sizes = {
    sm: 'px-5 py-2.5 text-sm gap-2',
    md: 'px-7 py-3.5 text-base gap-2',
    lg: 'px-9 py-4 text-lg gap-3',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  const content = (
    <>
      {/* Shimmer effect for gradient buttons */}
      {(variant === 'primary' || variant === 'secondary' || variant === 'whatsapp') && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="group-hover:rotate-12 transition-transform">{icon}</span>}
        {children}
      </span>
    </>
  )
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }
  
  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
