import { HTTP } from "../http-common.js";

export const actions={
    LIST_BEERS: ({ state, commit }) => {    
        commit("SET_BEERS_LIST", []);
        state.loading = true;
        HTTP.get('beers').then(res=>{            
            state.loading = false;
            commit("SET_BEERS_LIST", res.data);
        },
        error=>{
            // eslint-disable-next-line
            console.log(error);                
        });
    },
}