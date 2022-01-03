const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {id: 'manual', name: 'manuel lorenz', phone: '5555555', email:'fictionary.com'},
                {id: 'julie', name: 'julie jones', phone: '5555555', email:'fictionary.com'},
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
});

app.mount('#app');