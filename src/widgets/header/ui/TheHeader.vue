<script setup lang="ts">
import type { HeaderConfig } from '../model/TheHeader.types'
defineProps<{
  config: HeaderConfig
}>()

</script>

<template>
  <header class="container flex max-w-300 items-center justify-between px-10 pt-8">
    <NuxtLink class="min-w-25 md:w-[167px]" to="/">
      <NuxtImg width="167" height="110" class="w-full" src="logo.svg" />
    </NuxtLink>

    <div class="flex items-center gap-6">
      <nav class="flex gap-6" aria-label="Основная навигация">
        <NuxtLink
          class="first:text-yellow-primary hover:text-yellow-secondary text-[11px] leading-[1.2] font-bold tracking-widest uppercase"
          v-for="link in config.links"
          :key="link.href"
          :to="link.href"
          active-class="text-yellow-primary"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>
      <UiButton class="config.cta.class" :variant="config.cta.variant ?? 'primary'" :to="config.cta.to">
        {{ config.cta.label }}
        <UiSvg v-if="config.cta.hasDropdown" name="chevron-down" class="h-4 w-4" />
      </UiButton>
    </div>
  </header>
</template>
