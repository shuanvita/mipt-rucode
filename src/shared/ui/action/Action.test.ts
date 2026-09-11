import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Action from './Action.vue'

const NuxtLink = {
  name: 'NuxtLink',
  props: ['to', 'external', 'target', 'rel'],
  template: '<a :href="to" :target="target" :rel="rel"><slot /></a>',
}

const UiSvg = {
  name: 'UiSvg',
  props: ['name'],
  template: '<svg :data-name="name" />',
}

const global = {
  stubs: { NuxtLink, UiSvg },
}

async function mount(props: Record<string, unknown> = {}, slot = 'Click me') {
  return mountSuspended(Action, {
    props,
    slots: { default: () => slot },
    global,
  })
}

describe('Action.vue', () => {
  describe('полиморфизм button / link', () => {
    it('без `to` рендерится как <button> с type по умолчанию', async () => {
      const wrapper = await mount()
      const button = wrapper.find('button')
      expect(button.exists()).toBe(true)
      expect(button.attributes('type')).toBe('button')
      expect(wrapper.find('a').exists()).toBe(false)
    })

    it('пробрасывает type в <button>', async () => {
      const wrapper = await mount({ type: 'submit' })
      expect(wrapper.find('button').attributes('type')).toBe('submit')
    })

    it('с `to` рендерится как ссылка и пробрасывает href', async () => {
      const wrapper = await mount({ to: '/about' })
      const link = wrapper.find('a')
      expect(link.exists()).toBe(true)
      expect(link.attributes('href')).toBe('/about')
      expect(wrapper.find('button').exists()).toBe(false)
    })

    it('рендерит слот', async () => {
      const wrapper = await mount({}, 'Hello')
      expect(wrapper.text()).toContain('Hello')
    })
  })

  describe('варианты стилей', () => {
    it('primary по умолчанию', async () => {
      const wrapper = await mount()
      expect(wrapper.classes()).toContain('bg-btn-primary')
    })

    it('secondary добавляет ring-класс', async () => {
      const wrapper = await mount({ variant: 'secondary' })
      expect(wrapper.classes()).toContain('ring-btn-primary')
    })

    it('custom не добавляет вариантных классов, но сохраняет baseClasses', async () => {
      const wrapper = await mount({ variant: 'custom' })
      expect(wrapper.classes()).not.toContain('bg-btn-primary')
      expect(wrapper.classes()).toContain('inline-flex')
    })
  })

  describe('disabled', () => {
    it('disabled рендерит <button disabled> даже при заданном `to` (нет навигации)', async () => {
      const wrapper = await mount({ to: '/about', disabled: true })
      const button = wrapper.find('button')
      expect(button.exists()).toBe(true)
      expect(button.attributes('disabled')).toBeDefined()
      expect(wrapper.find('a').exists()).toBe(false)
    })

    it('disabled добавляет классы блокировки', async () => {
      const wrapper = await mount({ disabled: true })
      expect(wrapper.classes()).toContain('pointer-events-none')
      expect(wrapper.classes()).toContain('opacity-30')
    })

    it('обычная кнопка не disabled', async () => {
      const wrapper = await mount()
      expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
    })
  })

  describe('автодетект external / target / rel', () => {
    it('внешний URL по http(s) → target="_blank" + rel="noopener noreferrer"', async () => {
      const wrapper = await mount({ to: 'https://github.com' })
      const link = wrapper.find('a')
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('noopener noreferrer')
    })

    it('mailto: считается внешней ссылкой', async () => {
      const wrapper = await mount({ to: 'mailto:test@example.com' })
      expect(wrapper.find('a').attributes('target')).toBe('_blank')
    })

    it('внутренний путь → target="_self", без rel', async () => {
      const wrapper = await mount({ to: '/about' })
      const link = wrapper.find('a')
      expect(link.attributes('target')).toBe('_self')
      expect(link.attributes('rel')).toBeUndefined()
    })

    it('явный target уважается для внешней ссылки (без авто _blank)', async () => {
      const wrapper = await mount({ to: 'https://github.com', target: '_self' })
      const link = wrapper.find('a')
      expect(link.attributes('target')).toBe('_self')
      // _self → rel не проставляется
      expect(link.attributes('rel')).toBeUndefined()
    })

    it('external: false для абсолютного URL своего домена (SPA-навигация, без _blank)', async () => {
      const wrapper = await mount({ to: 'https://mysite.com/about', external: false })
      const link = wrapper.find('a')
      expect(link.attributes('target')).toBe('_self')
      expect(link.attributes('rel')).toBeUndefined()
    })

    it('external: true для внутреннего пути → target="_blank" + rel', async () => {
      const wrapper = await mount({ to: '/docs/file.pdf', external: true })
      const link = wrapper.find('a')
      expect(link.attributes('target')).toBe('_blank')
      expect(link.attributes('rel')).toBe('noopener noreferrer')
    })

    it('явный rel имеет приоритет над автогенерацией', async () => {
      const wrapper = await mount({ to: 'https://github.com', rel: 'nofollow' })
      expect(wrapper.find('a').attributes('rel')).toBe('nofollow')
    })
  })

  describe('иконки', () => {
    it('icon рендерит одиночную иконку и игнорирует слот/pre/post', async () => {
      const wrapper = await mount(
        { icon: 'search', preIcon: 'left', postIcon: 'right', ariaLabel: 'Поиск' },
        'text',
      )
      const svgs = wrapper.findAll('svg')
      expect(svgs).toHaveLength(1)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      expect(svgs[0].attributes('data-name')).toBe('search')
      expect(wrapper.text()).not.toContain('text')
    })

    it('preIcon и postIcon рендерятся вокруг слота', async () => {
      const wrapper = await mount({ preIcon: 'left', postIcon: 'right' }, 'label')
      const names = wrapper.findAll('svg').map((s) => s.attributes('data-name'))
      expect(names).toEqual(['left', 'right'])
      expect(wrapper.text()).toContain('label')
    })

    it('без иконок SVG не рендерятся', async () => {
      const wrapper = await mount()
      expect(wrapper.findAll('svg')).toHaveLength(0)
    })
  })

  describe('доступность', () => {
    it('ariaLabel пробрасывается', async () => {
      const wrapper = await mount({ ariaLabel: 'Закрыть' })
      expect(wrapper.attributes('aria-label')).toBe('Закрыть')
    })

    it('без ariaLabel атрибут отсутствует', async () => {
      const wrapper = await mount()
      expect(wrapper.attributes('aria-label')).toBeUndefined()
    })
  })
})
