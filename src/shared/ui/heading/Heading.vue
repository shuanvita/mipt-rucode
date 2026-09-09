<script setup lang="ts">
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

defineProps<{
  tag: HeadingTag
  as?: HeadingTag
}>()

const classes: Record<HeadingTag, string> = {
  h1: 'text-[20px] sm:text-[24px] md:text-[38px] lg:text-[46px] leading-[1.2]',
  h2: 'text-[20px] sm:text-[28px] md:text-[36px]',
  h3: 'text-[20px] sm:text-[24px] md:text-[32px]',
  h4: 'text-[15px] sm:text-[18px] md:text-[24px]',
  h5: 'text-lg',
  h6: 'text-base',
}
</script>

<template>
  <component
    :is="tag"
    :class="['leading-[1.1] font-bold tracking-wider uppercase', classes[as ?? tag]]"
  >
    <slot />
  </component>
</template>
