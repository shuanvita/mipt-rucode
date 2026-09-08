<script setup lang="ts">
type TextTag = 'p' | 'span' | 'div'
type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold'

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
  base: 'text-[13px] leading-[19px] sm:text-[14px] md:text-[18px] md:leading-[29px]',
  lg: 'text-lg',
  xl: 'text-xl',
}

const weightClasses: Record<TextWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
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
