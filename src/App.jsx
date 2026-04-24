import { useState } from 'react'
import {
  Phone,
  Tablet,
  BatteryCharging,
  Droplet,
  ShieldCheck,
  Sparkles,
  Clock3,
  ChevronRight,
  PhoneCall,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Music,
  Zap,
} from 'lucide-react'

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
)

const serviceItems = [
  { title: 'Cambio de Pantalla', description: 'Reemplazo profesional con pantalla original. Compatible con Face ID y Touch ID.', icon: Phone, color: '#FCD116' },
  { title: 'Reparación de Chips', description: 'Solución de fallos en U2, EEPROM, PMIC y circuitos. Recuperación de datos incluida.', icon: BatteryCharging, color: '#003893' },
  { title: 'Daños por Líquidos', description: 'Limpieza especializada y reemplazo de componentes afectados por agua o humedad.', icon: Droplet, color: '#CE1126' },
  { title: 'Mantenimiento Técnico', description: 'Diagnóstico completo con máquinas especializadas. Optimización y limpieza profunda.', icon: ShieldCheck, color: '#FCD116' },
  { title: 'Reparación de Placas', description: 'Solución de fallos en motherboards. Reemplazo de componentes con garantía técnica.', icon: Sparkles, color: '#003893' },
  { title: 'Servicio Express', description: 'Atención prioritaria para reparaciones urgentes. Mismo día en muchos casos.', icon: Clock3, color: '#CE1126' },
]

const deviceTypes = [
  { id: 'celular', title: 'Celular', icon: Phone },
  { id: 'tablet', title: 'Tablet', icon: Tablet },
]

const brands = ['Samsung', 'iPhone', 'Huawei', 'Xiaomi', 'Motorola', 'LG']

function Card({ title, description, icon: Icon, color }) {
  return (
    <article className="group rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: color }} />
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl transition" style={{ backgroundColor: `${color}22`, color }}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </article>
  )
}

function SelectableCard({ title, subtitle, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col gap-3 rounded-[28px] border p-5 text-left transition-shadow duration-200 ${
        selected
          ? 'border-[#FCD116] bg-[#FCD116]/10 shadow-soft'
          : 'border-slate-200 bg-white shadow-sm hover:border-[#FCD116] hover:bg-[#FCD116]/5'
      }`}
    >
      <span className="text-sm uppercase tracking-[0.25em] text-slate-500">{subtitle}</span>
      <span className="text-lg font-semibold text-slate-900">{title}</span>
    </button>
  )
}

function App() {
  const [selectedDevice, setSelectedDevice] = useState('celular')
  const [selectedBrand, setSelectedBrand] = useState('Samsung')
  const [selectedModel, setSelectedModel] = useState('Galaxy S23')
  const [issueDescription, setIssueDescription] = useState('')
  const [lightboxImage, setLightboxImage] = useState(null)

  const whatsappUrl = `https://wa.me/5218127564823?text=${encodeURIComponent(
    `Hola, quisiera cotizar la reparación de un ${selectedDevice} ${selectedBrand} ${selectedModel}. Problema: ${issueDescription || 'Describe el problema aquí.'}`
  )}`

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="relative overflow-hidden">
        <section className="relative isolate overflow-hidden bg-[url('/images/location/location.JPG')] bg-cover bg-top px-6 py-16 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-[#FCD116] bg-[#FCD116]/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">
                  TelCol
                </span>
                <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Reparaciones de Celulares Multimarca en Monterrey
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
                  Somos especialistas certificados en celulares multimarca para tu iPhone, Samsung, Huawei, Xiaomi y más.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="#servicios" className="inline-flex items-center justify-center rounded-full bg-[#FCD116] px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#f3d640]">
                    Ver Servicios
                  </a>
                  <a href="#interactivo" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/25">
                    Cotizar Reparación
                  </a>
                  <span className="inline-flex items-center rounded-full bg-[#CE1126]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#CE1126]">
                    100% Colombiana
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute -left-12 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                <div className="rounded-[36px] border border-white/20 bg-white/10 p-8 shadow-soft backdrop-blur-xl sm:p-10">
                  <div className="space-y-6">
                    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-lg shadow-slate-950/10">
                      <p className="text-sm uppercase tracking-[0.24em] text-[#FCD116]">TelCol en acción</p>
                      <h2 className="mt-4 text-3xl font-semibold">Reparaciones sin pausa</h2>
                      <p className="mt-3 text-sm leading-7 text-slate-100/90">Desde cambio de pantalla hasta mantenimiento integral, con tiempos claros y garantía visual.</p>
                    </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-[#FCD116]/30 bg-[#FCD116]/10 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003893]">Atención</p>
                        <p className="mt-3 text-2xl font-semibold text-[#003893]">Express</p>
                      </div>
                      <div className="rounded-3xl border border-[#CE1126]/25 bg-[#fee2e2] p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#991B1B]">Garantía</p>
                        <p className="mt-3 text-2xl font-semibold text-[#991B1B]">Calidad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">Servicios</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Reparaciones profesionales para tu celular</h2>
            <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[#FCD116] via-[#003893] to-[#CE1126]" />
            <p className="mt-6 text-base leading-7 text-slate-600">Contamos con tecnología avanzada y máquinas de diagnóstico profesional. Reparamos desde chips U2 y EEPROM hasta PMIC y circuitos complejos.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((service) => (
              <Card key={service.title} title={service.title} description={service.description} icon={service.icon} color={service.color} />
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">Tecnología Profesional</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Equipamiento avanzado para reparaciones de dispositivos móviles</h2>
            <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[#FCD116] via-[#003893] to-[#CE1126]" />
            <p className="mt-6 text-base leading-7 text-slate-600">Máquinas de diagnóstico especializadas, microscopios de precisión y herramientas profesionales para reparaciones de alta calidad.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/equipment/Microscopio para microelectrónica.jpeg', alt: 'Microscopio para microelectrónica' })}
            >
              <div className="aspect-video bg-slate-100 relative">
                <img src="/images/equipment/Microscopio para microelectrónica.jpeg" alt="Microscopio para microelectrónica" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Inspección detallada de microcomponentes</h3>
                <p className="text-sm text-slate-600">Inspección detallada de componentes y circuitos con lupa de alta resolución para soldaduras críticas.</p>
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/equipment/Estación de soldadura  aire caliente.jpeg', alt: 'Estación de soldadura de aire caliente' })}
            >
              <div className="aspect-video bg-slate-100 relative">
                <img src="/images/equipment/Estación de soldadura  aire caliente.jpeg" alt="Estación de soldadura de aire caliente" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Retrabajo controlado de componentes SMD</h3>
                <p className="text-sm text-slate-600">Reparación y retrabajo de componentes SMD con temperatura controlada para trabajos de microelectrónica.</p>
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/equipment/Fuente de poder regulable de laboratorio.jpeg', alt: 'Fuente de poder regulable de laboratorio' })}
            >
              <div className="aspect-video bg-slate-100 relative">
                <img src="/images/equipment/Fuente de poder regulable de laboratorio.jpeg" alt="Fuente de poder regulable de laboratorio" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Suministro calibrado para pruebas electrónicas</h3>
                <p className="text-sm text-slate-600">Suministro estable de voltaje y corriente para pruebas seguras y calibración de placas madre y componentes.</p>
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/equipment/medidor.jpg', alt: 'Multímetro profesional' })}
            >
              <div className="aspect-video bg-slate-100 relative">
                <img src="/images/equipment/medidor.jpg" alt="Multímetro profesional" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Medición precisa de voltaje</h3>
                <p className="text-sm text-slate-600">Medición precisa de voltaje, corriente y continuidad para diagnósticos eléctricos confiables.</p>
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/equipment/Osciloscopio digital.jpeg', alt: 'Osciloscopio digital' })}
            >
              <div className="aspect-video bg-slate-100 relative">
                <img src="/images/equipment/Osciloscopio digital.jpeg" alt="Osciloscopio digital" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Análisis profesional de señales</h3>
                <p className="text-sm text-slate-600">Análisis de señales y formas de onda para diagnóstico profundo de placas y circuitos electrónicos.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">Diferenciación</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">¿Por qué elegir TelCol?</h2>
            <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[#FCD116] via-[#003893] to-[#CE1126]" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-soft text-center hover:-translate-y-1 transition">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#FCD116]/10 text-[#FCD116] mx-auto mb-5">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Tecnología Avanzada</h3>
              <p className="text-sm text-slate-600">Máquinas de diagnóstico profesional y equipamiento de precisión para reparaciones seguras.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-soft text-center hover:-translate-y-1 transition">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#003893]/10 text-[#003893] mx-auto mb-5">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Garantía y Calidad</h3>
              <p className="text-sm text-slate-600">Repuestos confiables con garantía en cada servicio. Tu tranquilidad es nuestra prioridad.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-soft text-center hover:-translate-y-1 transition">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#CE1126]/10 text-[#CE1126] mx-auto mb-5">
                <Clock3 className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Atención Rápida</h3>
              <p className="text-sm text-slate-600">Servicio express sin comprometer la calidad. Reparaciones eficientes para mantenerte conectado.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-slate-950 via-[#003893] to-slate-900 px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-white">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCD116]/20">
                    <MapPin className="h-6 w-6 text-[#FCD116]" />
                  </div>
                  <h3 className="text-xl font-semibold">Ubicación</h3>
                </div>
                <p className="text-slate-100 leading-7">Plaza del Audio<br/>Monterrey Centro, México</p>
              </div>
              
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCD116]/20">
                    <Clock className="h-6 w-6 text-[#FCD116]" />
                  </div>
                  <h3 className="text-xl font-semibold">Horarios</h3>
                </div>
                <p className="text-slate-100 leading-7">Lunes-Sábado: 10:00 AM - 7:30 PM<br/>Domingo: 10:00 AM - 4:00 PM</p>
              </div>
              
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCD116]/20">
                    <PhoneCall className="h-6 w-6 text-[#FCD116]" />
                  </div>
                  <h3 className="text-xl font-semibold">Contacto</h3>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="https://www.facebook.com/share/1JUjeZE6ju/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#FCD116]/20 text-[#FCD116] hover:bg-[#FCD116]/40 transition">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.instagram.com/cris_tiaangomez?igsh=MXEwbmNzMGwwZnhpbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#FCD116]/20 text-[#FCD116] hover:bg-[#FCD116]/40 transition">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://www.tiktok.com/@tel.col?_r=1&_t=ZS-95eupDlaj5w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#FCD116]/20 text-[#FCD116] hover:bg-[#FCD116]/40 transition">
                    <TikTokIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">Trabajos Realizados</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Reparaciones profesionales con tecnología avanzada</h2>
            <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[#FCD116] via-[#003893] to-[#CE1126]" />
            <p className="mt-6 text-base leading-7 text-slate-600">Desde chips U2 y EEPROM hasta PMIC y NAND. Reparaciones de todo tipo de celular y venta de accesorios.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/gallery/reparacion-realme-14-pro-reballing-cpu.jpg', alt: 'Realme 14 Pro: Recuperación total tras impacto severo' })}
            >
              <div className="aspect-[4/3] min-h-[260px] bg-slate-100 relative">
                <img src="/images/gallery/reparacion-realme-14-pro-reballing-cpu.jpg" alt="Realme 14 Pro: Recuperación total tras impacto severo" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Realme 14 Pro: recuperación tras impacto</h3>
                <p className="text-sm text-slate-600">Recuperación total tras impacto severo. Reballing CPU/RAM para restablecer rendimiento y estabilidad.</p>
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/gallery/reparacion-poco-x6-pro-reconstruccion-pads.jpg', alt: 'Poco X6 Pro: reconstrucción de pads y memoria' })}
            >
              <div className="aspect-[4/3] min-h-[260px] bg-slate-100 relative">
                <img src="/images/gallery/reparacion-poco-x6-pro-reconstruccion-pads.jpg" alt="Poco X6 Pro: reconstrucción de pads y memoria" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Poco X6 Pro: reconstrucción de pads</h3>
                <p className="text-sm text-slate-600">Reconstrucción de pads y memoria tras bootloop. Recuperamos la funcionalidad interna paso a paso.</p>
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/gallery/reparacion-samsung-s24-ultra-full-swap.jpg', alt: 'Samsung S24 Ultra: solución de imagen mediante Full Swap' })}
            >
              <div className="aspect-[4/3] min-h-[260px] bg-slate-100 relative">
                <img src="/images/gallery/reparacion-samsung-s24-ultra-full-swap.jpg" alt="Samsung S24 Ultra: solución de imagen mediante Full Swap" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Samsung S24 Ultra: Full Swap profesional</h3>
                <p className="text-sm text-slate-600">Solución de imagen mediante Full Swap profesional para restaurar pantalla y sistema con precisión.</p>
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/gallery/reparacion-moto-g84-5g-carga-ic.jpg', alt: 'Moto G84 5G: reparación de línea Vout e IC de carga' })}
            >
              <div className="aspect-[4/3] min-h-[260px] bg-slate-100 relative">
                <img src="/images/gallery/reparacion-moto-g84-5g-carga-ic.jpg" alt="Moto G84 5G: reparación de línea Vout e IC de carga" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Moto G84 5G: reparación de línea de carga</h3>
                <p className="text-sm text-slate-600">Reparación de línea Vout y reemplazo de IC de carga para restaurar energía y funcionamiento estable.</p>
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/gallery/reparacion-poco-m5s-falla-encendido.jpg', alt: 'Poco M5s: solución integral de encendido' })}
            >
              <div className="aspect-[4/3] min-h-[260px] bg-slate-100 relative">
                <img src="/images/gallery/reparacion-poco-m5s-falla-encendido.jpg" alt="Poco M5s: solución integral de encendido" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Poco M5s: solución de encendido</h3>
                <p className="text-sm text-slate-600">Fuga en línea EMI VDD2. Solución integral de encendido para devolver el dispositivo a la operación normal.</p>
              </div>
            </div>
            <div
              className="group cursor-pointer rounded-[28px] border border-slate-200 bg-white/90 overflow-hidden shadow-soft hover:shadow-xl transition"
              onClick={() => setLightboxImage({ src: '/images/gallery/reparacion-samsung-s25-ultra-ovp-cargador.jpg', alt: 'Samsung S25 Ultra: protección restaurada tras daño por cargador' })}
            >
              <div className="aspect-[4/3] min-h-[260px] bg-slate-100 relative">
                <img src="/images/gallery/reparacion-samsung-s25-ultra-ovp-cargador.jpg" alt="Samsung S25 Ultra: protección restaurada tras daño por cargador" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Samsung S25 Ultra: protección restaurada</h3>
                <p className="text-sm text-slate-600">Protección restaurada tras daño por cargador genérico. Evaluación y reparación eléctrica completa.</p>
              </div>
            </div>
          </div>
        </section>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-6" onClick={() => setLightboxImage(null)}>
            <div className="relative flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-[32px] bg-slate-950 shadow-2xl" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
              >
                Cerrar
              </button>
              <div className="flex-1 overflow-hidden px-4 pt-10 sm:px-6">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="mx-auto h-full w-full max-h-[80vh] object-contain bg-slate-950"
                />
              </div>
              <div className="border-t border-white/10 bg-slate-950/95 p-4 text-center text-sm text-slate-200 sm:text-base">
                {lightboxImage.alt}
              </div>
            </div>
          </div>
        )}

        <section id="interactivo" className="bg-slate-100 px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-start">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#003893]/10 text-[#003893]">01</span>
                  Selección rápida
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-slate-900">Cotiza tu reparación al instante</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">Elige tu dispositivo, marca y modelo para obtener una cotización personalizada. Recibirás respuesta inmediata por WhatsApp.</p>

                <div className="mt-10 space-y-8">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Paso 1</p>
                        <p className="text-sm text-slate-500">Tipo de dispositivo</p>
                      </div>
                      <span className="rounded-full bg-[#FCD116]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#003893]">Interactivo</span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {deviceTypes.map((device) => (
                        <SelectableCard
                          key={device.id}
                          title={device.title}
                          subtitle={device.id === selectedDevice ? 'Seleccionado' : 'Toca para elegir'}
                          selected={selectedDevice === device.id}
                          onClick={() => setSelectedDevice(device.id)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-slate-900">Paso 2</p>
                      <p className="text-sm text-slate-500">Marca del dispositivo</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {brands.map((brandItem) => (
                        <SelectableCard
                          key={brandItem}
                          title={brandItem}
                          subtitle={selectedBrand === brandItem ? 'Seleccionado' : 'Toca para elegir'}
                          selected={selectedBrand === brandItem}
                          onClick={() => setSelectedBrand(brandItem)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-slate-900">Paso 3</p>
                      <p className="text-sm text-slate-500">Modelo</p>
                    </div>
                    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                      <label className="mb-3 block text-sm font-semibold text-slate-900">Modelo preferido</label>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <input
                          value={selectedModel}
                          onChange={(event) => setSelectedModel(event.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#FCD116] focus:ring-2 focus:ring-[#FCD116]/30"
                          placeholder="Ej. Galaxy S23"
                        />
                      </div>
                      <div className="mt-6">
                        <label className="mb-2 block text-sm font-semibold text-slate-900">Describe tu problema</label>
                        <textarea
                          value={issueDescription}
                          onChange={(event) => setIssueDescription(event.target.value)}
                          rows={4}
                          className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#FCD116] focus:ring-2 focus:ring-[#FCD116]/30"
                          placeholder="Ej. No enciende, pantalla con líneas, carga lenta..."
                        />
                      </div>
                      <div className="mt-6 flex justify-end">
                        <a
                          href={whatsappUrl}
                          className="inline-flex items-center justify-center rounded-full bg-[#003893] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#002d74]"
                        >
                          Cotizar Ahora <ChevronRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 rounded-[32px] border border-[#003893]/10 bg-gradient-to-br from-[#003893]/10 via-white to-[#CE1126]/10 p-8 shadow-soft">
                <div className="rounded-[28px] bg-[#003893]/10 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">Resumen visual</p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">Tu selección</h3>
                  <div className="mt-6 space-y-4 text-sm text-slate-600">
                    <div className="flex items-center justify-between rounded-3xl bg-white/90 px-5 py-4 shadow-sm">
                      <span className="text-slate-500">Dispositivo</span>
                      <span className="font-semibold text-slate-900">{selectedDevice === 'celular' ? 'Celular' : 'Tablet'}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-3xl bg-white/90 px-5 py-4 shadow-sm">
                      <span className="text-slate-500">Marca</span>
                      <span className="font-semibold text-slate-900">{selectedBrand}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-3xl bg-white/90 px-5 py-4 shadow-sm">
                      <span className="text-slate-500">Modelo</span>
                      <span className="font-semibold text-slate-900">{selectedModel}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-950/5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#003893]">TelCol</p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">Atención diseñada para ti</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">Selecciona tu dispositivo para obtener una cotización personalizada. Te contactaremos por WhatsApp con precios y tiempos exactos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/5218127564823?text=Hola%2C%20quisiera%20cotizar%20una%20reparación!"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition duration-200 hover:-translate-y-1"
      >
        <PhoneCall className="h-5 w-5" />
        Cotiza tu Reparación
      </a>
    </div>
  )
}

export default App
