import axios from 'axios';

const apiEndpoints = {
  posts: '/api/posts',
  layouts: '/api/layout',
  bins: '/api/bin',
  items: '/api/items',
  warehouses: '/api/warehouse',
  inventories: '/api/inventory',
  binQuantities: '/api/binQty',
  recaptcha: '/api/recaptcha',
};

export default {
  // Posts
  getPosts() {
    return axios.get(apiEndpoints.posts);
  },
  getPost(id) {
    return axios.get(`${apiEndpoints.posts}/${id}`);
  },
  deletePost(id) {
    return axios.delete(`${apiEndpoints.posts}/${id}`);
  },
  savePost(postData) {
    return axios.post(apiEndpoints.posts, postData);
  },

  // Layouts
  getLayouts() {
    return axios.get(apiEndpoints.layouts);
  },
  getLayout(id) {
    return axios.get(`${apiEndpoints.layouts}/${id}`);
  },
  deleteLayout(id) {
    return axios.delete(`${apiEndpoints.layouts}/${id}`);
  },
  saveLayout(postData) {
    return axios.post(apiEndpoints.layouts, postData);
  },

  // Bins
  getBins() {
    return axios.get(apiEndpoints.bins);
  },

  // Items
  getItems() {
    return axios.get(apiEndpoints.items);
  },
  getItem(id) {
    return axios.get(`${apiEndpoints.items}/${id}`);
  },
  deleteItem(id) {
    return axios.delete(`${apiEndpoints.items}/${id}`);
  },
  saveItem(postData) {
    return axios.post(apiEndpoints.items, postData);
  },
  updateItem(id, postData) {
    return axios.put(`${apiEndpoints.items}/${id}`, postData);
  },

  // Warehouses
  getWarehouses() {
    return axios.get(apiEndpoints.warehouses);
  },
  getWarehouse(id) {
    return axios.get(`${apiEndpoints.warehouses}/${id}`);
  },
  deleteWarehouse(id) {
    return axios.delete(`${apiEndpoints.warehouses}/${id}`);
  },
  saveWarehouse(postData) {
    return axios.post(apiEndpoints.warehouses, postData);
  },

  // Inventories
  getInventories() {
    return axios.get(apiEndpoints.inventories);
  },
  getInventoryId() {
    return axios.get(`${apiEndpoints.inventories}id`);
  },
  getInventory(id) {
    return axios.get(`${apiEndpoints.inventories}/${id}`);
  },
  deleteInventory(id) {
    return axios.delete(`${apiEndpoints.inventories}/${id}`);
  },
  saveInventory(postData) {
    return axios.post(apiEndpoints.inventories, postData);
  },

  // Bin Quantities
  getBinQuantities() {
    return axios.get(apiEndpoints.binQuantities);
  },
  getBinQuantity(id) {
    return axios.get(`${apiEndpoints.binQuantities}/${id}`);
  },
  deleteBinQuantity(id) {
    return axios.delete(`${apiEndpoints.binQuantities}/${id}`);
  },
  saveBinQuantity(postData) {
    return axios.post(apiEndpoints.binQuantities, postData);
  },
  updateBinQuantity(id, postData) {
    return axios.put(`${apiEndpoints.binQuantities}/${id}`, postData);
  },

  // Recaptcha
  async validateToken(token) {
    try {
      const response = await axios.post(apiEndpoints.recaptcha, { token });
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
