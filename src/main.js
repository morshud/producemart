import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import store from "./store";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "@/assets/css/styleFrontend.css";
import "@/assets/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(CKEditor).use(router).use(Vuex).use(store).mount("#app");
