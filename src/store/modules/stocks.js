const stare = {
  stocks: []
};

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks;
  },
  'RND_STOCKS' (state) {

  }
};

const actions = {
  buyStocks: ({commit}, order) => {
    commit();
  },
  
}