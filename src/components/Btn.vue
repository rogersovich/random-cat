<template>
  <button
    :style="`background-color: ${props.bgColor}; color: ${
      props.textColor
    }; border-radius: ${props.rounded + 'px'}; width: ${
      props.width == 0 ? 'auto' : props.width + 'px'
    }`"
    class="tw-px-8 tw-py-2 focus:tw-ring-4 tw-ring-yellow-400"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  bgColor: {
    type: String,
    default: "#94a3b8",
  },
  textColor: {
    type: String,
    default: "#000",
  },
  rounded: {
    type: [String, Number],
    default: 6,
  },
  width: {
    type: [String, Number],
    default: 0,
  },
});
</script>

<style lang="scss" scoped></style>
