<template>
  <h2>My Friends</h2>
  <friend-contact />
</template>

<script>
import FriendContact from "./components/FriendContact.vue";

export default {
  components: { FriendContact },
  name: "App",
  data: () => ({
    friends: [
      {
        name: "Manual2",
        fullName: "Manual Ad2",
        email: "fiction@d.com2",
        age: "122",
      },
    ],
  }),
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
