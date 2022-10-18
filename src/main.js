import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import store from "./store";
import CKEditor from "@ckeditor/ckeditor5-vue";
import VueApexCharts from "vue3-apexcharts";
import VueAwesomePaginate from "vue-awesome-paginate";
import VueSocialSharing from 'vue-social-sharing'


// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const app = createApp(App);

app.config.errorHandler = function (err, vm, info) {
  /*console.log({
    error: err,
    params: {info: info}
  })*/
}
app.config.errorCaptured = function(err,vm,info) {
  //console.log(`cat EC: ${err.toString()}\ninfo: ${info}`); 
}

window.onerror = function(message, source, line, column, error) {
  /*console.log({
    message: message,
    source: source,
    line: line,
    error: error
  })*/
}

app.use(CKEditor).use(VueSocialSharing).use(router).use(VueAwesomePaginate).use(VueApexCharts).use(Vuex).use(store).mount("#app");
