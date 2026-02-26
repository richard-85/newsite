'use client'

import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, X } from 'lucide-react'

// ===== CTA COMPONENTS =====

interface CTABannerProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  variant?: 'primary' | 'secondary' | 'accent'
  fullWidth?: boolean
}

export function CTABanner({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  variant = 'primary',
  fullWidth = true,
}: CTABannerProps) {
  const variantClass =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground'
      : variant === 'secondary'
        ? 'bg-secondary text-foreground'
        : 'bg-accent text-accent-foreground'

  return (
    <section className={`${variantClass} rounded-lg p-12 md:p-16 text-center ${fullWidth ? 'w-full' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={buttonLink}>
          <Button className={`px-8 py-6 text-lg ${variant === 'accent' ? 'bg-white text-accent hover:bg-white/90' : 'bg-accent text-accent-foreground hover:bg-accent/90'}`}>
            {buttonText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
        {secondaryButtonText && secondaryButtonLink && (
          <a href={secondaryButtonLink}>
            <Button
              variant="outline"
              className={`px-8 py-6 text-lg border-2 ${variant === 'accent' ? 'border-white text-white hover:bg-white/10' : 'border-current hover:bg-white/10'}`}
            >
              {secondaryButtonText}
            </Button>
          </a>
        )}
      </div>
    </section>
  )
}

interface CTAButtonProps {
  text: string
  link: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
  rightIcon?: boolean
}

export function CTAButton({ text, link, variant = 'primary', size = 'md', icon, rightIcon = true }: CTAButtonProps) {
  const sizeClass = size === 'sm' ? 'px-4 py-2 text-sm' : size === 'md' ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'

  return (
    <a href={link}>
      <Button className={sizeClass} variant={variant === 'outline' || variant === 'ghost' ? variant : 'default'}>
        {icon && !rightIcon && <span className="mr-2">{icon}</span>}
        {text}
        {icon && rightIcon && <span className="ml-2">{icon}</span>}
      </Button>
    </a>
  )
}

// ===== NEWSLETTER/FORM COMPONENTS =====

interface NewsletterFormProps {
  title?: string
  placeholder?: string
  buttonText?: string
  onSubmit?: (email: string) => void
}

export function NewsletterForm({ title = 'Abonnér på vårt nyhetsbrev', placeholder = 'Din e-postadresse', buttonText = 'Abonner', onSubmit }: NewsletterFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
    if (onSubmit) onSubmit(email)
  }

  return (
    <div className="bg-card border border-border rounded-lg p-8 max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          name="email"
          placeholder={placeholder}
          required
          className="px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3">{buttonText}</Button>
      </form>
    </div>
  )
}

// ===== MODAL/OVERLAY COMPONENTS =====

interface ModalProps {
  isOpen: boolean
  title: string
  content: ReactNode
  buttonText?: string
  buttonLink?: string
  onClose?: () => void
}

export function Modal({ isOpen, title, content, buttonText, buttonLink, onClose }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-lg max-w-md w-full p-8 relative">
        {onClose && (
          <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
            <X className="w-6 h-6" />
          </button>
        )}
        <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
        <div className="text-muted-foreground mb-6">{content}</div>
        {buttonText && buttonLink && (
          <a href={buttonLink}>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">{buttonText}</Button>
          </a>
        )}
      </div>
    </div>
  )
}

// ===== FEATURE SHOWCASE COMPONENTS =====

interface FeatureShowcaseProps {
  title: string
  description: string
  features: Array<{
    icon: ReactNode
    title: string
    description: string
  }>
  imageUrl?: string
  imagePosition?: 'left' | 'right'
}

export function FeatureShowcase({
  title,
  description,
  features,
  imageUrl,
  imagePosition = 'right',
}: FeatureShowcaseProps) {
  const content = (
    <div className="flex-1">
      <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
      <p className="text-lg text-muted-foreground mb-8">{description}</p>
      <div className="space-y-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="flex-shrink-0 text-accent">{feature.icon}</div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const image = imageUrl && (
    <div className="flex-1 rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center">
      {imagePosition === 'left' && image}
      {content}
      {imagePosition === 'right' && image}
    </div>
  )
}
