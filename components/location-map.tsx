"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Clock, Car, Bus } from "lucide-react"

export function LocationMap() {
  const handleOpenMaps = () => {
    window.open(
      'https://www.google.com/maps/place/Praia+do+Recreio+dos+Bandeirantes/@-23.0247,-43.4769,15z',
      '_blank'
    )
  }

  const handleGetDirections = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=-23.0247,-43.4769&travelmode=driving',
      '_blank'
    )
  }

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14711.892574082842!2d-43.48!3d-23.025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda7e5e5c5c5c%3A0x8b8b8b8b8b8b8b8b!2sReCreio%20dos%20Bandeirantes%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <Button 
                onClick={handleOpenMaps}
                className="flex-1 bg-background/95 backdrop-blur text-foreground hover:bg-background shadow-lg"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Ver no mapa
              </Button>
              <Button 
                onClick={handleGetDirections}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Como chegar
              </Button>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white text-sm font-medium mb-4 ring-1 ring-white/25">
                <MapPin className="h-4 w-4" />
                Localização
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Praia do Recreio dos Bandeirantes
              </h2>
              <p className="text-lg text-white/85 text-pretty">
                As aulas do projeto acontecem na Praia do Recreio, próximo à 
                comunidade do Terreirão. Um local perfeito para iniciantes, com 
                ondas consistentes e ambiente seguro para nossas crianças e adolescentes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Ponto de encontro</h3>
                    <p className="text-sm text-muted-foreground">
                      Próximo à comunidade do Terreirão
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Horários das aulas</h3>
                    <p className="text-sm text-muted-foreground">
                      Sábados: 8h às 10h (2h)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Car className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Estacionamento</h3>
                    <p className="text-sm text-muted-foreground">
                      Gratuito na orla
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bus className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Transporte</h3>
                    <p className="text-sm text-muted-foreground">
                      BRT Recreio ou ônibus 315
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
