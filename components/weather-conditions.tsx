"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Cloud, 
  Sun, 
  Wind, 
  Waves, 
  Thermometer, 
  Droplets,
  MapPin,
  RefreshCw,
  CloudRain,
  CloudSun
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface WeatherData {
  temperature: number
  humidity: number
  windSpeed: number
  windDirection: string
  condition: string
  icon: string
}

interface MarineData {
  waveHeight: number
  wavePeriod: number
  waterTemp: number
  swellDirection: string
}

const RECREIO_LAT = -23.0247
const RECREIO_LON = -43.4769

function getWeatherIcon(condition: string) {
  const lower = condition.toLowerCase()
  if (lower.includes('rain') || lower.includes('chuva')) return CloudRain
  if (lower.includes('cloud') || lower.includes('nublado')) return Cloud
  if (lower.includes('partly') || lower.includes('parcialmente')) return CloudSun
  return Sun
}

function getSurfCondition(waveHeight: number, windSpeed: number, condition: string): { label: string; color: string; description: string } {
  const lower = condition.toLowerCase()
  const isBadWeather = lower.includes("tempestade") || lower.includes("chuva forte") || lower.includes("pancadas")
  const isRainy = lower.includes("chuva") || lower.includes("garoa")

  if (isBadWeather || waveHeight > 2.2 || windSpeed > 28) {
    return { label: "Não recomendado", color: "text-red-500", description: "Condições instáveis no momento, melhor remarcar a aula." }
  }
  if (isRainy || windSpeed > 20 || waveHeight > 1.8) {
    return { label: "Regular", color: "text-orange-500", description: "Pode surfar, mas as condições exigem mais atenção." }
  }
  if (waveHeight >= 0.8 && waveHeight <= 1.5 && windSpeed < 15) {
    return { label: "Excelente", color: "text-green-500", description: "Condições perfeitas para aula!" }
  }
  if (waveHeight >= 0.5 && waveHeight <= 2 && windSpeed < 20) {
    return { label: "Bom", color: "text-blue-500", description: "Boas condições para aprender" }
  }
  return { label: "Moderado", color: "text-yellow-500", description: "Condições aceitáveis" }
}

function getWaveBackground(waveHeight?: number) {
  if (!waveHeight) return "url('/images/hero-surf.jpg')"
  if (waveHeight >= 1.8) return "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1400&q=80')"
  if (waveHeight >= 1.0) return "url('/images/hero-surf.jpg')"
  return "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80')"
}

function getWindBackground(windSpeed?: number) {
  if (!windSpeed) return "url('/images/wind-lines.svg')"
  if (windSpeed >= 20) return "url('/images/wind-lines.svg')"
  if (windSpeed >= 10) return "url('/images/wind-lines.svg')"
  return "url('/images/wind-lines.svg')"
}

function getTempBackground(condition?: string) {
  const lower = condition?.toLowerCase() || ""
  if (lower.includes("chuva") || lower.includes("garoa") || lower.includes("tempestade")) {
    return "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1400&q=80')"
  }
  if (lower.includes("nublado") || lower.includes("névoa")) {
    return "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=1400&q=80')"
  }
  return "url('https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=1400&q=80')"
}

function getClimateBackground(condition?: string) {
  const lower = condition?.toLowerCase() || ""
  if (lower.includes("chuva") || lower.includes("garoa")) return "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1400&q=80')"
  if (lower.includes("nublado")) return "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1400&q=80')"
  return "url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=1400&q=80')"
}

export function WeatherConditions() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [marine, setMarine] = useState<MarineData | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      // Fetch weather from Open-Meteo (free, no API key required)
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${RECREIO_LAT}&longitude=${RECREIO_LON}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,wind_direction_10m,weather_code&timezone=America/Sao_Paulo`
      )
      const weatherData = await weatherRes.json()

      // Fetch marine data from Open-Meteo Marine
      const marineRes = await fetch(
        `https://marine-api.open-meteo.com/v1/marine?latitude=${RECREIO_LAT}&longitude=${RECREIO_LON}&current=wave_height,wave_period,wave_direction,swell_wave_height&timezone=America/Sao_Paulo`
      )
      const marineData = await marineRes.json()

      const weatherCodes: Record<number, string> = {
        0: 'Céu limpo',
        1: 'Principalmente limpo',
        2: 'Parcialmente nublado',
        3: 'Nublado',
        45: 'Névoa',
        48: 'Névoa com geada',
        51: 'Garoa leve',
        53: 'Garoa moderada',
        55: 'Garoa intensa',
        61: 'Chuva leve',
        63: 'Chuva moderada',
        65: 'Chuva forte',
        80: 'Pancadas de chuva',
        95: 'Tempestade'
      }

      const windDirections: Record<string, string> = {
        N: 'Norte', NE: 'Nordeste', E: 'Leste', SE: 'Sudeste',
        S: 'Sul', SW: 'Sudoeste', W: 'Oeste', NW: 'Noroeste'
      }

      const getWindDirection = (degrees: number): string => {
        const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] as const
        const index = Math.round(degrees / 45) % 8
        return windDirections[dirs[index]] ?? "Sul"
      }

      if (weatherData.current) {
        setWeather({
          temperature: Math.round(weatherData.current.temperature_2m),
          humidity: weatherData.current.relative_humidity_2m,
          windSpeed: Math.round(weatherData.current.wind_speed_10m),
          windDirection: getWindDirection(weatherData.current.wind_direction_10m),
          condition: weatherCodes[weatherData.current.weather_code] || 'Desconhecido',
          icon: 'sun'
        })
      }

      if (marineData.current) {
        setMarine({
          waveHeight: marineData.current.wave_height || marineData.current.swell_wave_height || 0.8,
          wavePeriod: marineData.current.wave_period || 8,
          waterTemp: 24, // Open-Meteo doesn't provide water temp, using average for Recreio
          swellDirection: getWindDirection(marineData.current.wave_direction || 180)
        })
      }

      setLastUpdate(new Date())
    } catch (error) {
      console.error('[v0] Error fetching weather data:', error)
      // Set fallback data
      setWeather({
        temperature: 28,
        humidity: 75,
        windSpeed: 12,
        windDirection: 'Sudeste',
        condition: 'Parcialmente nublado',
        icon: 'cloud-sun'
      })
      setMarine({
        waveHeight: 1.0,
        wavePeriod: 9,
        waterTemp: 24,
        swellDirection: 'Sul'
      })
      setLastUpdate(new Date())
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 30 * 60 * 1000) // Update every 30 minutes
    return () => clearInterval(interval)
  }, [])

  const surfCondition = marine && weather ? getSurfCondition(marine.waveHeight, weather.windSpeed, weather.condition) : null
  const WeatherIcon = weather ? getWeatherIcon(weather.condition) : Sun
  const isRain = Boolean(weather?.condition?.toLowerCase().includes("chuva"))
  const isCloudy = Boolean(weather?.condition?.toLowerCase().includes("nublado"))
  const cardBackgrounds = {
    waves: getWaveBackground(marine?.waveHeight),
    wind: getWindBackground(weather?.windSpeed),
    temp: getTempBackground(weather?.condition),
    climate: getClimateBackground(weather?.condition),
  } as const

  return (
    <section id="condicoes" className="relative py-24 bg-gradient-to-b from-background via-primary/8 to-primary/18 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/20 to-transparent" />
      <div className="pointer-events-none absolute -bottom-10 left-0 right-0 h-24 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--primary)_35%,transparent)_0%,transparent_70%)] animate-pulse" />
      </div>
      <svg className="pointer-events-none absolute -bottom-1 left-0 w-[200%] h-24 text-primary/35 animate-wave-drift" viewBox="0 0 1440 180" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,96L60,90.7C120,85,240,75,360,85.3C480,96,600,128,720,133.3C840,139,960,117,1080,101.3C1200,85,1320,75,1380,69.3L1440,64L1440,192L1380,192C1320,192,1200,192,1080,192C960,192,840,192,720,192C600,192,480,192,360,192C240,192,120,192,60,192L0,192Z" />
      </svg>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            Recreio dos Bandeirantes, RJ
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Condições do Mar em Tempo Real
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Acompanhe as condições atuais para planejar a sua aula no melhor momento
          </p>
        </div>

        {/* Main Condition Card */}
        {surfCondition && (
          <div className="max-w-2xl mx-auto mb-8">
            <Card className="bg-gradient-to-br from-primary/15 to-sunset/20 border-primary/35 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className={`text-3xl font-bold ${surfCondition.color} mb-2`}>
                  {surfCondition.label} para Surf
                </div>
                <p className="text-muted-foreground">{surfCondition.description}</p>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Wave Height */}
          <Card
            className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/30 bg-transparent"
            style={{ backgroundImage: cardBackgrounds.waves, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-white/20 group-hover:bg-white/15 transition-colors" />
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
                <Waves className="h-5 w-5 text-primary animate-float-gentle" />
                Altura das Ondas
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              {loading ? (
                <div className="animate-pulse h-12 bg-muted rounded" />
              ) : (
                <>
                  <div className="text-4xl font-bold text-white">
                    {marine != null ? `${marine.waveHeight.toFixed(1)}m` : "—"}
                  </div>
                  <p className="text-sm text-white/95 mt-1 font-medium">
                    Período: {marine?.wavePeriod != null ? `${marine.wavePeriod}s` : "—"} |{" "}
                    {marine?.swellDirection ?? "—"}
                  </p>
                  <div className="mt-3 h-2 w-full rounded-full bg-primary/20 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-ocean-light transition-all duration-700"
                      style={{ width: `${Math.min((marine?.waveHeight || 0) * 40, 100)}%` }}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Wind */}
          <Card
            className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/25 bg-transparent animate-wind-bg"
            style={{ backgroundImage: cardBackgrounds.wind, backgroundSize: "120% 120%", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-white/20 group-hover:bg-white/15 transition-colors" />
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
                <Wind className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                Vento
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              {loading ? (
                <div className="animate-pulse h-12 bg-muted rounded" />
              ) : (
                <>
                  <div className="text-4xl font-bold text-white">
                    {weather?.windSpeed}km/h
                  </div>
                  <p className="text-sm text-white/95 mt-1 font-medium">
                    Direção: {weather?.windDirection}
                  </p>
                  <div className="mt-3 flex gap-1.5">
                    <span className="h-1.5 w-6 rounded-full bg-primary/50 animate-wind-flow" />
                    <span className="h-1.5 w-10 rounded-full bg-primary/65 animate-wind-flow [animation-delay:180ms]" />
                    <span className="h-1.5 w-8 rounded-full bg-primary/80 animate-wind-flow [animation-delay:360ms]" />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Temperature */}
          <Card
            className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-sunset/40 bg-transparent"
            style={{ backgroundImage: cardBackgrounds.temp, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-white/20 group-hover:bg-white/15 transition-colors" />
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
                <Thermometer className="h-5 w-5 text-sunset" />
                Temperatura
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              {loading ? (
                <div className="animate-pulse h-12 bg-muted rounded" />
              ) : (
                <>
                  <div className="text-4xl font-bold text-white">
                    {weather?.temperature}°C
                  </div>
                  <p className="text-sm text-white/95 mt-1 font-medium">
                    Água: ~{marine?.waterTemp}°C
                  </p>
                  <Sun className="mt-2 h-5 w-5 text-sunset animate-float-gentle" />
                </>
              )}
            </CardContent>
          </Card>

          {/* Weather */}
          <Card
            className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-blue-200 bg-transparent"
            style={{ backgroundImage: cardBackgrounds.climate, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-white/20 group-hover:bg-white/15 transition-colors" />
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
                <WeatherIcon className="h-5 w-5 text-primary" />
                Clima
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              {loading ? (
                <div className="animate-pulse h-12 bg-muted rounded" />
              ) : (
                <>
                  <div className="text-4xl font-bold text-foreground flex items-center gap-2">
                    <WeatherIcon className="h-10 w-10 text-sunset animate-float-gentle" />
                    {isRain && <CloudRain className="h-8 w-8 text-blue-500 animate-pulse" />}
                    {isCloudy && <Cloud className="h-8 w-8 text-slate-500 animate-pulse" />}
                  </div>
                  <p className="text-sm text-slate-700 mt-1 font-medium">
                    {weather?.condition} | {weather?.humidity}% umidade
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-blue-500">
                    <Droplets className="h-4 w-4 animate-float-gentle" />
                    <Droplets className="h-4 w-4 animate-float-gentle [animation-delay:140ms]" />
                    <Droplets className="h-4 w-4 animate-float-gentle [animation-delay:280ms]" />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Last Update & Refresh */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="text-sm text-muted-foreground">
            Última atualização: {lastUpdate?.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchData}
            disabled={loading}
            className="gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
        </div>
      </div>
    </section>
  )
}
