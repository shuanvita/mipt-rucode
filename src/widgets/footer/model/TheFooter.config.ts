import type { FooterConfig, FooterConfigKey } from '../model/TheFooter.types'

export const footerConfigs: Record<FooterConfigKey, FooterConfig> = {
  home: {
    links: [
      { href: '#tracks', title: 'Треки фестиваля' },
      { href: '#calendar', title: 'Календарь' },
      { href: '#consortium', title: 'Консорциум' },
      { href: '#video', title: 'Видео' },
      { href: '#participate', title: 'Хочу участвовать' },
    ],
  },
  award: {
    links: [
      { href: '#premium', title: 'О премии' },
      { href: '#nominations', title: 'Направления и номинации' },
      { href: '#stages', title: 'Этапы' },
      { href: '#committee', title: 'Орг. комитет' },
      { href: '#partners', title: 'Партнёры' },
    ],
  },
}
