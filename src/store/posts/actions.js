import { HTTP } from "../http-common.js";

export const actions={
    LIST_POST: ({ state, commit }) => {    
        commit("SET_POST_LIST", []);
        state.loading = true;
        HTTP.get('posts').then(res=>{            
            state.loading = false;
            commit("SET_POST_LIST", res.data);
        },
        error=>{
            // eslint-disable-next-line
            console.log(error);                
        });
    },
}