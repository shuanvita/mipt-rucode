<script setup lang="ts">
import { StageCard } from '~/shared/ui/stage-card'
import type { StageCardTypes } from '~/shared/ui/stage-card'

const stages: StageCardTypes[] = [
  { number: 1, title: '3 августа - 10 октября', description: 'Сбор заявок', variant: 'active' },
  { number: 2, title: '10-15 октября', description: 'Техническая экспертиза заявок' },
  {
    number: 3,
    title: '15-27 октября',
    description: 'Народное голосование в номинации "Генерация будущего"',
  },
  { number: 4, title: '15-27 октября', description: 'Оценка экспертных заявок' },
  { number: 5, title: '27-30 октября', description: 'Формирование шорт-листа' },
  {
    number: 6,
    title: 'Секрет',
    description: 'Торжественная церемония награждения Премии',
    variant: 'secret',
  },
]
</script>

<template>
  <section class="relative container space-y-5 lg:space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">Этапы проведения</UiHeading>
    <div class="grid gap-5 lg:gap-7 sm:grid-cols-2 lg:grid-cols-3">
      <StageCard v-for="stage in stages" :key="stage.number" v-bind="stage" />
    </div>
    <NuxtImg
      src="/images/award2026/firework.png"
      alt=""
      class="pointer-events-none w-[270px] lg:w-[320px] absolute right-0 bottom-20 lg:-right-20 lg:bottom-12 z-0"
    />
  </section>
</template>
