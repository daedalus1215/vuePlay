const app = Vue.createApp({
  data: () => ({
    counter: 0,
    name: '',
  }),
  methods: {
    addCounter() {this.counter = this.counter + 1},
    removeCounter() {this.counter = this.counter -1},
    setName(event, lastName) { this.name = event.target.value + ` ${lastName}`},
    submitForm() {
      alert('Submitted!')
    },
    confirmInput() {
      this.name = 'Just another Name'
    },
    resetInput() {
      
    }
  }
});

app.mount('#events');
