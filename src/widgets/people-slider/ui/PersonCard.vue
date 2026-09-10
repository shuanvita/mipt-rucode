<script setup lang="ts">
import type { Person } from '~/widgets/people-slider'

defineProps<Person>()
</script>

<template>
  <article class="relative flex flex-col items-center overflow-hidden">
    <div class="relative mb-8 h-[180px] w-[180px]">
      <UiSvg class="absolute top-2 -right-6 h-[113px] w-24" name="slider-dotted" />
      <UiSvg class="absolute top-0 -left-2 h-[50px] w-[50px]" name="slider-circle" />
      <NuxtPicture
        :img-attrs="{
          class:
            'w-full h-full rounded-full object-cover shadow-[0_3.313px_3.313px_0_rgba(0,0,0,0.25)]',
        }"
        class="relative z-10"
        :src="photo"
        :alt="name"
      />
    </div>
    <UiHeading class="text-purple-primary mb-5" tag="h3" weight="bold">{{ name }}</UiHeading>
    <UiText class="px-7 text-center" size="sm">{{ text }}</UiText>
  </article>
</template>
