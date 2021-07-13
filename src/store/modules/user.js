import {PostData} from "../../service/service"
// dispatch action
// commit  mutations

//state ~ data
const state =()=> ({
    users:{},
});

//actions ~ methods
const actions ={
    async login( {commit},data) {
        try {
        var respond = await PostData("/api/login",data)
        
        // console.log(respond)
            commit("updateUser", respond);
            return 1
        } catch (e) {
            console.log(e);
        }
    }
};

//mutations ~ 
const mutations ={
    updateUser(state, respond) {
        // console.log(respond);
        state.users = respond
    }
};
//getter ~ computed 
export default {
    namespaced:true,
 state, actions, mutations
}