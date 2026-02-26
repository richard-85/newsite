'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Copy, RotateCcw, Download } from 'lucide-react'
import { Navbar } from '@/components/navbar'

const FONT_OPTIONS = [
  { label: 'Inter', value: 'inter' },
  { label: 'Geist', value: 'geist' },
  { label: 'Playfair Display', value: 'playfair' },
  { label: 'IBM Plex Mono', value: 'ibm' },
]

const COLOR_PRESETS = [
  { name: 'Default', primary: '#000000', accent: '#ffc107', secondary: '#f5f5f5' },
  { name: 'Ocean', primary: '#0a5c8a', accent: '#06b6d4', secondary: '#f0f9ff' },
  { name: 'Forest', primary: '#15803d', accent: '#84cc16', secondary: '#f0fdf4' },
  { name: 'Sunset', primary: '#9333ea', accent: '#f97316', secondary: '#faf5ff' },
  { name: 'Minimal', primary: '#1f2937', accent: '#60a5fa', secondary: '#f9fafb' },
]

interface CustomTheme {
  primary: string
  accent: string
  secondary: string
  font: string
}

export default function ThemeCustomizer() {
  const [theme, setTheme] = useState<CustomTheme>({
    primary: '#000000',
    accent: '#ffc107',
    secondary: '#f5f5f5',
    font: 'inter',
  })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('customTheme')
    if (saved) setTheme(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('customTheme', JSON.stringify(theme))
    applyTheme(theme)
  }, [theme])

  const applyTheme = (customTheme: CustomTheme) => {
    const root = document.documentElement
    root.style.setProperty('--primary', customTheme.primary)
    root.style.setProperty('--accent', customTheme.accent)
    root.style.setProperty('--secondary', customTheme.secondary)
    
    if (customTheme.font === 'playfair') {
      document.body.style.fontFamily = "'Playfair Display', serif"
    } else if (customTheme.font === 'ibm') {
      document.body.style.fontFamily = "'IBM Plex Mono', monospace"
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif"
    }
  }

  const exportCSS = () => {
    const css = `
:root {
  --primary: ${theme.primary};
  --accent: ${theme.accent};
  --secondary: ${theme.secondary};
  --font-family: ${getFontFamily(theme.font)};
}
    `.trim()
    
    navigator.clipboard.writeText(css)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getFontFamily = (font: string) => {
    switch (font) {
      case 'playfair':
        return "'Playfair Display', serif"
      case 'ibm':
        return "'IBM Plex Mono', monospace"
      default:
        return "'Inter', sans-serif"
    }
  }

  const resetTheme = () => {
    setTheme(COLOR_PRESETS[0])
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-foreground mb-6">Theme Customizer</h2>

              {/* Color Presets */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground mb-4">Fargepresetter</h3>
                <div className="space-y-2">
                  {COLOR_PRESETS.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => setTheme({
                        primary: preset.primary,
                        accent: preset.accent,
                        secondary: preset.secondary,
                        font: theme.font,
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: preset.primary }}
                          />
                          <div
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: preset.accent }}
                          />
                          <div
                            className="w-4 h-4 rounded"
                            style={{ backgroundColor: preset.secondary }}
                          />
                        </div>
                        <span className="text-sm font-medium">{preset.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Colors */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground mb-4">Egendefinerte farger</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Primær farge</label>
                    <div className="flex gap-2 mt-2">
                      <input
                        type="color"
                        value={theme.primary}
                        onChange={(e) => setTheme({ ...theme, primary: e.target.value })}
                        className="w-12 h-10 rounded cursor-pointer border border-border"
                      />
                      <input
                        type="text"
                        value={theme.primary}
                        onChange={(e) => setTheme({ ...theme, primary: e.target.value })}
                        className="flex-1 px-3 py-2 rounded border border-border bg-background text-foreground text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground">Aksentfarge</label>
                    <div className="flex gap-2 mt-2">
                      <input
                        type="color"
                        value={theme.accent}
                        onChange={(e) => setTheme({ ...theme, accent: e.target.value })}
                        className="w-12 h-10 rounded cursor-pointer border border-border"
                      />
                      <input
                        type="text"
                        value={theme.accent}
                        onChange={(e) => setTheme({ ...theme, accent: e.target.value })}
                        className="flex-1 px-3 py-2 rounded border border-border bg-background text-foreground text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-muted-foreground">Sekundær farge</label>
                    <div className="flex gap-2 mt-2">
                      <input
                        type="color"
                        value={theme.secondary}
                        onChange={(e) => setTheme({ ...theme, secondary: e.target.value })}
                        className="w-12 h-10 rounded cursor-pointer border border-border"
                      />
                      <input
                        type="text"
                        value={theme.secondary}
                        onChange={(e) => setTheme({ ...theme, secondary: e.target.value })}
                        className="flex-1 px-3 py-2 rounded border border-border bg-background text-foreground text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Font Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground mb-4">Skrifttype</h3>
                <select
                  value={theme.font}
                  onChange={(e) => setTheme({ ...theme, font: e.target.value })}
                  className="w-full px-4 py-2 rounded border border-border bg-background text-foreground"
                >
                  {FONT_OPTIONS.map((font) => (
                    <option key={font.value} value={font.value}>
                      {font.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Export & Reset */}
              <div className="space-y-2">
                <Button
                  onClick={exportCSS}
                  className="w-full gap-2"
                  variant="outline"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? 'Kopiert!' : 'Kopier CSS'}
                </Button>
                <Button
                  onClick={resetTheme}
                  className="w-full gap-2"
                  variant="ghost"
                >
                  <RotateCcw className="w-4 h-4" />
                  Tilbakestill
                </Button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Live Preview</h2>
              <p className="text-muted-foreground mb-8">Alle endringene vises øyeblikkelig nedenfor</p>

              {/* Component Showcase */}
              <div className="space-y-12">
                {/* Buttons */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Knapper</h3>
                  <div className="flex flex-wrap gap-4">
                    <button
                      style={{ backgroundColor: theme.primary, color: 'white' }}
                      className="px-6 py-2 rounded font-medium hover:opacity-90 transition"
                    >
                      Primær knapp
                    </button>
                    <button
                      style={{ backgroundColor: theme.accent, color: 'black' }}
                      className="px-6 py-2 rounded font-medium hover:opacity-90 transition"
                    >
                      Aksentknapp
                    </button>
                    <button
                      style={{ backgroundColor: theme.secondary, color: theme.primary }}
                      className="px-6 py-2 rounded font-medium hover:opacity-90 transition border"
                    >
                      Sekundær knapp
                    </button>
                  </div>
                </div>

                {/* Cards */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Kort</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div
                      style={{ borderLeft: `4px solid ${theme.accent}` }}
                      className="p-6 border rounded-lg"
                    >
                      <h4 className="font-semibold text-foreground mb-2">Kort med aksentfarge</h4>
                      <p className="text-muted-foreground text-sm">
                        Dette kortet bruker aksentfargen som accent border
                      </p>
                    </div>
                    <div
                      style={{ backgroundColor: theme.secondary }}
                      className="p-6 border rounded-lg"
                    >
                      <h4 className="font-semibold text-foreground mb-2">Bakgrunnsfarge</h4>
                      <p className="text-muted-foreground text-sm">
                        Dette kortet bruker sekundær farge som bakgrunn
                      </p>
                    </div>
                  </div>
                </div>

                {/* Color Palette */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Fargepalett</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div
                        style={{ backgroundColor: theme.primary }}
                        className="h-24 rounded-lg mb-2"
                      />
                      <p className="text-sm font-medium text-foreground">Primær</p>
                      <p className="text-xs text-muted-foreground">{theme.primary}</p>
                    </div>
                    <div>
                      <div
                        style={{ backgroundColor: theme.accent }}
                        className="h-24 rounded-lg mb-2"
                      />
                      <p className="text-sm font-medium text-foreground">Aksent</p>
                      <p className="text-xs text-muted-foreground">{theme.accent}</p>
                    </div>
                    <div>
                      <div
                        style={{ backgroundColor: theme.secondary }}
                        className="h-24 rounded-lg mb-2 border border-border"
                      />
                      <p className="text-sm font-medium text-foreground">Sekundær</p>
                      <p className="text-xs text-muted-foreground">{theme.secondary}</p>
                    </div>
                  </div>
                </div>

                {/* Typography */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Typografi</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-2xl font-bold text-foreground mb-2">Stor overskrift (2xl)</p>
                      <p className="text-lg font-semibold text-foreground mb-2">Medium overskrift (lg)</p>
                      <p className="text-base text-foreground mb-2">Vanlig tekst (base)</p>
                      <p className="text-sm text-muted-foreground">Liten tekst (sm)</p>
                    </div>
                  </div>
                </div>

                {/* Theme Code */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">CSS Variabler</h3>
                  <div className="bg-background border border-border rounded-lg p-4 overflow-x-auto">
                    <pre className="text-xs text-muted-foreground font-mono">
{`:root {
  --primary: ${theme.primary};
  --accent: ${theme.accent};
  --secondary: ${theme.secondary};
  --font-family: ${getFontFamily(theme.font)};
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
