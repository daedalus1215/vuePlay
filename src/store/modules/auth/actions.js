import config from '../../../config';

export default {
    login() { },
    async signup(context, payload) {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${config.API}`, {
            method: 'POST',
            body: JSON.stringify({
                ...{ payload },
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            console.log('responsData', responseData);
            const error = new Error(responseData.message || 'Failed to authenticate');
            throw error;
        }

        console.log('responseData', responseData)
        context.commit('setUser', { token: responseData.idToken, userId: responseData.localId, tokenExpiration: responseData.expiresIn })
    },

};