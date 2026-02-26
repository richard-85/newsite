'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { FooterWithConsent } from '@/components/footer-with-consent'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Om Moss Kulde & Varmeteknikk AS
          </h1>
          <p className="text-xl text-primary-foreground/90 text-balance max-w-2xl">
            Etablert i 1995 med over 30 års erfaring innen rørlegger-, kjøle- og varmepumpeteknikk for Rygge og omegn.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Vår historie</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Moss Kulde & Varmeteknikk AS ble etablert i 1995 med fokus på høykvalitetsleveranser innen rørlegger-, kjøle- og varmepumpeteknikk. Fra dag en har vi vært dedikert til å tilby de beste løsningene for både private huseiere og næringsliv i Rygge og omegn.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                I dag har vi et erfaret team av sertifiserte teknikere som arbeider hver dag for å sikre at kundene får de beste produktene og den beste installasjonen. Vi er stolte av vårt rykte for pålitelighet, fagkompetanse, og utmerket kundeservice.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Over 30 år i bransjen har gitt oss dyptgående kunnskap og erfaring. Vi investerer kontinuerlig i nyeste teknologi og utdanning for å tilby innovative og energieffektive løsninger som reduserer energiforbruk og miljøpåvirkning.
              </p>
            </div>
            <div className="bg-secondary rounded-lg h-96 flex items-center justify-center text-muted-foreground">
              <p>Moss Kulde Team Image</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Våre verdier</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Kvalitet</h3>
              <p className="text-foreground/80">Vi bruker kun de beste merkene og materialer for å sikre langsiktig ytelse, pålitelighet og kundetilfredshet.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Kundeservice</h3>
              <p className="text-foreground/80">Din tilfredshet er vår prioritet. Vi tilbyr rask respons, nødservice 24/7 og profesjonell service til enhver tid.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Kompetanse</h3>
              <p className="text-foreground/80">Alle våre teknikere er sertifiserte og har mange års erfaring innen sitt område.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Kontaktinformasjon</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-secondary p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Moss Kulde & Varmeteknikk AS</h3>
              <div className="space-y-4 text-foreground/80">
                <div>
                  <p className="font-semibold text-foreground">Adresse</p>
                  <p>Rådeskogen 60, 1580 Rygge</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefon</p>
                  <a href="tel:922288755" className="hover:text-accent transition-colors">92 22 88 75</a>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Nødservice</p>
                  <p>24/7 tilgjengelig</p>
                </div>
              </div>
            </div>
            <div className="bg-accent/10 p-8 rounded-lg border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">Tjenester</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>✓ Rørleggerarbeid</li>
                <li>✓ Varmepumpeinstallasjon</li>
                <li>✓ Kuldeanlegg service</li>
                <li>✓ Ventilasjonssystemer</li>
                <li>✓ Vedlikehold og service</li>
                <li>✓ Nødtjenester</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vil du jobbe med oss?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Kontakt oss i dag for å diskutere ditt prosjekt og få en gratis konsultasjon.
          </p>
          <Link href="/contact" className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors inline-flex items-center justify-center gap-2">
            Kontakt oss
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
    

      <FooterWithConsent />
    </main>
  )
}
