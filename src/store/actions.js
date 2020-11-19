import * as types from '@/store/mutationTypes.js';

export default {
    changeUserInfo({ commit }, info) {
        const userInfo = `this is ${info}`;
        commit(types.SET_USER_INFO, userInfo);
    },
}
