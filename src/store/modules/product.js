// import {GetData} from "../../service/service"
// dispatch action
// commit  mutations
function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
//state ~ data
const state =()=> ({
  search:"",
  cart:[],
});

//actions ~ methods
const actions ={
     search( {commit},data) {
        commit("searchState", data);
    },
    AddToCart({commit},data){
        commit("addToCartState", data);
    },
    
  
    
};

//mutations ~ 
const mutations ={
    searchState(state, data) {
        state.search = data
    },
    AddToCartBy(state,data){
        let item = state.cart.find(i=> i.Id ===data.product.Id)
        if(item){
            item.quantity+= data.quantity
        }
        else{
            state.cart.push({...data.product,quantity:data.quantity})
        }
        updateLocalStorage(state.cart)
    },
    addToCartState(state,data){
        let item = state.cart.find(i=> i.Id ===data.Id)
        if(item){
            item.quantity++
        }
        else{
            state.cart.push({...data,quantity:1})
        }
        updateLocalStorage(state.cart)
    },
    AddQuantity(state, index){
        state.cart[index].quantity++
        updateLocalStorage(state.cart)
    },
    SubQuantity(state, index){
        if(state.cart[index].quantity==1){
            state.cart.splice(index,1)
            updateLocalStorage(state.cart)
            return
        }
        state.cart[index].quantity--
        updateLocalStorage(state.cart)
    },
    DelFormCart(state, index){
        state.cart.splice(index,1)
        updateLocalStorage(state.cart)
    },
    CheckLocal(state,index){
        state.cart = index
    }
    
};
//getter ~ computed 
export default {
    namespaced:true,
 state, actions, mutations
}