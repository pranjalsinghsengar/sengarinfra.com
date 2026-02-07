// WhatsApp Business API wrapper
// Documentation: https://developers.facebook.com/docs/whatsapp/cloud-api

const WHATSAPP_API_URL = 'https://graph.facebook.com/v18.0'
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID
const ACCESS_TOKEN = process.env.WHATSAPP_API_TOKEN

interface WhatsAppMessage {
  to: string
  text: string
}

interface WhatsAppTemplateMessage {
  to: string
  template: string
  language?: string
  components?: any[]
}

export async function sendWhatsAppMessage({ to, text }: WhatsAppMessage) {
  if (!PHONE_NUMBER_ID || !ACCESS_TOKEN) {
    console.warn('WhatsApp API credentials not configured')
    return { success: false, error: 'API not configured' }
  }

  try {
    const response = await fetch(
      `${WHATSAPP_API_URL}/${PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: to,
          type: 'text',
          text: {
            body: text,
          },
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to send message')
    }

    return { success: true, messageId: data.messages[0].id }
  } catch (error) {
    console.error('WhatsApp message sending failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function sendWhatsAppTemplate({ to, template, language = 'en', components = [] }: WhatsAppTemplateMessage) {
  if (!PHONE_NUMBER_ID || !ACCESS_TOKEN) {
    console.warn('WhatsApp API credentials not configured')
    return { success: false, error: 'API not configured' }
  }

  try {
    const response = await fetch(
      `${WHATSAPP_API_URL}/${PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: to,
          type: 'template',
          template: {
            name: template,
            language: {
              code: language,
            },
            components: components,
          },
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to send template message')
    }

    return { success: true, messageId: data.messages[0].id }
  } catch (error) {
    console.error('WhatsApp template sending failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function sendWhatsAppInteractiveMessage(to: string, buttons: { id: string; title: string }[], bodyText: string) {
  if (!PHONE_NUMBER_ID || !ACCESS_TOKEN) {
    console.warn('WhatsApp API credentials not configured')
    return { success: false, error: 'API not configured' }
  }

  try {
    const response = await fetch(
      `${WHATSAPP_API_URL}/${PHONE_NUMBER_ID}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: to,
          type: 'interactive',
          interactive: {
            type: 'button',
            body: {
              text: bodyText,
            },
            action: {
              buttons: buttons.map(btn => ({
                type: 'reply',
                reply: {
                  id: btn.id,
                  title: btn.title,
                },
              })),
            },
          },
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to send interactive message')
    }

    return { success: true, messageId: data.messages[0].id }
  } catch (error) {
    console.error('WhatsApp interactive message sending failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// AI Response Handler (integrate with OpenAI or your AI service)
export async function generateAIResponse(userMessage: string, context?: any): Promise<string> {
  // TODO: Integrate with OpenAI or your AI service
  // Example with OpenAI:
  /*
  const { OpenAI } = require('openai')
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are a helpful WhatsApp business assistant for SengarInfra.' },
      { role: 'user', content: userMessage }
    ],
  })
  
  return completion.choices[0].message.content
  */

  // Fallback response
  return `Thank you for your message: "${userMessage}". Our team will respond shortly.`
}

