require("dotenv").config();
const Request = require("request");

const API_URL = `${process.env.API}`;
const author = {
  name: `${process.env.NAME_AUTHOR}`,
  lastname: `${process.env.SURNAME_AUTHOR}`,
};

const setCategoriesByItem = (querystring, filters) => {
  if (filters.length > 0) {
    const {
      value: { path_from_root },
    } = filters;

    return path_from_root.map((category) => {
      return category.name;
    });
  } else {
    let categories = [];
    return categories.push(querystring);
  }
};

const getItemByQuery = async (req, res) => {
  const {
    query: { q: querystring },
  } = req;

  Request.get(
    `${API_URL}sites/MLA/search?q=${querystring}`,
    async (error, response, body) => {
      try {
        const { filters, results } = JSON.parse(body);

        const categories = await setCategoriesByItem(querystring, filters);
        const items = results.map((item) => {
          return {
            ...item,
            price: {
              currency: item.currency_id,
              amount: parseInt(item.price.toString().split(".")[0]),
              decimals: parseInt(item.price.toString().split(".")[1]),
            },
            condition: item.condition === "new" ? "Nuevo" : "Usado",
            free_shipping: item.shipping.free_shipping,
            address: item.address.state_name,
          };
        });

        res.status(200).json({
          author,
          categories,
          items,
        });
      } catch (err) {
        res.status(500).json({
          message: err.message,
        });
      }
    }
  );
};

module.exports = getItemByQuery;
