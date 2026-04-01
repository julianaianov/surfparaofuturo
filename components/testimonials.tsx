"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Dona Maria",
    role: "Mãe do Lucas, 12 anos",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "O Lucas era muito tímido e tinha medo do mar. Depois de entrar no projeto, ele mudou completamente. Agora tem amigos, confiança e até as notas na escola melhoraram. Sou muito grata!",
    date: "Participante desde 2023"
  },
  {
    id: 2,
    name: "Seu Jorge",
    role: "Pai da Amanda, 15 anos",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "A Amanda sonhava em surfar mas nunca tivemos condições de pagar aulas. Esse projeto realizou o sonho dela e ainda ensina valores importantes. O carinho da equipe é incrível.",
    date: "Participante desde 2024"
  },
  {
    id: 3,
    name: "Pedro",
    role: "Participante, 14 anos",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "Eu nunca pensei que ia conseguir surfar. No começo eu tinha muito medo, mas os instrutores são muito pacientes. Agora o surf é a melhor parte da minha semana!",
    date: "Participante desde 2023"
  },
  {
    id: 4,
    name: "Professora Cláudia",
    role: "Diretora da escola local",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "Percebi uma grande mudança nos alunos que participam do projeto. Eles estão mais focados, disciplinados e com melhor convivência social. O projeto transforma vidas.",
    date: "Parceira do projeto"
  },
  {
    id: 5,
    name: "Julia",
    role: "Participante, 11 anos",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 5,
    text: "Eu amo ir às aulas! Aprendi a respeitar o mar e a natureza. Meus novos amigos são muito legais e os professores tratam a gente super bem. Quero ser surfista profissional!",
    date: "Participante desde 2024"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section
      id="depoimentos"
      className="bg-gradient-to-b from-amber-50 via-[color-mix(in_srgb,var(--brand-gold)_28%,white)] to-[var(--brand-gold)] py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            Histórias Reais
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Vidas Transformadas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Depoimentos de famílias e participantes que tiveram suas vidas impactadas pelo Surf para o Futuro
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="absolute top-8 left-8 h-16 w-16 text-primary/10" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sunset text-sunset" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                  {`"${testimonials[currentIndex].text}"`}
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} - {testimonials[currentIndex].date}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-card border border-border hover:bg-muted transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setIsAutoPlaying(false); setCurrentIndex(index); }}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-card border border-border hover:bg-muted transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">16</div>
            <div className="text-muted-foreground">Vagas por ciclo</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">2</div>
            <div className="text-muted-foreground">Turmas ativas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-muted-foreground">Gratuito</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">6</div>
            <div className="text-muted-foreground">Meses de projeto</div>
          </div>
        </div>
      </div>
    </section>
  )
}
