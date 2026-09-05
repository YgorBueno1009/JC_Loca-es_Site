import { Logo } from '@/components/logo'
import { directionsLink, navLinks, services, site } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="texture-asphalt relative border-t border-border bg-asphalt">
      <div aria-hidden="true" className="hazard-stripes h-3" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <Logo />
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
            Locação de munck, transporte de cargas pesadas, pá carregadeira e
            perfuração de solo em Iturama-MG e região. Desde {site.founded}.
          </p>
          <dl className="grid grid-cols-1 gap-1 text-sm text-muted-foreground sm:grid-cols-[auto_1fr] sm:gap-x-4">
            <dt className="font-heading uppercase tracking-widest text-foreground/70">CNPJ</dt>
            <dd className="font-mono">{site.cnpj}</dd>
            <dt className="font-heading uppercase tracking-widest text-foreground/70">Endereço</dt>
            <dd>
              <a href={directionsLink()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                {site.address}
              </a>
            </dd>
          </dl>
        </div>

        <nav aria-label="Rodapé - Navegação">
          <h3 className="mb-5 text-lg font-semibold tracking-widest text-primary">Navegação</h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Rodapé - Serviços">
          <h3 className="mb-5 text-lg font-semibold tracking-widest text-primary">Serviços</h3>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.id}>
                <a href="#servicos" className="text-muted-foreground transition-colors hover:text-primary">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p>Iturama-MG · Atendimento 24h</p>
        </div>
      </div>
    </footer>
  )
}
