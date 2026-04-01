"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChevronDown, Heart, Play, Users } from "lucide-react"
import { useState } from "react"

const heroCtaClass =
  "h-auto min-h-14 w-full justify-center gap-2 rounded-lg px-8 py-3.5 text-lg font-semibold shadow-lg transition-transform hover:scale-105 sm:w-auto sm:min-w-[12.5rem]"

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-bg-praia.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/80 via-ocean-dark/60 to-ocean-dark/90" />
      </div>

      {/* Animated Wave Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="var(--background)"
            fillOpacity="0.8"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,186.7C672,181,768,203,864,208C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Content — pt reserva altura do header fixo para a logo não cobrir o menu */}
      <div className="relative z-20 flex flex-1 flex-col justify-center px-4 pb-16 pt-28 sm:pt-32 lg:pt-36">
        <div className="container mx-auto text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mx-auto mb-4 w-full max-w-[min(88vw,380px)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:max-w-[min(85vw,440px)] md:mb-5 md:max-w-[min(75vw,500px)] lg:max-w-[min(62vw,520px)]">
            <Image
              src="/images/surf-logo-fut.png"
              alt="Surf para o Futuro"
              width={640}
              height={320}
              className="h-auto w-full object-contain"
              priority
            />
          </h1>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
            <Heart className="h-4 w-4 shrink-0 text-red-400" />
            Projeto Social - Terreirão, Recreio/RJ
          </div>

          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-white/80 md:text-xl">
            Transformando vidas de criancas e adolescentes de 8 a 17 anos atraves do surf.
            Inclusao, desenvolvimento e novas perspectivas de futuro pelo contato com o mar.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-xl sm:max-w-none mx-auto">
            <Button
              asChild
              className={cn(
                heroCtaClass,
                "border-2 border-white/30 bg-primary text-primary-foreground shadow-black/25 hover:bg-primary/90"
              )}
            >
              <Link href="#inscricao">
                <Users className="h-5 w-5 shrink-0" />
                Inscrever Crianca
              </Link>
            </Button>

            <Button
              asChild
              className={cn(
                heroCtaClass,
                "!bg-brand-gold !text-accent-foreground border-2 border-brand-orange/55 shadow-black/25 hover:!bg-brand-gold/90"
              )}
            >
              <Link href="#apoie">
                <Heart className="h-5 w-5 shrink-0" />
                Apoie o Projeto
              </Link>
            </Button>
          </div>

          <div className="mt-4">
            <Button
              variant="ghost"
              size="lg"
              className="text-white/70 hover:text-white hover:bg-white/10"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Conheca Nossa Historia
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-gold">8-17</div>
              <div className="text-sm font-medium text-brand-gold">Anos de idade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-gold">16</div>
              <div className="text-sm font-medium text-brand-gold">Vagas por ciclo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-gold">100%</div>
              <div className="text-sm font-medium text-brand-gold">Gratuito</div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <Link href="#sobre" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown className="h-8 w-8" />
        </Link>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
              onClick={() => setIsVideoPlaying(false)}
            >
              <span className="sr-only">Fechar</span>
              X
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
