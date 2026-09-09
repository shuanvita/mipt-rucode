export interface NavLink {
  href: string
  title: string
}

export interface FooterConfig {
  links: NavLink[]
}

export type FooterConfigKey = 'home' | 'award'
