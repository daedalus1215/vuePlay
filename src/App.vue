<template>
  <h2>My Friends</h2>
  <friend-contact
    v-for="friend in friends"
    :key="friend.name"
    :name="friend.name"
    :full-name="friend.fullName"
    :email="friend.email"
    :is-favorite="friend.isFavorite"
  />
</template>

<script>
import FriendContact from "./components/FriendContact.vue";

export default {
  components: { FriendContact },
  name: "App",
  data() {
    return {
      friends: [
        {
          name: "Manual2",
          fullName: "Manual Ad2",
          email: "fiction@d.com2",
          isFavorite: true,
        },
        {
          name: "Lisa",
          fullName: "Lisa Ad2",
          email: "lisa@d.com2",
          isFavorite: false,
        },
      ],
    };
  },
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
