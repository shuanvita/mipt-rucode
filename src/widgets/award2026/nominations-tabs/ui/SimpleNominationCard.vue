<script setup lang="ts">
import type { SimpleNominationCard } from '~/widgets/award2026/nominations-tabs'

defineProps<SimpleNominationCard>()
</script>

<template>
  <div class="flex lg:min-h-[294px]  flex-col rounded-[15px] lg:rounded-[50px] border border-white p-6 lg:p-15">
    <UiHeading class="mb-3 uppercase" tag="h2">{{ title }}</UiHeading>
    <div class="space-y-4 text-white/80">
      <UiText v-for="(text, index) in description" :key="`text-${index}`">
        {{ text }}
      </UiText>
    </div>
  </div>
</template>
