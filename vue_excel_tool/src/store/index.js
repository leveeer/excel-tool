import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapse: false,
    tabList: [{name: "首页", path: "/index"}],
    userId: null,
    roleList: null,
    avatar: null,
    nickname: null,
    intro: null,
    webSite: null,
    userMenuList: [],
    username: "",
    password: "",
    token: "",
  },
  mutations: {
    saveTab(state, tab) {
      if (state.tabList.findIndex(item => item.path === tab.path) === -1) {
        state.tabList.push({ name: tab.name, path: tab.path });
      }
    },
    removeTab(state, tab) {
      var index = state.tabList.findIndex(item => item.name === tab.name);
      state.tabList.splice(index, 1);
    },
    resetTab(state) {
      state.tabList = [{ name: "首页", path: "/index" }];
    },
    trigger(state) {
      state.collapse = !state.collapse;
    },
    login(state, user) {
      state.username = user.username;
      state.password = user.password;
    },
    saveUserMenuList(state, userMenuList) {
      state.userMenuList = userMenuList;
    },

    refreshToken(state, token) {
      state.token = token;
    },
    logout(state) {
      state.userId = null;
      state.roleList = null;
      state.avatar = null;
      state.nickname = null;
      state.intro = null;
      state.webSite = null;
      state.userMenuList = [];
      state.token = null;
    },
    updateAvatar(state, avatar) {
      state.avatar = avatar;
    },
    updateUserInfo(state, user) {
      state.nickname = user.nickname;
      state.intro = user.intro;
      state.webSite = user.webSite;
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
