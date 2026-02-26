'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Download, FileText, Zap, Thermometer, Volume2, Wifi, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function ProductPage() {
  const [selectedTab, setSelectedTab] = useState<'specs' | 'docs'>('specs')

  const specifications = [
    { label: 'Kjølekapasitet', value: '10 kW', icon: <Thermometer className="w-5 h-5" /> },
    { label: 'Oppvarmingskapasitet', value: '12 kW', icon: <Zap className="w-5 h-5" /> },
    { label: 'Lydnivå', value: '22 dB(A)', icon: <Volume2 className="w-5 h-5" /> },
    { label: 'WiFi Tilkoblet', value: 'Ja', icon: <Wifi className="w-5 h-5" /> },
  ]

  const documentation = [
    { title: 'Installasjonsguide', description: 'Komplett steg-for-steg guide', file: 'installer-guide.pdf' },
    { title: 'Brukerhåndbok', description: 'Hvordan bruke systemet', file: 'user-manual.pdf' },
    { title: 'Teknisk spesifikasjon', description: 'Detaljerte tekniske data', file: 'tech-specs.pdf' },
    { title: 'Vedlikeholdsveileder', description: 'Vedlikehold og service', file: 'maintenance.pdf' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-accent">
              ClimaTech
            </Link>
            <Link href="/examples" className="text-foreground hover:text-accent transition-colors flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Tilbake til eksempler
            </Link>
          </div>
        </div>
      </nav>

      {/* Product Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center border border-border">
              <div className="text-center">
                <Thermometer className="w-24 h-24 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Produktbilde</p>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Premium Varmepumpe
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                ClimaTech Pro X1000
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Avansert varmepumpe med AI-styring og smart temperaturkontroll for maksimal energieffektivitet.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Opptil 80% energibesparing</p>
                    <p className="text-sm text-muted-foreground">Sammenlignet med tradisjonelle løsninger</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Smart WiFi-kontroll</p>
                    <p className="text-sm text-muted-foreground">Styr fra mobil app hvor som helst</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Volume2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Ekstra stille drift</p>
                    <p className="text-sm text-muted-foreground">Kun 22 dB(A) på laveste innstilling</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                  Få tilbud
                </Button>

                {/* Specifications Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="px-8 py-6 text-lg">
                      Se spesifikasjoner
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Tekniske spesifikasjoner</DialogTitle>
                      <DialogDescription>
                        Fullstendige detaljer om ClimaTech Pro X1000
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid md:grid-cols-2 gap-8 py-6">
                      {specifications.map((spec, index) => (
                        <div key={index} className="border border-border rounded-lg p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="text-accent">{spec.icon}</div>
                            <p className="font-semibold text-foreground">{spec.label}</p>
                          </div>
                          <p className="text-2xl font-bold text-accent">{spec.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* More specs */}
                    <div className="border-t border-border pt-6">
                      <h3 className="font-bold text-foreground mb-4">Ytterligere spesifikasjoner</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Strømforbruk</span>
                          <span className="font-semibold text-foreground">3,2 kW</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Virkningsgrad (COP)</span>
                          <span className="font-semibold text-foreground">4,8</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Garanti</span>
                          <span className="font-semibold text-foreground">10 år</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Driftstemperatur</span>
                          <span className="font-semibold text-foreground">-25 til +45°C</span>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Documentation Sheet */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="px-8 py-6 text-lg">
                      <FileText className="w-5 h-5 mr-2" />
                      Dokumentasjon
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Produktdokumentasjon</SheetTitle>
                      <SheetDescription>
                        Last ned guider, manualer og tekniske dokumenter
                      </SheetDescription>
                    </SheetHeader>

                    <div className="space-y-4 mt-8">
                      {documentation.map((doc, index) => (
                        <div
                          key={index}
                          className="border border-border rounded-lg p-4 hover:bg-secondary transition-colors group cursor-pointer"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                {doc.title}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {doc.description}
                              </p>
                            </div>
                            <Download className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Additional Resources */}
                    <div className="border-t border-border mt-8 pt-8">
                      <h3 className="font-bold text-foreground mb-4">Nyttige ressurser</h3>
                      <div className="space-y-3">
                        <a href="#" className="block text-accent hover:underline text-sm">
                          Installasjonsvideo →
                        </a>
                        <a href="#" className="block text-accent hover:underline text-sm">
                          Troubleshooting-guide →
                        </a>
                        <a href="#" className="block text-accent hover:underline text-sm">
                          Kontakt support →
                        </a>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Nøkkelfunksjoner
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">AI-styrt temperaturkontroll</h3>
              <p className="text-muted-foreground">
                Kunstig intelligens lærer dine preferanser og optimaliserer temperaturen automatisk
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <Wifi className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Smart fjernkontroll</h3>
              <p className="text-muted-foreground">
                App-basert styring med intuitivt grensesnitt og historikk over energiforbruk
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <Thermometer className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Miljøvennlig</h3>
              <p className="text-muted-foreground">
                Bruker moderne kjølgass og reduserer karbonavtrykket ditt betraktelig
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Interessert i ClimaTech Pro X1000?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Kontakt oss for mer informasjon eller en demo av produktet
          </p>
          <Link href="/contact">
            <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
              Kontakt oss
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
