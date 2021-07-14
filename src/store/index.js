import { createStore } from "vuex";
import user from "./modules/user";
import product from "./modules/product";


const store = createStore({
    modules:{
        user,
        product
    }
})

export default store;