export const site = {
  name: 'JC Locações de Munck e Transportes',
  shortName: 'JC Locações',
  city: 'Iturama-MG',
  founded: 2020,
  whatsapp: '5534996941075',
  phoneDisplay: '(34) 99694-1075',
  email: 'jctransporteseloc@gmail.com',
  address: 'Avenida Marginal, 268, Jardim America, Iturama-MG 38280-000',
  cnpj: '38.193.299/0001.10',
  mapsQuery: 'Avenida Marginal, 268, Jardim America, Iturama-MG 38280-000',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`
}

export function directionsLink() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapsQuery)}`
}

export function gmailLink() {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`
}

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Frota', href: '#frota' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export type Service = {
  id: string
  title: string
  short: string
  details: string[]
  image: string
}

export const services: Service[] = [
  {
    id: 'icamento',
    title: 'Içamento com Munck',
    short: 'Elevação e posicionamento com segurança e precisão.',
    details: [
      'Estruturas metálicas, tanques, containers, pré-moldados e etc',
      'Içamento com muncks para cargas longas',
      'Operadores certificados',
      'Planejamento de içamento e sinalização',
    ],
    image: '/images/frota-madal-icamento.png',
  },
  {
    id: 'transporte',
    title: 'Transporte de Cargas',
    short: 'Cargas pesadas e produtos controlados com documentação em dia e rota planejada.',
    details: [
      'Tubos, containers, máquinas, equipamentos e etc',
      'Motoristas com curso MOPP',
      'Veículos sinalizados conforme ANTT',
      'Carga e descarga com o próprio munck',
    ],
    image: '/images/frota-luna-transporte.png',
  },
  {
    id: 'pa-carregadeira',
    title: 'Locação de Pá Carregadeira',
    short: 'Forza W928 ano 2026, com garfo paleteiro, para carregar, nivelar e remover entulho.',
    details: [
      'Carregamento de caminhões e movimentação de material',
      'Remoção de entulho e limpeza de terreno',
      'Garfo paleteiro para movimentação de paletes',
      'Diárias, semanais e mensais, com operador',
    ],
    image: '/images/frota-forza-w928.png',
  },
  {
    id: 'perfuracao',
    title: 'Perfuração de Solo',
    short: 'Perfuratriz acoplada ao munck para estacas e fundações de até 8 metros.',
    details: [
      'Estacas para fundações e muros de arrimo',
      'Furos para postes, pilares e cercas',
      'Profundidade de até 8 metros',
      'Içamento e posicionamento no mesmo equipamento',
    ],
    image: '/images/frota-madal-perfuracao.png',
  },
]

export type FleetItem = {
  id: string
  name: string
  category: string
  images: string[]
  specs: { label: string; value: string }[]
}

export const fleet: FleetItem[] = [
  {
    id: 'forza-w928',
    name: 'Pá Carregadeira Forza W928',
    category: 'Carga e movimentação',
    images: ['/images/frota-forza-w928.png'],
    specs: [
      { label: 'Modelo', value: 'Forza W928' },
      { label: 'Ano', value: '2026' },
      { label: 'Capacidade de carga', value: '2.000 kg' },
      { label: 'Implemento', value: 'Garfo paleteiro' },
      { label: 'Aplicação', value: 'Carregamento, entulho e paletes' },
    ],
  },
  {
    id: 'madal-45007',
    name: 'Munck Madal 45007',
    category: 'Içamento e perfuração',
    images: ['/images/frota-madal-icamento.png', '/images/frota-madal-perfuracao.png'],
    specs: [
      { label: 'Modelo', value: 'Madal 45007' },
      { label: 'Ano', value: '2013' },
      { label: 'Capacidade máxima', value: '10.900 kg' },
      { label: 'Perfuração de solo', value: 'Até 8 m' },
      { label: 'Aplicação', value: 'Içamento e estacas' },
    ],
  },
  {
    id: 'luna-47-5',
    name: 'Munck Luna 47.5',
    category: 'Transporte e içamento',
    images: ['/images/frota-luna-transporte.png', '/images/frota-icamento-duplo.png'],
    specs: [
      { label: 'Modelo', value: 'Luna 47.5' },
      { label: 'Capacidade máxima', value: '11.300 kg' },
      { label: 'Caminhão', value: '6x2 com carroceria' },
      { label: 'Aplicação', value: 'Transporte e içamento' },
      { label: 'Operação combinada', value: 'Com Madal 16' },
    ],
  },
  {
    id: 'icamento-duplo',
    name: 'Içamento com Dois Muncks',
    category: 'Operação combinada',
    images: ['/images/frota-icamento-duplo.png'],
    specs: [
      { label: 'Equipamentos', value: 'Luna 47.5 + Madal 16' },
      { label: 'Indicado para', value: 'Cargas longas e containers' },
      { label: 'Capacidade combinada', value: 'Conforme plano de içamento' },
      { label: 'Equipe', value: '2 operadores + sinaleiro' },
      { label: 'Planejamento', value: 'Estudo de rigging incluso' },
    ],
  },
]

export const testimonials = [
  {
    quote:
      'Chegaram no horário, içaram as vigas sem um arranhão e ainda ajudaram a ajustar o posicionamento. Trabalho de gente que sabe o que faz.',
    name: 'Ronaldo Pereira',
    role: 'Mestre de obras',
  },
  {
    quote:
      'Precisava transportar um transformador com toda a documentação. A JC resolveu tudo, sem enrolação e com preço honesto.',
    name: 'Eng. Camila Duarte',
    role: 'Engenheira civil',
  },
  {
    quote:
      'Fizeram as estacas da fundação com a perfuratriz do munck e, no mesmo dia, içaram o container. Dois serviços com uma máquina só.',
    name: 'Marcos Andrade',
    role: 'Empreiteiro',
  },
]
