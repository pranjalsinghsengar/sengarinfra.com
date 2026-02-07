import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import Analytics from './components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SengarInfra - WhatsApp AI Chatbot Solutions | Automate Customer Service',
  description: 'Transform your business with AI-powered WhatsApp chatbots. Automate customer support, boost sales, and provide 24/7 service on WhatsApp Business.',
  keywords: 'WhatsApp chatbot, WhatsApp AI, WhatsApp Business API, AI chatbot, automated customer service, WhatsApp integration, SaaS platform, business automation',
  authors: [{ name: 'SengarInfra' }],
  openGraph: {
    title: 'SengarInfra - WhatsApp AI Chatbot & SaaS Solutions',
    description: 'Automate customer conversations on WhatsApp with AI-powered chatbots',
    url: 'https://chatagent-landing.sengarinfra.com/',
    siteName: 'SengarInfra',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp AI Chatbot Solutions - SengarInfra',
    description: 'Automate WhatsApp customer service with AI',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sengarinfra.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  )
}


