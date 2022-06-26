export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://theblindfoldshop-backend.herokuapp.com'
    : 'http://localhost:3002';

// set isUsingLocalJsonData to true when using local data (api/products/data.json)
// if set to false, it will use strapi backend
export const isUsingLocalJsonData = true;

// TODO: temporary till login and roles are implemented
export const isAdmin = true;
