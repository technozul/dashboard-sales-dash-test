<template>
  <div class="mb-[68px]">
    <h2 class="text-[30px] font-bold">Dashboard</h2>
    <p class="text-[18px] font-bold">Today's date: Sun, 10 April 2022</p>
  </div>

  <div class="card-trio-wrapper">
    <div class="card-trio">
      <span class="name">Profit</span>
      <span class="value">Rp 11.500.000</span>
      <span class="percent text-sd-danger">0.3% compared to 7 days ago</span>
    </div>
    <div class="card-trio">
      <span class="name">Sales</span>
      <span class="value">Rp 56.000.000</span>
      <span class="percent text-sd-success">0.5% compared to 7 days ago</span>
    </div>
    <div class="card-trio">
      <span class="name">Transaction</span>
      <span class="value">1.090 transactions</span>
      <span class="percent text-sd-warning">same as 7 days ago</span>
    </div>
  </div>

  <div class="middle-content-wrapper">
    <div class="middle-content-left">
      <div class="card-chart">
        <apexchart
          :options="salesChartOptions"
          :series="salesSeries"
          height="320px"
        ></apexchart>
      </div>

      <div class="card-top-product">
        <h3 class="title">Top 5 Products</h3>
        <ul class="items">
          <li>
            <img class="item-image" :src="LogoMaxim" alt="" />
            <span class="item-name">Maxim</span>
            <span class="item-price">150.000</span>
            <span class="item-transaction">
              <span class="count">120</span>
              <span class="text">transactions</span>
            </span>
          </li>
          <li>
            <img class="item-image" :src="LogoTelkomsel" alt="" />
            <span class="item-name">Telkomsel</span>
            <span class="item-price">25.000</span>
            <span class="item-transaction">
              <span class="count">98</span>
              <span class="text">transactions</span>
            </span>
          </li>
          <li>
            <img class="item-image" :src="LogoThree" alt="" />
            <span class="item-name">Three</span>
            <span class="item-price">50.000</span>
            <span class="item-transaction">
              <span class="count">74</span>
              <span class="text">transactions</span>
            </span>
          </li>
          <li>
            <img class="item-image" :src="LogoOVO" alt="" />
            <span class="item-name">OVO</span>
            <span class="item-price">100.000</span>
            <span class="item-transaction">
              <span class="count">68</span>
              <span class="text">transactions</span>
            </span>
          </li>
          <li>
            <img class="item-image" :src="LogoPLN" alt="" />
            <span class="item-name">PLN Postpaid</span>
            <span class="item-price">&nbsp;</span>
            <span class="item-transaction">
              <span class="count">50</span>
              <span class="text">transactions</span>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="card-top-agents">
      <h3 class="title">Top 5 Agents</h3>
      <ul class="items">
        <li>
          <img class="item-image" :src="AvatarTopAgent1" alt="" />
          <div class="item-desc">
            <span class="item-name">PT Suka Maju Jakarta</span>
            <div class="item-description">
              <span class="text flex-1/2">Profit</span>
              <span class="value">Rp 3.700.000</span>
            </div>
            <div class="item-description">
              <span class="text">Sales</span>
              <span class="value">Rp 7.230.000</span>
            </div>
            <div class="item-description">
              <span class="text">Transaction</span>
              <span class="value">43 transactions</span>
            </div>
          </div>
        </li>
        <li>
          <img class="item-image" :src="AvatarTopAgent2" alt="" />
          <div class="item-desc">
            <span class="item-name">Susi Susanti</span>
            <div class="item-description">
              <span class="text flex-1/2">Profit</span>
              <span class="value">Rp 3.350.000</span>
            </div>
            <div class="item-description">
              <span class="text">Sales</span>
              <span class="value">Rp 5.230.000</span>
            </div>
            <div class="item-description">
              <span class="text">Transaction</span>
              <span class="value">37 transactions</span>
            </div>
          </div>
        </li>
        <li>
          <img class="item-image" :src="AvatarTopAgent3" alt="" />
          <div class="item-desc">
            <span class="item-name">Toko Pulsa III Depok</span>
            <div class="item-description">
              <span class="text flex-1/2">Profit</span>
              <span class="value">Rp 2.860.000</span>
            </div>
            <div class="item-description">
              <span class="text">Sales</span>
              <span class="value">Rp 4.500.000</span>
            </div>
            <div class="item-description">
              <span class="text">Transaction</span>
              <span class="value">38 transactions</span>
            </div>
          </div>
        </li>
        <li>
          <img class="item-image" :src="AvatarTopAgent4" alt="" />
          <div class="item-desc">
            <span class="item-name">PT Suka Maju Bogor</span>
            <div class="item-description">
              <span class="text flex-1/2">Profit</span>
              <span class="value">Rp 2.400.000</span>
            </div>
            <div class="item-description">
              <span class="text">Sales</span>
              <span class="value">Rp 4.800.000</span>
            </div>
            <div class="item-description">
              <span class="text">Transaction</span>
              <span class="value">40 transactions</span>
            </div>
          </div>
        </li>
        <li>
          <img class="item-image" :src="AvatarTopAgent5" alt="" />
          <div class="item-desc">
            <span class="item-name">Anton Antoman</span>
            <div class="item-description">
              <span class="text flex-1/2">Profit</span>
              <span class="value">Rp 2.350.000</span>
            </div>
            <div class="item-description">
              <span class="text">Sales</span>
              <span class="value">Rp 2.100.000</span>
            </div>
            <div class="item-description">
              <span class="text">Transaction</span>
              <span class="value">20 transactions</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoMaxim from '@/assets/images/logo-maxim.png';
import LogoTelkomsel from '@/assets/images/logo-telkomsel.png';
import LogoThree from '@/assets/images/logo-three.png';
import LogoOVO from '@/assets/images/logo-ovo.png';
import LogoPLN from '@/assets/images/logo-pln.png';

import AvatarTopAgent1 from '@/assets/images/top-agent-1.png';
import AvatarTopAgent2 from '@/assets/images/top-agent-2.png';
import AvatarTopAgent3 from '@/assets/images/top-agent-3.png';
import AvatarTopAgent4 from '@/assets/images/top-agent-4.png';
import AvatarTopAgent5 from '@/assets/images/top-agent-5.png';
import { computed, onMounted, ref } from 'vue';
import { ApexOptions } from 'apexcharts';
import moment from 'moment';

const categories = ref<Date[]>([]);

const salesChartOptions = ref<ApexOptions>({
  colors: ['#545DFF'],
  dataLabels: {
    enabled: false
  },
  title: {
    text: 'Sales Chart',
    style: {
      fontSize: '16px',
      fontWeight: '700',
      fontFamily: 'Nunito Sans',
      color: '#7A7A7A'
    }
  },
  stroke: {
    curve: 'smooth'
  },
  chart: {
    type: 'area',
    width: '100%',
    height: '320px'
  },
  xaxis: {
    categories,
    labels: {
      formatter: (v) => {
        const m = moment(v).format('DD MMM YYYY');
        return m;
      }
    }
  },
  yaxis: {
    labels: {
      formatter: (v) => {
        const amount = v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `Rp ${amount}`;
      }
    }
  }
});

const salesSeries = ref([
  {
    name: 'Sales',
    data: [1000000, 5500000, 2300000, 4000000, 4750000]
  }
]);

function generateSalesChartCategories() {
  categories.value = [];

  let val: Date[] = [];
  for (let i = 0; i < 5; i++) {
    const d = new Date();
    const r = d.setDate(d.getDate() + i);
    val.push(new Date(r));
  }

  categories.value = val;
}

onMounted(() => {
  generateSalesChartCategories();
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/sass/base.scss';
.card-trio-wrapper {
  @apply flex mb-[40px] gap-[32px];
  .card-trio {
    @extend .card-base;
    @apply basis-1/3;
    .name {
      @apply text-sd-muted-2 font-bold;
    }
    .value {
      @apply text-[30px] font-bold;
    }
    .percent {
      @apply font-bold text-right;
    }
  }
}

.middle-content-wrapper {
  @apply flex gap-[32px];
  .middle-content-left {
    @apply flex flex-col basis-2/3;
    .card-chart {
      @extend .card-base;
      @apply mb-[40px];
    }
    .card-top-product {
      @extend .card-base;
      .title {
        @apply text-sd-muted-2 font-bold mb-[16px];
      }
      .items {
        @apply flex gap-[16px];
        li {
          @apply font-bold flex flex-col gap-[4px] justify-center items-center border-[3px] border-sd-primary p-[16px] rounded-[12px] max-w-[128px];
          .item-image {
            @apply w-[54px] h-[54px];
          }
          .item-name {
            @apply text-sd-primary whitespace-nowrap;
          }
          .item-price {
            @apply text-sd-muted-2;
          }
          .item-transaction {
            @apply text-sd-blacky flex gap-[4px] items-center;
            .count {
              @apply text-[18px];
            }
            .text {
              @apply text-[12px];
            }
          }
        }
      }
    }
  }

  .card-top-agents {
    @extend .card-base;
    @apply basis-1/3;
    .title {
      @apply text-sd-muted-2 font-bold mb-[16px];
    }
    .items {
      @apply flex flex-col gap-[30px] font-bold;
      li {
        @apply flex gap-[15px] items-center;
        .item-image {
          @apply w-[65px] h-[65px] rounded-full border-[3px] border-sd-primary p-[2px];
        }
        .item-desc {
          @apply grow;
          .item-name {
            @apply text-sd-primary;
          }
          .item-description {
            @apply flex whitespace-nowrap text-[14px];
            .text {
              @apply text-sd-muted-2 basis-1/2;
            }
            .value {
              @apply text-sd-blacky;
            }
          }
        }
      }
    }
  }
}
</style>
