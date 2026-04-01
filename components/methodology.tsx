"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, Waves, Brain, Leaf, MessageCircle, Heart } from "lucide-react"

const activities = [
  {
    icon: Waves,
    title: "Aula prática de surf",
    description: "Ensino das técnicas básicas e avançadas do surf com instrutores qualificados"
  },
  {
    icon: Heart,
    title: "Treino Funcional na Areia",
    description: "Preparação física com exercícios funcionais adaptados para crianças e adolescentes"
  },
  {
    icon: MessageCircle,
    title: "Rodas de Conversa",
    description: "Encontros socioeducativos com apoio de psicólogo infantil"
  },
  {
    icon: Users,
    title: "Dinâmicas de grupo",
    description: "Atividades para fortalecer trabalho em equipe e relacoes interpessoais"
  },
  {
    icon: Leaf,
    title: "Educação ambiental",
    description: "Ações de conscientização sobre preservação das praias e oceanos"
  },
  {
    icon: Brain,
    title: "Desenvolvimento Socioemocional",
    description: "Atividades focadas em autoestima, autonomia e protagonismo juvenil"
  }
]

const timeline = [
  {
    month: "Mês 1",
    title: "Inscrição e planejamento",
    description: "Inscrições abertas, seleção dos participantes e organização das turmas"
  },
  {
    month: "Mês 2 a 5",
    title: "Aulas contínuas",
    description: "Aulas semanais de surf, rodas de conversa e ações ambientais"
  },
  {
    month: "Mês 6",
    title: "Encerramento",
    description: "Evento final de celebração com familiares e comunidade"
  }
]

export function Methodology() {
  return (
    <section id="metodologia" className="py-24 !bg-[var(--brand-gold)]">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-medium text-primary">
            Como Funciona
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Nossa Metodologia
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-foreground/85">
            Um programa estruturado com duração de 6 meses, combinando prática esportiva 
            com desenvolvimento socioemocional
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">1x</div>
              <div className="text-sm text-muted-foreground">Aula por semana</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">2h</div>
              <div className="text-sm text-muted-foreground">Duração da aula</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">2</div>
              <div className="text-sm text-muted-foreground">Turmas de 8 alunos</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Waves className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">6</div>
              <div className="text-sm text-muted-foreground">Meses de duração</div>
            </CardContent>
          </Card>
        </div>

        {/* Activities */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
            Atividades do Programa
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <Card key={activity.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <activity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{activity.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
            Cronograma
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-foreground/20 md:left-1/2 md:-translate-x-1/2" />
              
              {timeline.map((item, index) => (
                <div 
                  key={item.month}
                  className={`relative flex items-start gap-6 pb-12 last:pb-0 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Circle */}
                  <div className="absolute left-8 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm md:left-1/2 md:-translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {item.month}
                    </div>
                    <h4 className="mb-1 font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Counterpart */}
        <Card className="mt-16 bg-card/95 backdrop-blur-sm border-foreground/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Contrapartida Social
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Como contrapartida social, o projeto oferece aulas <strong className="text-foreground">gratuitas</strong> de 
              surf para crianças e adolescentes em situação de vulnerabilidade social da comunidade do 
              Terreirão e arredores, promovendo acesso ao esporte, ao lazer e ao desenvolvimento integral.
            </p>
            <p className="text-muted-foreground">
              As atividades são realizadas em ambiente seguro e inclusivo, estimulando habilidades 
              físicas e socioemocionais como disciplina, autonomia, trabalho em equipe e autoconfiança. 
              O projeto também conta com <strong className="text-foreground">roda de conversa com psicólogo infantil</strong>, 
              voltada ao apoio emocional e ao desenvolvimento saudável dos participantes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
