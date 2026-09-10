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
    <div class="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-11">
      <button
        v-for="(item, index) in props.items"
        :key="index"
        type="button"
        :disabled="item.disabled"
        class="text-[24px] min-w-[305px] lg:min-w-auto cursor-pointer font-extrabold tracking-[5%] rounded-[45px] uppercase py-3 px-11 lgpx-12"
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
