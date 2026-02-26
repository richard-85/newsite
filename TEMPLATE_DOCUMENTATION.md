# ClimaTech Website Template - Dokumentasjon

## Oversikt

Dette er en profesjonell, fullt responsiv hjemmeside-mal for servicebedrifter (HVAC, klimaløsninger osv.). Malen er bygget med Next.js, React, Tailwind CSS og shadcn/ui komponenter, og er designet for å være lett å tilpasse og modifisere.

## Mappestruktur

```
app/
├── page.tsx                    # Landing page (hjem)
├── services/
│   └── page.tsx               # Tjenesteside med toggle private/bedrift
├── projects/
│   └── page.tsx               # Prosjektgalleri
├── about/
│   └── page.tsx               # Om oss side
├── contact/
│   └── page.tsx               # Kontaktskjema
└── layout.tsx                 # Root layout

components/
└── reusable-sections.tsx       # Gjenbrukbare komponenter
```

## Gjenbrukbare Komponenter

Alle komponenter finnes i `components/reusable-sections.tsx` og kan brukes hvor som helst:

### 1. StatsCard
**Bruk:** Vise statistikk og tall
```tsx
<StatsCard
  stat="80%"
  description="Gjennomsnittlig oppvarmingsbesparing"
  company="ClimaTech"
/>
```

### 2. BenefitItem
**Bruk:** Liste med fordeler/benefits
```tsx
<BenefitItem
  title="Opptil 80% besparelse"
  description="På oppvarming sammenlignet med tradisjonelle systemer"
/>
```

### 3. FeatureCard
**Bruk:** Feature/tjeneste-kort med ikon
```tsx
<FeatureCard
  icon={<Zap className="w-8 h-8 text-accent" />}
  title="Energieffektiv"
  description="Reduser energikostnader med opptil 80%"
  badge="Nyeste teknologi"
/>
```

### 4. TestimonialCard
**Bruk:** Kundeomtaler
```tsx
<TestimonialCard
  quote="Fantastisk installasjon!"
  author="Johan Hansen"
  role="Huseier"
  company="Oslo"
  image="/path/to/image.jpg"
/>
```

### 5. PricingTier
**Bruk:** Prispakker
```tsx
<PricingTier
  name="Profesjonell"
  price="Fra 45 000 kr"
  description="For de fleste hjem"
  features={[
    'Multisplit system',
    'Installasjon inkludert',
    '5 års garanti',
  ]}
  cta="Kontakt for tilbud"
  highlighted
/>
```

## Innebygde Seksjoner på Landing Page

1. **Navigation** - Sticky header med mobilmeny
2. **Hero Section** - Stor, impactfull intro
3. **Stats Section** - 4 statistikk-kort
4. **Featured Project** - Showcase av prosjekt
5. **Key Features** - 6 feature-kort
6. **Testimonials** - 3 kundeomtaler
7. **Pricing** - 3 prispakker
8. **CTA Section** - Call-to-action
9. **Footer** - Navigasjon og kontaktinfo

## Tilpasninger og Endringer

### Bytte Navn og Tekst
- Finn og erstatt "ClimaTech" med ditt bedriftsnavn
- Oppdater alle tekster, beskrivelser og priser

### Endre Farger
Alle farger er definert i `app/globals.css` via design tokens:
- `--primary`: Hovedfarge (svart)
- `--accent`: Aksentfarge (gull)
- `--secondary`: Sekundærfarge (lys grå)
- `--foreground`: Tekstfarge (hvit/svart)

Endre disse tokens for å skifte ut hele fargeschemat!

### Legge til Bilder
Erstatt placeholder-bildene:
1. Legg bilder i `public/images/`
2. Oppdater src i `<Image>` komponenter
3. Alternativt: Bruk Vercel Blob eller external URLs

### Legge til Sider
Opprett nye sider i `app/folder/page.tsx` og oppdater navigasjonen i `page.tsx`

### Mobilmeny
Mobilmenyen er allerede implementert! Den åpnes/lukkes med hamburgermeny-knappen.

## Komponenter som kan Gjenbrukes

Du kan dra og slippe disse komponentene rundt:

- Alle `StatsCard` - for tall/statistikk
- Alle `FeatureCard` - for features/services
- Alle `TestimonialCard` - for reviews
- Alle `PricingTier` - for priser
- Hele seksjoner - copy og modify etter behov

## Shadcn/UI Komponenter Brukt

- `Button` - Alle knapper
- `Card` - Bakgrunn for kort
- Lucide Icons - Alle ikoner (Thermometer, Snowflake, Wrench, osv.)

## Next.js Features Brukt

- App Router (moderne routing)
- Client Components (`'use client'`) for interaktivitet
- Server Components hvor mulig (som nav)
- Responsive design med Tailwind CSS

## Tips for Salg

1. **Tilpasning**: Gjør det lett for kunder å endre navn, farger, tekst og bilder
2. **Dokumentasjon**: Legg ved denne dokumentasjonen
3. **Support**: Tilby grunnleggende support for tilpasninger
4. **Pakkerier**: Selg som "Starter Template", "Pro Template", osv.
5. **Lisens**: Vurder Creative Commons eller egen lisens

## Installasjon

```bash
# Installer dependencies
pnpm install

# Kjør dev server
pnpm dev

# Build for produksjon
pnpm build
```

## Deploy

- Enkleste: Vercel (Next.js native)
- Alternativer: Netlify, AWS, DigitalOcean, osv.

---

**Template versjon:** 1.0  
**Sist oppdatert:** 2024
