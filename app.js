const app = Vue.createApp({
  data: () => ({
    counter: 0,
    name: '',
  }),
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '') {
        return '';
      }
      return `${this.name} Schwarzmuller`
    },
    methods: {
      addCounter() { this.counter = this.counter + 1 },
      removeCounter() { this.counter = this.counter - 1 },
      setName(event, lastName) { this.name = event.target.value + ` ${lastName}` },
      submitForm() {
        alert('Submitted!')
      },
      confirmInput() {
        this.name = 'Just another Name'
      },
    }
  }
});

app.mount('#events');
