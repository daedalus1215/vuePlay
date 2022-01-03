<template>
  <h2>My Friends</h2>
  <friend-contact
    name="Manual2"
    full-name="Manual Ad2"
    email="fiction@d.com2"
    is-favorite="1"
  />
  <friend-contact
    name="Lisa"
    full-name="Lisa Ad2"
    email="lisa@d.com2"
  />
</template>

<script>
import FriendContact from "./components/FriendContact.vue";

export default {
  components: { FriendContact },
  name: "App",
  data: () => ({}),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
