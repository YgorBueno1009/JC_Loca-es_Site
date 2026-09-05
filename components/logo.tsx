import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className, large }: { className?: string; large?: boolean }) {
  return (
    <div
      className={cn(
        'inline-flex items-center bg-foreground [clip-path:polygon(0_0,100%_0,100%_72%,94%_100%,0_100%)]',
        large ? 'h-20 px-4' : 'h-12 px-2.5',
        className,
      )}
    >
      <Image
        src="/images/logo-jc.png"
        alt="JC Transportes e Locação"
        width={1526}
        height={776}
        priority
        className={cn('w-auto object-contain', large ? 'h-[72px]' : 'h-11')}
      />
    </div>
  )
}
