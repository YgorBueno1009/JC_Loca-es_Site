import Image from 'next/image'
import { HardHat, Handshake, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { Parallax } from '@/components/motion/parallax'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site-data'

const values = [
  {
    icon: ShieldCheck,
    title: 'Segurança de ponta a ponta',
    text: 'Do planejamento do içamento à amarração da carga. Operadores certificados e equipamentos revisados antes de cada serviço.',
  },
  {
    icon: Handshake,
    title: 'Palavra que vale',
    text: 'Se dissemos que chegamos às 7h, chegamos às 7h. Orçamento fechado é orçamento cumprido, sem surpresa no final.',
  },
  {
    icon: HardHat,
    title: 'Gente de obra',
    text: 'Conhecemos o canteiro por dentro. Falamos a língua do mestre de obras, do engenheiro e do motorista.',
  },
]

export function About() {
  return (
    <section id="sobre" className="texture-steel relative bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <Reveal direction="left" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-border sm:aspect-[5/4] lg:aspect-[4/5]">
            <Parallax speed={0.35} className="absolute inset-0 -top-[10%] -bottom-[10%]">
              <Image
                src="/images/sobre-equipe.png"
                alt="Equipe da JC Locações em frente ao caminhão munck, na sede em Iturama-MG"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Parallax>
          </div>
          <div className="absolute -bottom-6 -right-2 border-4 border-background bg-primary px-6 py-5 text-primary-foreground sm:-right-6">
            <span className="block font-heading text-5xl font-bold leading-none">
              {new Date().getFullYear() - site.founded}+
            </span>
            <span className="block font-heading text-sm uppercase tracking-widest">
              anos na estrada
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Sobre a JC"
            title="A força da honestidade"
          />

          <Reveal delay={0.1} className="flex flex-col gap-5 text-pretty text-lg leading-relaxed text-foreground/85">
            <p>
              A JC Locações nasceu em {site.founded}, em Iturama, com um caminhão,
              um munck e uma ideia simples: fazer serviço pesado do jeito certo.
              Sem promessa vazia, sem prazo que não fecha, sem preço que muda no
              meio do caminho.
            </p>
            <p>
              Hoje atendemos construtoras, indústrias, produtores rurais e
              transportadoras em toda a região do Pontal do Triângulo. Crescemos
              porque cliente satisfeito indica. E indica porque a gente entrega o
              que promete.
            </p>
          </Reveal>

          <ul className="flex flex-col divide-y divide-border border-y border-border">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} as="li" delay={0.15 + i * 0.1} className="flex gap-5 py-6">
                <span className="flex size-12 shrink-0 items-center justify-center bg-steel text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold leading-none">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
