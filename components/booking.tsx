"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, MessageCircle, User, Phone, Users, Check, MapPin, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const ageGroups = [
  { id: "8-10", label: "8 a 10 anos", description: "Turma infantil" },
  { id: "11-14", label: "11 a 14 anos", description: "Turma pré-adolescente" },
  { id: "15-17", label: "15 a 17 anos", description: "Turma adolescente" },
]

const WHATSAPP_NUMBER = "5521999999999"

export function Booking() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    ageGroup: "",
    responsibleName: "",
    responsiblePhone: "",
    responsibleEmail: "",
    address: "",
    community: "",
    school: "",
    message: "",
    agreedTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const generateWhatsAppMessage = () => {
    const ageGroup = ageGroups.find(a => a.id === formData.ageGroup)
    
    const message = `🏄‍♀️ *INSCRIÇÃO - SURF PARA O FUTURO*

👧 *DADOS DA CRIANÇA/ADOLESCENTE*
Nome: ${formData.childName}
Idade: ${formData.childAge} anos
Faixa etária: ${ageGroup?.label}

👨‍👩‍👧 *DADOS DO RESPONSÁVEL*
Nome: ${formData.responsibleName}
Telefone: ${formData.responsiblePhone}
Email: ${formData.responsibleEmail}

📍 *ENDEREÇO*
${formData.address}
Comunidade: ${formData.community}
Escola: ${formData.school}

${formData.message ? `💬 *Observações:* ${formData.message}` : ''}

✅ Responsável concordou com os termos do projeto`

    return encodeURIComponent(message)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`
    window.open(whatsappUrl, '_blank')

    setIsSuccess(true)
    setIsSubmitting(false)
  }

  if (isSuccess) {
    return (
      <section id="inscricao" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-lg mx-auto text-center">
            <CardContent className="pt-12 pb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Inscrição enviada!
              </h3>
              <p className="text-muted-foreground mb-6">
                Sua inscrição foi enviada para nossa equipe via WhatsApp. 
                Entraremos em contato em breve para confirmar a participação.
              </p>
              <Button onClick={() => { setIsSuccess(false); setStep(1); setFormData(prev => ({ ...prev, childName: '', childAge: '', responsibleName: '', responsiblePhone: '', responsibleEmail: '', address: '', community: '', school: '', message: '' })) }}>
                Fazer nova inscrição
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="inscricao" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Calendar className="h-4 w-4" />
            Inscrições abertas
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Inscreva uma criança ou adolescente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Preencha o formulário abaixo para inscrever uma criança ou adolescente de 8 a 17 anos 
            da comunidade do Terreirão ou arredores no programa Surf para o Futuro.
          </p>
        </div>

        {/* Requirements */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Requisitos para participação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ter entre 8 e 17 anos de idade</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Morar na comunidade do Terreirão ou arredores (Recreio dos Bandeirantes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Ter autorização do responsável legal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Compromisso com a frequência nas aulas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="px-6 pt-6">
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors",
                    step >= s 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  )}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={cn(
                      "w-16 md:w-24 h-1 mx-2",
                      step > s ? "bg-primary" : "bg-muted"
                    )} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground mb-6">
              <span>Dados da criança</span>
              <span>Responsável</span>
              <span>Confirmação</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Child Data */}
            {step === 1 && (
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="childName" className="text-base font-semibold mb-2 block">
                    <User className="inline h-4 w-4 mr-2" />
                    Nome completo da criança/adolescente
                  </Label>
                  <Input
                    id="childName"
                    placeholder="Nome completo"
                    value={formData.childName}
                    onChange={(e) => setFormData(prev => ({ ...prev, childName: e.target.value }))}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="childAge" className="text-base font-semibold mb-2 block">
                    Idade
                  </Label>
                  <Input
                    id="childAge"
                    type="number"
                    min="8"
                    max="17"
                    placeholder="Idade (8 a 17 anos)"
                    value={formData.childAge}
                    onChange={(e) => setFormData(prev => ({ ...prev, childAge: e.target.value }))}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    <Users className="inline h-4 w-4 mr-2" />
                    Faixa etária
                  </Label>
                  <div className="space-y-2">
                    {ageGroups.map((group) => (
                      <button
                        key={group.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, ageGroup: group.id }))}
                        className={cn(
                          "w-full p-4 rounded-xl border-2 text-left transition-all",
                          formData.ageGroup === group.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        <div className="font-semibold text-foreground">{group.label}</div>
                        <div className="text-sm text-muted-foreground">{group.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <Button 
                  type="button" 
                  onClick={() => setStep(2)}
                  disabled={!formData.childName || !formData.childAge || !formData.ageGroup}
                  className="w-full h-12"
                  size="lg"
                >
                  Continuar
                </Button>
              </CardContent>
            )}

            {/* Step 2: Responsible Data */}
            {step === 2 && (
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="responsibleName" className="text-base font-semibold mb-2 block">
                    <User className="inline h-4 w-4 mr-2" />
                    Nome do responsável legal
                  </Label>
                  <Input
                    id="responsibleName"
                    placeholder="Nome completo do responsável"
                    value={formData.responsibleName}
                    onChange={(e) => setFormData(prev => ({ ...prev, responsibleName: e.target.value }))}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="responsiblePhone" className="text-base font-semibold mb-2 block">
                    <Phone className="inline h-4 w-4 mr-2" />
                    WhatsApp do responsável
                  </Label>
                  <Input
                    id="responsiblePhone"
                    type="tel"
                    placeholder="(21) 99999-9999"
                    value={formData.responsiblePhone}
                    onChange={(e) => setFormData(prev => ({ ...prev, responsiblePhone: e.target.value }))}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="responsibleEmail" className="text-base font-semibold mb-2 block">
                    Email (opcional)
                  </Label>
                  <Input
                    id="responsibleEmail"
                    type="email"
                    placeholder="email@exemplo.com"
                    value={formData.responsibleEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, responsibleEmail: e.target.value }))}
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-base font-semibold mb-2 block">
                    <MapPin className="inline h-4 w-4 mr-2" />
                    Endereço
                  </Label>
                  <Input
                    id="address"
                    placeholder="Rua, número, bairro"
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="community" className="text-base font-semibold mb-2 block">
                      Comunidade
                    </Label>
                    <Input
                      id="community"
                      placeholder="Ex.: Terreirão"
                      value={formData.community}
                      onChange={(e) => setFormData(prev => ({ ...prev, community: e.target.value }))}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Label htmlFor="school" className="text-base font-semibold mb-2 block">
                      Escola
                    </Label>
                    <Input
                      id="school"
                      placeholder="Nome da escola"
                      value={formData.school}
                      onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1 h-12"
                  >
                    Voltar
                  </Button>
                  <Button 
                    type="button" 
                    onClick={() => setStep(3)}
                    disabled={!formData.responsibleName || !formData.responsiblePhone || !formData.address || !formData.community}
                    className="flex-1 h-12"
                  >
                    Continuar
                  </Button>
                </div>
              </CardContent>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <CardContent className="space-y-6">
                <Card className="bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Resumo da inscrição</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Criança/adolescente</span>
                      <span className="font-medium">{formData.childName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Idade</span>
                      <span className="font-medium">{formData.childAge} anos</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Responsável</span>
                      <span className="font-medium">{formData.responsibleName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Comunidade</span>
                      <span className="font-medium">{formData.community}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex items-center gap-2 text-green-600">
                        <Check className="h-5 w-5" />
                        <span className="font-medium">100% Gratuito</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <Label htmlFor="message" className="text-base font-semibold mb-2 block">
                    Observações (opcional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Alguma informação adicional sobre a criança? (saúde, experiências anteriores, etc.)"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreedTerms}
                    onChange={(e) => setFormData(prev => ({ ...prev, agreedTerms: e.target.checked }))}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    Declaro que sou responsável legal pela criança/adolescente e autorizo sua participação 
                    no projeto Surf para o Futuro, concordando com as atividades propostas.
                  </Label>
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting || !formData.agreedTerms}
                  className="w-full h-14 text-lg bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Enviando...' : 'Enviar inscrição via WhatsApp'}
                </Button>

                <Button 
                  type="button" 
                  variant="ghost"
                  onClick={() => setStep(2)}
                  className="w-full"
                >
                  Voltar e editar
                </Button>
              </CardContent>
            )}
          </form>
        </Card>
      </div>
    </section>
  )
}
