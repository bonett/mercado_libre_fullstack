const itemInitialStates = {
  queryString: {
    q: "",
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
