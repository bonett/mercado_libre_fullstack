require("dotenv").config();
const Request = require("request");
const API_URL = `${process.env.API}`;
const AUTHOR = {
  name: `${process.env.NAME_AUTHOR}`,
  lastname: `${process.env.SURNAME_AUTHOR}`,
};

/**
 * getItemDetailsById returns Item detail by ID.
 *
 * @param  req Information about the HTTP request
 * @param  res Response HTTP
 * @return     Returns Item detail by ID.
 */
const getItemDetailsById = async (req, res) => {
  const {
    params: { id },
  } = req;

  Request.get(`${API_URL}items/${id}`, (error, response, body) => {
    try {
      const {
        id,
        title,
        currency_id,
        price,
        condition,
        thumbnail,
        shipping: { free_shipping },
        sold_quantity,
      } = JSON.parse(body);

      Request.get(
        `${API_URL}items/${id}/description`,
        (error, response, body) => {
          try {
            const itemDescroption = JSON.parse(body);
            const resItemDetail = {
              author: AUTHOR,
              item: {
                id,
                title,
                price: {
                  currency: currency_id,
                  amount: parseInt(price.toString().split(".")[0]),
                  decimals: parseInt(price.toString().split(".")[1]),
                },
                picture: thumbnail,
                condition: condition === "new" ? "Nuevo" : "Usado",
                free_shipping,
                sold_quantity,
                description: itemDescroption.plain_text,
              },
            };
            res.status(200).json(resItemDetail);
          } catch (error) {}
        }
      );
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  });
};

module.exports = getItemDetailsById;
