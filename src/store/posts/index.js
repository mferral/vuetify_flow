import { mutations } from './mutations'
import { actions } from './actions'

export default {
    state: {
        post: {},
        list:[],
        loading: false
    },
    mutations,
    actions
};