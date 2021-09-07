require("dotenv").config();
const Request = require("request");

const API_URL = `${process.env.API}`;
const AUTHOR = {
  name: `${process.env.NAME_AUTHOR}`,
  lastname: `${process.env.SURNAME_AUTHOR}`,
};

/**
 * setCategoriesByItem returns item category.
 *
 * @param  querystring Queryparams to find categories
 * @param  filters     FilterList for categories
 * @return             Returns item category.
 */
const setCategoriesByItem = (querystring, filters) => {
  if (filters.length > 0) {
    const { values } = filters[0];
    let newCategories = values.map((category) => {
      return category.name;
    });
    return newCategories.concat(querystring);
  } else {
    return [querystring];
  }
};

/**
 * getItemByParam returns an item list by query param. for Example query=ipod.
 *
 * @param  req Information about the HTTP request
 * @param  res Response HTTP
 * @return     Returns an item list by query.
 */
const getItemByParam = async (req, res) => {
  const {
    query: { q: querystring },
  } = req;

  Request.get(
    `${API_URL}sites/MLA/search?q=${querystring}&limit=4`,
    async (error, response, body) => {
      try {
        const { filters, results } = JSON.parse(body);
        const categories = await setCategoriesByItem(querystring, filters);
        const items = await results.map((item) => {
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
          author: AUTHOR,
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

module.exports = getItemByParam;
