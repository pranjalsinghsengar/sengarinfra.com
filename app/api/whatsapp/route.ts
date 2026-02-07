import { NextRequest, NextResponse } from 'next/server'

// This is a webhook handler for WhatsApp Business API
// You'll need to configure this URL in your Meta Business Manager

export async function GET(request: NextRequest) {
  // Webhook verification
  const mode = request.nextUrl.searchParams.get('hub.mode')
  const token = request.nextUrl.searchParams.get('hub.verify_token')
  const challenge = request.nextUrl.searchParams.get('hub.challenge')

  // Verify token should match the one you set in Meta Business Manager
  const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'your_verify_token'

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified')
    return new NextResponse(challenge, { status: 200 })
  }

  return NextResponse.json({ error: 'Verification failed' }, { status: 403 })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Process incoming WhatsApp messages
    console.log('Incoming webhook:', JSON.stringify(body, null, 2))

    // Handle different webhook events
    if (body.entry && body.entry[0].changes && body.entry[0].changes[0].value.messages) {
      const message = body.entry[0].changes[0].value.messages[0]
      const from = message.from // Sender's phone number
      const messageBody = message.text?.body // Message text

      console.log(`Message from ${from}: ${messageBody}`)

      // TODO: Process message with AI and send response
      // await sendWhatsAppMessage(from, 'Thank you for your message!')
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({ status: 'ok' }, { status: 200 })
  } catch (error) {
    console.error('WhatsApp webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}

