<template>
  <ion-app :key="forceUpdateKey">
    <ion-router-outlet />
    <nav-bar />
  </ion-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["forceUpdateKey"]),
  },
};
</script>
