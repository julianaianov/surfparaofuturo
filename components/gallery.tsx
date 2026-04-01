"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MediaItem {
  id: number
  type: "image" | "video"
  src: string
  thumbnail: string
  alt: string
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?w=400&q=80",
    alt: "Crianças do projeto na primeira aula"
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&q=80",
    alt: "Aula de surf no Recreio"
  },
  {
    id: 3,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1531722569936-825d3dd91b15?w=400&q=80",
    alt: "Vídeo do projeto Surf para o Futuro"
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
    alt: "Praia do Recreio - nosso local de aulas"
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1509914398892-963f53e6e2f1?w=400&q=80",
    alt: "Turma reunida para roda de conversa"
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1531722569936-825d3dd91b15?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1531722569936-825d3dd91b15?w=400&q=80",
    alt: "Participante pegando sua primeira onda"
  },
  {
    id: 7,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?w=400&q=80",
    alt: "Destaques do semestre"
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&q=80",
    alt: "Pôr do sol após as aulas"
  }
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const selectedItem = selectedIndex !== null ? mediaItems[selectedIndex] : null

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? mediaItems.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === mediaItems.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            Galeria
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Momentos que Transformam
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Veja nossas crianças e adolescentes conquistando as ondas! Cada foto e vídeo conta uma história de superação e transformação.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden group",
                index === 0 && "md:col-span-2 md:row-span-2"
              )}
            >
              <Image
                src={item.thumbnail}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
              
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-primary ml-1" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{item.alt}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Fechar</span>
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft className="h-8 w-8" />
              <span className="sr-only">Anterior</span>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight className="h-8 w-8" />
              <span className="sr-only">Próximo</span>
            </button>

            <div 
              className="relative max-w-5xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "image" ? (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain"
                />
              ) : (
                <iframe
                  src={selectedItem.src}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {mediaItems.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(index); }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === selectedIndex ? "bg-white" : "bg-white/40"
                  )}
                >
                  <span className="sr-only">Ir para item {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
