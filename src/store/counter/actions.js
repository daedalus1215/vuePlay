export default {
    increment(context) {
        // can use the same name here as mutations. Often you will use the same name. Actions, unlike mutations, can run async code.
        setTimeout(() => { context.commit('increment') }, 2000) // "commit" a "mutation"
    },
    increase(context, payload) {
        // Could change the payload here, or use async here.
        context.commit('increase', payload);
    },
};