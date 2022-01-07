import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';


const store = createStore({
    state() {
        return {
            isLogged: false,
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
        login(state) {
            state.isLogged = true;
        },
        logout(state) {
            state.isLogged = false;
        }
    },
    actions: {
        increment(context) {
            // can use the same name here as mutations. Often you will use the same name. Actions, unlike mutations, can run async code.
            setTimeout(() => { context.commit('increment') }, 2000) // "commit" a "mutation"
        }, 
        increase(context, payload) {
            // Could change the payload here, or use async here.
            context.commit('increase', payload);
        },
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }

            return finalCounter;
        },
        isLogged(state) {
            return state.isLogged;
        }
    }
});


createApp(App)
    .use(store)
    .mount('#app');

