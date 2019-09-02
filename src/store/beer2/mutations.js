export const mutations={
    SET_BEERS_LIST:(state,val)=>{
        state.list = val
    },
    SET_BEER:(state,val)=>{
        state.post = val
    },
    SET_LOADING:(state,val)=>{
        state.loading = val
    }
}