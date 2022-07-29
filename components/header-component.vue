<template>
  <header class="header">
    <img class="header__logo" src="~/assets/icons/logo_black.svg" alt="" />
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    width: 10.625rem;
  }
}
</style>
