import { HTTP } from "../http-common.js";
import router from '../../routes'

/* eslint-disable */
export const actions={
    LIST_POST: ({ state, commit }) => {    
        commit("SET_POST_LIST", []);
        commit("SET_LOADING",true);
        HTTP.get('posts').then(res=>{            
            commit("SET_LOADING",false);
            commit("SET_POST_LIST", res.data);
        },
        error=>{
            console.log(error);                
        });
    },
    GET_POST: ({ state, commit }, id) => {    
        HTTP.get('posts/'+ id).then(res=>{                                                  
            commit("SET_POST",res.data);
        },
        error=>{            
            console.log(error);
        });
    },
    ADD_POST: ({ state, commit }, params) => {
        commit("SET_LOADINGSAVE",true);
        HTTP.post('posts', params).then(res=>{                                                  
            commit("SET_LOADINGSAVE",false);
            console.log(res.data);            
            router.push({ name: 'post-list'});
        },
        error=>{            
            console.log(error);
        });
    },
    EDIT_POST: ({ state, commit }, params) => {
        commit("SET_LOADINGSAVE",true);
        HTTP.put('posts/'+params.id, params).then(res=>{                                                  
            commit("SET_LOADINGSAVE",false);
            console.log(res.data);      
            router.push({ name: 'post-list'});
        },
        error=>{            
            console.log(error);
        });
    },
}