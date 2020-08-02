import Vue from 'vue'
import Vuex from 'vuex'
import { UserInfo } from '@/model/user'

Vue.use(Vuex)

export interface IRootState {
  user: UserInfo

}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})