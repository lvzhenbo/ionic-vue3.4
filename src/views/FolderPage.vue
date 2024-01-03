<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <strong class="capitalize" @click="a++">{{ a }}</strong>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage  } from '@ionic/vue';
import { onMounted, ref } from 'vue';

const a = ref(1);

onMounted(() => {
  console.log('mounted');
})
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container a {
  text-decoration: none;
}
</style>
