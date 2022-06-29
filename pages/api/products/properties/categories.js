const { allCategories } = require('../data.json');
import { API_URL, isUsingLocalJsonData } from '@/config/index';

export const getAllCategories = async () => {
  if (isUsingLocalJsonData) return allCategories;
  //TODO: else return from strapi
};

const AllProductCategoriesAPI = async (req, res) => {
  try {
    if (req.method === 'GET') {
      res.status(200).json(await getAllCategories());
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default AllProductCategoriesAPI;
