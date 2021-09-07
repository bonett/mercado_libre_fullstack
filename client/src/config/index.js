const itemInitialStates = {
  queryString: {
    q: "",
  },
  categories: {
    list: [],
  },
  itemList: {
    data: [],
    status: "INITIAL",
  },
  itemSelected: {
    id: null,
  },
  itemDetail: {
    data: { item: {} },
    status: "INITIAL",
  },
};

module.exports = {
  itemInitialStates,
};
