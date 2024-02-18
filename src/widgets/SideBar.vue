<script setup lang='ts'>
import LangSwitcher from '@/widgets/LangSwitcher.vue';
import ThemeSwitcher from '@/widgets/ThemeSwitcher.vue';

import AppLink from '@/components/ui/BaseAppLink';

import AboutIcon from '@/assets/icons/about.svg'
import HomeIcon from '@/assets/icons/home.svg'

import { Routes } from '@/router';

import useCollapseSidebar from '@/composables/useCollapseSidebar';

const { collapsed } = useCollapseSidebar(true)
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
  </div>
</template>

<style scoped lang='scss'>
.SideBar {
  padding-top: 20px;
  height: calc(100vh - var(--navbar-height));
  width: var(--sidebar-width);
  background-color: var(--bg-color);
  box-shadow: 1px 0 5px var(--shadow-color);
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
      fill: var(--primary-color);
      height: 20px;
      width: 20px
    }

    &__text {
      white-space: nowrap;
      min-width: 50px;
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

  .links {
    &__item {
      column-gap: 0;

      &__text {
        min-width: 0;
        width: 0;
        overflow: hidden;
      }
    }
  }
}

.collapse-btn {
  position: absolute;
  top: 50%;
  transform: translate(100%, -50%);
  right: 0;
  border: 2px solid var(--middle-color);
  border-left: none;
  line-height: 0;
}
</style>
