import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactEmail } from '@/app/lib/email'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, number[]>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60000 // 1 minute
  const maxRequests = 1

  const requests = rateLimitMap.get(ip) || []
  const recentRequests = requests.filter(time => now - time < windowMs)

  if (recentRequests.length >= maxRequests) {
    return false
  }

  recentRequests.push(now)
  rateLimitMap.set(ip, recentRequests)

  // Clean up old entries
  if (rateLimitMap.size > 1000) {
    const entries = Array.from(rateLimitMap.entries())
    entries.forEach(([key, times]) => {
      if (times.every(time => now - time > windowMs)) {
        rateLimitMap.delete(key)
      }
    })
  }

  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Check rate limit
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Send email
    await sendContactEmail(validatedData)

    return NextResponse.json(
      { message: 'Thank you for contacting us! We will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}

