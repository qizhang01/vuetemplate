import * as types from '@/store/mutationTypes.js';

export default {
    namespaced: true,
    state: {
        userInfo: '123',
    },
    getters: {
        getUserInfo: (state) => {
            const { userInfo } = state;
            return `${userInfo} 111`;
        },
    },
    actions: {
        changeUserInfo({ commit }, info) {
            const userInfo = `this is ${info}`;
            commit(types.SET_USER_INFO, userInfo);
        },
    },
    mutations: {
        [types.SET_USER_INFO](state, userInfo) {
            state.userInfo = userInfo;
        },
        [types.SET_RANK](state, rank) {
            state.rank = rank;
        },
    },
};
