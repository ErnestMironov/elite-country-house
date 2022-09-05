<template>
  <div
    class="min-h-screen container flex justify-center items-start overflow-hidden"
  >
    <div class="check">
      <div class="decoration">HEDONIST</div>
      <div class="flex justify-between items-center mb-[21px]">
        <SimpleTitle title="Пречек"></SimpleTitle>
        <img
          class="h-[3.5rem]"
          src="~/assets/icons/logo_without-text.svg"
          alt=""
        />
      </div>
      <div class="pt-[24px] border-t border-solid border-black">
        <div class="flex">
          <img
            src="~/assets/images/bathhouse_1.jpg"
            alt=""
            class="w-[83px] h-[83px] object-cover mr-[18px]"
          />
          <div class="flex-1">
            <h3 class="text-[18px] font-medium">
              Гостевой дом “Название гостевого дома”
            </h3>
            <ul class="flex">
              <li class="text-[#2D292980] text-[16px] mr-[12px]">3 дня</li>
              <li class="text-[#2D292980] text-[16px] mr-[12px]">6 человек</li>
              <li class="text-[#2D292980] text-[16px] mr-[12px]">21.07.2022</li>
              <li class="text-[#2D292980] text-[16px] mr-[12px]">14:00</li>
            </ul>
            <div class="option option_without_dots mt-[13px]">
              <b>Базовая цена</b>
              <b>54 000₽</b>
            </div>
          </div>
        </div>
        <div class="option mt-[30px]">
          <b>Камин</b>
          <b>16 000₽</b>
        </div>
        <div class="text-[18px] mt-[12px]">Камин растопят к приезду</div>
        <div class="text-[18px] mt-[6px]">8 вязанок дров</div>
        <div class="option mt-[24px]">
          <b>Камин</b>
          <b>16 000₽</b>
        </div>
        <div class="text-[18px] mt-[6px]">8 вязанок дров</div>
        <div class="summary">
          <div class="option">
            <b>Итог</b>
            <b>72 400₽</b>
          </div>
        </div>
      </div>
      <div class="total-summary">
        <div class="option">
          <b>Итог</b>
          <b>72 400₽</b>
        </div>
      </div>
      <button
        class="btn text-[16px] py-[18px] px-[64px] mt-[24px] ml-auto block"
      >
        Далее
      </button>
    </div>
  </div>
</template>

<script>
import SimpleTitle from '~/components/ui/simple-title/simple-title.vue'
export default { components: { SimpleTitle } }
</script>

<style lang="scss" scoped>
.decoration {
  color: #302c26;
  font-weight: 450;
  font-size: 160px;
  opacity: 0.05;
  transform: rotate(-90deg) translate(-50%, -130%);
  position: absolute;
  left: 0;
  top: 0;
}

.check {
  padding: 24px 36px 36px;
  display: inline-block;
  min-width: 540px;
  margin-top: 50px;
  position: relative;
}

.option {
  display: flex;

  b {
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;

    &:first-child {
      order: 1;
    }

    &:nth-child(2) {
      order: 3;
    }
  }

  &::after {
    content: '';
    border-bottom: 2px dotted #e4e4e4;
    flex: 1;
    order: 2;
    position: relative;
    bottom: 6px;
    margin: 0 5px;
  }

  &_without_dots {
    &::after {
      opacity: 0;
    }
  }
}

.summary {
  padding-top: 12px;
  margin-top: 12px;
  border-top: 1px solid #000;
  .option {
    &::after {
      border-bottom: 2px dotted #302c26;
    }
  }
}

.total-summary {
  margin-top: 2.25rem;

  .option {
    &::after {
      border-bottom: 2px dotted #302c26;
    }

    b {
      font-size: 24px;
      line-height: 32px;
    }
  }
}
</style>
