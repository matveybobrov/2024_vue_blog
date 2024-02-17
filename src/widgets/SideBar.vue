<script setup lang='ts'>
import LangSwitcher from '@/widgets/LangSwitcher.vue';
import ThemeSwitcher from '@/widgets/ThemeSwitcher.vue';

import AppLink from '@/components/ui/BaseAppLink';
import BaseButton, { BaseButtonSize, BaseButtonTheme } from '@/components/ui/BaseButton';

import AboutIcon from '@/assets/icons/about.svg'
import HomeIcon from '@/assets/icons/home.svg'

import { ref } from 'vue'

import { Routes } from '@/router';

const collapsed = ref(true)
</script>

<template>
  <div
    class="SideBar"
    :class="{ collapsed }"
  >
    <div class="links">
      <AppLink
        class="links__item"
        :to="Routes.MAIN"
      >
        <HomeIcon class="links__item__icon" />
        <div class="links__item__text">
          {{ t('Главная') }}
        </div>
      </AppLink>
      <AppLink
        class="links__item"
        :to="Routes.ABOUT"
      >
        <AboutIcon class="links__item__icon" />
        <div class="links__item__text">
          {{ t('О сайте') }}
        </div>
      </AppLink>
    </div>
    <div class="switchers">
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
    <BaseButton
      :theme="BaseButtonTheme.BACKGROUND"
      :size="BaseButtonSize.L"
      class="collapse-btn"
      @click="collapsed = !collapsed"
    >
      {{ collapsed ? '>' : '<' }}
    </BaseButton>
  </div>
</template>

<style scoped lang='scss'>
.SideBar {
  padding-top: 20px;
  height: calc(100vh - var(--navbar-height));
  width: var(--sidebar-width);
  background-color: var(--bg-color);
  border-right: 2px solid var(--secondary-color);
  position: relative;
  transition: width 0.2s;
}

.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &__item {
    display: flex;
    gap: 10px;

    &__icon {
      fill: var(--bg-color-inverted);
      height: 20px;
      width: 20px
    }

    &__text {
      white-space: nowrap;
    }
  }

}

.switchers {
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 10px;
}

.collapsed {
  width: var(--sidebar-width-collapsed);

  .switchers {
    flex-direction: column;
    align-items: center;
  }

  .links__item__text {
    width: 0;
    overflow: hidden;
  }
}

.collapse-btn {
  position: absolute;
  top: 50%;
  transform: translate(100%, -50%);
  right: 0;
  border: 2px solid var(--secondary-color);
  border-left: none;
  line-height: 0;
}
</style>
