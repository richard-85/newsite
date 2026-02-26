'use client'

import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { ModalGallery } from '@/components/modal-gallery'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { FooterWithConsent } from '@/components/footer-with-consent'
import { useState } from 'react'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle')

  const projects = [
    {
      id: 1,
      title: 'Multisplit varmepumpe på hytte',
      location: 'Porsgrunn',
      category: 'Privat',
      description: 'Installasjon av multisplit varmepumpe for effektiv oppvarming og kjøling. Systemet sparer opptil 80% på energikostnader.',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
      ]
    },
    {
      id: 2,
      title: 'Aircondition for kontorbygg',
      location: 'Moss sentrum',
      category: 'Bedrift',
      description: 'Komplett aircondition-løsning for 4-etasjers kontorbygg med optimal temperaturkontroll og energistyring.',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
      ]
    },
    {
      id: 3,
      title: 'Kjøleanlegg for restaurant',
      location: 'Rygge',
      category: 'Bedrift',
      description: 'Profesjonell kjøleanlegg-installasjon for kjøkken og matlagring med høy kapasitet og pålitelighet.',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
      ]
    },
    {
      id: 4,
      title: 'Varmepumpe for boligblokk',
      location: 'Moss',
      category: 'Privat',
      description: 'Installasjon av sentralt varmepumpesystem for 8-enhetlig boligblokk med individuell temperaturkontroll.',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
      ]
    },
    {
      id: 5,
      title: 'Ventilasjonssystem for dagligvare',
      location: 'Rygge',
      category: 'Bedrift',
      description: 'Moderne ventilasjonssystem med energigjenvinning for detaljhandel og god inneluftkvalitet.',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
      ]
    },
    {
      id: 6,
      title: 'Aircondition for privatbolig',
      location: 'Moss',
      category: 'Privat',
      description: 'Split aircondition-anlegg for villa med to soverom og stue. Stille og effektiv drift hele året.',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wEIS24W00zCxf1IGUsVBPk3MhzHk7a.png',
      ]
    },
  ]

  const filteredProjects = selectedCategory === 'Alle' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const categories = ['Alle', 'Privat', 'Bedrift']

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Våre prosjekter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se eksempler på installasjoner og prosjekter vi har gjennomført for private og bedrifter i Rygge og omegn
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'border border-border text-foreground hover:border-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <ModalGallery images={project.images} title={project.title} />
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Ingen prosjekter funnet i denne kategorien
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vil du se ditt prosjekt gjennomført av Moss Kulde?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Kontakt oss i dag for en gratis konsultasjon og tilbud på ditt prosjekt
          </p>
          <Link href="/contact">
            <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
              Kontakt oss
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <FooterWithConsent />
    </div>
  )
}
