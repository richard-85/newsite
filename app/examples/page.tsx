'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Layout, Zap, DollarSign, Users, HelpCircle, Image, Package, FileText } from 'lucide-react'

export default function ExamplesPage() {
  const examples = [
    {
      title: "Feature Landing Page",
      description: "Modern landing page som bruker GradientHeader, HoverCard, FeatureCard, StepCounter og Divider komponenter",
      link: "/examples/feature-landing",
      icon: <Layout className="w-6 h-6" />,
      tags: ["Hero", "Features", "Steps", "CTA"]
    },
    {
      title: "Service Showcase",
      description: "Tjeneste-side som viser ServiceGrid, ComparisonTable og AlertBox komponenter",
      link: "/examples/service-showcase",
      icon: <Zap className="w-6 h-6" />,
      tags: ["Services", "Comparison", "Grid"]
    },
    {
      title: "Pricing Page",
      description: "Prisings-side med PricingTier komponenter og detaljerte feature-sammenligninger",
      link: "/examples/pricing",
      icon: <DollarSign className="w-6 h-6" />,
      tags: ["Pricing", "Features", "Comparison"]
    },
    {
      title: "About Company",
      description: "Om oss-side som bruker Timeline, StatsCard, SimpleCard og TestimonialCard komponenter",
      link: "/examples/about",
      icon: <Users className="w-6 h-6" />,
      tags: ["Timeline", "Stats", "Testimonials"]
    },
    {
      title: "FAQ Page",
      description: "Ofte stilte spørsmål-side med søkbar Accordion komponent",
      link: "/examples/faq",
      icon: <HelpCircle className="w-6 h-6" />,
      tags: ["Accordion", "Search", "FAQ"]
    },
    {
      title: "Gallery/Portfolio",
      description: "Prosjektgalleri med filtrerbare ImageCard komponenter",
      link: "/examples/gallery",
      icon: <Image className="w-6 h-6" />,
      tags: ["Gallery", "Filter", "Portfolio"]
    },
    {
      title: "Product Example",
      description: "Produktside med Modal for spesifikasjoner og Sheet for dokumentasjon og nedlastinger",
      link: "/examples/product",
      icon: <Package className="w-6 h-6" />,
      tags: ["Modal", "Sheet", "Documentation", "Specs"]
    },
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
            <div className="flex gap-4">
              <Link href="/components">
                <Button variant="outline" size="sm">
                  Komponenter
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="sm">
                  Hjem
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Eksempel-sider
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Se hvordan du kan kombinere alle komponentene for å lage komplette nettsider. Hver eksempel-side viser best practices for design og layout
          </p>
          <Link href="/components">
            <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
              Se alle komponenter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((example, index) => (
              <Link key={index} href={example.link}>
                <div className="border border-border rounded-lg p-8 bg-card hover:shadow-lg hover:border-accent transition-all cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-accent bg-accent/10 p-3 rounded-lg">
                      {example.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {example.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {example.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {example.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-accent font-semibold hover:gap-3 gap-2 transition-all">
                    <span>Se eksempel</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Tips for bruk av eksempel-sidene
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-8 border border-border">
              <div className="text-4xl font-bold text-accent mb-4">1</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Kopier og tilpass</h3>
              <p className="text-muted-foreground">
                Åpne eksempel-siden i koden din og kopier strukturen. Bytt ut tekst, farger og komponenter etter dine behov.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border">
              <div className="text-4xl font-bold text-accent mb-4">2</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Kombiner komponenter</h3>
              <p className="text-muted-foreground">
                Bruk komponentene fra /components-siden for å bygge dine egne sidekombinasjon. Alle er plug-and-play.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border">
              <div className="text-4xl font-bold text-accent mb-4">3</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Tilpass design-tokens</h3>
              <p className="text-muted-foreground">
                Endre farger, typografi og spacing i globals.css for å matche ditt brand. Alt oppdateres automatisk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Klar til å bygge din egen mal?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start med en av eksempel-sidene og tilpass den etter dine behov
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/components">
              <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
                Til komponenter
              </Button>
            </Link>
            <Link href="/examples/feature-landing">
              <Button variant="outline" className="px-8 py-6 text-lg text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Se første eksempel
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Komponenter</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/components" className="hover:text-accent transition-colors">Se alle komponenter</Link></li>
                <li><Link href="/examples" className="hover:text-accent transition-colors">Eksempel-sider</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Design</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Fargepallett</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Typografi</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Ressurser</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Dokumentasjon</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Guide</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>ClimaTech Component Library - Lag dine egne nettsider</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
