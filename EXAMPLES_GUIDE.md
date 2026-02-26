# ClimaTech Component Library - Komplett guide

## Oversikt

Dette er en profesjonell, modulær komponent-bibliotek og website-mal designet for servicebedrifter. Malen er helt responsiv, har dark/light theme support, og er enkelt å tilpasse og selge til andre bedrifter.

## Filstruktur

```
/app
  /examples           # 6 fullstendige eksempel-sider som viser best practices
    /feature-landing
    /service-showcase
    /pricing
    /about
    /faq
    /gallery
  /components
  /services
  /projects
  /about
  /contact
  page.tsx           # Hovedlandingside

/components
  reusable-sections.tsx    # 6 basis-komponenter (StatsCard, BenefitItem, etc.)
  cards.tsx               # 11 kort- og display-komponenter
  cta.tsx                # 5 call-to-action komponenter
  advanced.tsx           # 8 avanserte komponenter (Accordion, Timeline, etc.)
  ui/                    # shadcn/ui komponenter
```

## Komponenter-kategorier

### Basis-komponenter (reusable-sections.tsx)
- **StatsCard** - Statistikk-bokser for tall
- **BenefitItem** - Liste med fordeler/benefits
- **FeatureCard** - Feature/benefit-kort med ikon
- **TestimonialCard** - Kundeanmeldelse
- **PricingTier** - Prispakker
- **ServiceGrid** - Grid med service-kort

### Kort-komponenter (cards.tsx)
- **SimpleCard** - Enkel kort med ikon
- **HoverCard** - Interaktiv kort med hover-effekter
- **ImageCard** - Kort med bilde/gradient
- **SectionHeader** - Seksjonstittel med optional CTA
- **GradientHeader** - Gradient tekst-effekt
- **HeroBanner** - Full-bredde hero-seksjon
- **StepCounter** - Nummererte prosess-steg
- **ComparisonTable** - Feature-sammenligningstabell
- **AlertBox** - Varsler (info, success, warning, error)
- **StarRating** - 5-stjerner vurdering
- **Divider** - Skillelinje med optional label

### CTA-komponenter (cta.tsx)
- **CTABanner** - Full-bredde call-to-action banner
- **CTAButton** - CTA-knapp med styling
- **NewsletterForm** - E-postabonnementsform
- **Modal** - Modal-dialog
- **FeatureShowcase** - Feature-presentasjon

### Avanserte komponenter (advanced.tsx)
- **Accordion** - Sammenleggbare seksjoner (perfekt for FAQ)
- **Tabs** - Fane-basert innhold
- **Breadcrumb** - Navigasjonsbrødsmulespor
- **VideoEmbed** - Innebygd video-spiller
- **Timeline** - Tidslinje-visning
- **TeamGrid** - Team-medlem grid
- **StatsGrid** - Statistikk-grid
- **Gallery** - Bildegalleri med lightbox

## Eksempel-sider

Hver eksempel-side viser prakisk bruk av komponenter:

1. **Feature Landing** (`/examples/feature-landing`) - Moderne landing page med hero, features, steps
2. **Service Showcase** (`/examples/service-showcase`) - Tjeneste-presentasjon med ServiceGrid og sammenligning
3. **Pricing** (`/examples/pricing`) - Prissidee med PricingTier og detailed features
4. **About** (`/examples/about`) - Om oss-side med Timeline, Stats og Testimonials
5. **FAQ** (`/examples/faq`) - FAQ-side med søkbar Accordion
6. **Gallery** (`/examples/gallery`) - Prosjektgalleri med filtrerbare kort

## Hvordan tilpasse for din klient

### 1. Endre bedriftsnavn og informasjon

I `/app/page.tsx`:
```tsx
<Link href="/" className="text-2xl font-bold text-accent">
  YourCompanyName  // Endre her
</Link>
```

I alle sider: Bytt "ClimaTech" med ditt bedriftsnavn

### 2. Endre farger (Design Tokens)

I `/app/globals.css`:
```css
:root {
  --accent: oklch(0.65 0.15 51.5);  /* Endre primary accent-farge */
  --primary: oklch(0.18 0 0);       /* Endre primary-farge */
  /* etc. */
}
```

Alle komponenter oppdateres automatisk.

### 3. Endre innhold

Hver side bruker enkle komponenter du kan tilpasse:

```tsx
<FeatureCard
  icon={<MyIcon className="w-8 h-8 text-accent" />}
  title="Ditt tittel"
  description="Din beskrivelse"
/>
```

### 4. Bytt ut tekst og bilder

Erstatt placeholder-tekst i alle komponentene med relevant innhold for klienten.

### 5. Legg til egne komponenter

Lag ny fil i `/components` og eksporter komponenten:

```tsx
// /components/my-custom.tsx
export function MyCustomComponent({ ... }) {
  return (...)
}
```

Importer deretter i sidene du trenger det.

## Best Practices

### Layout
- Bruk **Flexbox** for de fleste layouts (default)
- Bruk **Grid** kun for 2D-kompleks layouts
- Hold maksimal bredde på ~1280px (max-w-7xl)

### Responsivitet
- Design mobile-first, enn enhance for større skjermer
- Bruk Tailwind responsive prefixes: `md:`, `lg:`, `xl:`
- Test på både mobil og desktop

### Komponenter
- Bruk eksisterende komponenter før du lager nye
- Hold komponenter små og gjenbrukbare
- Dokumenter props i komponentfilen

### Farge og design
- Maksimalt 3-5 farger total
- Unngå gradients (bruk solid farger)
- Bruk design-tokens fra globals.css

### Performance
- Bruk 'use client' kun når nødvendig
- Optimaliser bilder
- Lazy-load heavy komponenter

## Import-eksempler

```tsx
// Basis-komponenter
import { StatsCard, BenefitItem, FeatureCard } from '@/components/reusable-sections'

// Kort-komponenter
import { SimpleCard, HoverCard, AlertBox } from '@/components/cards'

// CTA-komponenter
import { CTABanner, NewsletterForm } from '@/components/cta'

// Avanserte komponenter
import { Accordion, Timeline, Gallery } from '@/components/advanced'

// shadcn/ui komponenter
import { Button } from '@/components/ui/button'

// Icons
import { ArrowRight, Zap, Award } from 'lucide-react'
```

## Deployment

### For deg selv
```bash
npm install
npm run dev  # Lokal utvikling
npm run build
npm start    # Production
```

### For klient
1. Zip hele prosjektet
2. Instruks: `npm install && npm run dev`
3. De kan håndtere alt fra v0 editoren eller deres egen editor

## Support og updates

Alle komponenter er fully typed med TypeScript og production-ready. Komponenter følger shadcn/ui best practices og Dark Mode støtte.

## Tips for salg

- Denne malen kan enkelt tilpasses for enhver servicebedrift
- Alle komponenter er dokumentert og enkle å tilpasse
- Fargeskjemaet er lett å endre i globals.css
- Eksempel-sidene viser hvordan alt fungerer sammen
- Du kan gjenbruke denne malen mange ganger med minimal tilpasning

## Lisensinformasjon

Denne malen er basert på Next.js 16, React 19, Tailwind CSS v4, og shadcn/ui. Den er åpen for kommersiell bruk og kan selges/redistribueres.
