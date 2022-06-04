<template>
  <ion-tabs>
    <ion-router-outlet></ion-router-outlet>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="tab1" href="/home">
        <ion-icon :icon="listOutline" />
      </ion-tab-button>

      <ion-tab-button tab="tab2" href="/about">
        <ion-icon :icon="informationCircleOutline" />
      </ion-tab-button>

      <ion-tab-button tab="tab3" href="/user">
        <ion-icon :icon="personCircleOutline" />
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
  <ion-fab vertical="top" horizontal="end" slot="fixed">
    <ion-fab-button color="light">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script setup>
import {
  informationCircleOutline,
  personCircleOutline,
  listOutline,
  add,
} from "ionicons/icons";
</script>
