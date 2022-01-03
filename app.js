const app = Vue.createApp({
  data: () => ({
    enteredGoalValue: '',
    goals: []
  }),
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    }
  }
});

app.mount('#user-goals');
