import Image from "next/image"
import { Heart, Users, Brain, Leaf, Target, Sparkles } from "lucide-react"

/* Cada card usa uma imagem distinta (URLs ou arquivos locais sem repetir). */
const objectives = [
  {
    icon: Users,
    title: "Inclusao Social",
    description: "Promover acesso ao esporte para criancas e adolescentes em situacao de vulnerabilidade",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Brain,
    title: "Desenvolvimento Integral",
    description: "Estimular consciencia corporal, equilibrio, coordenacao e tomada de decisao",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Heart,
    title: "Autoestima",
    description: "Fortalecer a autoconfianca e o senso de pertencimento atraves do contato com o mar",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Leaf,
    title: "Educacao Ambiental",
    description: "Promover consciencia sobre preservacao das praias e oceanos",
    image: "/images/hero-surf.jpg",
  },
  {
    icon: Target,
    title: "Novas Perspectivas",
    description: "Ampliar horizontes e criar oportunidades de futuro para os participantes",
    image: "/images/instructor.jpg",
  },
  {
    icon: Sparkles,
    title: "Talentos Esportivos",
    description: "Identificar e incentivar potenciais atletas nas comunidades atendidas",
    image: "/images/talentos-esportivos.jpg",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/instructor.jpg"
                alt="Criancas aprendendo surf no projeto Surf para o Futuro"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">Gratuito</div>
                </div>
              </div>
              <p className="text-sm text-foreground font-medium">
                {"Transformando vidas atraves do surf na comunidade do Terreirao"}
              </p>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              Sobre o Projeto
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Surf como ferramenta de transformacao social
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              O <strong className="text-foreground">Surf para o Futuro</strong> e um projeto social voltado para 
              criancas e adolescentes de 8 a 17 anos, moradores da comunidade do Terreirao e arredores, 
              no Recreio dos Bandeirantes (RJ).
            </p>

            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Atraves do surf, promovemos <strong className="text-foreground">inclusao, desenvolvimento integral, 
              autoestima e novas perspectivas de futuro</strong>. O contato com a natureza favorece a regulacao 
              emocional, reduz o estresse e fortalece a confianca de cada participante.
            </p>

            <div className="bg-muted/50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-3">Nossa Missao</h3>
              <p className="text-muted-foreground text-pretty">
                Promover a inclusao social e o desenvolvimento integral de criancas e adolescentes 
                por meio do surf como ferramenta para um futuro melhor e uma educacao transformadora, 
                fortalecendo a autoestima, as habilidades socioemocionais e a conexao com a natureza.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {objectives.slice(0, 4).map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-0.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full Width Objectives */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Objetivos Especificos
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos em multiplas frentes para garantir o desenvolvimento completo dos participantes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/25"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 overflow-hidden opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 2400 64"
                      preserveAspectRatio="none"
                      className="absolute bottom-0 left-0 h-full w-[200%] min-w-[200%] text-primary/50 motion-reduce:group-hover:[animation:none] group-hover:[animation:about-card-wave-slide_4.5s_linear_infinite]"
                    >
                      <path
                        fill="currentColor"
                        d="M0,44 C400,12 560,76 960,44 C1360,12 1520,76 1920,44 C2080,28 2240,60 2400,44 L2400,64 L0,64 Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative z-10 flex flex-1 flex-col p-6 pt-5">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground leading-tight">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
