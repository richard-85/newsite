# ClimaTech Component Template - Quick Start Guide

## Maler som er opprettet for deg

Du har nå en **komplett, produksjonsklar hjemmeside-mal** med 30+ komponenter og 6 eksempel-sider.

### Hvor er sidene?

**Eksempel-sider finnes på:**
- `/examples` - Index-side som viser alle eksempler
- `/examples/feature-landing` - Feature-fokusert landing page
- `/examples/service-showcase` - Service showcase
- `/examples/pricing` - Prising-side
- `/examples/about` - Om oss-side
- `/examples/faq` - FAQ-side
- `/examples/gallery` - Galleri/Portfolio

**Komponenter:**
- `/components` - Live demo av alle 30+ komponenter

**Hoved-sider:**
- `/` - Landing page (Hjem)
- `/services` - Tjenester side
- `/projects` - Prosjekter
- `/about` - Om oss
- `/contact` - Kontakt

---

## Hvordan bruke denne malen

### 1. **Endre farger og design**

Åpne `app/globals.css` og endre design-tokenene:
```css
:root {
  --primary: oklch(0.18 0 0);      /* Endre til din primærfarge */
  --accent: oklch(0.65 0.15 51.5); /* Endre til din aksentfarge */
  --background: oklch(0.98 0 0);   /* Endre bakgrunn */
}
```

### 2. **Tilpass innhold**

- Bytt ut "ClimaTech" med ditt bedriftsnavn
- Endre alle tekstene i sidene
- Bytt ut ikonene (fra Lucide)
- Legg til dine egne bilder

### 3. **Bruk eksempel-sidene som mal**

Åpne f.eks. `app/examples/feature-landing/page.tsx` og kopier strukturen. Du kan:
- Kopiere hele sider
- Kombinere komponenter fra ulike eksempler
- Slette komponenter du ikke trenger

### 4. **Komponentene**

Alle komponenter finnes i `/components`:
- `reusable-sections.tsx` - 6 basis-komponenter
- `cards.tsx` - 11 kort-komponenter
- `cta.tsx` - 5 call-to-action komponenter
- `advanced.tsx` - 8 avanserte komponenter

Importer og bruk dem slik:
```tsx
import { FeatureCard, StatsCard } from '@/components/reusable-sections'
import { HoverCard, SimpleCard } from '@/components/cards'
import { CTABanner } from '@/components/cta'
import { Accordion, Tabs } from '@/components/advanced'
```

---

## Struktur

```
/vercel/share/v0-project/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Design tokens
│   ├── services/page.tsx           # Tjenester
│   ├── projects/page.tsx           # Prosjekter
│   ├── about/page.tsx              # Om oss
│   ├── contact/page.tsx            # Kontakt
│   ├── components/page.tsx         # Komponent-galleriet
│   └── examples/
│       ├── page.tsx                # Eksempel-index
│       ├── feature-landing/page.tsx
│       ├── service-showcase/page.tsx
│       ├── pricing/page.tsx
│       ├── about/page.tsx
│       ├── faq/page.tsx
│       └── gallery/page.tsx
├── components/
│   ├── reusable-sections.tsx       # Basis-komponenter
│   ├── cards.tsx                   # Kort-komponenter
│   ├── cta.tsx                     # CTA-komponenter
│   ├── advanced.tsx                # Avanserte komponenter
│   └── ui/                         # shadcn/ui komponenter
└── TEMPLATE_DOCUMENTATION.md       # Dokumentasjon
```

---

## 30+ Komponenter oversikt

### Basis-komponenter (reusable-sections.tsx)
- StatsCard - Statistikk-kort
- BenefitItem - Fordel-lister
- FeatureCard - Feature-kort
- TestimonialCard - Kundeanmeldelser
- PricingTier - Prisingspakker
- ServiceGrid - Service-grid layout

### Kort-komponenter (cards.tsx)
- SimpleCard - Enkel kort
- HoverCard - Interaktiv kort
- ImageCard - Kort med bilde
- SectionHeader - Seksjons-header
- GradientHeader - Header med gradient
- HeroBanner - Hero banner
- StepCounter - Nummererte steg
- ComparisonTable - Sammenligning-tabell
- AlertBox - Varselbox
- StarRating - 5-stjerner rating
- Divider - Skillelinje

### CTA-komponenter (cta.tsx)
- CTABanner - Full-bredde CTA
- CTAButton - CTA-knapp
- NewsletterForm - E-post-skjema
- Modal - Modal-dialog
- FeatureShowcase - Feature showcase

### Avanserte (advanced.tsx)
- Accordion - Sammenleggbar meny
- Tabs - Faner
- Breadcrumb - Brodsmulespor
- VideoEmbed - Video-embed
- Timeline - Tidslinje
- TeamGrid - Team-grid
- StatsGrid - Stats-grid
- Gallery - Galleri

---

## Tips for salg

1. **Som startermal**: Selg denne som en startermal for servicebedrifter
2. **Egne varianter**: Lag varianter for ulike industrier (rørlegger, elektriker, osv)
3. **Customization-service**: Tilby tilpassning av farger, tekst, osv
4. **White-label**: Selg som white-label løsning

---

## Deploy

Du kan deploye denne malen på:
- Vercel (easiest, klikk "Deploy" i v0)
- Netlify
- AWS
- Din egen server

---

## Support

For spørsmål eller problemer, se:
- TEMPLATE_DOCUMENTATION.md - Full dokumentasjon
- EXAMPLES_GUIDE.md - Guide for eksempel-sidene
- Komponenter-siden `/components` - Live demo

---

Lykke til med din mal! 🚀
