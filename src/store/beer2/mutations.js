export const mutations={
    SET_BEERS_LIST:(state,val)=>{
        state.beerlist = val
    },
    SET_BEER:(state,val)=>{
        state.beerpost = val
    },
    SET_LOADING:(state,val)=>{
        state.loading = val
    }
}