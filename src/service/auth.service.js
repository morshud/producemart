import axios from "axios";
import spHeader from "./super-authHeader";

const API_URL = "https://producemart.herokuapp.com/";
//const API_URL = "http://localhost:3000/";

class AuthService {
  async login(user)
    {
    const response = await axios.post(API_URL + "signin", {
      email: user.email,
      password: user.password,
    });
    if (response.data.token) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstname: response.data.user.firstname,
          lastname: response.data.user.lastname,
          token: response.data.token,
        })
      );
    }
    return response.data;
  }

  async loginSuperAdmin(user) {
    const response = await axios.post(API_URL + "adminLogin", {
      email: user.email,
      password: user.password,
    });
    if (response.data.token) {
      localStorage.setItem(
        "SuperAdmin",
        JSON.stringify({
          token: response.data.token,
        })
      );
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
    return axios.get(
      `${API_URL}logout`
    );
  }

  logoutAdmin() {
    localStorage.removeItem("SuperAdmin");
    return axios.get(
      `${API_URL}logout`
    );
  }

  register(user) {
    return axios.post(API_URL + "register-buyer", {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      phone_no: user.phone_no,
      password: user.password,
      company_name: user.company_name,
      country: user.country,
    });
  }
  supplier(user) {
    return axios.post(API_URL + "regiuserster-supplier", {
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      phone_no: user.phone_no,
      password: user.password,
      company_name: user.company_name,
      country: user.country,
    });
  }

  verify(id, token) {
    return axios.get(
      `${API_URL}email-verification/${id}/${token}`
    );
  }

  getOrganizers() {
    return axios.get(API_URL + "dashboard/profile", { headers: spHeader() });
  }
}

export default new AuthService();
