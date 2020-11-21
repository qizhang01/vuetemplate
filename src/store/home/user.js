import * as types from '@/store/mutationTypes.js';

export default {
    namespaced: true,
    state: {
        showPictureUrl: '../../static/img/1.jpg',
        ifShowRightText: true
    },
    getters: {
        getUserInfo: (state) => {
            const { showPictureUrl } = state;
            return showPictureUrl;
        },
    },
    actions: {
        changePictureUrl({ commit }, info) {
            commit(types.SET_SHOW_IMG, info);
        },
    },
    mutations: {
        [types.SET_SHOW_IMG](state, info) {
            state.showPictureUrl = info.origin;
            state.ifShowRightText = info.position === 'left';
        },
    },
};
