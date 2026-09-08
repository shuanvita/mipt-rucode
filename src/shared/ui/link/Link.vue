<script setup lang="ts">
type LinkVariant = 'primary' | 'secondary' | 'custom'

interface LinkProps {
  to: string
  variant?: LinkVariant
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

const props = withDefaults(defineProps<LinkProps>(), {
  variant: 'primary',
  target: '_self',
  iconSize: 'w-4 h-4',
  disabled: false,
})
const baseClasses =
  'group focus-visible:outline-ring uppercase cursor-pointer inline-flex items-center justify-center gap-1.5 rounded-[45px] tracking-widest transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-offset-1'

const variants: Record<LinkVariant, string> = {
  primary: 'px-7 py-3 bg-btn-primary hover:bg-btn-primary-hover text-black font-extrabold',
  secondary:
    'px-7 py-3 ring-1 ring-btn-primary hover:bg-btn-primary hover:text-dark-primary text-btn-primary font-extrabold',
  custom: '',
}

const isExternal = computed(() => {
  if (typeof props.external === 'boolean') {
    return props.external
  }
  return typeof props.to === 'string' && /^(https?:\/\/|mailto:|tel:)/.test(props.to)
})

const rel = computed(() => {
  if (props.rel !== undefined) {
    return props.rel
  }
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
      console.warn('[UiLink]: `ariaLabel` is recommended for icon-only links.')
    }
  })
}
</script>

<template>
  <NuxtLink
    :to="to"
    :external="isExternal"
    :target="target"
    :rel="rel"
    :aria-label="ariaLabel"
    :aria-disabled="disabled"
    :tabindex="disabled ? -1 : undefined"
    :class="[baseClasses, variants[variant], disabled && 'pointer-events-none opacity-30']"
    @click="onClick"
  >
    <ui-svg v-if="icon" :name="icon" :class="iconSize" />
    <template v-else>
      <ui-svg v-if="preIcon" :name="preIcon" :class="iconSize" />
      <slot />
      <ui-svg v-if="postIcon" :name="postIcon" :class="iconSize" />
    </template>
  </NuxtLink>
</template>
