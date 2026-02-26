'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Droplet, Thermometer, Wind, Wrench, Check, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { FooterWithConsent } from '@/components/footer-with-consent'
import { FeatureCard } from '@/components/reusable-sections'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('rørlegger')

  const services = {
    rørlegger: {
      title: 'Rørleggerarbeid',
      icon: Droplet,
      description: 'Profesjonell service og montasje av sanitæranlegg og oppvarmingssystemer',
      longDescription: 'Moss Kulde & Varmeteknikk har over 30 år erfaring med rørleggerarbeid. Vi håndterer alt fra vanlig vedlikehold til komplekse installasjonprosjekter for både privat og næringsliv.',
      services: [
        'Installasjon av sanitæranlegg',
        'Reparasjon av rørleggersystemer',
        'Oppvarmingssystemer',
        'Varmtvannsberedere',
        'Rørfittinger og utskiftninger',
        'Kartlegging og inspeksjon',
        'Nødservice og reparasjoner',
        'Vedlikehold av rørinstallasjon'
      ],
      benefits: [
        'Erfarne teknikere',
        '30+ års erfaring',
        'Rask responstid',
        'Nødservice 24/7',
        'Garantert arbeid',
        'Transparente priser'
      ]
    },
    varmepumper: {
      title: 'Varmepumper',
      icon: Thermometer,
      description: 'Moderne energieffektive varmepumpesystemer for oppvarming',
      longDescription: 'Vi installerer og serverer de beste varmepumpesystemene. Varmepumper reduserer energikostnader med opptil 80% sammenlignet med tradisjonelle oppvarmingssystemer.',
      services: [
        'Installasjon av luftvarmepumper',
        'Installasjon av bergvarmepumper',
        'Installasjon av multisplit systemer',
        'Service og vedlikehold',
        'Reparasjon av varmepumper',
        'Ombygging fra tradisjonell oppvarming',
        'Energioptimalisering',
        'Rådgivning om beste løsning'
      ],
      benefits: [
        'Opptil 80% energibesparing',
        'Sertifiserte installatører',
        'Høykvalitetsmerker',
        'Miljøvennlig',
        'Kjedelig og pålitelig',
        'Langsiktig løsning'
      ]
    },
    kuldeanlegg: {
      title: 'Kuldeanlegg',
      icon: Wrench,
      description: 'Service og montasje av kommersielle kjøleanlegg',
      longDescription: 'Vi tilbyr komplette kjøleanlegg for butikker, restauranter og andre bedrifter. Med erfaring fra restauranter, dagligvarebutikker og industrielle kjøleanlegg kjenner vi alle utfordringer.',
      services: [
        'Installasjon av kjøleanlegg',
        'Vedlikehold av kjøleanlegg',
        'Reparasjon og feilsøking',
        'Kjølteknikk for butikker',
        'Kjøleanlegg for restauranter',
        'Industrikjøling',
        'Fryserom og kjølerom',
        'Årlig revisjon og kontroll'
      ],
      benefits: [
        'Erfaring fra næringslivet',
        'Rask responstid',
        'Nødservice tilgjengelig',
        'Forebyggende vedlikehold',
        'Kostnadseffektiv drift',
        'Sertifisert personell'
      ]
    },
    ventilasjon: {
      title: 'Ventilasjon',
      icon: Wind,
      description: 'Profesjonell installasjon og vedlikehold av ventilasjonssystemer',
      longDescription: 'God ventilasjon er essensielt for inneklimakvaliteten. Vi installerer og serverer ventilasjonssystemer som sikrer frisk, ren luft og god inneklimakvalitet.',
      services: [
        'Installasjon av ventilasjonssystemer',
        'Ventilasjon med varmegjennvinning',
        'Reparasjon av ventilasjon',
        'Vedlikehold og rengjøring',
        'Kanaler og installasjon',
        'Støyreduksjon',
        'Energioptimalisering',
        'Inspeksjon og testing'
      ],
      benefits: [
        'Bedre inneklima',
        'Energieffektiv',
        'Lavt støy nivå',
        'Moderne teknologi',
        'Redusert allergiproblemer',
        'Profesjonell installasjon'
      ]
    }
  }

  const activeService = services[activeTab as keyof typeof services]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Våre tjenester
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Komplette løsninger for rørlegger-, kuldeanlegg, varmepumper og ventilasjon
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === key
                      ? 'bg-accent text-accent-foreground'
                      : 'border border-border text-foreground hover:border-accent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {service.title}
                </button>
              )
            })}
          </div>

          {/* Active Service Details */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {activeService.title}
              </h2>
              <p className="text-xl text-accent font-semibold mb-4">
                {activeService.description}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {activeService.longDescription}
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-6">
                Våre tilbud
              </h3>
              <ul className="space-y-3 mb-12">
                {activeService.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90 w-full md:w-auto">
                  Be om tilbud
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Hvorfor velge oss for {activeService.title.toLowerCase()}?
              </h3>
              <div className="space-y-4">
                {activeService.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-secondary p-4 rounded-lg border border-border">
                    <p className="text-foreground font-semibold">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-accent/10 p-8 rounded-lg border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Trenger du hjelp?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Kontakt oss for en gratis konsultasjon og tilbud
                </p>
                <a href="tel:922288755" className="flex items-center gap-2 text-accent font-semibold mb-4 hover:underline">
                  <Phone className="w-5 h-5" />
                  92 22 88 75
                </a>
                <p className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4" />
                  Rådeskogen 60, 1580 Rygge
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Vår prosess
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Kontakt', desc: 'Ring eller send forespørsel' },
              { step: '02', title: 'Konsultasjon', desc: 'Vi kartlegger dine behov' },
              { step: '03', title: 'Tilbud', desc: 'Du får et konkret tilbud' },
              { step: '04', title: 'Gjennomføring', desc: 'Vi setter løsningen i verk' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-background p-6 rounded-lg border border-border">
                  <div className="text-4xl font-bold text-accent mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 w-8 h-0.5 bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klar for å starte?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Kontakt Moss Kulde & Varmeteknikk AS i dag for din gratis konsultasjon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                Kontakt oss
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:922288755">
              <Button variant="outline" className="px-8 py-6 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Ring: 92 22 88 75
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FooterWithConsent />
    </div>
  )
}
