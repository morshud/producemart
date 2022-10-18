import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://producemart.herokuapp.com/";
//const API_URL = "http://localhost:3000/";
const user = localStorage.getItem("user");
//console.log(user)


class QUOTE {
  RequestProduct(parameter) {
    //console.log(user)
    return axios.post(API_URL + "requestProduct", parameter, {
      headers: authHeader()
    });
  }

  PlaceBid(params){
    return axios.post(API_URL + "placeRequestBid", params, {
      headers: authHeader()
    });
  }

  /*CheckIfPlaced(userId){
    console.log(user)
    return axios.get(API_URL + "getRequestBidByUserId/" + userId, {
        params: {
          userId: user._id,
        },
        headers: authHeader(),
      });
  }*/

  GetAllBuyerRequest(id){
    return axios.get(API_URL + "getAllBuyerRequest/" + id, {
      headers: authHeader()
    });
  }

  GetSupplierBid(id){
    return axios.get(API_URL + "getSupplierBid/" + id, {
      headers: authHeader()
    });
  }

  GetSingleBid(id){
    return axios.get(API_URL + "getSingleBid/" + id, {
      headers: authHeader()
    });
  }

  AcceptBid(id, params){
    return axios.patch(API_URL + "acceptBid/" + id, params, {
      headers: authHeader()
    });
  }

  GetSingleRequest(id){
    return axios.get(API_URL + "getSingleRequest/" + id, {
      headers: authHeader()
    });
  }

  GetRequestBidderList(id){
    return axios.get(API_URL + "GetRequestBidderList/" + id, {
      headers: authHeader()
    });
  }

  GetAllRequest() {
    return axios.get(API_URL + "getAllRequests", {
      headers: {
        "Content-Type": "application/json"
      }
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
      headers: authHeader(),
    });
  }

  getSingleQuote(id) {
    return axios.get(API_URL + "product/" + "getQuoteById/"+ id, {
      headers: authHeader()
    });
  }

}

export default new QUOTE();