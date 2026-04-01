import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle, Mail, Phone, MapPin, Heart } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "O Projeto" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#condicoes", label: "Condicoes" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#dicas", label: "Dicas" },
  { href: "#inscricao", label: "Inscricao" },
  { href: "#apoie", label: "Apoie" },
]

export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/surf-logo-fut.png"
                alt="Surf para o Futuro"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Surf para o Futuro</span>
                <span className="text-xs text-primary-foreground/70">Projeto Social</span>
              </div>
            </Link>
            <p className="text-primary-foreground/75 mb-6 max-w-md">
              Transformando vidas de criancas e adolescentes da comunidade do Terreirao 
              atraves do surf. Inclusao social, desenvolvimento integral e novas perspectivas 
              de futuro pelo contato com o mar.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/surfparaofuturo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/5521999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contato@surfparaofuturo.org.br"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:text-brand-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rapidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-primary-foreground/75 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/75">
                  Praia do Recreio dos Bandeirantes<br />
                  Comunidade do Terreirao - RJ
                </span>
              </li>
              <li>
                <a 
                  href="https://wa.me/5521999999999"
                  className="flex items-center gap-3 text-primary-foreground/75 hover:text-brand-gold transition-colors"
                >
                  <Phone className="h-5 w-5 text-brand-gold flex-shrink-0" />
                  (21) 99999-9999
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@surfparaofuturo.org.br"
                  className="flex items-center gap-3 text-primary-foreground/75 hover:text-brand-gold transition-colors"
                >
                  <Mail className="h-5 w-5 text-brand-gold flex-shrink-0" />
                  contato@surfparaofuturo.org.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/55 text-sm">
            &copy; {new Date().getFullYear()} Surf para o Futuro. Projeto Social sem fins lucrativos.
          </p>
          <p className="text-primary-foreground/55 text-sm flex items-center gap-1">
            Feito com <Heart className="h-4 w-4 text-brand-gold" /> para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  )
}
