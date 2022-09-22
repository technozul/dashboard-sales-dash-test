<template>
  <div class="main">
    <header class="main-header">
      <Bars3Icon
        v-if="!isNavbarActive"
        class="action"
        @click="toggleNavbar"
      ></Bars3Icon>
      <XMarkIcon v-else class="action" @click="toggleNavbar"></XMarkIcon>
      <span class="nav-text">SalesDash</span>
      <span class="icon"></span>
      <div
        class="action-show"
        @click="isSidebarRightActive = !isSidebarRightActive"
      >
        <ChevronLeftIcon
          v-if="!isSidebarRightActive"
          class="icon"
        ></ChevronLeftIcon>
      </div>
    </header>

    <nav
      class="main-nav"
      :class="{
        active: isNavbarActive
      }"
    >
      <div class="nav-logo">
        <span class="nav-text">SalesDash</span>
      </div>

      <ul class="nav-item-container">
        <li>
          <a href="" class="nav-link-active">
            <NavIconQRCode class="icon"></NavIconQRCode>
            <span class="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="" class="nav-link">
            <NavIconBalance class="icon"></NavIconBalance>
            <span class="text">Balance</span>
          </a>
        </li>
        <li>
          <a href="" class="nav-link">
            <NavIconTransaction class="icon"></NavIconTransaction>
            <span class="text">Transcation</span>
          </a>
        </li>
        <li>
          <a href="" class="nav-link">
            <NavIconProduct class="icon"></NavIconProduct>
            <span class="text">Product</span>
          </a>
        </li>
        <li>
          <a
            href=""
            @click.prevent="
              isNavbarChildrenMenuShow = !isNavbarChildrenMenuShow
            "
            class="nav-link"
          >
            <NavIconChannel class="icon"></NavIconChannel>
            <span class="text">Channel</span>
            <ChevronDownIcon
              v-if="!isNavbarChildrenMenuShow"
              class="chevron"
            ></ChevronDownIcon>
            <ChevronUpIcon v-else class="chevron"></ChevronUpIcon>
          </a>
          <transition>
            <ul
              class="nav-item-container nav-children"
              v-if="isNavbarChildrenMenuShow"
            >
              <li>
                <a href="" class="nav-link">
                  <span class="icon"></span>
                  <span class="text">Agent</span>
                </a>
              </li>
              <li>
                <a href="" class="nav-link">
                  <span class="icon"></span>
                  <span class="text">Balance</span>
                </a>
              </li>
              <li>
                <a href="" class="nav-link">
                  <span class="icon"></span>
                  <span class="text">Transcation</span>
                </a>
              </li>
            </ul>
          </transition>
        </li>
      </ul>

      <div class="px-[22.5px]">
        <hr class="border border-sd-muted-1" />
      </div>

      <ul class="nav-item-container">
        <li>
          <a href="" class="nav-link">
            <NavIconLogout class="icon"></NavIconLogout>
            <span class="text">Logout</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="main-content">
      <HomePage></HomePage>
    </div>

    <div class="sidebar-right" :class="{ active: isSidebarRightActive }">
      <div
        class="action-show"
        :class="{
          block: isSidebarRightActive
        }"
        @click="isSidebarRightActive = !isSidebarRightActive"
      >
        <ChevronLeftIcon
          v-if="!isSidebarRightActive"
          class="icon"
        ></ChevronLeftIcon>
        <ChevronRightIcon v-else class="icon"></ChevronRightIcon>
      </div>

      <div class="user-control-wrapper">
        <div class="user-control">
          <div class="user-avatar-wrapper">
            <img :src="AvatarUser1" alt="" class="user-avatar" />
          </div>
          <div
            class="user-description"
            @click="isUserControlActive = !isUserControlActive"
          >
            <span class="user-name">Budi Budiman</span>
            <span class="user-title">Owner at PT Suka Maju</span>
          </div>
          <ChevronDownIcon
            v-if="!isUserControlActive"
            class="w-[14px] h-[14px] fill-sd-blacky"
          ></ChevronDownIcon>
          <ChevronUpIcon
            v-else
            class="w-[14px] h-[14px] fill-sd-blacky"
          ></ChevronUpIcon>
          <transition>
            <div v-if="isUserControlActive" class="user-control-menu">
              <a href="#" @click.prevent="">Settings</a>
            </div>
          </transition>
        </div>
      </div>
      <div class="card-balance">
        <div class="head">
          <span>&nbsp;</span>
          <h3 class="title">Total Balance</h3>
          <EllipsisVerticalIcon class="dot-menu" />
        </div>
        <p class="amount">Rp 1.580.000.000</p>
        <button class="action">Top Up</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarUser1 from '@/assets/images/avatar-1.png';
import NavIconQRCode from '@/assets/icons/nav-icon-qrcode.svg';
import NavIconBalance from '@/assets/icons/nav-icon-balance.svg';
import NavIconTransaction from '@/assets/icons/nav-icon-transaction.svg';
import NavIconProduct from '@/assets/icons/nav-icon-product.svg';
import NavIconChannel from '@/assets/icons/nav-icon-channel.svg';
import NavIconLogout from '@/assets/icons/nav-icon-logout.svg';
import {
  EllipsisVerticalIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/solid';
import HomePage from '@/ddd/home/components/Home.page.vue';
import { ref } from 'vue';

const isNavbarChildrenMenuShow = ref(false);
const isUserControlActive = ref(false);
const isNavbarActive = ref(false);
const isSidebarRightActive = ref(false);

function toggleNavbar() {
  isNavbarActive.value = !isNavbarActive.value;
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/sass/base.scss';
.main {
  @apply flex flex-col md:flex-row w-full relative;
}

.main-header {
  @apply flex justify-between items-center bg-sd-secondary-1 px-[32px] py-[24px] md:hidden;
  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  .action {
    @apply w-7 h-7 cursor-pointer text-sd-blacky;
  }

  .action-show {
    @apply fixed z-[30] p-[7px] right-0 top-[128px] bg-sd-secondary-2 rounded-l cursor-pointer;
    .icon {
      @apply w-[21px] h-[42px];
    }
  }

  .nav-text {
    @apply text-sd-primary text-[29px] font-bold;
  }
}

.main-nav {
  &.active {
    @apply block;
  }

  @apply flex flex-col min-w-[280px] bg-sd-secondary-1 hidden z-[10] min-h-full md:block;
  .nav-logo {
    @apply flex justify-center text-center pt-[45px] pb-[32px] hidden md:block;
    .nav-text {
      @apply text-sd-primary text-[29px] font-bold;
    }
  }

  .nav-item-container {
    @apply flex flex-col gap-[24px] py-[32px];
    li {
      .chevron {
        @apply w-4 h-4 absolute right-[48px];
      }

      @apply flex-col items-center font-bold relative;
      .nav-link {
        @apply flex items-center gap-[16px] grow pl-[54.5px] py-[12px] hover:bg-sd-secondary-2;
        .icon {
          @apply w-[21px] h-[21px] fill-sd-muted-2;
        }
        .text {
          @apply text-sd-muted-2;
        }
      }
      .nav-link-active {
        @extend .nav-link;
        background: url('@/assets/icons/nav-bg-active.svg') no-repeat right
          center;
        .icon {
          @apply fill-sd-primary;
        }
        .text {
          @apply text-sd-primary;
        }
      }
    }
  }
}

.main-content {
  @apply flex-1 px-[32px] md:px-[56px] py-[32px] grow;
}

.sidebar-right {
  @apply flex flex-col bg-sd-secondary-2 p-[32px] md:min-w-[408px] max-w-[320px] z-[20] hidden md:block fixed md:relative right-0 min-h-full;

  &.active {
    @apply block;
  }

  .action-show {
    @apply p-[7px] left-[-34px] top-[128px] bg-sd-secondary-2 rounded-l cursor-pointer absolute md:hidden;
    .icon {
      @apply w-[21px] h-[42px];
    }
  }

  .user-control-wrapper {
    @apply flex flex-col;
  }
  .user-control-menu {
    @extend .card-base;
    @apply absolute bottom-0 right-0 mb-[-68px] w-full;
  }
  .user-control {
    @apply flex items-center self-center mb-[40px] cursor-pointer relative;
    .user-avatar-wrapper {
      @apply flex justify-center items-center rounded-full w-[65px] h-[65px] border-[3px] border-sd-primary bg-[white] p-[2px] mr-[8px];
      .user-avatar {
        @apply rounded-full bg-[#FFA800];
      }
    }
    .user-description {
      @apply flex flex-col mr-[14px];
      .user-name {
        @apply text-[20px] text-sd-blacky font-bold;
      }
      .user-title {
        @apply text-[16px] text-sd-muted-2 font-bold;
      }
    }
  }

  .card-balance {
    @extend .card-base;
    @apply justify-center items-center py-[19px] px-[26px];
    .head {
      @apply flex w-full justify-between justify-items-center mb-[24px];
      .title {
        @apply text-sd-muted-2 font-bold text-[18px];
      }
      .dot-menu {
        @apply h-6 w-6 cursor-pointer;
      }
    }
    .amount {
      @apply text-[24px] md:text-[32px] font-bold mb-[24px];
    }
    .action {
      @apply bg-sd-primary rounded-[12px] px-[32px] py-[15px] max-w-[277px] w-full h-[57px] text-white text-[18px] font-bold hover:brightness-[0.85];
    }
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.2s ease;
  max-height: 400px;
}

.expand-enter,
.expand-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>
