<template>
  <section class="container mt-[7.5rem]">
    <SimpleTitle title="Функционал" />
    <div
      class="flex border-b border-black border-solid pb-6 mb-[7.5rem] mt-[3.75rem]"
    >
      <div class="w-4/12 flex flex-col">
        <img
          src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg"
          alt=""
          class="w-[19.375rem] h-[19.375rem] object-cover"
        />
        <div
          class="flex-1 flex flex-col justify-between border-r mt-[3rem] border-black border-solid pr-[1.875rem]"
        >
          <h3 class="subtitle">Наименование опции</h3>
          <p>
            Здесь нам необходим текст, который в общих чертах расскажет про то,
            какие качественные услуги представляет компания. Не забыть упомянуть
            высокотехнологичность домов и апартаментов и премиальный уровень
            класса
          </p>
          <div class="price">
            3200
            <img
              src="@/assets/icons/rouble.svg"
              alt=""
              class="h-[2.1rem] relative top-[0.1875rem]"
            />
          </div>
        </div>
      </div>
      <div class="flex-1 flex flex-col pl-[1.875rem]">
        <div class="flex">
          <img
            src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg"
            alt=""
            class="w-[19.375rem] h-[19.375rem] object-cover mr-6"
          />
          <img
            src="https://langformula.ru/wp-content/uploads/2019/04/house.jpg"
            alt=""
            class="flex-1 h-[19.375rem] object-cover"
          />
        </div>
        <div class="flex-1 flex flex-col justify-between mt-[3rem]">
          <div>
            <h3 class="subtitle">Наименование опции</h3>
            <p>
              Здесь нам необходим текст, который в общих чертах расскажет про
              то, какие качественные услуги представляет компания. Не забыть
              упомянуть высокотехнологичность домов и апартаментов и премиальный
              уровень класса
            </p>
          </div>
          <div class="price">
            3200
            <img
              src="@/assets/icons/rouble.svg"
              alt=""
              class="h-[2.1rem] relative top-[0.1875rem]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
export default {
  name: 'TheFunctions',
  components: { SimpleTitle },
}
</script>

<style lang="scss" scoped>
.subtitle {
  font-family: 'Cormorant';
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 2.25rem;
  margin-bottom: 1.5rem;
}

.price {
  font-family: 'Hind';
  font-weight: 300;
  font-size: 3rem;
  line-height: 1;
  margin-top: 1.75rem;
  margin-bottom: 1rem;
  display: flex;
  color: #4e4747;
}
</style>
