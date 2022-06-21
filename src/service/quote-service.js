import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://producemart.herokuapp.com/";
const user = JSON.parse(localStorage.getItem("user"));

class QUOTE {
  CreateQuote(parameter) {
    return axios.post(API_URL + "createQuote", parameter, {
      headers: {
        "Authorization": user.token,
        "Content-Type": "application/json"
      }
    });
  }

  GetAllQuote() {
    return axios.get(API_URL + "getAllQuotes", {
      headers: authHeader()
    });
  }

  GetQuoteById(id) {
    return axios.get(API_URL + "getQuote/" + id, {
      headers: authHeader(),
    });
  }

  UpdateQuote(data, id){
    return axios.post(API_URL + "updateQuote/" + id, data, {
      headers: authHeader(),
    });
  }

  DeleteQuote(id) {
    return axios.delete(API_URL + "deleteQuote/" + id, {
      headers: authHeader(),
    });
  }

  addProductQuote(data, id){
    return axios.post(API_URL + "product/" + "addQuote/" + id, data, {
      headers: {
        "Authorization": user.token,
        "Content-Type": "application/json"
      }
    });
  }

  getQuotes() {
    return axios.get(API_URL + "product/" + "getQuotes", {
      headers: authHeader()
    });
  }

  getSingleQuote(id) {
    return axios.get(API_URL + "product/" + "getQuoteById/"+ id, {
      headers: authHeader()
    });
  }

}

export default new QUOTE();