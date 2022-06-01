import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import store from "./store";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "@/assets/css/styleFrontend.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

createApp(App).use(CKEditor).use(router).use(Vuex).use(store).mount("#app");
