import axios from 'axios';

const API_BASE_URL = "http://localhost:9080";

class UserService {
  getItem() {
    return axios.get(`${API_BASE_URL}/inventory_niswaalfiyya`);
  }

  createItem(inventory) {
    return axios.post(`${API_BASE_URL}/inventory_niswaalfiyya`, inventory);
  }

  getItemById(inventoryId) {
    return axios.get(`${API_BASE_URL}/inventory_niswaalfiyya/${inventoryId}`);
  }

  updateItem(inventory, inventoryId) {
    return axios.put(`${API_BASE_URL}/inventory_niswaalfiyya/${inventoryId}`, inventory);
  }

  deleteItem(inventoryId) {
    return axios.delete(`${API_BASE_URL}/inventory_niswaalfiyya/${inventoryId}`);
  }

  searchItemByName(name) {
    return axios.get(`${API_BASE_URL}/inventory_niswaalfiyya/search?name=${name}`);
  }
}

export default new UserService();
