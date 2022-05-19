import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://producemart.herokuapp.com/";

class ProfileService {
  getProfile() {
    return axios.get(API_URL + "dashboard/profile", { headers: authHeader() });
  }

  editProfile(data) {
    return axios.patch(API_URL + "user/update",data, {
      headers: authHeader(),
    });
  }

  changePassword(password) {
    return axios.post(API_URL + "changepassword", password, {
      headers: authHeader(),
    });
  }
}

export default new ProfileService();
