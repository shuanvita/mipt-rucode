<script setup lang="ts">
type TextTag = 'p' | 'span' | 'div'
type TextSize = 'xs' | 'sm' | 'base' | 'lg'
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'

withDefaults(
  defineProps<{
    as?: TextTag
    size?: TextSize
    weight?: TextWeight
    truncate?: boolean
  }>(),
  {
    as: 'p',
    size: 'base',
    weight: 'normal',
    truncate: false,
  },
)

const sizeClasses: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.8px]',
  lg: 'text-[16px]',
}

const weightClasses: Record<TextWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  black: 'font-black',
}
</script>

<template>
  <component
    :is="as"
    :class="[sizeClasses[size], weightClasses[weight], { truncate, 'min-w-0': truncate }]"
  >
    <slot />
  </component>
</template>
