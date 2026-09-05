import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site-data'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Olá! Vim pelo site e gostaria de um orçamento.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="animate-pulse-ring btn-headlamp fixed bottom-5 right-5 z-50 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_-8px_oklch(0_0_0/80%)] sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="size-8" aria-hidden="true" />
    </a>
  )
}
