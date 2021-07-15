// import {GetData} from "../../service/service"
// dispatch action
// commit  mutations

//state ~ data
const state =()=> ({
  search:"",
});

//actions ~ methods
const actions ={
     search( {commit},data) {
        commit("searchState", data);
    },
  
    
};

//mutations ~ 
const mutations ={
    searchState(state, data) {
        state.search = data
    },
};
//getter ~ computed 
export default {
    namespaced:true,
 state, actions, mutations
}