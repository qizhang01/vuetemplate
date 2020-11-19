import * as types from '@/store/mutationTypes.js';

export default {
    [types.SET_USER_INFO](state, userInfo) {
        state.userInfo = userInfo;
    },
}
