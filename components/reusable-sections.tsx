'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface StatsCardProps {
  stat: string
  description: string
  company?: string
}

export function StatsCard({ stat, description, company }: StatsCardProps) {
  return (
    <div className="border border-border rounded-lg p-8 bg-card">
      <div className="text-3xl md:text-4xl font-bold text-accent mb-3">{stat}</div>
      <div className="text-muted-foreground mb-4">{description}</div>
      {company && <div className="font-semibold text-foreground">{company}</div>}
    </div>
  )
}

interface BenefitItemProps {
  title: string
  description: string
}

export function BenefitItem({ title, description }: BenefitItemProps) {
  return (
    <div className="flex gap-4">
      <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}

interface FeatureCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  badge?: string
}

export function FeatureCard({ icon, title, description, badge }: FeatureCardProps) {
  return (
    <div className="border border-border rounded-lg p-6 bg-card hover:bg-card/80 transition-colors h-full">
      {badge && (
        <div className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {badge}
        </div>
      )}
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

export function TestimonialCard({ quote, author, role, company, image }: TestimonialProps) {
  return (
    <div className="border border-border rounded-lg p-8 bg-card">
      <p className="text-foreground mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-4">
        {image && (
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <img src={image} alt={author} className="w-full h-full rounded-full object-cover" />
          </div>
        )}
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{role} at {company}</div>
        </div>
      </div>
    </div>
  )
}

interface PricingTierProps {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

export function PricingTier({ name, price, description, features, highlighted = false, cta }: PricingTierProps) {
  return (
    <div className={`border border-border rounded-lg overflow-hidden ${highlighted ? 'ring-2 ring-accent' : ''}`}>
      <div className={`p-8 ${highlighted ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
          {name}
        </h3>
        <div className={`text-4xl font-bold mb-2 ${highlighted ? 'text-accent' : 'text-accent'}`}>
          {price}
        </div>
        <p className={highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
          {description}
        </p>
      </div>
      <div className="p-8 bg-background border-t border-border">
        <ul className="space-y-4 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full ${highlighted ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
          variant={highlighted ? 'default' : 'outline'}
        >
          {cta}
        </Button>
      </div>
    </div>
  )
}

interface ServiceGridProps {
  title: string
  subtitle: string
  services: Array<{
    icon: React.ReactNode
    title: string
    description: string
  }>
  viewAllLink?: string
}

export function ServiceGrid({ title, subtitle, services, viewAllLink }: ServiceGridProps) {
  return (
    <div className="py-12">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        {viewAllLink && (
          <a href={viewAllLink} className="text-accent hover:text-accent/80 transition-colors font-semibold text-sm whitespace-nowrap">
            Se alle tjenester →
          </a>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border border-border rounded-lg p-8 bg-card hover:shadow-lg transition-shadow">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
