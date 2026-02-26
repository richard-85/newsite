'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Map, FileText, Zap } from 'lucide-react'

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-accent">
              ClimaTech
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                Tilbake
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Map className="w-12 h-12 text-accent" />
            Nettside Oversikt
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Komplett oversikt over alle sider i malen din
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Hoved-sider */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
                <Zap className="w-6 h-6 text-accent" />
                Hoved-sider
              </h2>
              <ul className="space-y-4">
                {[
                  { title: "Hjem (Landing Page)", url: "/" },
                  { title: "Tjenester", url: "/services" },
                  { title: "Prosjekter", url: "/projects" },
                  { title: "Om oss", url: "/about" },
                  { title: "Kontakt", url: "/contact" },
                ].map((page, i) => (
                  <li key={i}>
                    <Link href={page.url} className="inline-flex items-center gap-3 p-4 border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all group">
                      <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                      <span className="text-foreground group-hover:text-accent font-medium">{page.title}</span>
                      <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ressurser */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
                <FileText className="w-6 h-6 text-accent" />
                Ressurser & Dokumentasjon
              </h2>
              <ul className="space-y-4">
                {[
                  { title: "Komponenter", url: "/components", desc: "Se alle 30+ komponenter" },
                  { title: "Eksempler", url: "/examples", desc: "6 ferdiglagde eksempel-sider" },
                ].map((page, i) => (
                  <li key={i}>
                    <Link href={page.url} className="block p-4 border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-foreground font-medium hover:text-accent">{page.title}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">{page.desc}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Eksempel-sider</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Feature Landing", 
                url: "/examples/feature-landing",
                desc: "Modern landing page med hero, features, steps" 
              },
              { 
                title: "Service Showcase", 
                url: "/examples/service-showcase",
                desc: "Tjeneste-presentasjon med grid og sammenligning" 
              },
              { 
                title: "Pricing", 
                url: "/examples/pricing",
                desc: "Prisings-side med detaljerte pakker" 
              },
              { 
                title: "About", 
                url: "/examples/about",
                desc: "Om oss-side med timeline og testimonials" 
              },
              { 
                title: "FAQ", 
                url: "/examples/faq",
                desc: "Ofte stilte spørsmål med accordion" 
              },
              { 
                title: "Gallery", 
                url: "/examples/gallery",
                desc: "Prosjektgalleri med filtrering" 
              },
            ].map((page, i) => (
              <Link key={i} href={page.url} className="block p-6 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all bg-background">
                <h3 className="text-xl font-bold text-foreground mb-2 hover:text-accent transition-colors">{page.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{page.desc}</p>
                <div className="flex items-center text-accent text-sm font-semibold">
                  Se eksempel <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Rask start</h2>
          <div className="bg-primary/10 border border-primary rounded-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Hvor starter jeg?</h3>
            <ol className="space-y-3 text-foreground mb-8">
              <li className="flex gap-3">
                <span className="font-bold text-accent">1.</span>
                <span>Besøk <Link href="/components" className="text-accent hover:underline">/components</Link> for å se alle komponenter</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">2.</span>
                <span>Besøk <Link href="/examples" className="text-accent hover:underline">/examples</Link> for eksempel-sider</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">3.</span>
                <span>Les <span className="font-mono bg-foreground/10 px-2 py-1 rounded">QUICK_START.md</span> for tilpasnings-guide</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">4.</span>
                <span>Kopier eksempel-sidene og tilpass til dine behov</span>
              </li>
            </ol>
            <Link href="/components">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Se komponenter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>ClimaTech - Komplett nettside-mal med 30+ komponenter</p>
        </div>
      </footer>
    </div>
  )
}
