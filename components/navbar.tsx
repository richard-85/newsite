'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logom.png'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Hjem' },
  { href: '/services', label: 'Tjenester' },
  { href: '/projects', label: 'Prosjekter' },
  { href: '/components', label: 'Komponenter' },
  { href: '/examples', label: 'Eksempler' },
  { href: '/customizer', label: 'Customizer' },
  { href: '/about', label: 'Om oss' },
  { href: '/contact', label: 'Kontakt' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={60} height={60} className="rounded-lg" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? 'text-accent font-semibold'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Kontakt-knapp */}
            <Link href="/contact">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Kontakt oss
              </Button>
            </Link>

            {/* Telefon som tekst */}
            <div className="flex items-center gap-1 text-sm text-foreground">
              <Phone className="w-5 h-5" />
              92 22 88 75
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-border"
            aria-label={mobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-base transition-colors ${
                  pathname === link.href
                    ? 'bg-accent/10 text-accent font-semibold'
                    : 'text-foreground hover:bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 px-4 flex flex-col gap-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Kontakt oss
                </Button>
              </Link>

              {/* Telefon som tekst */}
              <div className="flex items-center gap-1 text-foreground px-4 py-2">
                <Phone className="w-5 h-5" />
                92 22 88 75
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
