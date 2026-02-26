'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { SectionHeader } from '@/components/cards'
import { CTABanner } from '@/components/cta'
import { Accordion } from '@/components/advanced'
import { useState } from 'react'

export default function FAQPageExample() {
  const [searchTerm, setSearchTerm] = useState('')

  const faqItems = [
    {
      title: "Hvor lang varer installasjonen?",
      content: "Typisk installasjon tar 4-8 timer avhengig av systemets kompleksitet. Vi planlegger jobben slik at det er minst mulig forstyrrelser."
    },
    {
      title: "Hva er garantien?",
      content: "Vi tilbyr 2-10 års garanti avhengig av pakketype. All produkter og arbeid er dekket av garantien."
    },
    {
      title: "Kan dere installere på mitt hus?",
      content: "Vi kan installere på de fleste hustyper. Vi gjør en gratis vurdering av ditt hjem for å finne best løsning for deg."
    },
    {
      title: "Hvor mye kan jeg spare på energi?",
      content: "Med et godt varmepumpesystem kan du spare opptil 80% på oppvarmingskostnader sammenlignet med elektrisk oppvarming."
    },
    {
      title: "Trenger jeg vedlikehold?",
      content: "Ja, regelmessig vedlikehold sikrer optimal ytelse og lang levetid. Vi tilbyr vedlikeholdsavtaler som del av pakken."
    },
    {
      title: "Hva hvis systemet trenger reparasjon?",
      content: "Vi tilbyr 24/7 supportservice. Ring oss og vi sender en tekniker så raskt som mulig."
    },
    {
      title: "Kan systemet styres fra mobilen?",
      content: "Ja, Premium pakken inkluderer smart app-kontroll. Du kan styre systemet hvor som helst fra din smarttelefon."
    },
    {
      title: "Hvor mye koster vedlikehold?",
      content: "Vedlikehold er inkludert i alle pakker. Kostnadene varierer fra årlige inspeksjoner til månedlige kontroller for Premium-pakke."
    },
    {
      title: "Kan jeg kombinere flere systemer?",
      content: "Ja, det er mulig å kombinere flere systemer for større hus eller komplekse løsninger. Kontakt oss for konsultasjon."
    },
    {
      title: "Hvordan fungerer betalingen?",
      content: "Vi tilbyr fleksible betalingsplaner. Du kan betale alt på forhånd eller dele opp betalingen over flere terminer."
    },
  ]

  const filteredItems = faqItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Ofte stilte spørsmål"
            subtitle="Finn svar på alle dine spørsmål"
          />
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-background border-b border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Søk i FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          {searchTerm && (
            <p className="text-sm text-muted-foreground mt-3">
              {filteredItems.length} resultat{filteredItems.length !== 1 ? 'ater' : ''}
            </p>
          )}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <Accordion items={filteredItems} />
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Ingen resultater funnet for "{searchTerm}"
              </p>
              <Button
                variant="outline"
                onClick={() => setSearchTerm('')}
                className="mt-4"
              >
                Tilbakestill søk
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Finner du ikke svaret?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vårt supportteam er klar til å hjelpe deg med alle spørsmål
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90">
                Kontakt oss
              </Button>
            </Link>
            <a href="tel:+4712345678">
              <Button variant="outline" className="px-8 py-3">
                Ring oss: +47 123 45 678
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <CTABanner
          title="Klar til å komme i gang?"
          description="Vi hjelper deg gjennom hele prosessen"
          buttonText="Få tilbud"
          buttonLink="/contact"
          variant="primary"
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>Eksempel-side som viser Accordion komponent med søkefunksjon</p>
          <Link href="/components" className="text-accent hover:text-accent/80 mt-2 inline-block">
            Tilbake til komponent-galleriet
          </Link>
        </div>
      </footer>
    </div>
  )
}
