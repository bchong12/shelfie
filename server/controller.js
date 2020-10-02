module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get("db");

    db.get_inventory()
      .then((products) => {
        res.status(200).send(products);
      })
      .catch((err) => console.log(err));
  },
  addProduct: (req, res) => {
    const db = req.app.get("db");

    const { name, imageUrl, price } = req.body;

    db.create_product({ name, imageUrl, price })
      .then((products) => res.status(200).send(products))
      .catch((err) => console.log(err));
  },
  deleteProduct: (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;

    db.delete_product({ id })
      .then((products) => res.status(200).send(products))
      .catch((err) => console.log(err));
  },
  updateProduct: (req, res) => {
    const db = req.app.get("db");

    const { id } = req.params;
    const { name, price, imageUrl } = req.body;

    db.update_product({ id, name, price, imageUrl })
      .then((products) => res.status(200).send(products))
      .catch((err) => console.log(err));
  },
};
