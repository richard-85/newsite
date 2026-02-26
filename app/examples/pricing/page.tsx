'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { PricingTier } from '@/components/reusable-sections'
import { GradientHeader, AlertBox, Divider, ComparisonTable } from '@/components/cards'
import { CTABanner } from '@/components/cta'

export default function PricingPageExample() {
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
          <GradientHeader
            title="Enkle og transparente priser"
            subtitle="for alle budsjetter"
            gradient="accent"
          />
          <p className="text-xl text-muted-foreground mt-8 max-w-3xl mx-auto">
            Velg den pakken som passer best for dine behov. Alle pakker inkluderer installasjon og support
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <PricingTier
              name="Starterpakke"
              price="Fra 25 000 kr"
              description="Perfekt for mindre hjem"
              features={[
                "En inneenhet",
                "Installasjon inkludert",
                "2 års garanti",
                "Telefonsuport",
                "Årlig vedlikehold",
              ]}
              cta="Velg denne"
            />
            <PricingTier
              name="Profesjonell"
              price="Fra 45 000 kr"
              description="For de fleste hjem"
              features={[
                "Multisplit system",
                "Installasjon inkludert",
                "5 års garanti",
                "Prioritert support",
                "2x årlig vedlikehold",
                "Fjernkontroll inkludert",
              ]}
              cta="Velg denne"
              highlighted
            />
            <PricingTier
              name="Premium"
              price="Fra 75 000 kr"
              description="For større prosjekter"
              features={[
                "Komplett system",
                "Installasjon og testing",
                "10 års garanti",
                "24/7 support",
                "Månedlig vedlikehold",
                "Smart kontroll app",
              ]}
              cta="Velg denne"
            />
          </div>
        </div>
      </section>

      <Divider withLabel="Hva inkluderes?" />

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Hva inkluderer alle pakker?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Gratis konsultasjon</h3>
                  <p className="text-muted-foreground">Vi besøker ditt hjem og vurderer beste løsning</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Profesjonell installasjon</h3>
                  <p className="text-muted-foreground">Erfarne teknikere som sikrer korrekt montering</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Oppstartsopplæring</h3>
                  <p className="text-muted-foreground">Vi lærer deg hvordan systemet fungerer</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Vedlikeholdsavtale</h3>
                  <p className="text-muted-foreground">Regelmessig vedlikehold for optimal ytelse</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Tekkergaranti</h3>
                  <p className="text-muted-foreground">Beskyttelse mot produksjonsfeil i hele garantiperioden</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Kundesupport</h3>
                  <p className="text-muted-foreground">Vi er alltid tilgjengelig ved spørsmål og problemer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Feature Comparison */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Sammenligning av pakker
          </h2>
          <ComparisonTable
            features={[
              { feature: "Installasjon", basic: true, pro: true, enterprise: true },
              { feature: "Årlig vedlikehold", basic: true, pro: true, enterprise: true },
              { feature: "Garanti", basic: "2 år", pro: "5 år", enterprise: "10 år" },
              { feature: "Fjernkontroll", basic: false, pro: true, enterprise: true },
              { feature: "Smart app", basic: false, pro: false, enterprise: true },
              { feature: "Månedlig vedlikehold", basic: false, pro: false, enterprise: true },
              { feature: "24/7 support", basic: false, pro: false, enterprise: true },
            ]}
          />
        </div>
      </section>

      {/* Info Alert */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AlertBox
            type="info"
            title="Spørsmål om prising?"
            description="Alle priser er veiledende og kan variere avhengig av ditt prosjekt. Kontakt oss for et presist tilbud basert på dine behov."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <CTABanner
          title="Klar til å velge?"
          description="Kontakt oss for å diskutere det beste tilbudet for ditt prosjekt"
          buttonText="Få tilbud nå"
          buttonLink="/contact"
          variant="primary"
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>Eksempel-side som viser PricingTier og feature-sammenligninger</p>
          <Link href="/components" className="text-accent hover:text-accent/80 mt-2 inline-block">
            Tilbake til komponent-galleriet
          </Link>
        </div>
      </footer>
    </div>
  )
}
