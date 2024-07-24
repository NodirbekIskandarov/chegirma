import { login } from "../utils/API_urls";
import { postRequest } from "../utils/request";


class UserService{

    static login = (data) => {
        return postRequest(login, data)
    }
}


export default UserService;