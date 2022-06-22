const { products } = require('./data.json');

// for export deploy to vercel as fetch localhost is not supported
export const getAllProducts = () => {
  return products;
};

const ProductsAPI = (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};

export default ProductsAPI;
