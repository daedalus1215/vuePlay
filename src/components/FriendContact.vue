<template>
  <h2>Friends Contact</h2>
  <ul>
    <li>
      <h3>{{ friend.name }}</h3>
      <button @click="toggleDetails">Show Details</button>
    </li>
    <ul v-if="detailsAreVisible">
      <li>Name: {{ friend.fullName }}</li>
      <li>email: {{ friend.email }}</li>
    </ul>
  </ul>
</template>

<script>
export default {
    data: () => ({
        detailsAreVisible: false,
        friend:       {
        name: "Manual",
        fullName: "Manual Ad",
        email: "fiction@d.com",
        age: "12",
      },
    }),
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>

<style>
</style>