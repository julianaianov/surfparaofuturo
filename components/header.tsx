"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "O Projeto" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#condicoes", label: "Condições" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#dicas", label: "Dicas" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="#inicio" className="group flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0">
              <Image
                src="/images/surf-logo-fut.png"
                alt="Surf para o Futuro"
                width={44}
                height={44}
                className={cn(
                  "h-11 w-11 object-contain transition-transform group-hover:scale-105",
                  !isScrolled && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
                )}
                priority
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <span
                className={cn(
                  "text-lg font-bold leading-tight tracking-tight transition-colors",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                Surf para o Futuro
              </span>
              <span
                className={cn(
                  "text-xs transition-colors",
                  isScrolled ? "text-muted-foreground" : "text-white/70"
                )}
              >
                Projeto Social
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  isScrolled
                    ? "text-foreground/80 hover:text-primary hover:bg-primary/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
              <Link href="#inscricao">Inscrever Criança</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="!bg-brand-gold !text-accent-foreground hover:!bg-brand-gold/90 border-2 border-brand-orange/50 shadow-md shadow-brand-orange/20"
            >
              <Link href="#apoie" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Apoie
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-lg border-t border-border">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#inscricao" onClick={() => setIsMenuOpen(false)}>
                  Inscrever Criança
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="!bg-brand-gold !text-accent-foreground hover:!bg-brand-gold/90 border-2 border-brand-orange/50"
              >
                <Link href="#apoie" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Apoie o Projeto
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
