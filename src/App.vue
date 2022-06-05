<template>
  <ion-app>
    <ion-router-outlet />
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
