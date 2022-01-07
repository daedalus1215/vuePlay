import { createStore } from 'vuex';

import counterModule from './counter/counterStore'
import authModule from './auth/authStore'

const store = createStore({
    modules: { numbers: counterModule, auth: authModule },
});


export default store;