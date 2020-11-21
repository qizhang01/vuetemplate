import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'
import home from './home';

Vue.use(Vuex);

const modules = {
    ...home,
};

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    modules,
    actions, // 根级别的 action
    mutations, // 根级别的 mutations
    // 根级别的 getters
    getters: {
        getUserInfo(state) {
            return state.userInfo
        }
    }
})
