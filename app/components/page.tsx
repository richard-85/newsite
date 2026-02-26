'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Thermometer,
  Snowflake,
  Wrench,
  Wind,
  Zap,
  Shield,
  Users,
  Award,
  ArrowRight,
  Layers,
  Package,
  Lightbulb,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import {
  StatsCard,
  BenefitItem,
  FeatureCard,
  TestimonialCard,
  PricingTier,
  ServiceGrid,
} from '@/components/reusable-sections'
import {
  SimpleCard,
  HoverCard,
  ImageCard,
  SectionHeader,
  GradientHeader,
  HeroBanner,
  StepCounter,
  ComparisonTable,
  AlertBox,
  StarRating,
  Divider,
} from '@/components/cards'
import {
  CTABanner,
  CTAButton,
  NewsletterForm,
  Modal,
  FeatureShowcase,
} from '@/components/cta'
import {
  Accordion,
  Tabs,
  Breadcrumb,
  VideoEmbed,
  Timeline,
  TeamGrid,
  StatsGrid,
  Gallery,
} from '@/components/advanced'

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Alle komponenter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            En komplett oversikt over alle gjenbrukbare komponenter i malen. Kopier, tilpass og bruk hvor du ønsker.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Stats Card Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">StatsCard</h2>
            <p className="text-muted-foreground mb-8">Viser statistikk med tall, beskrivelse og valgfritt firmabildeikon</p>
            <div className="grid md:grid-cols-4 gap-6">
              <StatsCard
                stat="20+"
                description="År erfaring"
                company="ClimaTech"
              />
              <StatsCard
                stat="5000+"
                description="Fornøyde kunder"
              />
              <StatsCard
                stat="80%"
                description="Oppvarmingsbesparing"
              />
              <StatsCard
                stat="24/7"
                description="Tilgjengelig support"
              />
            </div>
          </div>

          <hr className="my-16" />

          {/* Service Grid Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">ServiceGrid</h2>
            <p className="text-muted-foreground mb-8">Viser 3 eller flere service-kort med ikon, tittel og beskrivelse</p>
            <ServiceGrid
              title="Tjenester for private"
              subtitle="Energieffektive klimaløsninger for ditt hjem"
              services={[
                {
                  icon: <Thermometer className="w-8 h-8 text-accent" />,
                  title: "Varmepumper",
                  description: "Spar opptil 80% på oppvarming"
                },
                {
                  icon: <Snowflake className="w-8 h-8 text-accent" />,
                  title: "Aircondition",
                  description: "Perfekt temperatur året rundt"
                },
                {
                  icon: <Wrench className="w-8 h-8 text-accent" />,
                  title: "Service",
                  description: "Profesjonelt vedlikehold"
                }
              ]}
              viewAllLink="/services"
            />
          </div>

          <hr className="my-16" />

          {/* Feature Card Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">FeatureCard</h2>
            <p className="text-muted-foreground mb-8">Viser feature med ikon, tittel, beskrivelse og valgfritt badge</p>
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Zap className="w-8 h-8 text-accent" />}
                title="Energieffektiv"
                description="Reduser energikostnader med opptil 80% med våre moderne løsninger"
                badge="Nyeste teknologi"
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8 text-accent" />}
                title="Garantert kvalitet"
                description="10 års garanti på alle installasjoner og produkter"
              />
              <FeatureCard
                icon={<Users className="w-8 h-8 text-accent" />}
                title="Profesjonelt team"
                description="Erfarne teknikere med sertifikater og erfaring"
              />
            </div>
          </div>

          <hr className="my-16" />

          {/* Benefit Item Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">BenefitItem</h2>
            <p className="text-muted-foreground mb-8">Viser fordel med checkmark-ikon, tittel og beskrivelse</p>
            <div className="space-y-4 max-w-3xl">
              <BenefitItem
                title="Opptil 80% besparelse"
                description="På oppvarming sammenlignet med tradisjonelle systemer"
              />
              <BenefitItem
                title="Stabil inneklima året rundt"
                description="Med automatisk temperaturkontroll"
              />
              <BenefitItem
                title="Profesjonell installasjon"
                description="Fra vårt erfarne team av teknikere"
              />
            </div>
          </div>

          <hr className="my-16" />

          {/* Testimonial Card Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">TestimonialCard</h2>
            <p className="text-muted-foreground mb-8">Viser kundeanmeldelse med sitat, navn, rolle og bedrift</p>
            <div className="grid md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="Fantastisk installasjon og service! Vi sparte enorm på strømregningen."
                author="Johan Hansen"
                role="Huseier"
                company="Oslo"
              />
              <TestimonialCard
                quote="Profesjonelt team som fulgte opp alle detaljer. Installasjonen gikk uten forstyrrelser."
                author="Anna Mørk"
                role="Bedriftsleder"
                company="Bergen"
              />
              <TestimonialCard
                quote="Best i sitt slag! Kundeservice, kvalitet og pris var perfekt."
                author="Per Nilsen"
                role="Restauranteier"
                company="Stavanger"
              />
            </div>
          </div>

          <hr className="my-16" />

          {/* Pricing Tier Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">PricingTier</h2>
            <p className="text-muted-foreground mb-8">Viser prisingspakker med navn, pris, beskrivelse og funksjoner</p>
            <div className="grid md:grid-cols-3 gap-8">
              <PricingTier
                name="Starterpakke"
                price="Fra 25 000 kr"
                description="Perfekt for mindre hjem"
                features={[
                  'En inneenhet',
                  'Installasjon inkludert',
                  '2 års garanti',
                  'Telefonsuport',
                ]}
                cta="Kontakt for tilbud"
              />
              <PricingTier
                name="Profesjonell"
                price="Fra 45 000 kr"
                description="For de fleste hjem"
                features={[
                  'Multisplit system',
                  'Installasjon inkludert',
                  '5 års garanti',
                  'Prioritert support',
                  '2x årlig vedlikehold',
                ]}
                cta="Kontakt for tilbud"
                highlighted
              />
              <PricingTier
                name="Premium"
                price="Fra 75 000 kr"
                description="For større prosjekter"
                features={[
                  'Komplett system',
                  'Installasjon og testing',
                  '10 års garanti',
                  '24/7 support',
                  'Månedlig vedlikehold',
                ]}
                cta="Kontakt for tilbud"
              />
            </div>
          </div>

          <hr className="my-16" />

          <hr className="my-16" />

          {/* Simple Card Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">SimpleCard</h2>
            <p className="text-muted-foreground mb-8">Enkel kort med tittel, beskrivelse og valgfritt ikon</p>
            <div className="grid md:grid-cols-3 gap-6">
              <SimpleCard
                title="Rask installasjon"
                description="Vi installerer systemet ditt på bare noen timer"
                icon={<Zap className="w-6 h-6" />}
              />
              <SimpleCard
                title="Støttfullt team"
                description="Vårt team er alltid klar til å hjelpe deg"
                icon={<Users className="w-6 h-6" />}
              />
              <SimpleCard
                title="Beste pris"
                description="Vi tilbyr markedets beste priser"
                icon={<Award className="w-6 h-6" />}
              />
            </div>
          </div>

          <hr className="my-16" />

          {/* Hover Card Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">HoverCard</h2>
            <p className="text-muted-foreground mb-8">Interaktiv kort med hover-effekter og gradient</p>
            <div className="grid md:grid-cols-3 gap-6">
              <HoverCard
                title="Energisparing"
                description="Spar opptil 80% på energikostnader"
                icon={<Zap className="w-8 h-8" />}
              />
              <HoverCard
                title="Miljøvennlig"
                description="Reduser karbonavtrykket ditt betraktelig"
                icon={<Lightbulb className="w-8 h-8" />}
              />
              <HoverCard
                title="Langtidsgaranti"
                description="Beskyttet i opptil 10 år"
                icon={<Shield className="w-8 h-8" />}
              />
            </div>
          </div>

          <hr className="my-16" />

          {/* Section Header Component */}
          <div className="mb-20">
            <SectionHeader
              title="Hvordan det fungerer"
              subtitle="Tre enkle steg til ditt perfekte inneklima"
              ctaText="Se alle tjenester"
              ctaLink="/services"
            />
            <p className="text-muted-foreground">Denne komponenten brukes for å lage seksjonsoverskrifter med optional CTA-knapp</p>
          </div>

          <hr className="my-16" />

          {/* Gradient Header Component */}
          <div className="mb-20">
            <GradientHeader
              title="Moderne klimaløsninger"
              subtitle="Med gradient tekst-effekt"
              gradient="accent"
            />
            <p className="text-muted-foreground text-center">Perfekt for å skille seksjoner og trekke oppmerksomhet</p>
          </div>

          <hr className="my-16" />

          {/* Step Counter Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">StepCounter</h2>
            <p className="text-muted-foreground mb-8">Nummererte trinn/prosesser</p>
            <StepCounter
              steps={[
                {
                  number: 1,
                  title: "Konsultasjon",
                  description: "Vi vurderer ditt hjem og finner best løsning"
                },
                {
                  number: 2,
                  title: "Tilbud",
                  description: "Du får et detaljert tilbud med alle detaljer"
                },
                {
                  number: 3,
                  title: "Installasjon",
                  description: "Vi installerer systemet ditt profesjonelt"
                },
                {
                  number: 4,
                  title: "Service",
                  description: "Vedlikehold og support år etter år"
                },
              ]}
            />
          </div>

          <hr className="my-16" />

          {/* Comparison Table Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">ComparisonTable</h2>
            <p className="text-muted-foreground mb-8">Sammenlign features mellom pakker</p>
            <ComparisonTable
              features={[
                { feature: "Installasjon", basic: true, pro: true, enterprise: true },
                { feature: "Support", basic: true, pro: true, enterprise: true },
                { feature: "Vedlikehold", basic: false, pro: true, enterprise: true },
                { feature: "24/7 Support", basic: false, pro: false, enterprise: true },
                { feature: "Månedskontroll", basic: false, pro: false, enterprise: true },
              ]}
            />
          </div>

          <hr className="my-16" />

          {/* Alert Box Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">AlertBox</h2>
            <p className="text-muted-foreground mb-8">Forskjellige varseltyppar</p>
            <div className="space-y-4">
              <AlertBox type="info" title="Informasjon" description="Dette er en informativ melding for brukerne dine" />
              <AlertBox type="success" title="Suksess!" description="Operasjonen var vellykket" />
              <AlertBox type="warning" title="Advarsel" description="Vær oppmerksom på denne viktge informasjonen" />
              <AlertBox type="error" title="Feil" description="Noe gikk galt. Prøv igjen senere" />
            </div>
          </div>

          <hr className="my-16" />

          {/* Star Rating Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">StarRating</h2>
            <p className="text-muted-foreground mb-8">5-stjerner vurdering display</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <StarRating rating={5} size="md" />
                <span className="text-muted-foreground">5.0 stjerner (247 vurderinger)</span>
              </div>
              <div className="flex items-center gap-4">
                <StarRating rating={4} size="md" />
                <span className="text-muted-foreground">4.5 stjerner (182 vurderinger)</span>
              </div>
            </div>
          </div>

          <hr className="my-16" />

          {/* Divider Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Divider</h2>
            <p className="text-muted-foreground mb-8">Skillelinjer med valgfritt etikett</p>
            <Divider />
            <Divider withLabel="Eller" />
            <Divider variant="dashed" withLabel="Stiplet linje" />
          </div>

          <hr className="my-16" />

          {/* Accordion Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Accordion</h2>
            <p className="text-muted-foreground mb-8">Sammenleggbare seksjoner for FAQ</p>
            <Accordion
              items={[
                {
                  title: "Hvor lang varer installasjonen?",
                  content: "Typisk installasjon tar 4-8 timer avhengig av systemets kompleksitet."
                },
                {
                  title: "Hva er garantien?",
                  content: "Vi tilbyr 5-10 års garanti avhengig av pakketype."
                },
                {
                  title: "Kan dere installere på mitt hus?",
                  content: "Ja, vi installerer på de fleste husstander. Kontakt oss for konsultasjon."
                },
              ]}
            />
          </div>

          <hr className="my-16" />

          {/* Tabs Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Tabs</h2>
            <p className="text-muted-foreground mb-8">Fanebasert innholds-bytter</p>
            <Tabs
              tabs={[
                {
                  label: "Private",
                  content: <p className="text-muted-foreground">Tjenester tilpasset privatpersoner og småhjem.</p>
                },
                {
                  label: "Bedrift",
                  content: <p className="text-muted-foreground">Større løsninger for restauranter og kommersielle bygg.</p>
                },
                {
                  label: "Service",
                  content: <p className="text-muted-foreground">Vedlikehold og reparasjonstjenester året rundt.</p>
                },
              ]}
            />
          </div>

          <hr className="my-16" />

          {/* Breadcrumb Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Breadcrumb</h2>
            <p className="text-muted-foreground mb-8">Navigasjonsbrodsmulespor</p>
            <Breadcrumb
              items={[
                { label: "Hjem", href: "/" },
                { label: "Tjenester", href: "/services" },
                { label: "Varmepumper", href: "/services/heat-pumps" },
                { label: "Multisplit system" },
              ]}
            />
          </div>

          <hr className="my-16" />

          {/* CTA Banner Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">CTABanner</h2>
            <p className="text-muted-foreground mb-8">Full-bredde call-to-action banner</p>
            <CTABanner
              title="Klar for å starte?"
              description="Få en gratis konsultasjon og tilbud på ditt prosjekt i dag"
              buttonText="Kontakt oss nå"
              buttonLink="/contact"
              secondaryButtonText="Les mer"
              secondaryButtonLink="/services"
              variant="primary"
            />
          </div>

          <hr className="my-16" />

          {/* Newsletter Form Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">NewsletterForm</h2>
            <p className="text-muted-foreground mb-8">E-postabonnements skjema</p>
            <NewsletterForm
              title="Abonnér på vårt nyhetsbrev"
              placeholder="Din e-postadresse"
              buttonText="Abonner"
            />
          </div>

          <hr className="my-16" />

          {/* Timeline Component */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Timeline</h2>
            <p className="text-muted-foreground mb-8">Tidslinjer for prosesser eller historikk</p>
            <Timeline
              events={[
                {
                  title: "Consultasjon",
                  description: "Vi møter deg og vurderer ditt hjem",
                  date: "Dag 1"
                },
                {
                  title: "Tilbud",
                  description: "Du mottar et detaljert tilbud innen 24 timer",
                  date: "Dag 2"
                },
                {
                  title: "Installasjon",
                  description: "Vi installerer systemet ditt",
                  date: "Dag 3-5"
                },
                {
                  title: "Opplæring og vedlikehold",
                  description: "Du lærer å bruke systemet",
                  date: "Dag 5"
                },
              ]}
            />
          </div>

          <hr className="my-16" />

          {/* Button Varianter */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">Button Varianter</h2>
            <p className="text-muted-foreground mb-8">Forskjellige knapp-varianter du kan bruke</p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Primær knapp
              </Button>
              <Button variant="outline">
                Outline knapp
              </Button>
              <Button variant="secondary">
                Sekundær knapp
              </Button>
              <Button variant="ghost">
                Ghost knapp
              </Button>
              <Button disabled>
                Deaktivert knapp
              </Button>
            </div>
          </div>

          <hr className="my-16" />

          {/* Icons Available */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-2">Tilgjengelige ikoner</h2>
            <p className="text-muted-foreground mb-8">Lucide ikonbibliotek med mange muligheter</p>
            <div className="grid md:grid-cols-6 gap-4">
              <div className="p-4 border border-border rounded-lg text-center">
                <Thermometer className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Thermometer</p>
              </div>
              <div className="p-4 border border-border rounded-lg text-center">
                <Snowflake className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Snowflake</p>
              </div>
              <div className="p-4 border border-border rounded-lg text-center">
                <Wrench className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Wrench</p>
              </div>
              <div className="p-4 border border-border rounded-lg text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Zap</p>
              </div>
              <div className="p-4 border border-border rounded-lg text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Shield</p>
              </div>
              <div className="p-4 border border-border rounded-lg text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Award</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Klare til å bygge?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Bruk disse komponentene til å bygge din egen nettside. De er enkle å tilpasse og fullt responsive.
          </p>
          <Link href="/contact">
            <Button className="px-8 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
              Kontakt oss
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">ClimaTech</h3>
              <p className="text-muted-foreground text-sm">
                Profesjonelle klimaløsninger for privatpersoner og bedrifter
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Ressurser</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/components" className="hover:text-accent transition-colors">Komponenter</Link></li>
                <li><Link href="/" className="hover:text-accent transition-colors">Template</Link></li>
                <li><Link href="/services" className="hover:text-accent transition-colors">Tjenester</Link></li>
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
              <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
              <p className="text-sm text-muted-foreground mb-2">Telefon: +47 123 45 678</p>
              <p className="text-sm text-muted-foreground">Email: info@climatech.no</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ClimaTech. Alle rettigheter forbeholdt.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
