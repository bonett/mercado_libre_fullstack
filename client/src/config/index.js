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
    data: null,
    status: "INITIAL",
  },
};

module.exports = {
  itemInitialStates,
};
