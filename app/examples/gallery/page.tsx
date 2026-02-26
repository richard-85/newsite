'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ImageCard } from '@/components/cards'
import { CTABanner } from '@/components/cta'

export default function GalleryPageExample() {
  const [selectedCategory, setSelectedCategory] = useState('alle')

  const projects = [
    { id: 1, title: "Moderne villainstallasjon", category: "private", location: "Oslo", image: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { id: 2, title: "Restaurantkjøleløsning", category: "bedrift", location: "Bergen", image: "bg-gradient-to-br from-orange-500 to-red-500" },
    { id: 3, title: "Leilighetsoppgradering", category: "private", location: "Stavanger", image: "bg-gradient-to-br from-green-500 to-emerald-500" },
    { id: 4, title: "Storkjøkkenutstyr", category: "bedrift", location: "Trondheim", image: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { id: 5, title: "Hytte varmepumpe", category: "private", location: "Lillehammer", image: "bg-gradient-to-br from-indigo-500 to-blue-500" },
    { id: 6, title: "Ventilasjonssystem", category: "bedrift", location: "Drammen", image: "bg-gradient-to-br from-yellow-500 to-orange-500" },
  ]

  const filteredProjects = selectedCategory === 'alle' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const categories = [
    { id: 'alle', label: 'Alle prosjekter' },
    { id: 'private', label: 'Private' },
    { id: 'bedrift', label: 'Bedrift' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-accent">
              ClimaTech
            </Link>
            <Link href="/components">
              <Button variant="outline" size="sm">
                Se komponenter
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Våre prosjekter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se noen av våre fantastiske installations- og ombyggingsprosjekter
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-accent text-accent-foreground'
                    : 'border border-border text-foreground hover:bg-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ImageCard
                key={project.id}
                title={project.title}
                description={`Installasjon i ${project.location}`}
                imageBg={project.image}
                link="#"
              />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Ingen prosjekter funnet i denne kategorien
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-accent mb-2">1000+</p>
              <p className="text-lg text-muted-foreground">Fullførte prosjekter</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent mb-2">5000+</p>
              <p className="text-lg text-muted-foreground">Fornøyde kunder</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent mb-2">20+</p>
              <p className="text-lg text-muted-foreground">År erfaring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <CTABanner
          title="Vil du se ditt prosjekt her?"
          description="Kontakt oss for å diskutere din drøm-installasjon"
          buttonText="Få tilbud"
          buttonLink="/contact"
          variant="primary"
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>Eksempel-side som viser ImageCard komponent med filter-funksjon</p>
          <Link href="/components" className="text-accent hover:text-accent/80 mt-2 inline-block">
            Tilbake til komponent-galleriet
          </Link>
        </div>
      </footer>
    </div>
  )
}
