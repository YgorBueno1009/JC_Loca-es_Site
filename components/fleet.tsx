'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X, Ruler, MessageCircle } from 'lucide-react'
import { fleet, whatsappLink, type FleetItem } from '@/lib/site-data'
import { heavyEase, Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

function wrapIndex(i: number) {
  return ((i % fleet.length) + fleet.length) % fleet.length
}

export function Fleet() {
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState<FleetItem | null>(null)
  const [photo, setPhoto] = useState(0)

  const prev = useCallback(() => setActive((a) => wrapIndex(a - 1)), [])
  const next = useCallback(() => setActive((a) => wrapIndex(a + 1)), [])

  const openItem = useCallback((item: FleetItem) => {
    setPhoto(0)
    setSelected(item)
  }, [])

  const photoCount = selected?.images.length ?? 0
  const prevPhoto = useCallback(
    () => setPhoto((p) => (p - 1 + photoCount) % photoCount),
    [photoCount],
  )
  const nextPhoto = useCallback(() => setPhoto((p) => (p + 1) % photoCount), [photoCount])

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
      if (e.key === 'ArrowLeft') prevPhoto()
      if (e.key === 'ArrowRight') nextPhoto()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected, prevPhoto, nextPhoto])

  return (
    <section id="frota" className="texture-asphalt relative overflow-hidden bg-asphalt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Conheça a Frota"
            title="Máquinas que aguentam o tranco"
            description="Equipamentos revisados, documentação em dia e dados técnicos abertos. Clique em qualquer veículo para ver a ficha completa."
          />
          <Reveal direction="right" className="flex gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Veículo anterior"
              className="btn-headlamp inline-flex size-14 items-center justify-center border-2 border-foreground/40 text-foreground hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próximo veículo"
              className="btn-headlamp inline-flex size-14 items-center justify-center bg-primary text-primary-foreground"
            >
              <ChevronRight className="size-6" />
            </button>
          </Reveal>
        </div>
      </div>

      <div
        className="relative mt-16 h-[440px] w-full sm:h-[520px] lg:h-[580px]"
        style={{ perspective: '1600px' }}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Frota de veículos"
      >
        {fleet.map((item, i) => {
          let offset = i - active
          if (offset > fleet.length / 2) offset -= fleet.length
          if (offset < -fleet.length / 2) offset += fleet.length
          const isActive = offset === 0
          const abs = Math.abs(offset)

          return (
            <motion.button
              key={item.id}
              type="button"
              aria-label={`${item.name} – ver ficha técnica`}
              aria-current={isActive ? 'true' : undefined}
              tabIndex={isActive ? 0 : -1}
              onClick={() => (isActive ? openItem(item) : setActive(i))}
              className={cn(
                'group absolute left-1/2 top-0 h-full w-[85vw] max-w-[820px] origin-center overflow-hidden border border-border bg-card text-left sm:w-[70vw]',
                isActive ? 'cursor-zoom-in' : 'cursor-pointer',
              )}
              initial={false}
              animate={{
                x: `calc(-50% + ${offset * 62}%)`,
                rotateY: offset * -32,
                scale: isActive ? 1 : 0.82 - abs * 0.06,
                z: -abs * 220,
                opacity: abs > 1 ? 0 : 1,
                filter: isActive ? 'brightness(1)' : 'brightness(0.45)',
              }}
              transition={{ duration: 0.9, ease: heavyEase }}
              style={{ zIndex: 10 - abs, transformStyle: 'preserve-3d' }}
            >
              <Image
                src={item.images[0]}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 820px, 85vw"
                className={cn(
                  'object-contain',
                )}
                priority={i === 0}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                <div>
                  <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-3xl font-bold leading-none sm:text-5xl">
                    {item.name}
                  </h3>
                </div>
                {isActive && (
                  <span className="hidden shrink-0 items-center gap-2 bg-primary px-4 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground sm:inline-flex">
                    <Ruler className="size-4" aria-hidden="true" />
                    Ficha técnica
                  </span>
                )}
              </div>
            </motion.button>
          )
        })}

        <button
          type="button"
          onClick={prev}
          aria-label="Veículo anterior"
          className="btn-headlamp absolute left-3 top-1/2 z-20 inline-flex size-12 -translate-y-1/2 items-center justify-center border-2 border-foreground/50 bg-asphalt/70 text-foreground backdrop-blur-sm hover:border-primary hover:text-primary sm:left-6 sm:size-14 lg:left-[calc(50%-410px-4.5rem)]"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próximo veículo"
          className="btn-headlamp absolute right-3 top-1/2 z-20 inline-flex size-12 -translate-y-1/2 items-center justify-center bg-primary text-primary-foreground sm:right-6 sm:size-14 lg:right-[calc(50%-410px-4.5rem)]"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Selecionar veículo">
        {fleet.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={item.name}
            onClick={() => setActive(i)}
            className={cn(
              'h-1.5 transition-all duration-500',
              i === active ? 'w-12 bg-primary' : 'w-6 bg-foreground/30 hover:bg-foreground/60',
            )}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center bg-asphalt/85 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="fleet-modal-title"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 80, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: heavyEase }}
              className="texture-steel relative grid max-h-[92svh] w-full max-w-5xl grid-cols-1 overflow-y-auto border border-border bg-card lg:grid-cols-2"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fechar"
                className="absolute right-3 top-3 z-10 inline-flex size-11 items-center justify-center bg-asphalt/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <X className="size-5" />
              </button>

              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[520px]">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={selected.images[photo]}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5, ease: heavyEase }}
                  >
                    <Image
                      src={selected.images[photo]}
                      alt={`${selected.name} – foto ${photo + 1} de ${photoCount}`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {photoCount > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevPhoto}
                      aria-label="Foto anterior"
                      className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center bg-asphalt/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                    <button
                      type="button"
                      onClick={nextPhoto}
                      aria-label="Próxima foto"
                      className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center bg-asphalt/80 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                    <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
                      {selected.images.map((src, i) => (
                        <button
                          key={src}
                          type="button"
                          aria-label={`Ver foto ${i + 1}`}
                          aria-current={i === photo ? 'true' : undefined}
                          onClick={() => setPhoto(i)}
                          className={cn(
                            'h-1.5 transition-all duration-500',
                            i === photo ? 'w-8 bg-primary' : 'w-4 bg-foreground/50 hover:bg-foreground',
                          )}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-6 p-7 lg:p-10">
                <div>
                  <span className="font-heading text-xs uppercase tracking-[0.3em] text-primary">
                    {selected.category}
                  </span>
                  <h3 id="fleet-modal-title" className="mt-2 text-4xl font-bold leading-none lg:text-5xl">
                    {selected.name}
                  </h3>
                </div>

                <dl className="divide-y divide-border border-y border-border">
                  {selected.specs.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-6 py-3">
                      <dt className="text-sm uppercase tracking-wider text-muted-foreground">
                        {s.label}
                      </dt>
                      <dd className="font-heading text-xl font-semibold text-foreground">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Valores de capacidade conforme tabela de carga do fabricante. A
                  capacidade real varia com o raio de operação e o patolamento.
                </p>

                <a
                  href={whatsappLink(`Olá! Quero um orçamento para o ${selected.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-headlamp mt-auto inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 font-heading text-base font-semibold uppercase tracking-wider text-primary-foreground"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Solicitar este equipamento
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
