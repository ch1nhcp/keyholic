import {PostData} from "../../service/service"
// dispatch action
// commit  mutations

//state ~ data
const state =()=> ({
    users:"",
    usersadmin:"",
    is:false,
    regiser:false,
    admin:false
});

//actions ~ methods
const actions ={
    async loginadmin( {commit},data) {
        try {
        var respond = await PostData("/api/loginadmin",data)
        console.log(respond)
            commit("updateUserAdmin", respond);
        } catch (e) {
            console.log(e);
        }
    },
    async login( {commit},data) {
        try {
        var respond = await PostData("/api/login",data)
        console.log(respond)
            commit("updateUser", respond);
        } catch (e) {
            console.log(e);
        }
    },
    async checkuser( {commit},data) {
        try {
        var respond = await PostData("/checkcookie",data)
        // console.log(respond)
            commit("updateUser", respond);
        } catch (e) {
            console.log(e);
        }
    },
    async logout( {commit}) {
        try {
        // console.log(respond)
            commit("updateUser", false);
        } catch (e) {
            console.log(e);
        }
    },
    async signup({commit}, data) {
        try {
        var respond = await PostData("/api/register",data)
            commit("register", respond);
        } catch (e) {
            console.log(e);
        }
    },
};
//mutations ~ 
const mutations ={
    updateUser(state, respond) {
        if(respond.Id>0){
            state.users = respond
            state.is = true
        }else{
            state.users = respond
            state.is = false
        }
    },
    updateUserAdmin(state, respond) {
        if(respond.Id>0){
            if(respond.Permission==1){
                state.usersadmin = respond
                state.admin = true
            }
        }else{
            state.usersadmin = respond
            state.admin = false
        }
    },
    register(state, respond) {
        if(respond!=""){
            state.regiser=true
        }
    },
};
//getter ~ computed 
export default {
    namespaced:true,
 state, actions, mutations
}