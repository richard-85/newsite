'use client'

import { ReactNode, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Play } from 'lucide-react'

// ===== ACCORDION COMPONENT =====

interface AccordionItem {
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-2 border border-border rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className={index !== items.length - 1 ? 'border-b border-border' : ''}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
          >
            <h3 className="font-bold text-foreground">{item.title}</h3>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-muted/30 border-t border-border text-muted-foreground">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ===== TABS COMPONENT =====

interface TabItem {
  label: string
  content: ReactNode
}

interface TabsProps {
  tabs: TabItem[]
  variant?: 'default' | 'pills'
}

export function Tabs({ tabs, variant = 'default' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <div className={variant === 'pills' ? 'flex gap-2 mb-6 flex-wrap' : 'flex gap-0 border-b border-border mb-6'}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`transition-colors pb-4 font-medium ${
              activeTab === index
                ? variant === 'pills'
                  ? 'bg-accent text-accent-foreground px-4 py-2 rounded-lg'
                  : 'text-accent border-b-2 border-accent'
                : variant === 'pills'
                  ? 'text-muted-foreground hover:text-foreground px-4 py-2'
                  : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  )
}

// ===== BREADCRUMB COMPONENT =====

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <span className="text-muted-foreground">/</span>}
          {item.href ? (
            <a href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </a>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

// ===== VIDEO EMBED COMPONENT =====

interface VideoEmbedProps {
  videoId: string
  provider?: 'youtube' | 'vimeo'
  title?: string
  thumbnail?: string
}

export function VideoEmbed({ videoId, provider = 'youtube', title = 'Video', thumbnail }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  let embedUrl = ''
  if (provider === 'youtube') {
    embedUrl = `https://www.youtube.com/embed/${videoId}`
  } else if (provider === 'vimeo') {
    embedUrl = `https://player.vimeo.com/video/${videoId}`
  }

  if (!isPlaying && thumbnail) {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer" onClick={() => setIsPlaying(true)}>
        <img src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:brightness-75 transition-all" />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-accent text-accent-foreground rounded-full p-4 group-hover:scale-110 transition-transform">
            <Play className="w-8 h-8 fill-current" />
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

// ===== TIMELINE COMPONENT =====

interface TimelineEvent {
  title: string
  description: string
  date?: string
  icon?: ReactNode
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
              {event.icon ? event.icon : index + 1}
            </div>
            {index < events.length - 1 && <div className="w-1 bg-border h-16 mt-2" />}
          </div>
          <div className="pt-2 pb-8">
            <h3 className="font-bold text-foreground text-lg">{event.title}</h3>
            {event.date && <p className="text-accent text-sm font-semibold mb-2">{event.date}</p>}
            <p className="text-muted-foreground">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ===== TEAM GRID COMPONENT =====

interface TeamMember {
  name: string
  role: string
  image: string
  bio?: string
  social?: Array<{ platform: string; url: string }>
}

interface TeamGridProps {
  members: TeamMember[]
  columns?: 2 | 3 | 4
}

export function TeamGrid({ members, columns = 3 }: TeamGridProps) {
  const colClass = columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'

  return (
    <div className={`grid ${colClass} gap-8`}>
      {members.map((member, idx) => (
        <div key={idx} className="text-center group">
          <div className="relative mb-6 overflow-hidden rounded-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
          <p className="text-accent text-sm font-semibold mb-3">{member.role}</p>
          {member.bio && <p className="text-muted-foreground text-sm">{member.bio}</p>}
        </div>
      ))}
    </div>
  )
}

// ===== STATS GRID COMPONENT =====

interface StatItem {
  value: string
  label: string
  icon?: ReactNode
}

interface StatsGridProps {
  stats: StatItem[]
  columns?: 2 | 3 | 4
}

export function StatsGrid({ stats, columns = 4 }: StatsGridProps) {
  const colClass = columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-3' : columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-4'

  return (
    <div className={`grid ${colClass} gap-6`}>
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
          {stat.icon && <div className="mb-4 flex justify-center text-accent">{stat.icon}</div>}
          <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
          <p className="text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}

// ===== GALLERY COMPONENT =====

interface GalleryProps {
  images: Array<{ src: string; alt: string; caption?: string }>
  columns?: 2 | 3 | 4
}

export function Gallery({ images, columns = 3 }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const colClass = columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'

  return (
    <>
      <div className={`grid ${colClass} gap-6`}>
        {images.map((image, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {image.caption && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full rounded-lg"
            />
            {images[selectedImage].caption && (
              <p className="text-white text-center mt-4">{images[selectedImage].caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
