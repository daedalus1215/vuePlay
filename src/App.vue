<template>
  <h2>My Friends</h2>
  <friend-contact
    v-for="friend in friends"
    :key="friend.name"
    v-bind="friend"
    @toggle-favorite="toggleFavoriteStatus"
  />
  <new-friend @add-contact="addContact" />
</template>

<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

export default {
  components: { FriendContact, NewFriend },
  name: "App",
  data() {
    return {
      friends: [
        {
          name: "Manual2",
          email: "fiction@d.com2",
          isFavorite: true,
        },
        {
          name: "Lisa",
          email: "lisa@d.com2",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(name) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.name === name
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };

      this.friends.push(newFriendContact);
    },
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
