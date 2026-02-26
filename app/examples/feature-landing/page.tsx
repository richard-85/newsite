'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Shield, Award, Users, Thermometer, Snowflake } from 'lucide-react'
import { FeatureCard, BenefitItem } from '@/components/reusable-sections'
import { SimpleCard, HoverCard, GradientHeader, StepCounter, Divider } from '@/components/cards'
import { CTABanner } from '@/components/cta'

export default function FeatureLandingExample() {
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

      {/* Hero Section with Gradient Header */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GradientHeader
            title="Moderne energiløsninger"
            subtitle="for ditt hjem"
            gradient="accent"
          />
          <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Dette eksempelet viser hvordan du kan kombinere GradientHeader, HoverCard, og FeatureCard komponenter for en effektiv landing page
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
              Kom i gang
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              Les mer
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits with HoverCard */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Hvorfor velge ClimaTech?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <HoverCard
              title="Energieffektiv"
              description="Spar opptil 80% på energikostnader med våre moderne løsninger"
              icon={<Zap className="w-8 h-8" />}
            />
            <HoverCard
              title="Profesjonelt team"
              description="Erfarne installatører med 20+ års erfaring"
              icon={<Users className="w-8 h-8" />}
            />
            <HoverCard
              title="Garantert kvalitet"
              description="Opptil 10 års garanti på alle installasjoner"
              icon={<Shield className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Features Section with FeatureCard */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Våre tjenester
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Thermometer className="w-8 h-8 text-accent" />}
              title="Varmepumper"
              description="Moderne varmepumpesystemer som varmer og kjøler ditt hjem"
              badge="Populær"
            />
            <FeatureCard
              icon={<Snowflake className="w-8 h-8 text-accent" />}
              title="Aircondition"
              description="Behagelig temperatur året rundt med moderne teknologi"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-accent" />}
              title="Service"
              description="Vedlikehold og reparasjonstjenester for optimal ytelse"
            />
          </div>
        </div>
      </section>

      {/* Process Steps with StepCounter */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Hvordan det fungerer
          </h2>
          <StepCounter
            steps={[
              {
                number: 1,
                title: "Gratis konsultasjon",
                description: "Vi besøker ditt hjem og vurderer de beste løsningene"
              },
              {
                number: 2,
                title: "Tilbud",
                description: "Du får et detaljert tilbud med alle detaljer og pris"
              },
              {
                number: 3,
                title: "Installasjon",
                description: "Vi installerer systemet ditt av erfarne teknikere"
              },
              {
                number: 4,
                title: "Support",
                description: "Vi gir deg support og vedlikehold i mange år framover"
              },
            ]}
          />
        </div>
      </section>

      <Divider withLabel="Mer innhold" />

      {/* Quick Facts with SimpleCard */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            Fakta om oss
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <SimpleCard
              title="20+ års erfaring"
              description="Vi har installert tusenvis av systemer"
              icon={<Award className="w-6 h-6" />}
            />
            <SimpleCard
              title="5000+ kunder"
              description="Fornøyde kunder over hele landet"
              icon={<Users className="w-6 h-6" />}
            />
            <SimpleCard
              title="24/7 support"
              description="Vi er alltid tilgjengelig for deg"
              icon={<Zap className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24">
        <CTABanner
          title="Klar for å komme i gang?"
          description="Få en gratis konsultasjon og tilbud på ditt prosjekt i dag"
          buttonText="Kontakt oss nå"
          buttonLink="/contact"
          variant="primary"
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>Dette er et eksempel-design som viser hvordan du kan kombinere komponenter</p>
          <Link href="/components" className="text-accent hover:text-accent/80 mt-2 inline-block">
            Tilbake til komponent-galleriet
          </Link>
        </div>
      </footer>
    </div>
  )
}
