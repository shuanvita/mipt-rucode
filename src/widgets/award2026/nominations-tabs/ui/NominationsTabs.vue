<script setup lang="ts">
import SimpleNominationCard from '~/widgets/award2026/nominations-tabs/ui/SimpleNominationCard.vue'
import PartnerNominationCard from '~/widgets/award2026/nominations-tabs/ui/PartnerNominationCard.vue'
import type {
  SimpleNominationCard as SimpleNominationCardProps,
  PartnerNominationCard as PartnerNominationCardProps,
} from '~/widgets/award2026/nominations-tabs'

type Nomination = SimpleNominationCardProps | PartnerNominationCardProps

interface Category {
  label: string
  disabled?: boolean
  description: string
  nominations: Nomination[]
}

const categories: Category[] = [
  {
    label: 'Проекты',
    description:
      'Подаются команды, сообщества, лаборатории, объединения и инициативы не имеющие юридического лица',
    nominations: [
      {
        type: 'simple',
        title: 'Братство ИИ',
        description: [
          'Номинацией отмечаются сообщества, инициативные команды и иные объединения физических лиц, действующие на общественных началах и внесшие значимый вклад в развитие сферы искусственного интеллекта',
        ],
      },
      {
        type: 'simple',
        title: 'Генерация будущего',
        description: [
          'Номинация присуждается авторам, создавшим увлекательный просветительский контент с помощью искусственного интеллекта',
        ],
      },
    ],
  },
  {
    label: 'Персоны',
    description: 'Подаются только физические лица. Индивидуальное участие',
    nominations: [
      {
        type: 'simple',
        title: 'ИИ-Наставник',
        description: [
          'Номинацией отмечаются преподаватели, наставники и педагоги, вносящие значительный вклад в развитие ИИ-образования, обучение технологиям искусственного интеллекта и внедрение ИИ-решений в образовательный процесс',
        ],
      },
      {
        type: 'simple',
        title: 'ИИ-Таланты',
        description: [
          'Номинация для студентов, реализующих собственные проекты и исследования в области искусственного интеллекта. Возможно только индивидуальное участие',
        ],
      },
      {
        type: 'simple',
        title: 'Проект будущего',
        description: [
          'Номинация для школьников 5–11 классов, создающих проекты и инициативы в сфере искусственного интеллекта',
        ],
      },
    ],
  },
  {
    label: 'Организации',
    description:
      'Подаются юридические лица: компании, стартапы, образовательные организации, фонды и бизнес-проекты',
    nominations: [
      {
        type: 'simple',
        title: 'ИИ-Альма-Матер',
        description: [
          'Номинация для организаций, развивающих образование и подготовку кадров в сфере искусственного интеллекта',
        ],
      },
      {
        type: 'simple',
        title: 'Технология будущего',
        description: [
          'Номинация для компаний, стартапов и организаций, создающих собственные решения в области искусственного интеллекта - от пользовательских продуктов и сервисов до технологических платформ и ИИ-разработок',
        ],
      },
      {
        type: 'simple',
        title: 'ИИ-Пространство',
        description: [
          'Номинация для образовательных организаций, которые активно внедряют технологии искусственного интеллекта в учебные, административные и внутренние процессы.',
          'Номинация отмечает школы, колледжи, университеты и образовательные проекты, использующие ИИ для повышения качества обучения, автоматизации процессов и создания современной цифровой среды',
        ],
      },
    ],
  },
  {
    label: 'От МТС',
    description: 'Специальная номинация от Генерального партнёра',
    nominations: [
      {
        type: 'partner',
        title: 'Популяризатор ИИ',
        description: [
          'Номинация присуждается за вклад в популяризацию искусственного интеллекта через авторский просветительский контент, основанный на собственной профессиональной практике и опыте использования ИИ-технологий',
        ],
        eligibility: [
          'авторы образовательного контента',
          'блогеры и популяризаторы технологий',
          'эксперты и практикующие специалисты',
          'преподаватели',
          'независимые авторы и создатели ИИ-контента',
        ],
        partner: {
          name: 'МТС',
          logo: '/images/award2026/mts.png',
          role: 'Генеральный партнёр',
        },
      },
    ],
  },
]
</script>

<template>
  <section class="relative container flex flex-col items-center space-y-8 lg:space-y-15">
    <UiHeading class="text-purple-primary text-center" tag="h2">Направления и номинации</UiHeading>
    <UiTabs :items="categories">
      <template #default="{ index }">
        <div class="space-y-14">
          <UiText class="mx-auto max-w-[558px] text-center">
            {{ categories[index]?.description }}
          </UiText>

          <div class="grid gap-6 sm:grid-cols-2">
            <template v-for="nomination in categories[index]?.nominations" :key="nomination.title">
              <SimpleNominationCard v-if="nomination.type === 'simple'" v-bind="nomination" />
              <PartnerNominationCard
                v-else-if="nomination.type === 'partner'"
                v-bind="nomination"
                class="sm:col-span-2"
              />
            </template>
          </div>
        </div>
      </template>
    </UiTabs>
    <UiAction
      class="h-[52px]"
      target="_blank"
      to="https://edu.mipt.ru/member/meroprijatija/rucode-premiya-2026/"
      >Подать заявку</UiAction
    >
    <NuxtPicture
      src="/images/award2026/geometry-1.png"
      alt=""
      loading="lazy"
      class="absolute -z-9 lg:z-0 w-[592px] blur-[2px] top-15 -left-45 lg:-top-[300px] lg:-left-[280px]"
    />
    <NuxtPicture
      src="/images/award2026/geometry-2.png"
      alt=""
      loading="lazy"
      class="absolute hidden -z-999 w-[592px] blur-[2px] lg:top-[400px] lg:-right-[420px] lg:block"
    />
  </section>
</template>
