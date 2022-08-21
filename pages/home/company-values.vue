<template>
  <section class="container mt-[12.0625rem]">
    <h2 class="title">Философия/Ценности компании</h2>
    <p class="text">
      Hedonist это запоминающийся отдых премиум класса в высокотехнологичных
      апартаментах и гостевых домах. Наша цель - сочетание городского комфорта с
      нетронутым лесом, полностью перезагружающее сознание
    </p>
  </section>
</template>

<script>
export default {
  name: 'CompanyValues',
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 3rem;
  font-family: 'Cormorant';
  text-align: center;
}

.text {
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  max-width: 34.125rem;
  margin: 3.5rem auto 0;
  position: relative;

  &::after,
  &::before {
    content: url("data:image/svg+xml,%3Csvg  viewBox='0 0 29 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28.1053 0.688L29.0726 0.941439L29.401 -0.312H28.1053V0.688ZM23.5613 18.032V19.032H24.333L24.5286 18.2854L23.5613 18.032ZM14.3453 18.032L13.3952 17.72L12.9643 19.032H14.3453V18.032ZM20.0413 0.688V-0.312H19.3171L19.0912 0.375982L20.0413 0.688ZM14.8573 0.688L15.8219 0.951418L16.1669 -0.312H14.8573V0.688ZM10.1213 18.032V19.032H10.8848L11.0859 18.2954L10.1213 18.032ZM0.96925 18.032L0.0212688 17.7137L-0.421416 19.032H0.96925V18.032ZM6.79325 0.688V-0.312H6.07417L5.84527 0.369675L6.79325 0.688ZM27.1379 0.434561L22.5939 17.7786L24.5286 18.2854L29.0726 0.941439L27.1379 0.434561ZM23.5613 17.032H14.3453V19.032H23.5613V17.032ZM15.2953 18.344L20.9913 1.00002L19.0912 0.375982L13.3952 17.72L15.2953 18.344ZM20.0413 1.688H28.1053V-0.312H20.0413V1.688ZM13.8926 0.424582L9.15657 17.7686L11.0859 18.2954L15.8219 0.951418L13.8926 0.424582ZM10.1213 17.032H0.96925V19.032H10.1213V17.032ZM1.91723 18.3503L7.74123 1.00632L5.84527 0.369675L0.0212688 17.7137L1.91723 18.3503ZM6.79325 1.688H14.8573V-0.312H6.79325V1.688Z' fill='%23282423'/%3E%3C/svg%3E%0A");
    font-weight: 750;
    font-size: 4rem;
    line-height: 5.25rem;
    width: 2.0625rem;
    display: block;
    position: absolute;
  }

  &::before {
    top: 0;
    left: 0;
    transform: translate(calc((100% + 10px) * -1), -100%);
  }

  &::after {
    right: 0;
    bottom: 0;
    transform: translate(calc(100% + 10px), 15%);
  }
}
</style>
