# sengarinfra.com

**SengarInfra** - WhatsApp AI Chatbot & SaaS Solutions

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

## 🚀 About

SengarInfra provides cutting-edge tech services to help businesses scale through:
- 🤖 **WhatsApp AI Chatbots** - Automate customer conversations on WhatsApp with intelligent AI
- 💻 **SaaS Platform Development** - Custom scalable software solutions
- 📈 **Business Automation** - Streamline operations and boost growth

## ✨ Features

### Landing Page Includes:
- ✅ **Hero Section** with interactive WhatsApp chat mockup
- ✅ **Services Section** highlighting WhatsApp AI chatbot as primary service
- ✅ **Features Section** with 8 key benefits
- ✅ **How It Works** - 4-step process timeline
- ✅ **Use Cases** - Industry-specific examples (E-commerce, Healthcare, Real Estate, etc.)
- ✅ **Animated Stats Counter** with scroll-based animation
- ✅ **CTA Sections** with WhatsApp integration
- ✅ **Floating WhatsApp Button** for instant contact
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Complete meta tags and Open Graph
- ✅ **Modern Animations** - Framer Motion & Tailwind animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Animations**: CSS animations + React hooks
- **Font**: Inter (Google Fonts)

## 📦 Project Structure

```
sengarinfra.com/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation
│   │   ├── Hero.tsx            # Hero with WhatsApp mockup
│   │   ├── Services.tsx        # Services grid
│   │   ├── Features.tsx        # Benefits grid
│   │   ├── HowItWorks.tsx      # Process timeline
│   │   ├── UseCases.tsx        # Industry examples
│   │   ├── Stats.tsx           # Animated counters
│   │   ├── CTA.tsx             # Call-to-action sections
│   │   ├── Footer.tsx          # Footer with links
│   │   └── ui/
│   │       ├── Button.tsx      # Reusable button component
│   │       ├── Card.tsx        # Reusable card component
│   │       ├── Container.tsx   # Max-width wrapper
│   │       └── WhatsAppButton.tsx  # WhatsApp CTA button
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Home page
├── public/                    # Static assets
├── LANDING_PAGE_PROMPT.md     # Original design specification
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project**
```bash
cd /Users/sengar/Desktop/test/sengarinfra.com
```

2. **Install dependencies** (if not already installed)
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000) to see the landing page

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
The color scheme is configured in `tailwind.config.ts`:
- **WhatsApp Green**: `#25D366`
- **Primary (Dark Blue)**: `#0F172A`
- **Accent (Purple)**: `#7C3AED`

### Content
Update the following files to customize content:
- **Hero Section**: `app/components/Hero.tsx`
- **Services**: `app/components/Services.tsx`
- **Contact Info**: `app/components/Footer.tsx`
- **WhatsApp Number**: `app/components/ui/WhatsAppButton.tsx` (line 10)

### SEO Metadata
Edit `app/layout.tsx` to update:
- Page title
- Meta description
- Open Graph tags
- Keywords

## 📱 WhatsApp Integration

The site includes multiple WhatsApp touchpoints:
1. **Floating WhatsApp Button** - Bottom right corner
2. **CTA Buttons** - Throughout the page
3. **Contact Section** - Direct WhatsApp link

To configure your WhatsApp number:
1. Open `app/components/ui/WhatsAppButton.tsx`
2. Update the `phoneNumber` default value (line 10)
3. Format: Country code + number (e.g., "1234567890")

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic configuration for Next.js)

### Deploy to Other Platforms
- **Netlify**: Use `next export` for static export
- **AWS Amplify**: Connect GitHub repository
- **Digital Ocean**: Use Docker container

## 📊 Performance

The landing page is optimized for:
- ⚡ Fast loading (< 2 seconds)
- 📱 Mobile-first responsive design
- ♿ Accessibility (WCAG AA compliant)
- 🔍 SEO optimized
- 🎨 Smooth animations

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📝 License

Copyright © 2026 SengarInfra. All rights reserved.

## 📞 Support

For questions or support:
- 📧 Email: contact@sengarinfra.com
- 💬 WhatsApp: [Click to chat](https://wa.me/1234567890)
- 🌐 Website: sengarinfra.com

---

**Built with ❤️ using Next.js 15**
