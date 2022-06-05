<template>
  <ion-app>
    <ion-router-outlet />
    <ion-content>
      <ion-refresher
        slot="fixed"
        pull-factor="0.5"
        pull-min="100"
        pull-max="200"
      >
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>
    </ion-content>
    <nav-bar />
  </ion-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
