const app = Vue.createApp({
  data: () => ({
    boxASelected: false,
    boxBSelected: false,
    boxCSelected: false,
  }),
  methods: {
    boxSelected(box) {
      console.log('boxSelected', box);
      if (box === 'A') {
        this.boxASelected = true;
        this.boxBSelected = false;
        this.boxCSelected = false;
      }
      if (box === 'B') {
        this.boxASelected = false;
        this.boxBSelected = true;
        this.boxCSelected = false;
      }
      if (box === 'C') {
        this.boxASelected = false;
        this.boxBSelected = false;
        this.boxCSelected = true;
      }
    }
  }
});

app.mount('#events');
