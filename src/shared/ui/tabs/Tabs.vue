<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    items: {
      label: string
      disabled?: boolean
    }[]
  }>(),
  {},
)

const activeTab = defineModel<number>({ default: 0 })

function selectTab(index: number) {
  if (props.items[index]?.disabled) return
  activeTab.value = index
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-11">
      <button
        v-for="(item, index) in props.items"
        :key="index"
        type="button"
        :disabled="item.disabled"
        class="min-w-[305px] cursor-pointer rounded-[45px] px-11 py-3 text-[24px] font-extrabold tracking-[5%] uppercase lg:min-w-auto lg:px-12"
        :class="[
          activeTab === index
            ? 'bg-(image:--stage-secret-gradient)'
            : 'bg-(image:--participant-card-bg)',
          item.disabled && 'cursor-not-allowed opacity-40',
        ]"
        @click="selectTab(index)"
      >
        {{ item.label }}
      </button>
    </div>

    <div class="mt-10">
      <slot :index="activeTab" />
    </div>
  </div>
</template>
