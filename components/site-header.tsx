'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, MessageCircle } from 'lucide-react'
import { navLinks, whatsappLink } from '@/lib/site-data'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-asphalt/95 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#inicio" aria-label="JC Locações - Início">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-heading text-sm font-medium uppercase tracking-widest text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(
              'Olá! Preciso de um orçamento urgente para içamento/transporte.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-headlamp hidden items-center gap-2 bg-primary px-5 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Solicitar Orçamento Urgente
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex size-11 items-center justify-center border border-border bg-card/60 text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={cn(
          'texture-asphalt overflow-hidden border-b border-border bg-asphalt transition-[max-height] duration-500 ease-out lg:hidden',
          open ? 'max-h-[420px]' : 'max-h-0 border-b-0',
        )}
      >
        <nav aria-label="Principal (celular)" className="px-4 py-6 sm:px-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-l-4 border-transparent px-4 py-3 font-heading text-xl uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={whatsappLink(
                  'Olá! Preciso de um orçamento urgente para içamento/transporte.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-headlamp flex items-center justify-center gap-2 bg-primary px-5 py-4 font-heading text-base font-semibold uppercase tracking-wider text-primary-foreground"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Solicitar Orçamento Urgente
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
