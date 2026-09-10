<script setup lang="ts">
import { TheHeader, headerConfigs } from '~/widgets/header'
import type { HeaderConfigKey } from '~/widgets/header'
import { TheFooter } from '~/widgets/footer'

const route = useRoute()
const headerKey = (route.meta.headerConfig as HeaderConfigKey) ?? 'home'
const config = headerConfigs[headerKey] ?? headerConfigs.home
</script>

<template>
  <div class="flex flex-col space-y-8 overflow-hidden">
    <TheHeader :config="config" />
    <main>
      <slot />
    </main>
    <TheFooter :config="config" />
  </div>
</template>
