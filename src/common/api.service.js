
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from '@/common/config'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  get (path) {
    return Vue.axios.get(path).catch((error) => {
      throw new Error(error)
    })
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  put (resource, params) {
    return Vue.axios.put(`${resource}`, JSON.stringify(params))
  }
}

export default ApiService
