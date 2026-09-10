<script setup lang="ts">
const categories = [
  { title: 'Авторы образовательного контента' },
  { title: 'Блогеры и популяризаторы технологий' },
  { title: 'Эксперты и практикующие специалисты' },
  { title: 'Преподаватели' },
  { title: 'Независимые авторы и создатели ИИ-контента' },
]
</script>

<template>
  <section
    class="relative container flex flex-col items-center space-y-5 overflow-hidden lg:items-start lg:space-y-8 lg:overflow-visible"
  >
    <UiHeading class="max-w-[280px] text-center lg:max-w-[340px] lg:text-left" tag="h2"
      >Кто может участвовать?</UiHeading
    >
    <div
      class="rounded-2xl bg-[linear-gradient(180deg,rgba(27,27,27,0.18)_0%,rgba(153,153,153,0.16)_100%)] lg:pt-6 lg:pr-18 lg:pb-13 lg:pl-15"
    >
      <ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <li
          v-for="category in categories"
          :key="category.title"
          class="bg-blend-[normal,normal,screen] flex min-h-[155px] items-center justify-center rounded-[20px] bg-(image:--participant-card-bg) p-3 text-center backdrop-blur-sm lg:min-h-[230px]"
        >
          <p class="text-[16px] font-bold tracking-[0.8px] text-white">{{ category.title }}</p>
        </li>
      </ul>
    </div>
    <div role="presentation" aria-hidden="true" class="pointer-events-none select-none">
      <NuxtImg
        src="/images/award2026/cloud.png"
        alt=""
        loading="lazy"
        class="absolute hidden lg:block top-70 left-55 lg:-top-[330px] lg:-left-[200px] z-0 w-[590px]"
      />
      <NuxtImg
        src="/images/award2026/cloud.png"
        alt=""
        loading="lazy"
        class="absolute hidden lg:block top-0 right-0 lg:top-[260px] lg:-right-[210px] z-0 w-[590px] rotate-70"
      />
    </div>
  </section>
</template>

<style scoped></style>
