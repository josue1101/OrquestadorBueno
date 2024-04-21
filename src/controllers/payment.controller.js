//-----------------------------------------------------Mercado Pago ----------------------------------------------------------
const mercadopago = require("mercadopago");
const PORT = 4000;
const HOST = "http://localhost: " + PORT;
const createOrderMP = async (req, res) => {
  mercadopago.configure({
    access_token:
      "TEST-1567338789016917-102921-70531cc6c0e43143b1e79d88a6be3ed6-1529720876",
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "Laptop",
        unit_price: 5000,
        currency_id: "MXN",
        quantity: 1,
      },
    ],
  });

  console.log(result);

  res.send("creating orderr");
};

module.exports = {
  createOrderMP,
};
