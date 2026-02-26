'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Zap } from 'lucide-react'
import { BenefitItem, FeatureCard, StatsCard } from '@/components/reusable-sections'
import { SimpleCard, SectionHeader, Divider, StarRating } from '@/components/cards'
import { CTABanner } from '@/components/cta'
import { Timeline } from '@/components/advanced'

export default function AboutPageExample() {
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
            Om ClimaTech
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vi er ledende leverandør av moderne klimaløsninger med over 20 års erfaring
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Vår historie
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              ClimaTech ble grunnlagt i 2003 med en enkelt visjon: å gjøre moderne klimaløsninger tilgjengelig for alle. Vi startet som et lite selskap med tre teknikere, og i dag har vi vokst til å bli markedsleder innen klimaløsninger.
            </p>
            <p className="text-lg text-muted-foreground">
              Vår suksess er bygget på hardt arbeid, dedikasjon til kvalitet, og et brennende ønske om å hjelpe våre kunder med å spare energi og forbedre sitt inneklima.
            </p>
          </div>
        </div>
      </section>

      <Divider withLabel="Milepæler" />

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Vår reise
          </h2>
          <Timeline
            events={[
              {
                title: "Grunnlagt",
                description: "ClimaTech ble startet av tre entusiastiske teknikere",
                date: "2003"
              },
              {
                title: "Første 1000 installasjon",
                description: "Vi nådde en viktig milepæl med 1000 løste prosjekter",
                date: "2008"
              },
              {
                title: "Ekspansjonen",
                description: "Vi åpnet kontorer i flere byer og utvidet teamet",
                date: "2012"
              },
              {
                title: "Markedsleder",
                description: "Vi ble anerkjent som markedsleder innen klimaløsninger",
                date: "2020"
              },
              {
                title: "I dag",
                description: "Fortsatt innovativ og dedikert til kundenes beste",
                date: "2024"
              },
            ]}
          />
        </div>
      </section>

      <Divider />

      {/* Stats */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Våre tall
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <StatsCard stat="20+" description="År erfaring" />
            <StatsCard stat="5000+" description="Fornøyde kunder" />
            <StatsCard stat="80%" description="Gjennomsnittlig besparelse" />
            <StatsCard stat="24/7" description="Kundesupport" />
          </div>
        </div>
      </section>

      <Divider withLabel="Verdier" />

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Vår verdier
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SimpleCard
              title="Kvalitet"
              description="Vi kompromisser aldri på kvalitet. Hver installasjon gjøres med omhu og presisjon."
              icon={<Award className="w-6 h-6" />}
            />
            <SimpleCard
              title="Kundenfokus"
              description="Din tilfredshet er vår prioritet. Vi lytter, forstår og leverer det du trenger."
              icon={<Users className="w-6 h-6" />}
            />
            <SimpleCard
              title="Innovasjon"
              description="Vi er alltid på jakt etter bedre løsninger og de nyeste teknologiene."
              icon={<Zap className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Hvorfor velge ClimaTech?"
            subtitle="Vi tilbyr mer enn bare installasjon"
          />
          <div className="mt-12 space-y-8 max-w-3xl mx-auto">
            <BenefitItem
              title="Erfaring"
              description="Med over 20 års erfaring vet vi nøyaktig hva som fungerer best for ditt hjem eller bedrift"
            />
            <BenefitItem
              title="Garantier"
              description="Vi står bak vår arbeid med opptil 10 års garanti på alle installasjoner"
            />
            <BenefitItem
              title="Support"
              description="Vårt supportteam er tilgjengelig 24/7 for å hjelpe deg med spørsmål eller problemer"
            />
            <BenefitItem
              title="Sertifisering"
              description="Alle våre teknikere er fullt sertifisert og godkjent av relevante myndigheter"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Hva kundene sier
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border">
              <StarRating rating={5} size="sm" />
              <p className="text-muted-foreground mt-4 mb-6">
                "ClimaTech var profesjonelle, dyktige og billige. Jeg er ekstremt fornøyd med jobben de gjorde!"
              </p>
              <p className="font-bold text-foreground">Johan Hansen</p>
              <p className="text-sm text-muted-foreground">Oslo</p>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border">
              <StarRating rating={5} size="sm" />
              <p className="text-muted-foreground mt-4 mb-6">
                "Fantastisk kundeservice og rask respons. De løste mitt problem på under en time!"
              </p>
              <p className="font-bold text-foreground">Anna Mørk</p>
              <p className="text-sm text-muted-foreground">Bergen</p>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border">
              <StarRating rating={5} size="sm" />
              <p className="text-muted-foreground mt-4 mb-6">
                "Best i sitt slag. Helt klart verdt prisen og jeg anbefaler varmt til alle!"
              </p>
              <p className="font-bold text-foreground">Per Nilsen</p>
              <p className="text-sm text-muted-foreground">Stavanger</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <CTABanner
          title="Bli en del av ClimaTech-familien"
          description="Opplev selv hvorfor tusenvis av kunder velger oss"
          buttonText="Kontakt oss"
          buttonLink="/contact"
          variant="primary"
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>Eksempel-side som demonstrerer Timeline, StatsCard og Testimonials</p>
          <Link href="/components" className="text-accent hover:text-accent/80 mt-2 inline-block">
            Tilbake til komponent-galleriet
          </Link>
        </div>
      </footer>
    </div>
  )
}
