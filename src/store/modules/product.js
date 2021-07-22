import {GetData} from "../../service/service"
// dispatch action
// commit  mutations
function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
//state ~ data
const state = () => ({
  search: "",
  cart: [],
});

//actions ~ methods
const actions = {
  search({ commit }, data) {
    commit("searchState", data);
  },
  AddToCart({ commit }, data) {
    commit("addToCartState", data);
  },
};

//mutations ~
const mutations = {
  searchState(state, data) {
    state.search = data;
  },
  AddToCartBy(state, data) {
    let item = state.cart.find((i) => i.Id === data.product.Id);
    if (item) {
      item.quantity += data.quantity;
    } else {
      state.cart.push({
        ...data.product,
        quantity: data.quantity,
        totalproduct: data.totalproduct,
      });
    }
    updateLocalStorage(state.cart);
  },
  addToCartState(state, data) {
    let item = state.cart.find((i) => i.Id === data.Id);
    if (item) {
      item.quantity++;
    } else {
      state.cart.push({ ...data, quantity: 1 });
    }
    updateLocalStorage(state.cart);
  },
  AddQuantity(state, index) {
    if (state.cart[index].quantity < state.cart[index].totalproduct) {
      state.cart[index].quantity++;
    } else {
      return;
    }

    updateLocalStorage(state.cart);
  },
  SubQuantity(state, index) {
    if (state.cart[index].quantity == 1) {
      state.cart.splice(index, 1);
      updateLocalStorage(state.cart);
      return;
    }
    state.cart[index].quantity--;
    updateLocalStorage(state.cart);
  },
  DelFormCart(state, index) {
    state.cart.splice(index, 1);
    updateLocalStorage(state.cart);
  },
  DelAllCart(state) {
    state.cart = [];
    localStorage.clear();
  },
  async CheckLocal(state, index) {
    for (let i = 0; i < index.length; i++) {
        let res = await GetData("/product/" + index[i].Name);
        index[i].SalePrice = res.Products.SalePrice
    }
    state.cart = index;
  },
};
//getter ~ computed
export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
