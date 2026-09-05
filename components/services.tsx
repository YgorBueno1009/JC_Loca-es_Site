'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight, Check } from 'lucide-react'
import { services, whatsappLink } from '@/lib/site-data'
import { Reveal, staggerContainer, staggerItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Services() {
  return (
    <section id="servicos" className="texture-steel relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nossos Serviços"
          title="O que a gente carrega, ergue e resolve"
          description="Quatro frentes de trabalho, um mesmo padrão: chegar no horário, executar com segurança e entregar o que foi combinado."
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {services.map((service, i) => (
            <motion.li
              key={service.id}
              variants={staggerItem}
              className="group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden border border-border bg-card lg:min-h-[480px]"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain"
                priority={i < 2}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/75 to-asphalt/10 transition-opacity duration-500 group-hover:from-asphalt group-hover:via-asphalt/90"
              />

              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-1 w-0 bg-primary transition-[width] duration-700 ease-[cubic-bezier(0.22,1.25,0.36,1)] group-hover:w-full"
              />

              <div className="relative flex flex-col gap-4 p-7 lg:p-9">
                <h3 className="text-3xl font-bold leading-none lg:text-4xl">
                  {service.title}
                </h3>
                <p className="max-w-md text-pretty leading-relaxed text-foreground/80">
                  {service.short}
                </p>

                <div className="grid transition-[grid-template-rows,opacity] duration-500 ease-out [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr] group-focus-within:[grid-template-rows:1fr] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
                  <ul className="overflow-hidden">
                    {service.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 py-1 text-sm text-foreground/85"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappLink(`Olá! Quero um orçamento para: ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-2 border-b-2 border-primary pb-1 font-heading text-sm font-semibold uppercase tracking-widest text-primary transition-colors hover:text-foreground"
                >
                  Pedir orçamento
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={0.2} className="mt-12 flex flex-col items-start justify-between gap-6 border border-border bg-card p-8 md:flex-row md:items-center">
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-foreground/85">
            Serviço fora dessa lista? Manda a demanda que a gente avalia e responde
            rápido, com sinceridade sobre o que dá e o que não dá pra fazer.
          </p>
          <a
            href={whatsappLink('Olá! Tenho uma demanda específica e gostaria de avaliar com a JC.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-headlamp inline-flex shrink-0 items-center gap-2 bg-primary px-7 py-4 font-heading text-base font-semibold uppercase tracking-wider text-primary-foreground"
          >
            Falar com a equipe
          </a>
        </Reveal>
      </div>
    </section>
  )
}
