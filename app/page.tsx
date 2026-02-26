'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

import {
  Droplet,
  Thermometer,
  Snowflake, 
  Wrench,
  Wind, 
  Check,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Award,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react'
import {
  StatsCard,
  BenefitItem,
  FeatureCard,
  TestimonialCard,
  PricingTier,ServiceGrid
} from '@/components/reusable-sections'
import { SimpleCard, HoverCard, GradientHeader, StepCounter, Divider } from '@/components/cards'
import { AlertBox, ComparisonTable,  } from '@/components/cards'
import { Navbar } from '@/components/navbar'
import { FooterWithConsent } from '@/components/footer-with-consent'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-cover bg-center relative" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=600&fit=crop")',
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6 inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold border border-accent/40">
            Etablert siden 1995
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Moss Kulde & Varmeteknikk AS
          </h1>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            Profesjonell service og montasje av rørlegger-, kuldeanlegg, varmepumper og ventilasjonsarbeid
          </p>
          <p className="text-lg text-accent font-semibold mb-12">
            Rådeskogen 60, 1580 Rygge • Tel: 92 22 88 75
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                Få gratis befaring
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
             <Link href="tel:922288755">
  <Button className="px-8 py-6 text-lg 
                     bg-secondary 
                     text-secondary-foreground
                     flex items-center gap-2
                     opacity-100 
                     cursor-default
                     hover:bg-secondary 
                     hover:text-secondary-foreground
                     hover:shadow-none
                     transition-none">
    <Phone className="w-5 h-5" />
    92 22 88 75
  </Button>
</Link>
          </div>
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
            viewAllLink="/"
          />
        </div>
      </section>

      

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
      viewAllLink="/"
    />
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

      
       {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hvorfor velge oss?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Over 30 år med erfaring og dedikasjon til kvalitet
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-accent" />}
              title="Garantert kvalitet"
              description="All arbeid garantert med profesjonelle sertifikat"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-accent" />}
              title="Erfaren team"
              description="Sertifiserte teknikere med mangesidig erfaring"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-accent" />}
              title="Kundeservice"
              description="Rask responstid og nødservice 24/7"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-accent" />}
              title="Energieffektivitet"
              description="Vi fokuserer på moderne energieffektive løsninger"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-accent" />}
              title="Fleksibel"
              description="Tilpasset timearbeid og planlagte prosjekter"
            />
            <FeatureCard
              icon={<Phone className="w-8 h-8 text-accent" />}
              title="Lett kontakt"
              description="Ring direkte på 92 22 88 75 for rask hjelp"
            />
          </div>
        </div>
      </section>


      {/* CTA */}
<section className="py-16 md:py-24 bg-primary text-primary-foreground">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold mb-6">
      Trenger du service eller nytt anlegg?
    </h2>

    <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
      Kontakt oss i dag for et gratis tilbud eller akutt service
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      
      <Link href="/contact">
        <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
          Be om tilbud
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </Link>
      
       <Link href="tel:922288755">
  <Button className="px-8 py-6 text-lg 
                     bg-secondary 
                     text-secondary-foreground
                     flex items-center gap-2
                     opacity-100 
                     cursor-default
                     hover:bg-secondary 
                     hover:text-secondary-foreground
                     hover:shadow-none
                     transition-none">
    <Phone className="w-5 h-5" />
    Ring 92 22 88 75
  </Button>
</Link>

     

    </div>
  </div>
</section>

      {/* Footer */}
      <FooterWithConsent />
    </div>
  )
}
