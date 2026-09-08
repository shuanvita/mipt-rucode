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
    <div class="flex gap-2">
      <button
        v-for="(item, index) in props.items"
        :key="index"
        type="button"
        :disabled="item.disabled"
        class="rounded-xl px-4 py-2 transition cursor-pointer"
        :class="[
          activeTab === index ? 'bg-purple-light text-white' : 'bg-gray-100 text-gray-600',
          item.disabled && 'cursor-not-allowed opacity-40',
        ]"
        @click="selectTab(index)"
      >
        {{ item.label }}
      </button>
    </div>

    <div class="mt-4">
      <slot :index="activeTab" />
    </div>
  </div>
</template>
