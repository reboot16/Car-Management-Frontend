import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import MobilStore from '@/store/MobilStore'
import PenjualanStore from '@/store/PenjualanStore'

export default new Vuex.Store({
  modules: {
    MobilStore,
    PenjualanStore
  }
})
