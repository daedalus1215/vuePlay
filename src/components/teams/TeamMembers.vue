<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  inject: ["users", "teams"],
  props: ["teamId"],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: "Test",
      members: [
        { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
        { id: "u2", fullName: "Max Schwarz", role: "Engineer" },
      ],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      console.log("teamId", teamId);
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      console.log("selectedTeam", selectedTeam);
      this.members = selectedTeam.members.map((member) => {
        return this.users.find((user) => user.id === member);
      });
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    console.log(this.$route.query);
    this.loadTeamMembers(this.teamId);
  },
  beforeRouteUpdate(to, from, next) {
    console.log("users beforeRouteUpdate", to.params.teamId);
    console.log(to, from);
    next();
  },
  watch: {
    teamId(newId) {
      console.log("newId", newId);
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>