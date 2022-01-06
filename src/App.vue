<template>
  <base-container title="Vuex">
    <TheCounter />
    <button @click="addOne">Add 1</button>
    <ChangeCounter />
    <FavoriteValue />
  </base-container>
</template>




<script>
import BaseContainer from "./components/BaseContainer.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from "./components/TheCounter.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue
  },
  computed: {
    FavoriteValuecounter() {
      return this.$store.getters.normalizedCounter;
    },
  },
  methods: {
    addOne() {
      this.$store.commit("increment");
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