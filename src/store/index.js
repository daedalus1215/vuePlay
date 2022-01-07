import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import authStore from './modules/auth/authStore.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authStore,
  }
});

export default store;