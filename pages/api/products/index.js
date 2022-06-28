const { products } = require('./data.json');
import { API_URL, isUsingLocalJsonData } from '@/config/index';

// for deploying to vercel as fetch localhost api route is not supported
export const getAllProducts = async () => {
  if (isUsingLocalJsonData) {
    // when using local data, data.json, use this:
    return products;
  } else {
    const productsFromStrapi = await fetch(
      `${API_URL}/api/products?populate=*`
    );
    const res = await productsFromStrapi.json();

    // transform data from strapi to match data.json (except the images)

    const transformedProducts = res.data.map((product) => {
      return {
        id: product.id,
        name: product.attributes.name,
        slug: product.attributes.slug,
        price: product.attributes.price,
        image: product.attributes.image,
        categories: product.attributes.categories.data.map(
          (i) => i.attributes.name
        ),
        colors: product.attributes.colors.data.map((i) => i.attributes.name),
        sizes: product.attributes.sizes.data.map((i) => i.attributes.name),
      };
    });

    return transformedProducts;
  }
};

const ProductsAPI = async (req, res) => {
  try {
    if (req.method === 'GET') {
      res.status(200).json(await getAllProducts());
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default ProductsAPI;
