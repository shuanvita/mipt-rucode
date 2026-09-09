<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'custom'

interface Props {
  to?: string
  variant?: Variant
  type?: 'button' | 'submit' | 'reset'
  target?: '_self' | '_blank' | '_parent' | '_top'
  external?: boolean
  rel?: string
  ariaLabel?: string
  icon?: string
  preIcon?: string
  postIcon?: string
  iconSize?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  target: '_self',
  iconSize: 'w-4 h-4',
  disabled: false,
})

const isLink = computed(() => !!props.to)
const tag = computed(() => (isLink.value ? resolveComponent('NuxtLink') : 'button'))

const baseClasses =
  'group focus-visible:outline-ring cursor-pointer inline-flex items-center justify-center gap-1.5 rounded-[45px] tracking-widest transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-offset-1 disabled:pointer-events-none disabled:opacity-30'

const variants: Record<Variant, string> = {
  primary:
    'px-6 py-3 bg-btn-primary hover:bg-btn-primary-hover text-black font-bold text-[12px] uppercase ',
  secondary:
    'px-6 py-3 ring-1 ring-btn-primary hover:bg-btn-primary hover:text-dark-primary text-btn-primary font-extrabold uppercase ',
  custom: '',
}

const isExternal = computed(() => {
  if (typeof props.external === 'boolean') return props.external
  return typeof props.to === 'string' && /^(https?:\/\/|mailto:|tel:)/.test(props.to)
})

const rel = computed(() => {
  if (props.rel !== undefined) return props.rel
  return isExternal.value && props.target === '_blank' ? 'noopener noreferrer' : undefined
})

function onClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault()
    event.stopPropagation()
  }
}

if (import.meta.env.DEV) {
  watchEffect(() => {
    if (props.icon && !props.ariaLabel) {
      console.warn('[UiButton]: `ariaLabel` is recommended for icon-only buttons/links.')
    }
  })
}
</script>

<template>
  <component
    :is="tag"
    v-bind="
      isLink
        ? {
            to,
            external: isExternal,
            target,
            rel,
            ariaDisabled: disabled,
            tabindex: disabled ? -1 : undefined,
          }
        : { type, disabled }
    "
    :aria-label="ariaLabel"
    :class="[baseClasses, variants[variant], disabled && 'pointer-events-none opacity-30']"
    @click="onClick"
  >
    <UiSvg v-if="icon" :name="icon" :class="iconSize" />
    <template v-else>
      <UiSvg v-if="preIcon" :name="preIcon" :class="iconSize" />
      <slot />
      <UiSvg v-if="postIcon" :name="postIcon" :class="iconSize" />
    </template>
  </component>
</template>
