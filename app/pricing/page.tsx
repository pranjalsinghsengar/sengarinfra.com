import type { Metadata } from 'next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Container } from '../components/ui/Container'
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Pricing - WhatsApp AI Chatbot Plans | SengarInfra',
  description: 'Flexible pricing plans for WhatsApp AI chatbot solutions. Choose the perfect plan for your business size and scale as you grow.',
}

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 299,
      period: '/month',
      description: 'Perfect for small businesses getting started with automation',
      features: [
        'Up to 5,000 conversations/month',
        'WhatsApp Business API integration',
        'Basic AI chatbot',
        'Email support',
        '10 custom responses',
        'Analytics dashboard',
        'Single WhatsApp number',
      ],
      cta: 'Start Free Trial',
      popular: false,
      color: 'from-accent to-accent-light',
    },
    {
      name: 'Professional',
      icon: Star,
      price: 699,
      period: '/month',
      description: 'For growing businesses that need advanced features',
      features: [
        'Up to 25,000 conversations/month',
        'Everything in Starter',
        'Advanced AI with NLP',
        'Priority support',
        'Unlimited custom responses',
        'CRM integration',
        'Multi-language support',
        'Custom branding',
        'API access',
      ],
      cta: 'Get Started',
      popular: true,
      color: 'from-whatsapp to-whatsapp-dark',
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific requirements',
      features: [
        'Unlimited conversations',
        'Everything in Professional',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom AI training',
        'Multiple WhatsApp numbers',
        'Advanced analytics',
        'White-label solution',
        'SLA guarantee',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-primary to-accent',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-light to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-whatsapp rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="text-whatsapp" size={16} />
              <span className="text-sm font-semibold">Flexible Pricing</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Choose Your Perfect Plan
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Start small and scale as you grow. All plans include core WhatsApp AI features.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-whatsapp" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-whatsapp" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-whatsapp" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-whatsapp/5">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    plan.popular ? 'ring-2 ring-whatsapp scale-105 z-10' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-whatsapp to-whatsapp-dark text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

                  <div className="mb-8">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className="text-5xl font-bold text-primary">${plan.price}</span>
                        <span className="text-gray-600">{plan.period}</span>
                      </>
                    ) : (
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    )}
                  </div>

                  <button
                    className={`w-full py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-whatsapp to-whatsapp-dark'
                        : 'bg-gradient-to-r ' + plan.color
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-whatsapp flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Custom Enterprise CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Need a custom solution?</p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Talk to Sales
              <ArrowRight size={20} />
            </button>
          </div>
        </Container>
      </section>

      <Footer />
      <WhatsAppButton floating />
    </main>
  )
}

