<script setup lang="ts">
import { TheHeader, headerConfigs } from '~/widgets/header'
import type { HeaderConfigKey } from '~/widgets/header'

const route = useRoute()
const headerKey = (route.meta.headerConfig as HeaderConfigKey) ?? 'home'
const config = headerConfigs[headerKey] ?? headerConfigs.home
</script>

<template>
  <div class="flex flex-col space-y-8">
    <TheHeader :config="config" />
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
