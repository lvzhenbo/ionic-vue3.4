<template>
  <IonPage>
    <PageLayout />
  </IonPage>
</template>

<script setup lang="ts">
  import PageLayout from './page.vue';
  import { IonPage } from '@ionic/vue';

  defineOptions({
    name: 'LayoutIndex',
  });
</script>

<style scoped></style>
