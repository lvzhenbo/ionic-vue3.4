<template>
  <ion-page>
    <ion-content>
      <ion-button @click="handleClick">Push</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton } from "@ionic/vue";
import { useRouter } from "vue-router";

const router = useRouter();
const handleClick = () => {
  router.push("/folder/1");
};
</script>

<style scoped></style>
