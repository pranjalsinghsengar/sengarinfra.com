// Email service using Resend (you can also use SendGrid, Nodemailer, etc.)
// Install: npm install resend

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  // If using Resend
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = require('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'SengarInfra <onboarding@sengarinfra.com>',
        to: 'contact@sengarinfra.com',
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      })

      // Send confirmation email to user
      await resend.emails.send({
        from: 'SengarInfra <noreply@sengarinfra.com>',
        to: data.email,
        subject: 'Thank you for contacting SengarInfra',
        html: `
          <h2>Thank you for contacting us!</h2>
          <p>Hi ${data.name},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message:</strong></p>
          <p>${data.message}</p>
          <br>
          <p>Best regards,<br>The SengarInfra Team</p>
        `,
      })

      return { success: true }
    } catch (error) {
      console.error('Email sending failed:', error)
      throw new Error('Failed to send email')
    }
  }

  // Fallback: Log to console (for development)
  console.log('Contact form submission:', data)
  return { success: true }
}

export async function subscribeToNewsletter(email: string) {
  // If using Resend
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = require('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      // Notify admin
      await resend.emails.send({
        from: 'SengarInfra <onboarding@sengarinfra.com>',
        to: 'contact@sengarinfra.com',
        subject: 'New Newsletter Subscription',
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        `,
      })

      // Send confirmation to user
      await resend.emails.send({
        from: 'SengarInfra <newsletter@sengarinfra.com>',
        to: email,
        subject: 'Welcome to SengarInfra Newsletter!',
        html: `
          <h2>Welcome to our newsletter!</h2>
          <p>Thank you for subscribing to SengarInfra's newsletter.</p>
          <p>You'll receive:</p>
          <ul>
            <li>Latest insights on WhatsApp automation</li>
            <li>AI chatbot best practices</li>
            <li>Business growth strategies</li>
            <li>Exclusive offers and updates</li>
          </ul>
          <br>
          <p>Best regards,<br>The SengarInfra Team</p>
          <hr>
          <p style="font-size: 12px; color: #999;">
            To unsubscribe, <a href="#">click here</a>.
          </p>
        `,
      })

      return { success: true }
    } catch (error) {
      console.error('Newsletter subscription failed:', error)
      throw new Error('Failed to subscribe')
    }
  }

  // Fallback: Log to console (for development)
  console.log('Newsletter subscription:', email)
  return { success: true }
}

