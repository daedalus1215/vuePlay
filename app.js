const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: 'manual', name: 'manuel lorenz', phone: '5555555', email: 'fictionary.com' },
                { id: 'julie', name: 'julie jones', phone: '5555555', email: 'fictionary.com' },
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails"> {{detailsAreVisible ? 'Hide' : 'Show' }} Show Details</button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{friend.phone }}</li>
        <li><strong>Email:</strong>{{friend.email }}</li>
        </ul>
    </li>
    `,
    data: () => ({
        detailsAreVisible: false,
        friend: { id: 'manual', name: 'manuel lorenz', phone: '5555555', email: 'fictionary.com' },
    }),
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
});

app.mount('#app');