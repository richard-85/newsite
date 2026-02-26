'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ModalGalleryProps {
  images: string[]
  title?: string
}

export function ModalGallery({ images, title }: ModalGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious()
    if (e.key === 'ArrowRight') handleNext()
    if (e.key === 'Escape') setIsOpen(false)
  }

  return (
    <>
      {/* Thumbnail */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative h-64 rounded-lg overflow-hidden cursor-pointer group bg-muted"
      >
        <img
          src={images[0]}
          alt={title || 'Gallery image'}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
          <div className="text-white text-sm font-semibold bg-black/60 px-4 py-2 rounded">
            {images.length} bilder
          </div>
        </div>
      </div>

      {/* Modal Gallery */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0" onKeyDown={handleKeyDown}>
          <div className="relative h-full flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black/80 text-white p-2 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center bg-black relative overflow-hidden min-h-96">
              <img
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Navigation */}
            <div className="bg-black/90 border-t border-white/10 p-4 flex items-center justify-between">
              <button
                onClick={handlePrevious}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Forrige bilde"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 overflow-x-auto px-4 flex-1">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                      index === currentIndex
                        ? 'ring-2 ring-accent w-20 h-20'
                        : 'opacity-60 hover:opacity-100 w-16 h-16'
                    }`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
                aria-label="Neste bilde"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Image Counter */}
            <div className="bg-black/90 border-t border-white/10 px-4 py-3 text-center text-white/70 text-sm">
              Bilde {currentIndex + 1} av {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
