'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { FooterWithConsent } from '@/components/footer-with-consent'
import { useState } from 'react'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      // Simulate form submission (in production, send to backend)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', formData)
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (error) {
      console.error('Form error:', error)
      setFormStatus('error')
    }
  }
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Kontakt Moss Kulde & Varmeteknikk
          </h1>
          <p className="text-xl text-primary-foreground/90 text-balance max-w-2xl">
            Vi er her for å hjelpe deg. Kontakt oss i dag for en gratis konsultasjon, tilbud eller akutt service.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Kontaktinformasjon</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Telefon</h3>
                    <a href="tel:922288755" className="text-foreground/80 hover:text-accent transition-colors">92 22 88 75</a>
                    <p className="text-muted-foreground text-sm mt-1">Nødservice 24/7 tilgjengelig</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">E-post</h3>
                    <p className="text-foreground/80">kontakt@mosskulde.no</p>
                    <p className="text-muted-foreground text-sm">Vi svarer på alle henvendelser innen 24 timer</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Adresse</h3>
                    <p className="text-foreground/80">Rådeskogen 60</p>
                    <p className="text-foreground/80">1580 Rygge, Norge</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Åpningstider</h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <div className="flex justify-between">
                    <span>Mandag - Torsdag</span>
                    <span>07:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fredag</span>
                    <span>07:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lørdag - Søndag</span>
                    <span>Nødservice 24/7</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-accent font-semibold">Nødservice tilgjengelig hele døgnet alle dager</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Send oss en melding</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Navn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Ditt navn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="din@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+47 XXX XX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                    Tjeneste
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Velg en tjeneste</option>
                    <option value="heat-pump">Varmepumpe</option>
                    <option value="plumbing">Rørleggerarbeid</option>
                    <option value="cooling">Kuldeanlegg</option>
                    <option value="ventilation">Ventilasjon</option>
                    <option value="service">Service og vedlikehold</option>
                    <option value="other">Annet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Melding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Din melding her..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-accent/10 text-accent border border-accent/20 rounded-lg">
                    Takk! Vi har mottatt din melding og vil kontakte deg snart.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg">
                    Det oppstod en feil. Prøv igjen eller ring oss direkte.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? 'Sender...' : 'Send melding'}
                  {formStatus !== 'loading' && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Besøk oss</h2>
          <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
            <p>Google Map eller lignende kartintegrasjon her</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterWithConsent />
    </main>
  )
}
