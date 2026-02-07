// Google Analytics 4 and Meta Pixel tracking utilities

declare global {
  interface Window {
    gtag: any
    fbq: any
    dataLayer: any
  }
}

// Google Analytics 4 Events
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Specific tracking functions for common events
export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaName} - ${location}`,
  })
}

export const trackFormSubmission = (formName: string, success: boolean) => {
  event({
    action: 'form_submission',
    category: 'conversion',
    label: formName,
    value: success ? 1 : 0,
  })
}

export const trackWhatsAppClick = (location: string) => {
  event({
    action: 'whatsapp_click',
    category: 'engagement',
    label: location,
  })

  // Track as conversion
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION-ID/CONVERSION-LABEL', // Replace with your conversion ID
    })
  }
}

export const trackServiceView = (serviceName: string) => {
  event({
    action: 'service_view',
    category: 'engagement',
    label: serviceName,
  })
}

export const trackScrollDepth = (percentage: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  })
}

export const trackPricingView = (plan: string) => {
  event({
    action: 'pricing_view',
    category: 'engagement',
    label: plan,
  })
}

export const trackDownload = (resource: string) => {
  event({
    action: 'download',
    category: 'engagement',
    label: resource,
  })
}

// Meta Pixel (Facebook) Events
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export const metaPixelPageView = () => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', 'PageView')
  }
}

export const metaPixelEvent = (eventName: string, params?: any) => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', eventName, params)
  }
}

export const trackLead = (value?: number) => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', 'Lead', {
      value: value || 0,
      currency: 'USD',
    })
  }
}

export const trackContact = () => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', 'Contact')
  }
}

// Scroll depth tracking
let scrollDepths = [25, 50, 75, 100]
let trackedDepths = new Set<number>()

export const initScrollTracking = () => {
  if (typeof window === 'undefined') return

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100

    scrollDepths.forEach(depth => {
      if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
        trackedDepths.add(depth)
        trackScrollDepth(depth)
      }
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  
  return () => window.removeEventListener('scroll', handleScroll)
}

// Session duration tracking
let sessionStart = 0

export const initSessionTracking = () => {
  if (typeof window === 'undefined') return

  sessionStart = Date.now()

  const trackSession = () => {
    const duration = Math.floor((Date.now() - sessionStart) / 1000) // in seconds
    event({
      action: 'session_duration',
      category: 'engagement',
      label: 'time_on_site',
      value: duration,
    })
  }

  // Track on page unload
  window.addEventListener('beforeunload', trackSession)

  return () => window.removeEventListener('beforeunload', trackSession)
}

