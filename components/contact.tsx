'use client'

import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { directionsLink, gmailLink, mapsLink, site, whatsappLink } from '@/lib/site-data'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

const inputClass =
  'w-full border border-input bg-asphalt/60 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors'

export function Contact() {
  const [service, setService] = useState('Içamento com Munck')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const text = [
      `Olá! Meu nome é ${name}.`,
      `Serviço: ${service}.`,
      phone ? `Telefone: ${phone}.` : '',
      message ? `Detalhes: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed&hl=pt-BR&z=15`

  return (
    <section id="contato" className="texture-steel relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Manda a carga que a gente resolve"
          description="Preencha o formulário e a mensagem abre direto no nosso WhatsApp. Resposta rápida, orçamento sem enrolação."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 border border-border bg-card p-7 sm:grid-cols-2 lg:p-9"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-heading text-sm uppercase tracking-widest text-muted-foreground">
                  Nome
                </label>
                <input id="name" name="name" required autoComplete="name" placeholder="Seu nome" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-heading text-sm uppercase tracking-widest text-muted-foreground">
                  Telefone / WhatsApp
                </label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="(34) 9 9999-9999" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="service" className="font-heading text-sm uppercase tracking-widest text-muted-foreground">
                  Serviço
                </label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={inputClass}
                >
                  <option>Içamento com Munck</option>
                  <option>Transporte de Cargas e Produtos Perigosos</option>
                  <option>Locação de Pá Carregadeira</option>
                  <option>Perfuração de Solo</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="font-heading text-sm uppercase tracking-widest text-muted-foreground">
                  Detalhes da carga ou do serviço
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Peso aproximado, local, data prevista..."
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="btn-headlamp inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 font-heading text-base font-semibold uppercase tracking-wider text-primary-foreground sm:col-span-2"
              >
                <Send className="size-5" aria-hidden="true" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="flex flex-col gap-6 lg:col-span-2">
            <ul className="flex flex-col divide-y divide-border border border-border bg-card">
              <li className="flex items-start gap-4 p-6">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-heading text-sm uppercase tracking-widest text-muted-foreground">Sede</p>
                  <a
                    href={directionsLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block leading-relaxed hover:text-primary"
                  >
                    {site.address}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 p-6">
                <Phone className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-heading text-sm uppercase tracking-widest text-muted-foreground">WhatsApp / Telefone</p>
                  <a href={whatsappLink('Olá!')} target="_blank" rel="noopener noreferrer" className="mt-1 block font-heading text-2xl font-semibold hover:text-primary">
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 p-6">
                <Mail className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-heading text-sm uppercase tracking-widest text-muted-foreground">E-mail</p>
                  <a
                    href={gmailLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block break-all hover:text-primary"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={directionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traçar rota até a JC Locações no Google Maps"
              className="relative block aspect-[4/3] overflow-hidden border border-border bg-card grayscale transition-[filter] duration-500 hover:grayscale-0"
            >
              <iframe
                title="Localização da JC Locações em Iturama-MG"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 size-full border-0"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
