const { products } = require('./data.json');

const ProductsAPI = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};

export default ProductsAPI;
