<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'custom'

withDefaults(
  defineProps<{
    variant?: ButtonVariant
    type?: 'button' | 'submit' | 'reset'
    icon?: string
    preIcon?: string
    postIcon?: string
    iconSize?: string
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    iconSize: 'w-4 h-4',
    disabled: false,
  },
)

const baseClasses =
  'group focus-visible:outline-ring uppercase cursor-pointer inline-flex items-center justify-center gap-1.5 rounded-[45px] tracking-widest transition-colors duration-200 focus-visible:outline-1 focus-visible:outline-offset-1 disabled:pointer-events-none disabled:opacity-30'

const variants: Record<ButtonVariant, string> = {
  primary: 'px-7 py-3 bg-btn-primary hover:bg-btn-primary-hover text-black font-extrabold',
  secondary:
    'px-7 py-3 ring-1 ring-btn-primary hover:bg-btn-primary hover:text-dark-primary text-btn-primary font-extrabold',
  custom: '',
}
</script>

<template>
  <button :class="[baseClasses, variants[variant]]" :type="type" :disabled="disabled">
    <ui-svg v-if="icon" :name="icon" :class="iconSize" />
    <template v-else>
      <ui-svg v-if="preIcon" :name="preIcon" :class="iconSize" />
      <slot />
      <ui-svg v-if="postIcon" :name="postIcon" :class="iconSize" />
    </template>
  </button>
</template>
