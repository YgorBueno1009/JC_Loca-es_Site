'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, MessageCircle, ShieldCheck, Clock, MapPin } from 'lucide-react'
import { whatsappLink, site } from '@/lib/site-data'
import { heavyEase } from '@/components/motion/reveal'

const title = ['FORÇA E PRECISÃO', 'PARA O SEU', 'TRABALHO PESADO.']

export function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, 220])
  const textY = useTransform(scrollY, [0, 800], [0, 80])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-end overflow-hidden bg-asphalt"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-24 -bottom-24">
        <video
          className="ken-burns size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.png"
          aria-hidden="true"
        >
          <source src="/videos/hero-munck.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/70 to-asphalt/30"
      />
      <div aria-hidden="true" className="texture-asphalt absolute inset-0 opacity-60" />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8 lg:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: heavyEase }}
          className="mb-6 inline-flex items-center gap-3 border-l-4 border-primary bg-asphalt/70 py-2 pl-4 pr-5 font-heading text-sm uppercase tracking-[0.3em] text-primary"
        >
          <MapPin className="size-4" aria-hidden="true" />
          {site.city} e região
        </motion.p>

        <h1 className="max-w-5xl text-balance text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
          {title.map((line, i) => (
            <span key={line} className="-my-[0.12em] block overflow-hidden py-[0.12em]">
              <motion.span
                className="block"
                initial={{ y: '110%', rotate: 2 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.15 + i * 0.16, ease: heavyEase }}
              >
                {i === 2 ? <span className="text-primary">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: heavyEase }}
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/85 sm:text-xl"
        >
          Locação de Munck e Transportes em Iturama e Região. Compromisso,
          honestidade e serviço bruto feito da forma certa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: heavyEase }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#frota"
            className="btn-headlamp inline-flex items-center justify-center gap-3 border-2 border-foreground/80 bg-transparent px-8 py-4 font-heading text-base font-semibold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary"
          >
            Ver Nossa Frota
            <ArrowDown className="size-5" aria-hidden="true" />
          </a>
          <a
            href={whatsappLink('Olá! Gostaria de um orçamento com a JC Locações.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-headlamp inline-flex items-center justify-center gap-3 bg-primary px-8 py-4 font-heading text-base font-semibold uppercase tracking-wider text-primary-foreground"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Chamar no WhatsApp
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-14 grid max-w-3xl grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3"
        >
          {[
            { icon: ShieldCheck, label: 'Segurança de ponta a ponta' },
            { icon: Clock, label: 'Atendimento 24 horas' },
            { icon: MapPin, label: 'Base em Iturama-MG' },
          ].map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 bg-asphalt/80 px-5 py-4 text-sm font-medium text-foreground/85"
            >
              <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
              {label}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <div aria-hidden="true" className="hazard-stripes absolute inset-x-0 bottom-0 h-3" />
    </section>
  )
}
