<template>
  <div class="title-wrapper" :class="{ 'title-light': props.isLight }">
    <svg
      width="87"
      height="2"
      viewBox="0 0 87 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="87" height="2" fill="#2D2929" />
    </svg>
    <!-- <img src="@/assets/icons/title-row.svg" alt="hr"> -->
    <h2 class="title-wrapper__title">
      {{ props.title }}
    </h2>
  </div>
</template>

<script setup>
  const props = defineProps({
      isLight: {
        type:Boolean,
        default: false
        },
        title: {
          type: String,
          default:''
        }
    })
  
</script>

<style scoped lang="scss">
</style>
