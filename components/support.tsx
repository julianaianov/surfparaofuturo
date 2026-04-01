"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Shirt, Award, Building2, Handshake, Copy, Check, MessageCircle } from "lucide-react"
import { useState } from "react"

const supportWays = [
  {
    icon: Heart,
    title: "Doação financeira",
    description: "Contribua com qualquer valor via Pix para manter o projeto funcionando",
    highlight: true
  },
  {
    icon: Shirt,
    title: "Doação de equipamentos",
    description: "Pranchas, lycras, leashes e outros equipamentos de surf em bom estado"
  },
  {
    icon: Users,
    title: "Voluntariado",
    description: "Doe seu tempo e conhecimento como instrutor, fotógrafo ou apoio nas atividades"
  },
  {
    icon: Building2,
    title: "Patrocínio empresarial",
    description: "Empresas podem patrocinar o projeto e ter sua marca associada a causa social"
  },
  {
    icon: Award,
    title: "Parcerias",
    description: "Escolas de surf, marcas esportivas e organizações podem firmar parcerias"
  },
  {
    icon: Handshake,
    title: "Divulgação",
    description: "Compartilhe nosso projeto nas redes sociais e ajude a causa a crescer"
  }
]

const PIX_KEY = "surfparaofuturo@email.com"
const WHATSAPP_NUMBER = "5521999999999"

export function Support() {
  const [copied, setCopied] = useState(false)

  const copyPix = () => {
    navigator.clipboard.writeText(PIX_KEY)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section
      id="apoie"
      className="relative border-t-4 border-brand-orange py-24 !bg-[var(--brand-gold)]"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-medium text-primary">
            <Heart className="h-4 w-4" />
            Apoie a Causa
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Como você pode ajudar
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-foreground/80">
            Sua contribuição transforma vidas. Existem diversas formas de apoiar o Surf para o Futuro 
            e fazer parte dessa história de transformação.
          </p>
        </div>

        {/* Pix Card - Highlighted */}
        <Card className="max-w-2xl mx-auto mb-12 border-primary shadow-lg shadow-primary/10">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">Faça uma doação via Pix</CardTitle>
            <CardDescription>
              Qualquer valor ajuda a manter o projeto funcionando e transformando vidas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Chave Pix (E-mail)</p>
              <div className="flex items-center justify-center gap-3">
                <code className="text-lg font-mono text-foreground bg-background px-4 py-2 rounded-lg">
                  {PIX_KEY}
                </code>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyPix}
                  className="flex-shrink-0"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {copied && (
                <p className="text-sm text-green-500 mt-2">Chave copiada!</p>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => openWhatsApp("Olá! Gostaria de fazer uma doação para o projeto Surf para o Futuro.")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Enviar Comprovante
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={() => openWhatsApp("Olá! Gostaria de saber mais sobre como posso ajudar o projeto Surf para o Futuro.")}
              >
                Tirar dúvidas
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Other Ways to Support */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportWays.map((way) => (
            <Card 
              key={way.title}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                  <way.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{way.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{way.description}</CardDescription>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => openWhatsApp(`Olá! Tenho interesse em apoiar o projeto através de: ${way.title}`)}
                >
                  Quero Ajudar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-16 bg-card/90 backdrop-blur-sm border border-foreground/10 rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-card-foreground text-center mb-8">
            O impacto da sua doação
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">R$ 50</div>
              <div className="text-sm text-muted-foreground mt-1">1 lanche para turma</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">R$ 150</div>
              <div className="text-sm text-muted-foreground mt-1">1 lycra nova</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">R$ 500</div>
              <div className="text-sm text-muted-foreground mt-1">1 prancha softboard</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">R$ 1000</div>
              <div className="text-sm text-muted-foreground mt-1">1 mês de aulas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
