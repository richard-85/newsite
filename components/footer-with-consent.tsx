'use client'

import Link from 'next/link'
import { MapPin, Phone, Clock, Settings } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function FooterWithConsent() {
  const [consentOpen, setConsentOpen] = useState(false)
  const [consents, setConsents] = useState({
    essential: true,
    googleMaps: true,
  })

  const toggleConsent = (key: keyof typeof consents) => {
    setConsents(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <footer className="bg-card border-t border-border py-12 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Moss Kulde & Varmeteknikk AS</h3>
              <p className="text-muted-foreground text-sm">
                Profesjonell rørlegger-, kjøle- og varmepumpeteknikk siden 1995
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Tjenester</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services" className="hover:text-accent transition-colors">Rørleggerarbeid</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">Varmepumper</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">Kuldeanlegg</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">Ventilasjon</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Bedrift</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-accent transition-colors">Om oss</Link></li>
                <li><Link href="/projects" className="hover:text-accent transition-colors">Prosjekter</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Kontaktinfo</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Rådeskogen 60, 1580 Rygge
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                <a href="tel:922288755" className="hover:text-accent">92 22 88 75</a>
              </p>
              <p className="text-sm text-muted-foreground">
                <Clock className="w-4 h-4 inline mr-2" />
                Nødservice 24/7
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Moss Kulde & Varmeteknikk AS. Alle rettigheter forbeholdt.</p>
          </div>
        </div>

        {/* Consent Button */}
        <button
          onClick={() => setConsentOpen(true)}
          className="fixed bottom-6 right-6 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors z-40"
          aria-label="Samtykkeinstillinger"
        >
          <Settings className="w-5 h-5" />
        </button>
      </footer>

      {/* Consent Modal */}
      {consentOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-6">
              <h2 className="text-xl font-bold text-foreground">Samtykkeinstillinger</h2>
              <button
                onClick={() => setConsentOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Required */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Nødvendige informasjonskapsler</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Disse er påkrevd for grunnleggende funksjonalitet og kan ikke deaktiveres.
                </p>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">Grunnleggende funksjonalitet</label>
                  <div className="w-12 h-6 bg-accent rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                  </div>
                </div>
              </div>

              {/* Functional */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Funksjonelle tjenester</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Innebyggde kart og andre tredjeparts tjenester som forbedrer brukeropplevelsen.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-foreground">Google Maps</label>
                    <p className="text-xs text-muted-foreground">Viser interaktiv kart | Levelid: Sesjon | <a href="#" className="hover:text-accent">Google sine retningslinjer</a></p>
                  </div>
                  <button
                    onClick={() => toggleConsent('googleMaps')}
                    className={`w-12 h-6 rounded-full relative transition-colors ${consents.googleMaps ? 'bg-accent' : 'bg-muted'}`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${consents.googleMaps ? 'right-0.5' : 'left-0.5'}`}></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="border-t border-border p-6 flex gap-4">
              <button
                onClick={() => setConsentOpen(false)}
                className="flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                Avslå alle
              </button>
              <button
                onClick={() => setConsentOpen(false)}
                className="flex-1 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                Godta alle
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
