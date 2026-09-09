<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import type { HeaderConfig } from '../model/TheHeader.types'
import { MobileMenu } from '~/widgets/header'

defineProps<{
  config: HeaderConfig
}>()

const [isMenuOpen, toggleMenu] = useToggle(false)
</script>

<template>
  <header class="container flex max-w-300 items-center justify-between px-10 pt-6">
    <NuxtLink class="max-w-25 lg:max-w-31" to="/">
      <NuxtImg width="167" height="110" src="logo.svg" alt="Rucode Festival logo" />
    </NuxtLink>

    <div class="hidden items-center gap-6 lg:flex">
      <nav class="flex items-center gap-5" aria-label="Основная навигация">
        <NuxtLink
          v-for="link in config.links"
          :key="link.href"
          class="first:text-yellow-primary hover:text-yellow-secondary text-[12px]/[1.2] font-bold tracking-wider uppercase transition-colors duration-200"
          :to="link.href"
          active-class="text-yellow-primary"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>
      <UiAction
        to="https://edu.mipt.ru/member/meroprijatija/rucode-premiya-2026"
        target="_blank"
        v-bind="config.cta"
        >{{ config.cta.label }}</UiAction
      >
    </div>

    <button
      type="button"
      class="focus-visible:outline-ring flex h-8 w-8 items-center justify-center lg:hidden"
      aria-label="Открыть меню"
      @click="toggleMenu(true)"
    >
      <UiSvg name="burger" class="h-15 w-15" />
    </button>
    <MobileMenu :model-value="isMenuOpen" :config="config" @update:model-value="toggleMenu" />
  </header>
</template>
