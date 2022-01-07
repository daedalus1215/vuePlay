export default {
    login(state) {
        state.isLogged = true;
    },
    logout(state) {
        state.isLogged = false;
    }
}