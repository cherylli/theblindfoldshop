const { allSizes } = require('../data.json');
import { API_URL, isUsingLocalJsonData } from '@/config/index';

export const getAllSizes = async () => {
  if (isUsingLocalJsonData) return allSizes;
};

const AllProductSizesAPI = async (req, res) => {
  try {
    if (req.method === 'GET') {
      res.status(200).json(await getAllSizes());
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default AllProductSizesAPI;
