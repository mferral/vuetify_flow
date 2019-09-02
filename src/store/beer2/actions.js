import { HTTP } from "../http-common.js";
import router from '../../routes'

/* eslint-disable */

export const actions={
    LIST_BEERS: ({ state, commit }) => {    
        commit("SET_BEERS_LIST", []);
        state.loading = true;
        HTTP.get('beers').then(res=>{            
            state.loading = false;
            commit("SET_BEERS_LIST", res.data);
        },
        error=>{
            console.log(error);                
        });
    },
    ADD_BEERS: ({ commit }, params) => {
        commit("SET_LOADING",true);
        HTTP.post('beers', params).then(res=>{                                                  
            commit("SET_LOADING",false);
            console.log(res.data);            
            router.push({ name: 'beer2-list'});
        },
        error=>{            
            console.log(error);
        });
    }
}