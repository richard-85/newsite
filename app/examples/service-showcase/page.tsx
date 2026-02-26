'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Thermometer, Snowflake, Wrench, Wind, Check } from 'lucide-react'
import { ServiceGrid, BenefitItem } from '@/components/reusable-sections'
import { AlertBox, ComparisonTable, Divider } from '@/components/cards'
import { CTABanner } from '@/components/cta'

export default function ServiceShowcaseExample() {
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
                Se alle komponenter
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Våre tjenester
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Eksempel side som viser ServiceGrid komponent og tjenestebeskrivelser
          </p>
        </div>
      </section>

      {/* Services Grid - Private */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceGrid
            title="Tjenester for private"
            subtitle="Energieffektive klimaløsninger for ditt hjem"
            services={[
              {
                icon: <Thermometer className="w-8 h-8 text-accent" />,
                title: "Varmepumper",
                description: "Moderne varmepumpesystemer som sparer opptil 80% på oppvarming"
              },
              {
                icon: <Snowflake className="w-8 h-8 text-accent" />,
                title: "Aircondition",
                description: "Komfortabelt inneklima året rundt med stille operasjon"
              },
              {
                icon: <Wrench className="w-8 h-8 text-accent" />,
                title: "Service og vedlikehold",
                description: "Regelmessig vedlikehold for optimal ytelse og levetid"
              }
            ]}
            viewAllLink="/services"
          />
        </div>
      </section>

      <Divider />

      {/* Services Grid - Business */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceGrid
            title="Tjenester for bedrift"
            subtitle="Profesjonelle løsninger for kommersielle bygg"
            services={[
              {
                icon: <Snowflake className="w-8 h-8 text-accent" />,
                title: "Kjøl og frys",
                description: "Løsninger for butikker, restauranter og lagerbygninger"
              },
              {
                icon: <Thermometer className="w-8 h-8 text-accent" />,
                title: "Aircondition",
                description: "Optimalt inneklima for kontorer og kommersielle lokaler"
              },
              {
                icon: <Wind className="w-8 h-8 text-accent" />,
                title: "Ventilasjon",
                description: "Moderne ventilasjonsløsninger med energigjenvinning"
              },
              {
                icon: <Wrench className="w-8 h-8 text-accent" />,
                title: "F-gasskontroll",
                description: "Lovpålagt vedlikehold og miljøvennlig håndtering"
              }
            ]}
            viewAllLink="/services"
          />
        </div>
      </section>

      <Divider withLabel="Sammenligning" />

      {/* Feature Comparison */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Sammenlign pakker
          </h2>
          <ComparisonTable
            features={[
              { feature: "Gratis konsultasjon", basic: true, pro: true, enterprise: true },
              { feature: "Installasjon", basic: true, pro: true, enterprise: true },
              { feature: "Garanti", basic: "2 år", pro: "5 år", enterprise: "10 år" },
              { feature: "Vedlikehold inkludert", basic: false, pro: true, enterprise: true },
              { feature: "24/7 support", basic: false, pro: false, enterprise: true },
              { feature: "Fjernkontroll", basic: false, pro: true, enterprise: true },
              { feature: "Smart app", basic: false, pro: false, enterprise: true },
            ]}
          />
        </div>
      </section>

      {/* Info Alert */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AlertBox
            type="info"
            title="Tips for valg av tjeneste"
            description="Alle våre tjenester inkluderer profesjonell installasjon, oppfølging og vedlikehold. Velg den pakken som passer best for dine behov, eller kontakt oss for personlig veiledning."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <CTABanner
          title="Interessert i å vite mer?"
          description="Vår team er klar til å hjelpe deg med å finne den perfekte løsningen"
          buttonText="Få tilbud"
          buttonLink="/contact"
          variant="primary"
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>Dette er et eksempel-design som viser ServiceGrid og ComparisonTable komponenter</p>
          <Link href="/components" className="text-accent hover:text-accent/80 mt-2 inline-block">
            Tilbake til komponent-galleriet
          </Link>
        </div>
      </footer>
    </div>
  )
}
