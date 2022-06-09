import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://producemart.herokuapp.com/";

class QUOTE {
  CreateQuote(parameter) {
    return axios.get(API_URL + "createQuote", parameter, {
      headers: authHeader()
    });
  }

  GetAllQuote() {
    return axios.get(API_URL + "getAllQuotes", {
      headers: authHeader()
    });
  }

  GetQuoteById(id) {
    return axios.post(API_URL + "getQuote/" + id, {
      headers: authHeader(),
    });
  }

  UpdateQuote(data, id){
    return axios.post(API_URL + "updateQuote/" + id, data {
      headers: authHeader(),
    });
  }

  DeleteQuote(id) {
    return axios.post(API_URL + "deleteQuote/" + id {
      headers: authHeader(),
    });
  }

}

export default new QUOTE();