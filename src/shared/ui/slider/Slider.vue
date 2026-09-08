<script setup lang="ts" generic="T = unknown">
const props = withDefaults(
  defineProps<{
    items: T[]
    options?: Record<string, unknown>
    navigation?: boolean
    pagination?: boolean
    autoplay?: boolean | number
  }>(),
  {
    options: () => ({}),
    navigation: false,
    pagination: false,
    autoplay: false,
  },
)

const containerRef = ref(null)

const autoplayConfig = computed(() => {
  if (!props.autoplay) return undefined
  return typeof props.autoplay === 'number'
    ? { delay: props.autoplay, disableOnInteraction: false }
    : { delay: 3000, disableOnInteraction: false }
})

const swiperParams = computed(() => ({
  navigation: props.navigation,
  pagination: props.pagination ? { clickable: true } : undefined,
  autoplay: autoplayConfig.value,
  ...props.options,
}))

// useSwiper даёт доступ к инстансу для ручного управления (кнопки, индикаторы и т.п.)
const swiper = useSwiper(containerRef, swiperParams.value)

defineExpose({ swiper })
</script>

<template>
  <swiper-container ref="containerRef" :init="false" class="w-full">
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot :item="item" :index="index" />
    </swiper-slide>
  </swiper-container>
</template>