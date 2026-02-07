import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/, 'Invalid phone number').optional().or(z.literal('')),
  company: z.string().max(100).optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter validation schema
export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// Pricing inquiry schema
export const pricingInquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  plan: z.enum(['starter', 'professional', 'enterprise']),
  conversationVolume: z.number().min(0),
  additionalNotes: z.string().optional(),
})

export type PricingInquiryData = z.infer<typeof pricingInquirySchema>

// Case study download schema
export const caseStudyDownloadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  caseStudyId: z.string(),
})

export type CaseStudyDownloadData = z.infer<typeof caseStudyDownloadSchema>

