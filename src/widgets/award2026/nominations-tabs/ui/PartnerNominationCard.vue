<script setup lang="ts">
import type { PartnerNominationCard } from '~/widgets/award2026/nominations-tabs'

defineProps<PartnerNominationCard>()
</script>

<template>
  <div class="rounded-[15px] border border-white p-6 lg:rounded-[50px] lg:p-15">
    <UiHeading class="mb-8 uppercase" tag="h2">{{ title }}</UiHeading>

    <div class="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_1fr_auto]">
      <div class="space-y-4 text-white/80">
        <UiText v-for="(text, index) in description" :key="`description-${index}`">
          {{ text }}
        </UiText>
      </div>

      <div>
        <UiText class="mb-3 font-bold text-white">Кто может участвовать:</UiText>
        <ul class="list-disc space-y-2 pl-5 text-white/80">
          <li v-for="(item, index) in eligibility" :key="`eligibility-${index}`">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-3">
        <NuxtImg :src="partner.logo" :alt="partner.name" class="h-20 w-20 object-contain" />
        <UiText weight="bold" class="text-[18px] uppercase">
          {{ partner.role }}
        </UiText>
      </div>
    </div>
  </div>
</template>
