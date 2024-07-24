import { home_products } from "../utils/API_urls";
import { getRequest } from "../utils/request"

class HomeService {
  static getProducts = () => {
    return getRequest(home_products); // Ensure full URL is used
  }
}

export default HomeService;
