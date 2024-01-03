<template>
  <IonPage id="main-page">
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>
          <IonSelect
            interface="popover"
            placeholder="Select fruit"
            :value="value"
            @ion-change="(e) => $router.replace(`/folder/${e.detail.value}`)"
          >
            <IonSelectOption v-for="n in 4" :key="n" :value="n">
              {{ n }}
            </IonSelectOption>
          </IonSelect>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonRouterOutlet />
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonRouterOutlet } from '@ionic/vue';

  defineOptions({
    name: 'PageLayout',
  });
  const value = ref(1);
</script>

<style scoped>
  ion-select::part(icon) {
    color: white;
  }
</style>
