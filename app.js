const app = Vue.createApp({
  data() {
    return { goals: [] };
  },
  methods: {
    addGoal(goal) {
      this.goals.push(goal);
      console.log('this.goals')
    }
  }
});

app.mount('#user-goals');
