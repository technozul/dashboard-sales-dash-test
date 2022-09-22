<template>
  <DefaultLayout></DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/components/layouts/Default.layout.vue';
import { useTitle } from '@vueuse/core';

const title = useTitle('Dashboard | Sales Dash');
</script>

<style scoped></style>
