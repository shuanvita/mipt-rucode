<script setup lang="ts">
const cards = [
  {
    title:
      'Информационная поддержка и продвижение в СМИ и на ресурсах фестиваль <span class="text-yellow-primary">RuCode</span>',
  },
  { title: 'Взаимодействие с МФТИ и вузами консорциума Фестиваля' },
  { title: 'звание, диплом и Знак Премии для лауреатов' },
  {
    title:
      'Участие в мероприятиях Премии и Фестиваля <span class="text-yellow-primary">RuCode</span>',
  },
  { title: 'Возможность размещения уникального логотипа на своих ресурсах' },
  { title: 'Индивидуальный план проекта' },
]
</script>

<template>
  <section class="container flex flex-col space-y-8 lg:space-y-11">
    <UiHeading class="max-w-[250px] lg:max-w-[340px]" tag="h2">Зачем участвовать?</UiHeading>
    <ul class="grid gap-6 md:grid-cols-2 lg:gap-10 xl:grid-cols-2">
      <li
        v-for="card in cards"
        :key="card.title"
        class="bg-blend-[normal,normal,screen] flex min-h-[201px] items-center justify-center rounded-[20px] bg-(image:--participant-card-bg) p-7 text-center backdrop-blur-sm"
      >
        <p
          class="text-[16px] font-bold tracking-[1.8px] text-white uppercase lg:text-[24px]"
          v-html="card.title"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
