<template>
  <base-container>
    <UserAuth tite="Auth" />
  </base-container>
  <base-container title="Vuex" v-if="isLogged">
    <TheCounter />
    <button @click="addOne">Add 1</button>
    <ChangeCounter />
    <FavoriteValue />
  </base-container>
</template>




<script>
import { mapGetters } from "vuex";
import BaseContainer from "./components/BaseContainer.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import TheCounter from "./components/TheCounter.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    ...mapGetters({
      FavoriteValuecounter: "normalizedCounter",
      isLogged: "isLogged",
    }),
  },
  methods: {
    addOne() {
      this.$store.dispatch({ type: "increment", value: 10 });
    },
  },
};
</script>





<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>