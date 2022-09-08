<template>
  <section class="name">
    <div class="name-info">
      <Title :title="props.name"></Title>
      <p class="name__text">
        {{props.about}}
      </p>
    </div>
  </section>
</template>

<script setup>
import Title from '@/components/ui/simple-title/simple-title'

const props = defineProps({
      name: {
        type:String,
        default: ''
        },
      about: {
          type: String,
          default:''
        }
    })
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
