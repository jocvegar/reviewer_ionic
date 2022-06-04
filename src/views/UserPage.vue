<template>
  <ion-page>
    <HeaderContainer> User </HeaderContainer>
    <ion-content :fullscreen="true">
      <ion-header collapse="fade">
        <ion-toolbar>
          <ion-title size="large">User</ion-title>
        </ion-toolbar>
      </ion-header>
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import ExploreContainer from "@/components/ExploreContainer.vue";
import HeaderContainer from "@/components/HeaderContainer.vue";

export default {
  name: "UserPage",
  components: {
    ExploreContainer,
    HeaderContainer,
  },
};
</script>
