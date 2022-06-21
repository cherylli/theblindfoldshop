const { products } = require('./data.json');

export default (req, res) => {
  const filteredProducts = products.filter((product) =>
    product.category.includes(req.query.category)
  );

  if (req.method === 'GET') {
    res.status(200).json(filteredProducts);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
