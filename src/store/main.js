import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   eq : [
    {name: 'Drewno', item: 'wood', count: 1},
    {name: 'Metal', item: 'metal', count: 2},
    {name: 'Plastik', item: 'plastic', count: 3},
    {name: 'W ogóle niepotrzebny', item: 'niepotrzebny', count: 1},
    {name: 'Ceramika', item: 'ceramika', count: 1},
    {name: 'Piasek', item: 'piasek', count: 2},
    {name: 'Piasek2', item: 'piasek2', count: 2}
  ],
  ingredients: [
    
  ],
  canBeCreated: '',
  queue: []
  },
  mutations: {
    CAN_BE_CREATED_ITEM (state, item) {
      state.canBeCreated = item
    },
    QUEUE_ADD: function (state, item) {
      state.queue.push(item);
    },
    RESET_INGREDIENTS: function (state, items) {
      state.ingredients = [];
      const newEq = [...state.eq]
      console.log(newEq)
      console.log(items)
      const names = [];
      items.map(item => {
        names.push(item.item);
      })
      Object.keys(state.eq).forEach((key) => {
        if (names.includes(state.eq[key].item)) {
          newEq[key].count = newEq[key].count - 1;
        }
      })
    }
  },
  getters: {
    newIngredients(state) {
      return state.ingredients
    }
  }
})