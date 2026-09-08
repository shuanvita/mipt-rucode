<script setup lang="ts">
const contentId = useId()

withDefaults(
  defineProps<{
    title: string
    icon?: string
    iconSize?: string
    disabled?: boolean
  }>(),
  {
    icon: 'plus',
    iconSize: 'w-9 h-9',
    disabled: false,
  },
)

const isOpen = defineModel<boolean>({ default: false })

function onToggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="border-purple-light overflow-hidden rounded-2xl border-2 md:rounded-4xl">
    <button
      :aria-controls="contentId"
      type="button"
      class="focus-visible:outline-ring hover:text-purple-light flex w-full cursor-pointer items-center justify-between gap-4 px-7 py-6 text-[20px] font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 disabled:pointer-events-none disabled:opacity-40"
      :aria-expanded="isOpen"
      :disabled="disabled"
      @click="onToggle"
    >
      <span>{{ title }}</span>

      <slot name="icon" :is-open="isOpen">
        <UiSvg
          :name="icon"
          :class="[
            'text-purple-light shrink-0 transition-transform duration-200',
            iconSize,
            isOpen && 'rotate-45',
          ]"
        />
      </slot>
    </button>

    <div
      :id="contentId"
      class="grid transition-[grid-template-rows] duration-300 ease-in-out"
      :style="{ gridTemplateRows: isOpen ? '1fr' : '0fr' }"
    >
      <div class="overflow-hidden" :inert="!isOpen">
        <div class="px-7 pb-4 text-[18px]">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
