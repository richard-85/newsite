'use client'

import { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, AlertCircle, Info, CheckCircle2 } from 'lucide-react'

// ===== CARD COMPONENTS =====

interface SimpleCardProps {
  title: string
  description: string
  icon?: ReactNode
  onClick?: () => void
}

export function SimpleCard({ title, description, icon, onClick }: SimpleCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-200 cursor-pointer hover:border-accent"
    >
      {icon && <div className="mb-4 text-accent">{icon}</div>}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

interface HoverCardProps {
  title: string
  description: string
  icon: ReactNode
  gradient?: boolean
}

export function HoverCard({ title, description, icon, gradient = true }: HoverCardProps) {
  return (
    <div className={`relative bg-card border border-border rounded-lg p-8 overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-accent ${gradient ? 'hover:bg-gradient-to-br hover:from-accent/5 hover:to-transparent' : ''}`}>
      <div className="relative z-10">
        <div className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{description}</p>
        <div className="mt-4 flex items-center text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          Lær mer
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </div>
  )
}

interface ImageCardProps {
  image: string
  title: string
  description: string
  alt?: string
  badge?: string
}

export function ImageCard({ image, title, description, alt = 'Card image', badge }: ImageCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-accent text-accent-foreground">{badge}</Badge>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}

// ===== SECTION HEADERS =====

interface SectionHeaderProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  align?: 'left' | 'center' | 'right'
}

export function SectionHeader({ title, subtitle, ctaText, ctaLink, align = 'center' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>}
      {ctaText && ctaLink && (
        <a href={ctaLink} className="text-accent hover:text-accent/80 transition-colors font-semibold inline-flex items-center gap-2">
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </div>
  )
}

interface GradientHeaderProps {
  title: string
  subtitle?: string
  gradient?: 'accent' | 'primary' | 'secondary'
}

export function GradientHeader({ title, subtitle, gradient = 'accent' }: GradientHeaderProps) {
  const gradientClass = gradient === 'accent' ? 'from-accent to-accent/60' : gradient === 'primary' ? 'from-primary to-primary/60' : 'from-secondary to-secondary/60'
  return (
    <div className="mb-12 text-center">
      <h2 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent mb-4`}>
        {title}
      </h2>
      {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

// ===== HERO BANNER COMPONENTS =====

interface HeroBannerProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  secondaryCta?: string
  secondaryCTALink?: string
  background?: 'gradient' | 'solid'
  backgroundImage?: string
}

export function HeroBanner({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCta,
  secondaryCTALink,
  background = 'gradient',
  backgroundImage,
}: HeroBannerProps) {
  return (
    <section
      className={`py-20 md:py-32 rounded-lg overflow-hidden relative ${
        background === 'gradient'
          ? 'bg-gradient-to-r from-primary/90 to-primary/70'
          : 'bg-primary'
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      <div className="relative z-10 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctaText && ctaLink && (
            <a href={ctaLink}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6">
                {ctaText}
              </Button>
            </a>
          )}
          {secondaryCta && secondaryCTALink && (
            <a href={secondaryCTALink}>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6">
                {secondaryCta}
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

// ===== LIST & COMPARISON COMPONENTS =====

interface StepCounterProps {
  steps: Array<{
    number: number
    title: string
    description: string
  }>
  variant?: 'vertical' | 'horizontal'
}

export function StepCounter({ steps, variant = 'vertical' }: StepCounterProps) {
  return (
    <div className={variant === 'horizontal' ? 'flex gap-8 overflow-x-auto pb-4' : 'space-y-6'}>
      {steps.map((step) => (
        <div key={step.number} className={variant === 'horizontal' ? 'flex-shrink-0 w-48' : 'flex gap-4'}>
          <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg`}>
            {step.number}
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

interface ComparisonTableProps {
  features: Array<{
    feature: string
    basic: boolean
    pro: boolean
    enterprise: boolean
  }>
}

export function ComparisonTable({ features }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-6 font-bold text-foreground">Feature</th>
            <th className="text-center py-4 px-6 font-bold text-foreground">Basic</th>
            <th className="text-center py-4 px-6 font-bold text-accent">Pro</th>
            <th className="text-center py-4 px-6 font-bold text-foreground">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
              <td className="py-4 px-6 text-foreground font-medium">{feature.feature}</td>
              <td className="text-center py-4 px-6">
                {feature.basic ? (
                  <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                ) : (
                  <div className="w-5 h-5 border-2 border-border rounded-full mx-auto" />
                )}
              </td>
              <td className="text-center py-4 px-6">
                {feature.pro ? (
                  <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                ) : (
                  <div className="w-5 h-5 border-2 border-border rounded-full mx-auto" />
                )}
              </td>
              <td className="text-center py-4 px-6">
                {feature.enterprise ? (
                  <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                ) : (
                  <div className="w-5 h-5 border-2 border-border rounded-full mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ===== ALERT & NOTICE COMPONENTS =====

interface AlertBoxProps {
  type: 'info' | 'warning' | 'error' | 'success'
  title: string
  description: string
}

export function AlertBox({ type, title, description }: AlertBoxProps) {
  const typeConfig = {
    info: { bg: 'bg-blue-50 dark:bg-blue-950', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-900 dark:text-blue-100', icon: Info },
    warning: { bg: 'bg-yellow-50 dark:bg-yellow-950', border: 'border-yellow-200 dark:border-yellow-800', text: 'text-yellow-900 dark:text-yellow-100', icon: AlertCircle },
    error: { bg: 'bg-red-50 dark:bg-red-950', border: 'border-red-200 dark:border-red-800', text: 'text-red-900 dark:text-red-100', icon: AlertCircle },
    success: { bg: 'bg-green-50 dark:bg-green-950', border: 'border-green-200 dark:border-green-800', text: 'text-green-900 dark:text-green-100', icon: CheckCircle2 },
  }

  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div className={`${config.bg} ${config.border} border rounded-lg p-4 flex gap-3`}>
      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.text}`} />
      <div>
        <h4 className={`font-bold ${config.text} mb-1`}>{title}</h4>
        <p className={config.text}>{description}</p>
      </div>
    </div>
  )
}

// ===== RATING COMPONENT =====

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: 'sm' | 'md' | 'lg'
  interactive?: boolean
}

export function StarRating({ rating, maxRating = 5, size = 'md', interactive = false }: StarRatingProps) {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'

  return (
    <div className="flex gap-1">
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} ${i < rating ? 'fill-accent text-accent' : 'text-muted-foreground'} ${interactive ? 'cursor-pointer hover:text-accent' : ''} transition-colors`}
        />
      ))}
    </div>
  )
}

// ===== DIVIDER COMPONENT =====

interface DividerProps {
  variant?: 'solid' | 'dashed' | 'dotted'
  withLabel?: string
  className?: string
}

export function Divider({ variant = 'solid', withLabel, className = '' }: DividerProps) {
  const variantClass = variant === 'dashed' ? 'border-dashed' : variant === 'dotted' ? 'border-dotted' : 'border-solid'

  if (withLabel) {
    return (
      <div className={`flex items-center gap-4 my-8 ${className}`}>
        <div className={`flex-1 border-t border-border ${variantClass}`} />
        <span className="text-muted-foreground text-sm">{withLabel}</span>
        <div className={`flex-1 border-t border-border ${variantClass}`} />
      </div>
    )
  }

  return <div className={`border-t border-border my-8 ${variantClass} ${className}`} />
}
