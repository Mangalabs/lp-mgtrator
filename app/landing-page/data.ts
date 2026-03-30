import React from 'react'
import {
  ChevronRight,
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Cog,
  Menu,
  X,
  CheckCircle2,
} from 'lucide-react'

export const FONT_HEADING = "'Barlow Condensed', sans-serif"
export const FONT_BODY = "'Barlow', sans-serif"

export const WA_LINK = 'https://wa.me/5585991911540'

export const C = {
  bg: '#F5F3EF',
  bgAlt: '#EDEAE4',
  bgCard: '#FFFFFF',
  bgCardHover: '#F8F7F4',
  border: '#D1CCC4',
  borderLight: '#BAB5AC',
  textPrimary: '#0F1E32',
  textSecondary: '#1A2E4A',
  textMuted: '#3D4F65',
  textFaint: '#6B7B8D',
  textBody: '#2D3E52',
  accent: '#1A3460',
  accentDark: '#0F2040',
  yellow: '#FFCD11',
  yellowDark: '#D4A90A',
  yellowText: '#1A1A1A',
  green: '#15803D',
  greenDark: '#0B5D2B',
  highlightBg: '#FFCD11',
  highlightCardBg: '#FFFFFF',
  highlightCardText: '#0F1E32',
  highlightDescText: '#3D4F65',
  highlightStripe: '#1A3460',
  highlightIconBg: '#1A3460',
  highlightIconColor: '#FFFFFF',
  hazardDark: '#1A3460',
  machineCardBg: '#1A1A1A',
  machineCardBorder: '#333333',
  machineCardOverlay: '#0C1929',
  reviewText: '#E8ECF1',
  mapLabelBg: '#FFFFFF',
  starColor: '#FFCD11',
  blueBg: '#0C1929',
  blueBgAlt: '#0F1E32',
  blueBorder: '#1E3A5F',
  blueText: '#FFFFFF',
  blueTextMuted: '#94A3B8',
  blueTextFaint: '#64748B',
  blueAccent: '#FFCD11',
  headerBg: '#FFFFFF',
  headerText: '#0F1E32',
  headerBorder: '#E2DFD9',
}

export const COMPANY_INFO = {
  name: 'MG TratorPeças',
  phone: '(85) 99191-1540',
  phoneDisplay: '(85) 99191-1540',
  whatsappLink: WA_LINK,
  workingHours: 'Seg - Sex: 08h às 18h',
  topbarWorkingHours: 'Seg a Sex 08h-18h',
  addressLine: 'Av. Guajajaras, Tirirical',
  cityState: 'SÃO LUÍS - MA',
  cityStateDisplay: 'São Luís - MA',
  email: 'comercial@mgtratorpecas.com.br',
  instagram: 'https://www.instagram.com/mg_tratorpecas_/',
  instagramHandle: '@mgtratorpecas',
}

export const NAV_ITEMS = [
  { label: 'MÁQUINAS', href: '#maquinas' },
  { label: 'LOJA', href: '#estrutura' },
  { label: 'AVALIAÇÕES', href: '#avaliacoes' },
  { label: 'FAQ', href: '#faq' },
]

export const HERO_FEATURES = [
  { icon: Truck, text: 'Envio todo Brasil' },
  { icon: PackageCheck, text: '5.000+ peças em estoque' },
  { icon: Award, text: 'Nota Fiscal garantida' },
]

export const HERO_STATS = [
  {
    numValue: 5000,
    suffix: '+',
    label: 'PEÇAS EM ESTOQUE',
    icon: PackageCheck,
  },
  {
    numValue: 24,
    suffix: 'H',
    label: 'DESPACHO NO MESMO DIA',
    icon: Truck,
  },
  {
    numValue: 4.9,
    suffix: '★',
    label: 'NOTA NO GOOGLE',
    icon: Star,
    isDecimal: true,
  },
]

export const HERO_BRANDS = ['VOLVO', 'CATERPILLAR']

export const HIGHLIGHT_FEATURES = [
  {
    icon: React.createElement(Truck, { className: 'w-7 h-7' }),
    title: 'ENTREGA RÁPIDA',
    description: 'Para todo Brasil',
  },
  {
    icon: React.createElement(Warehouse, { className: 'w-7 h-7' }),
    title: 'ESTOQUE PRÓPRIO',
    description: 'Pronta entrega',
  },
  {
    icon: React.createElement(CreditCard, { className: 'w-7 h-7' }),
    title: 'PARCELAMENTO',
    description: 'Boleto bancário sob análise ou cartão de crédito',
  },
  {
    icon: React.createElement(QrCode, { className: 'w-7 h-7' }),
    title: 'DESCONTO NO PIX',
    description: 'À vista',
  },
]

export const ESTRUTURA_CARDS = [
  {
    title: 'LOJA FÍSICA COM PRONTA ENTREGA',
    text: 'Retire sua peça direto no balcão, sem esperar frete. Atendimento presencial rápido e especializado.',
    code: 'EST-001',
  },
  {
    title: 'ATENDIMENTO TÉCNICO VIA WHATSAPP',
    text: 'Informe o modelo, código e série — nossa equipe identifica a peça exata e envia o orçamento em minutos.',
    code: 'TEC-002',
  },
  {
    title: 'ENVIO NO MESMO DIA PARA TODO BRASIL',
    text: 'Pedidos confirmados até 14h são despachados no mesmo dia. Sua máquina não pode esperar.',
    code: 'LOG-003',
  },
]

export const ESTRUTURA_DISTRIBUICAO_STATS = [
  { value: '26', label: 'ESTADOS' },
  { value: '24H', label: 'DESPACHO' },
]

export const ESTRUTURA_PARTS = [
  {
    img: '/bucha.webp',
    label: 'HIDRÁULICA',
  },
  {
    img: '/rolete.webp',
    label: 'MAT. RODANTE',
  },
  {
    img: '/motor-e-transmissao.webp',
    label: 'MOTOR',
  },
  {
    img: '/dente.webp',
    label: 'FPS / DENTES',
  },
]

export const ESTRUTURA_RESUME_STATS = [
  { value: '5.000+', label: 'PEÇAS EM ESTOQUE' },
  { value: '24H', label: 'DESPACHO' },
  { value: 'S/C', label: 'PARCELE SOB ANÁLISE' },
]

export const MACHINE_CARDS = [
  {
    title: 'Pá Carregadeira',
    image: '/machines/pa-carregadeira.webp',
  },
  {
    title: 'Retroescavadeira',
    image: '/machines/retroescavadeira.webp',
  },
  {
    title: 'Motoniveladora',
    image: '/machines/motoniveladora.webp',
  },
  {
    title: 'Escavadeira',
    image: '/machines/escavadeira.webp',
  },
  {
    title: 'Trator de Esteira',
    image: '/machines/trator-esteira.webp',
  },
]

export const POPULAR_PARTS = [
  {
    title: 'Material Rodante',
    desc: 'Esteiras · Roletes · Rodas guia',
    img: '/rolete.webp',
  },
  {
    title: 'FPS',
    desc: 'Dentes · Unhas · Lâminas',
    img: '/dente.webp',
  },
  {
    title: 'Motor e Transmissão',
    desc: 'Componentes · Filtros',
    img: '/motor-e-transmissao.webp',
  },
  {
    title: 'Hidráulica',
    desc: 'Bombas · Cilindros · Mangueiras',
    img: '/bucha.webp',
  },
  {
    title: 'Pinos e Buchas',
    desc: 'Articulação geral',
    img: '/pino.webp',
  },
  {
    title: 'Filtros',
    desc: 'Manutenção preventiva',
    img: '/filtro.webp',
  },
]

export const FAQ_ITEMS = [
  {
    question: 'As peças são originais ou paralelas?',
    answer:
      'Trabalhamos com peças originais das marcas Volvo e Caterpillar, além de peças paralelas de alta qualidade. Em todos os casos, informamos a procedência antes da compra para que você decida com total transparência.',
  },
  {
    question: 'Vocês enviam para todo o Brasil?',
    answer:
      'Sim! Despachamos para todos os estados do Brasil via transportadora (terrestre ou aéreo) ou Correios (Sedex/PAC). Pedidos confirmados até as 14h são despachados no mesmo dia.',
  },
  {
    question: 'Quais as formas de pagamento?',
    answer:
      'Aceitamos Pix (com desconto), transferência bancária, cartão de crédito e boleto bancário. Para empresas, faturamento mediante análise de crédito.',
  },
  {
    question: 'Vocês emitem Nota Fiscal?',
    answer:
      'Sim, emitimos Nota Fiscal eletrônica (NF-e) em todos os pedidos. Somos uma empresa regularizada e todas as transações são documentadas.',
  },
  {
    question: 'E se a peça não servir na minha máquina?',
    answer:
      'Antes do envio, conferimos o número de série da sua máquina para garantir compatibilidade.',
  },
  {
    question: 'Como faço para solicitar um orçamento?',
    answer:
      'Basta clicar em qualquer botão de WhatsApp nesta página, informar o modelo da máquina e a peça que precisa. Nossa equipe responde em poucos minutos.',
  },
  {
    question: 'Vocês trabalham com peças usadas ou recondicionadas?',
    answer:
      'Não. Trabalhamos exclusivamente com peças novas — originais ou paralelas de alta qualidade. Isso garante durabilidade, desempenho e segurança.',
  },
]

export const MACHINE_BREAKPOINTS = [
  { breakpoint: 640, slidesToShow: 1 },
  { breakpoint: 1024, slidesToShow: 2 },
]

export const REVIEW_BREAKPOINTS = [
  { breakpoint: 640, slidesToShow: 1 },
  { breakpoint: 1024, slidesToShow: 2 },
]

export const REVIEWS = [
  {
    name: 'Carlos Mendes',
    time: 'Há 2 meses',
    text: 'Melhor loja de peças, ótimo preço e atendimento. A peça chegou antes do prazo. Recomendo demais!',
  },
  {
    name: 'Roberto Silva',
    time: 'Há 1 semana',
    text: 'Equipe muito atenciosa. Conseguiram a peça da minha escavadeira que eu não achava em lugar nenhum.',
  },
  {
    name: 'Transportadora JKL',
    time: 'Há 3 dias',
    text: 'Parceiros de longa data. Confiança total na qualidade das peças Caterpillar. Envio sempre rápido.',
  },
  {
    name: 'Eng. Marcos Lima',
    time: 'Há 5 meses',
    text: 'Preço justo e nota fiscal certinha. Recomendo para quem precisa de agilidade e seriedade.',
  },
  {
    name: 'Fazenda Santa Fé',
    time: 'Há 1 mês',
    text: 'Salvaram nossa safra com o envio rápido do motor de partida. Equipe nota 10!',
  },
]

export const ICONS = {
  Phone,
  MapPin,
  ChevronRight,
  Clock,
  Truck,
  Star,
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Cog,
  Zap,
  Menu,
  X,
  CheckCircle2,
}

import {
  Truck,
  Warehouse,
  CreditCard,
  QrCode,
  ShieldCheck,
  PackageCheck,
  Award,
  Zap,
  Star,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react'

export const CONFIG = {
  WA_LINK: 'https://wa.me/5585991911540',
  PHONE_DISPLAY: '(85) 99191-1540',
  HOURS: 'Seg a Sex 08h-18h',
  ADDRESS: 'Av. Guajajaras, Tirirical · São Luís - MA',
  COLORS: {
    bg: '#F5F3EF',
    bgAlt: '#EDEAE4',
    bgCard: '#FFFFFF',
    bgCardHover: '#F8F7F4',
    border: '#D1CCC4',
    borderLight: '#BAB5AC',
    textPrimary: '#0F1E32',
    textSecondary: '#1A2E4A',
    textMuted: '#3D4F65',
    textFaint: '#6B7B8D',
    textBody: '#2D3E52',
    accent: '#1A3460',
    accentDark: '#0F2040',
    yellow: '#FFCD11',
    yellowDark: '#D4A90A',
    yellowText: '#1A1A1A',
    green: '#15803D',
    greenDark: '#0B5D2B',
    highlightBg: '#FFCD11',
    highlightCardBg: '#FFFFFF',
    highlightCardText: '#0F1E32',
    highlightDescText: '#3D4F65',
    highlightStripe: '#1A3460',
    highlightIconBg: '#1A3460',
    highlightIconColor: '#FFFFFF',
    hazardDark: '#1A3460',
    machineCardBg: '#1A1A1A',
    machineCardBorder: '#333333',
    machineCardOverlay: '#0C1929',
    reviewText: '#E8ECF1',
    starColor: '#FFCD11',
    blueBg: '#0C1929',
    blueBgAlt: '#0F1E32',
    blueBorder: '#1E3A5F',
    blueText: '#FFFFFF',
    blueTextMuted: '#94A3B8',
    blueTextFaint: '#64748B',
    blueAccent: '#FFCD11',
    headerBg: '#FFFFFF',
    headerText: '#0F1E32',
    headerBorder: '#E2DFD9',
  },
  FONTS: {
    heading: "'Barlow Condensed', sans-serif",
    body: "'Barlow', sans-serif",
  },
}

export const NAV_ITEMS_ALT = [
  { label: 'MÁQUINAS', href: '#maquinas' },
  { label: 'PEÇAS', href: '#pecas' },
  { label: 'ESTRUTURA', href: '#estrutura' },
  { label: 'AVALIAÇÕES', href: '#avaliacoes' },
  { label: 'FAQ', href: '#faq' },
]

export const HIGHLIGHTS = [
  { icon: Truck, title: 'ENTREGA RÁPIDA', description: 'Para todo Brasil' },
  { icon: Warehouse, title: 'ESTOQUE PRÓPRIO', description: 'Pronta entrega' },
  { icon: CreditCard, title: 'PARCELE SOB ANÁLISE', description: 'No cartão' },
  { icon: QrCode, title: 'DESCONTO NO PIX', description: 'À vista' },
]

export const TRUST_INDICATORS = [
  { icon: Truck, text: 'Envio todo Brasil' },
  { icon: PackageCheck, text: '5.000+ peças em estoque' },
  { icon: Award, text: 'Nota Fiscal garantida' },
]

export const HERO_STATS_ALT = [
  {
    numValue: 5000,
    suffix: '+',
    label: 'PEÇAS EM ESTOQUE',
    icon: PackageCheck,
  },
  { numValue: 24, suffix: 'H', label: 'DESPACHO NO MESMO DIA', icon: Truck },
  {
    numValue: 4.9,
    suffix: '★',
    label: 'NOTA NO GOOGLE',
    icon: Star,
    isDecimal: true,
  },
]

export const MACHINES_ALT = [
  {
    title: 'Pá Carregadeira',
    image: '/machines/pa-carregadeira.webp',
  },
  {
    title: 'Retroescavadeira',
    image: '/machines/retroescavadeira.webp',
  },
  {
    title: 'Motoniveladora',
    image: '/machines/motoniveladora.webp',
  },
  {
    title: 'Escavadeira',
    image: '/machines/escavadeira.webp',
  },
  {
    title: 'Trator de Esteira',
    image: '/machines/trator-esteira.webp',
  },
]

export const CATEGORIES_ALT = [
  {
    title: 'Material Rodante',
    desc: 'Esteiras · Roletes · Rodas guia',
    img: 'https://images.unsplash.com/photo-1768861628347-e89c0c8b4a4b?auto=format&fit=crop&q=80&w=1080',
  },
  {
    title: 'FPS',
    desc: 'Dentes · Unhas · Lâminas',
    img: 'https://images.unsplash.com/photo-1624272842995-3aaa54ee7002?auto=format&fit=crop&q=80&w=1080',
  },
  {
    title: 'Motor e Transmissão',
    desc: 'Componentes · Filtros',
    img: 'https://images.unsplash.com/photo-1683456062141-6c9f10664d1f?auto=format&fit=crop&q=80&w=1080',
  },
  {
    title: 'Hidráulica',
    desc: 'Bombas · Cilindros · Mangueiras',
    img: 'https://images.unsplash.com/photo-1701448149957-b96dbd1926ff?auto=format&fit=crop&q=80&w=1080',
  },
  {
    title: 'Pinos e Buchas',
    desc: 'Articulação geral',
    img: 'https://images.unsplash.com/photo-1758873263428-f4b2edb45fe1?auto=format&fit=crop&q=80&w=1080',
  },
  {
    title: 'Filtros',
    desc: 'Manutenção preventiva',
    img: 'https://images.unsplash.com/photo-1609745881196-bc2af0676777?auto=format&fit=crop&q=80&w=1080',
  },
]

export const ESTRUTURA_CARDS_ALT = [
  {
    title: 'LOJA FÍSICA COM PRONTA ENTREGA',
    text: 'Retire sua peça direto no balcão, sem esperar frete. Atendimento presencial rápido e especializado.',
    code: 'EST-001',
  },
  {
    title: 'ATENDIMENTO TÉCNICO VIA WHATSAPP',
    text: 'Informe o modelo, código e série — nossa equipe identifica a peça exata e envia o orçamento em minutos.',
    code: 'TEC-002',
  },
  {
    title: 'ENVIO NO MESMO DIA PARA TODO BRASIL',
    text: 'Pedidos confirmados até 14h são despachados no mesmo dia. Sua máquina não pode esperar.',
    code: 'LOG-003',
  },
]

export const REVIEWS_ALT = [
  {
    name: 'Carlos Mendes',
    time: 'Há 2 meses',
    text: 'Melhor loja de peças, ótimo preço e atendimento. A peça chegou antes do prazo. Recomendo demais!',
  },
  {
    name: 'Roberto Silva',
    time: 'Há 1 semana',
    text: 'Equipe muito atenciosa. Conseguiram a peça da minha escavadeira que eu não achava em lugar nenhum.',
  },
  {
    name: 'Transportadora JKL',
    time: 'Há 3 dias',
    text: 'Parceiros de longa data. Confiança total na qualidade das peças Caterpillar. Envio sempre rápido.',
  },
  {
    name: 'Eng. Marcos Lima',
    time: 'Há 5 meses',
    text: 'Preço justo e nota fiscal certinha. Recomendo para quem precisa de agilidade e seriedade.',
  },
  {
    name: 'Fazenda Santa Fé',
    time: 'Há 1 mês',
    text: 'Salvaram nossa safra com o envio rápido do motor de partida. Equipe nota 10!',
  },
]

export const FAQ_ITEMS_ALT = [
  {
    question: 'As peças são originais ou paralelas?',
    answer:
      'Trabalhamos com peças originais das marcas Volvo e Caterpillar, além de peças paralelas de primeira linha.',
  },
  {
    question: 'Vocês enviam para todo o Brasil?',
    answer:
      'Sim! Despachamos para todos os estados do Brasil via transportadora ou Correios (Sedex/PAC). Pedidos confirmados até as 14h são despachados no mesmo dia.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer:
      'O prazo varia conforme a região. Em média, 2 a 7 dias úteis para capitais. Para regiões mais distantes, 5 a 12 dias úteis.',
  },
  {
    question: 'Quais as formas de pagamento?',
    answer:
      'Aceitamos Pix (com desconto), transferência bancária, boleto e cartão de crédito parcelado sob análise.',
  },
  {
    question: 'Vocês emitem Nota Fiscal?',
    answer:
      'Sim, emitimos Nota Fiscal eletrônica (NF-e) em todos os pedidos. Somos uma empresa regularizada.',
  },
  {
    question: 'E se a peça não servir na minha máquina?',
    answer:
      'Antes do envio, conferimos o número de série da sua máquina para garantir compatibilidade.',
  },
  {
    question: 'Como faço para solicitar um orçamento?',
    answer:
      'Basta clicar em qualquer botão de WhatsApp nesta página, informar o modelo da máquina e a peça que precisa.',
  },
  {
    question: 'Trabalham com peças usadas?',
    answer:
      'Não. Trabalhamos exclusivamente com peças novas — originais ou paralelas de alta qualidade.',
  },
]
