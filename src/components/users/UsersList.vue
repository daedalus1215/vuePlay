<template>
  <ul>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save Changes</button>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {
    UserItem,
  },
  inject: ["users"],
  methods: {
    confirmInput() {
      this.$router.push("/teams");
    },
  },
  data() {
    return {
      changesSaved: false,
    };
  },
  saveChanges() {
    this.saveChanges = true;
  },
  beforeRouteEnter(to, from, next) {
    console.log("UserList Cmp beforeRouteEnter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("UserList Cmp beforeRouteLeave");
    console.log(to, from);
    // Can make sure that we want to leave here
    this.changesSaved && next();
    !this.changesSaved &&
      next(confirm("Are you sure? You got unsaved changes!"));
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>