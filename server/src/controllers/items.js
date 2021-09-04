require("dotenv").config();
const _ = require("lodash");

const Request = require("request");
const API_URL = `${process.env.API}`;
const author = {
  name: "Wilfrido",
  lastname: "Bonett",
};

module.exports = {
  index: async (req, res) => {
    const queryString = req.query.q;
    Request.get(`${API_URL}sites/MLA/search?q=${queryString}`, (body) => {
      try {
        const data = JSON.parse(body);
        let filters = [],
          paths = [],
          categories = [];

        if (data.filters.length !== 0) {
          filters = data.filters && data.filters[0];
          paths = filters.values && filters.values[0];
          categories = _.map(paths.path_from_root, (path) => {
            return path.name;
          });
        } else {
          categories.push(queryString);
        }

        const items = _.map(data.results, (item) => {
          return {
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: parseInt(item.price.toString().split(".")[0]),
              decimals: parseInt(item.price.toString().split(".")[1]),
            },
            picture: item.thumbnail,
            condition: item.condition === "new" ? "Nuevo" : "Usado",
            free_shipping: item.shipping.free_shipping,
            address: item.address.state_name,
          };
        });
        const response = {
          author,
          categories,
          items,
        };
        res.status(200).json(response);
      } catch (err) {
        res.status(500).json({
          message: err.message,
        });
      }
    });
  },
};
