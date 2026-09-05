'use client'

import { motion } from 'motion/react'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site-data'
import { staggerContainer, staggerItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="texture-asphalt relative overflow-hidden bg-asphalt py-24 lg:py-32"
    >
      <div aria-hidden="true" className="hazard-stripes absolute inset-x-0 top-0 h-3" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Prova Social"
          title="Quem já contratou, recomenda"
          description="Avaliações curtas e diretas de quem trabalha com a gente no canteiro, na estrada e no galpão."
          align="center"
          className="mx-auto"
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.li
              key={t.name}
              variants={staggerItem}
              className="shadow-concrete texture-steel relative flex flex-col gap-6 border-t-4 border-primary bg-steel p-8"
            >
              <Quote className="size-8 text-primary" aria-hidden="true" />
              <blockquote className="text-pretty text-lg leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <footer className="mt-auto border-t border-border pt-5">
                <p className="font-heading text-xl font-semibold uppercase leading-none">
                  {t.name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">
                  {t.role}
                </p>
              </footer>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
