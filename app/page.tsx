import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { UseCases } from './components/UseCases'
import { Stats } from './components/Stats'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <HowItWorks />
      <UseCases />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}

