import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const state = {
  photos: []
}

const mutations = {
  getAllPhoto (state, payload) {
    state.photos = payload
  },
  getPhoto (state, payload) {
    state.photos.push(payload)
  },
  deletePhoto (state, payload) {
    state.photos.forEach((photo, index) => {
      console.log()
      if (photo._id === payload) {
        state.photos.splice(index, 1)
      }
    })
  }
}

const actions = {
  getAllPhotos ({ commit }) {
    http.get('http://localhost:3000/api/photos/list')
    .then(({data}) => {
      commit('getAllPhoto', data)
    })
  },
  postPhoto ({commit}, payload) {
    http.post('http://localhost:3000/api/photos/upload', payload)
    .then(({data}) => {
      commit('getPhoto', data)
    })
  },
  deletePhoto ({commit}, payload) {
    http.delete(`http://localhost:3000/api/photos/destroy/${payload}`)
    .then(({data}) => {
      // console.log(data)
      commit('deletePhoto', payload)
    })
  },
  login ({commit}, payload) {
    http.post(`http://localhost:3000/api/users/signin`, payload)
    .then(({data}) => {
      // console.log(data)
      commit('deletePhoto', payload)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store