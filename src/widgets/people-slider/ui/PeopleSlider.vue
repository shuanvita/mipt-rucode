<script setup lang="ts">
import PersonCard from '~/widgets/people-slider/ui/PersonCard.vue'
import type { Person } from '~/widgets/people-slider'

const members: Person[] = [
  {
    name: 'Дмитрий Ливанов',
    text: 'Ректор МФТИ. Председатель Оргкомитета',
    photo: '/images/livanov.jpg',
  },
  {
    name: 'Алексей Малеев',
    text: 'Директор Высшей школы программной инженерии МФТИ',
    photo: '/images/maleev.jpg',
  },
  {
    name: 'Андрей Созыкин',
    text: 'Специалист по учебно-методической работе, Высшая школа программной инженерии МФТИ',
    photo: '/images/sozykin.jpg',
  },
  {
    name: 'Екатерина Титова',
    text: 'Заместитель директора, Центр развития ИТ-образования',
    photo: '/images/titova.jpg',
  },
  {
    name: 'Игорь Красиков',
    text: 'Начальник, Управление информационной политики МФТИ',
    photo: '/images/krasikov.jpeg',
  },
  {
    name: 'Егор Быковский',
    text: 'Директор, Центр научной коммуникации МФТИ',
    photo: '/images/bykovskiy.png',
  },
]

const sliderOptions = {
  spaceBetween: 29,
  grabCursor: true,
  centeredSlides: true,
  navigation: {
    enabled: true,
    prevEl: '.swiper-navigation-prev-org-committee',
    nextEl: '.swiper-navigation-next-org-committee',
  },
  breakpoints: {
    640: {
      slidesPerView: 'auto',
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
}
</script>

<template>
  <section class="relative container flex flex-col items-center space-y-5 lg:space-y-10">
    <UiHeading class="text-purple-primary text-center" tag="h2">Организационный комитет</UiHeading>
    <UiText class="max-w-[584px] text-center"
      >Определяет номинантов Премии по итогам отборочного тура. Оказывает содействие в привлечении
      партнеров и спонсоров. Утверждает состава Экспертного совета. Оказывает содействие в
      организации Церемонии награждения.</UiText
    >
    <div class="relative mx-auto w-full max-w-[1018px]">
      <UiSlider :items="members" :options="sliderOptions" class="pt-4">
        <template #default="{ item }">
          <PersonCard :photo="item.photo" :name="item.name" :text="item.text" />
        </template>
      </UiSlider>
      <button
        type="button"
        aria-label="Предыдущий слайд"
        class="swiper-navigation-prev-org-committee text-purple-primary hover:text-purple-primary/80 absolute top-1/2 left-0 z-10 grid size-[50px] -translate-y-1/2 place-items-center transition-colors not-disabled:cursor-pointer disabled:text-[#C9ACCF] min-[1200px]:-left-15"
      >
        <UiSvg name="arrow-left" />
      </button>

      <button
        type="button"
        aria-label="Следующий слайд"
        class="swiper-navigation-next-org-committee text-purple-primary hover:text-purple-primary/80 absolute top-1/2 right-0 z-10 grid size-[50px] -translate-y-1/2 place-items-center transition-colors not-disabled:cursor-pointer disabled:text-[#C9ACCF] min-[1200px]:-right-15"
      >
        <UiSvg name="arrow-right" />
      </button>
    </div>
    <div
      class="pointer-events-none absolute top-0 left-0 z-0 h-[453px] w-[515px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#5E4877] blur-[217.35px]"
    />
  </section>
</template>

<style scoped></style>
