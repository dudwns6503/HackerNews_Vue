import {
  fetchNewsList, fetchJobsList, fetchAskList, fetchList, fetchUserInfo, fetchCommentItem,
} from '../api/index.js';

export default {
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },

  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.log(error);
      })
  },

  FETCH_ASK({ commit }) {
    return fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => {
        console.log(error);
      })
  },

  FETCH_USER({ commit }, userName) {
    return fetchUserInfo(userName)
      .then(({ data })=> {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      }) 
  },

  async FETCH_ITEM({ commit }, id) {
    try {
      const response = await fetchCommentItem(id);
      commit('SET_ITEM', response.data);
      return response;
    }
    catch (error) {
      console.log(error);
    }
  },

  async FETCH_LIST({ commit }, pageName) {
    try {
      const response = await fetchList(pageName)
      commit('SET_LIST', response.data);
      return response;
    }
    catch (error) {
      console.log(error);
    }
  },
}