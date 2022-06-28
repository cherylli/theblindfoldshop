const { allColors } = require('../data.json');
import { API_URL, isUsingLocalJsonData } from '@/config/index';

export const getAllColors = async () => {
  if (isUsingLocalJsonData) return allColors;
};

const AllProductColorsAPI = async (req, res) => {
  try {
    if (req.method === 'GET') {
      res.status(200).json(await getAllColors());
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} is not allowed` });
    }
  } catch {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default AllProductColorsAPI;
