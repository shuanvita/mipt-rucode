<script setup lang="ts">
import { TheHeader, headerConfigs } from '~/widgets/header'

const route = useRoute()
const headerKey = (route.meta.headerConfig as string) ?? 'home'
const config = headerConfigs[headerKey] ?? headerConfigs.home
</script>

<template>
  <div>
    <TheHeader :config="config" />
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
