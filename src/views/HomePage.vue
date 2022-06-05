<template>
  <ion-page>
    <HeaderContainer> Reviwer </HeaderContainer>
    <ion-content :fullscreen="true">
      <ion-header collapse="fade">
        <ion-toolbar>
          <ion-title size="large">Reviwer</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import ExploreContainer from "@/components/ExploreContainer.vue";
import HeaderContainer from "@/components/HeaderContainer.vue";

export default {
  name: "HomePage",
  components: {
    ExploreContainer,
    HeaderContainer,
  },
};
</script>

<style>
ion-content {
  --ion-background-color: #ffca22;
}
</style>
