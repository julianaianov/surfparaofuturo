"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Shirt, 
  ShieldCheck, 
  Sunrise, 
  Droplets, 
  Heart, 
  Lightbulb,
  Check,
  AlertTriangle,
  Waves
} from "lucide-react"

const whatToBring = [
  { item: "Roupa de banho", description: "Biquini/sunga confortável por baixo da lycra" },
  { item: "Protetor solar", description: "FPS 50+ resistente à água (aplicar 30 min antes)" },
  { item: "Toalha", description: "Para se secar após a aula" },
  { item: "Chinelo", description: "A areia pode estar quente!" },
  { item: "Água", description: "Mínimo 500 ml para hidratação" },
  { item: "Lanche leve", description: "Fruta ou barra de cereal para depois" },
  { item: "Autorização", description: "Termo assinado pelo responsável (apenas no primeiro dia)" },
]

const provided = [
  "Prancha adequada ao nível",
  "Lycra de proteção",
  "Parafina",
  "Leash (cordinha)",
  "Seguro contra acidentes",
  "Lanche coletivo",
  "Atendimento com psicólogo"
]

const boardTypes = [
  {
    name: "Softboard (Funboard)",
    size: "7' a 8'",
    level: "Iniciante",
    description: "Prancha de espuma, mais larga e estável. Perfeita para os primeiros passos no surf. É a que usamos nas aulas!",
    pros: ["Muito estável", "Segura para quedas", "Fácil de remar", "Pega ondas pequenas"]
  },
  {
    name: "Longboard",
    size: "9' ou mais",
    level: "Iniciante/Intermediário",
    description: "Prancha clássica, longa e volumosa. Ótima para ondas pequenas e para desenvolver estilo.",
    pros: ["Super estável", "Ondas pequenas", "Manobras clássicas", "Relaxante"]
  },
  {
    name: "Funboard/Mini-mal",
    size: "7' a 8'",
    level: "Intermediário",
    description: "Meio termo entre long e shortboard. Para quem já fica de pé e quer começar a fazer curvas.",
    pros: ["Versátil", "Boa transição", "Fácil de transportar"]
  },
  {
    name: "Shortboard",
    size: "5'8 a 6'6",
    level: "Avançado",
    description: "Prancha de alta performance para manobras radicais. Exige técnica e condicionamento.",
    pros: ["Manobras radicais", "Velocidade", "Responsiva"]
  }
]

const surfTips = [
  {
    title: "Antes de Entrar na Água",
    icon: Sunrise,
    tips: [
      "Sempre faça alongamento de 5-10 minutos",
      "Observe o mar por alguns minutos antes de entrar",
      "Identifique as correntes e onde as ondas quebram",
      "Nunca surfe sozinho, especialmente como iniciante",
      "Respeite seus limites - se estiver com medo, não entre"
    ]
  },
  {
    title: "Na Hora de Remar",
    icon: Waves,
    tips: [
      "Mantenha o corpo centralizado na prancha",
      "Olhe para frente, não para baixo",
      "Remada longa e profunda é mais eficiente",
      "Use os braços alternados como no crawl",
      "Deixe os pés juntos e relaxados"
    ]
  },
  {
    title: "Ficando de Pé",
    icon: ShieldCheck,
    tips: [
      "Espere sentir a onda empurrando a prancha",
      "Mãos na altura do peito, empurre o corpo para cima",
      "Traga os pés de uma vez só, nunca um de cada vez",
      "Joelhos flexionados, olhar na direção da praia",
      "Braços abertos ajudam no equilíbrio"
    ]
  },
  {
    title: "Segurança",
    icon: AlertTriangle,
    tips: [
      "Nunca largue sua prancha - ela pode machucar outros",
      "Quem está na onda tem preferência",
      "Não entre no 'outside' remando por onde as ondas quebram",
      "Proteja a cabeça ao cair",
      "Conheça os sinais de corrente de retorno"
    ]
  }
]

export function SurfTips() {
  return (
    <section id="dicas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Lightbulb className="h-4 w-4" />
            Dicas & Informações
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Informações para Participantes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tudo o que você precisa saber para participar das aulas! Orientações para 
            crianças, adolescentes e seus responsáveis.
          </p>
        </div>

        <Tabs defaultValue="checklist" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="checklist"
              className="gap-2 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground"
            >
              <Shirt className="h-4 w-4" />
              <span className="hidden sm:inline">O Que Levar</span>
              <span className="sm:hidden">Levar</span>
            </TabsTrigger>
            <TabsTrigger
              value="boards"
              className="gap-2 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground"
            >
              <Waves className="h-4 w-4" />
              <span className="hidden sm:inline">Pranchas</span>
              <span className="sm:hidden">Pranchas</span>
            </TabsTrigger>
            <TabsTrigger
              value="tips"
              className="gap-2 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:bg-primary dark:data-[state=active]:text-primary-foreground"
            >
              <Lightbulb className="h-4 w-4" />
              <span className="hidden sm:inline">Dicas de Surf</span>
              <span className="sm:hidden">Dicas</span>
            </TabsTrigger>
          </TabsList>

          {/* Checklist Tab */}
          <TabsContent value="checklist">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shirt className="h-5 w-5 text-primary" />
                    O Que Trazer para a Aula
                  </CardTitle>
                  <CardDescription>
                    Itens que o participante deve levar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {whatToBring.map((item) => (
                      <li key={item.item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <div>
                          <span className="font-medium text-foreground">{item.item}</span>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-white/25 bg-primary text-primary-foreground shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary-foreground">
                    <Check className="h-5 w-5 shrink-0 text-brand-gold" />
                    O Projeto Fornece
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/85">
                    Tudo isso é oferecido gratuitamente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {provided.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="h-5 w-5 shrink-0 text-brand-gold" />
                        <span className="text-primary-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-lg bg-white/15 p-4 ring-1 ring-white/25">
                    <div className="flex items-start gap-3">
                      <Heart className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                      <div>
                        <p className="font-medium text-primary-foreground">Aviso aos responsáveis!</p>
                        <p className="text-sm text-primary-foreground/85">
                          Evite enviar a criança com o estômago muito cheio.
                          Uma refeição leve 1–2 horas antes é o ideal!
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Boards Tab */}
          <TabsContent value="boards">
            <div className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Conheça os tipos de prancha e entenda qual é ideal para cada momento da sua evolução no surf.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {boardTypes.map((board) => (
                  <Card key={board.name} className={board.level === "Iniciante" ? "border-primary/50 bg-primary/5" : ""}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{board.name}</CardTitle>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          board.level === "Iniciante" 
                            ? "bg-green-100 text-green-700" 
                            : board.level === "Intermediário"
                            ? "bg-blue-100 text-blue-700"
                            : board.level === "Avançado"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {board.level}
                        </span>
                      </div>
                      <CardDescription>Tamanho: {board.size}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{board.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {board.pros.map((pro) => (
                          <span key={pro} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                            {pro}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tips Tab */}
          <TabsContent value="tips">
            <div className="grid md:grid-cols-2 gap-6">
              {surfTips.map((section) => (
                <Card key={section.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <section.icon className="h-5 w-5 text-primary" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-bold">{index + 1}.</span>
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 bg-sunset/10 border-sunset/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Droplets className="h-8 w-8 text-sunset flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Respeito pelo Mar e pela Natureza
                    </h3>
                    <p className="text-muted-foreground">
                      No Surf para o Futuro, ensinamos que o oceano é poderoso e merece respeito. 
                      Além do surf, promovemos a consciência ambiental e o cuidado com as praias. 
                      Nossos instrutores estão sempre presentes para garantir a segurança de todos!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
