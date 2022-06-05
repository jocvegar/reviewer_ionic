<template>
  <ion-page>
    <HeaderContainer> Reviewer </HeaderContainer>
    <ion-content :fullscreen="true">
      <ion-header collapse="fade">
        <ion-toolbar>
          <ion-title size="large">Reviewer</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="header">
        <h2>{{ greeting.something }}</h2>
      </div>
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script>
import ExploreContainer from "@/components/ExploreContainer.vue";
import HeaderContainer from "@/components/HeaderContainer.vue";
import db from "../firebaseInit";
import { doc, getDoc } from "firebase/firestore";

export default {
  name: "HomePage",
  components: {
    ExploreContainer,
    HeaderContainer,
  },
  data() {
    return {
      greeting: "No puede ser",
    };
  },
  async mounted() {
    const docRef = doc(db, "test", "something");
    const docSnap = await getDoc(docRef);
    try {
      if (docSnap.exists()) {
        this.greeting = Object.assign(docSnap.data(), {
          id: docSnap.id,
        });
      } else {
        console.log("No such document!");
      }
    } catch (e) {
      console.log("e", e);
    }
  },
};
</script>

<style>
ion-content {
  --ion-background-color: #ffca22;
}
.header {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
</style>
